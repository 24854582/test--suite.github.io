/* ============================================================
 * 城格档案馆 · 计分
 * ------------------------------------------------------------
 * 1. 把每道题选中的维度分累加，再按该维度可取得的最高分归一化；
 * 2. 先用六维画像匹配 8 个城格母题，再在同组城市里挑具体落点；
 * 3. 生成一个 0~100 的匹配度，以及城市相性排序。
 *
 * 浏览器里挂到 window.CityScoring，Node 里可 require 做模拟测试。
 * ============================================================ */
(function (root) {
  'use strict';

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  function normalizeScores(answers, questions, dimensions) {
    const raw = {};
    const max = {};
    dimensions.forEach((d) => {
      raw[d.key] = 0;
      max[d.key] = 0;
    });

    questions.forEach((question, qi) => {
      dimensions.forEach((d) => {
        let qMax = 0;
        question.options.forEach((option) => {
          const v = Number(option.scores && option.scores[d.key]) || 0;
          if (v > qMax) qMax = v;
        });
        max[d.key] += qMax;
      });

      const answer = answers[qi];
      if (answer == null || !question.options[answer]) return;
      const scores = question.options[answer].scores || {};
      dimensions.forEach((d) => {
        raw[d.key] += Number(scores[d.key]) || 0;
      });
    });

    const normalized = {};
    dimensions.forEach((d) => {
      const ratio = max[d.key] ? raw[d.key] / max[d.key] : 0;
      // 留一点呼吸空间：极低分不让雷达缩成一个点，高分也不轻易顶满。
      normalized[d.key] = Math.round(clamp(12 + ratio * 88, 8, 100));
    });
    return normalized;
  }

  function affinityScores(answers, questions, typeIds) {
    const raw = {};
    // 每座城在整套题里能被加到的总分不同，先统计「满分」再归一化，
    // 否则出现次数多的城市会天然占便宜。
    const totals = {};
    typeIds.forEach((id) => {
      raw[id] = 0;
      totals[id] = 0;
    });
    questions.forEach((question, qi) => {
      question.options.forEach((option) => {
        const types = option.types || {};
        Object.keys(types).forEach((id) => {
          if (totals[id] != null) totals[id] += Number(types[id]) || 0;
        });
      });
      const answer = answers[qi];
      if (answer == null || !question.options[answer]) return;
      const types = question.options[answer].types || {};
      Object.keys(types).forEach((id) => {
        if (raw[id] != null) raw[id] += Number(types[id]) || 0;
      });
    });
    const out = {};
    typeIds.forEach((id) => {
      out[id] = totals[id] ? raw[id] / totals[id] : 0;
    });
    return out;
  }

  function answerSeed(answers) {
    let hash = 2166136261;
    answers.forEach((answer, index) => {
      hash = Math.imul(hash ^ ((answer + 1) * (index + 17)), 16777619);
    });
    return hash >>> 0;
  }

  function cityJitter(seed, cityId) {
    let hash = seed;
    for (let i = 0; i < cityId.length; i += 1) {
      hash = Math.imul(hash ^ cityId.charCodeAt(i), 16777619);
    }
    return ((hash >>> 0) / 4294967295) * 20;
  }

  function computeResult(answers, data) {
    const dimensions = data.dimensions;
    const typeIds = Object.keys(data.types);
    const groupIds = Object.keys(data.groups);
    const scores = normalizeScores(answers, data.questions, dimensions);
    const affinity = affinityScores(answers, data.questions, groupIds);
    const seed = answerSeed(answers);

    const groupScores = {};
    groupIds.forEach((id) => {
      const group = data.groups[id];
      let distance = 0;
      dimensions.forEach((d) => {
        distance += Math.abs(scores[d.key] - group.profile[d.key]);
      });
      distance /= dimensions.length;
      const similarity = clamp(100 - distance * 1.42, 30, 99);
      groupScores[id] = similarity * 0.55 + affinity[id] * 100 * 0.45;
    });

    const scored = typeIds.map((id) => {
      const type = data.types[id];
      let distance = 0;
      dimensions.forEach((d) => {
        distance += Math.abs(scores[d.key] - type.profile[d.key]);
      });
      distance /= dimensions.length;
      const similarity = clamp(100 - distance * 1.42, 30, 99);
      const groupScore = groupScores[type.group] || 50;
      const baseScore = groupScore * 0.7 + similarity * 0.3;
      // 同组城市的六维画像很接近，用答案生成一个稳定的城市微差，
      // 让每座城都有机会成为那个更具体的落点，而不是被同组头部城市吃掉。
      const score = baseScore + cityJitter(seed, id);
      return { id, type, similarity, groupScore, baseScore, score };
    });

    scored.sort((a, b) => {
      if (Math.abs(b.score - a.score) > 0.001) return b.score - a.score;
      return typeIds.indexOf(a.id) - typeIds.indexOf(b.id);
    });

    const top = scored[0];
    // 把内部得分映射成社交测试里读起来顺眼的匹配度，但不给所有人都发 99。
    const match = Math.round(clamp(72 + top.score * 0.26, 78, 98));

    // 保留一份 softmax 概率分布，供调试内部排序使用。
    const maxScore = scored[0].score;
    const weights = scored.map((item) => Math.exp((item.score - maxScore) / 12));
    const weightSum = weights.reduce((a, b) => a + b, 0);
    scored.forEach((item, i) => {
      item.share = weights[i] / weightSum;
    });

    return {
      scores,
      ranked: scored,
      type: top.type,
      match,
      shares: scored.slice(0, 3),
      answerCount: answers.filter((a) => a != null).length,
    };
  }

  const api = { computeResult, normalizeScores, affinityScores, clamp };
  root.CityScoring = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
