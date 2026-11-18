/* ============================================================
 * 城格档案馆 · 城市插画
 * ------------------------------------------------------------
 * 八座城共用一个圆形「城市徽章」骨架，用天际线、地标、山水区分。
 * 页面和结果海报共用同一份 SVG，保证保存下来的图和网页一致。
 * ============================================================ */
(function (root) {
  'use strict';

  const INK = '#2D2723';
  const PAPER = '#FBF7EE';
  const YELLOW = '#F2C14E';
  const RED = '#E5543D';

  function commonSky(type) {
    return `
      <circle cx="218" cy="78" r="35" fill="${type.accent}" opacity=".62"/>
      <circle cx="218" cy="78" r="24" fill="${PAPER}" opacity=".35"/>
      <path d="M18 174 Q66 132 116 161 Q157 122 204 157 Q242 130 286 167 L286 286 L18 286 Z" fill="${type.water}" opacity=".28"/>
      <path d="M18 190 Q76 154 130 179 Q174 153 218 178 Q253 158 286 180 L286 286 L18 286 Z" fill="${type.color}" opacity=".12"/>
    `;
  }

  function chengdu(type) {
    return `
      ${commonSky(type)}
      <path d="M20 230 Q78 190 136 213 Q190 190 280 222 L280 286 L20 286 Z" fill="${type.deep}" opacity=".16"/>
      <!-- 茶馆 -->
      <g stroke="${INK}" stroke-width="2.8" stroke-linejoin="round">
        <rect x="176" y="190" width="72" height="57" rx="3" fill="${PAPER}"/>
        <path d="M164 188 Q212 160 260 188 L252 203 Q210 186 172 203 Z" fill="${type.deep}"/>
        <path d="M174 188 Q166 180 170 172 M250 188 Q258 180 254 172" fill="none" stroke-linecap="round"/>
        <rect x="190" y="207" width="18" height="22" rx="2" fill="${type.soft}"/>
        <rect x="217" y="207" width="18" height="22" rx="2" fill="${type.soft}"/>
        <path d="M190 218 h18 M217 218 h18" stroke-width="1.8"/>
        <path d="M176 247 h72" stroke-width="2.2"/>
      </g>
      <!-- 红灯笼 -->
      <g transform="translate(245 171)">
        <path d="M0 0 v10" stroke="${INK}" stroke-width="2"/>
        <ellipse cx="0" cy="20" rx="9" ry="11" fill="${type.accent}" stroke="${INK}" stroke-width="2.4"/>
        <path d="M0 31 v6" stroke="${INK}" stroke-width="2"/>
      </g>
      <!-- 竹子 -->
      <g stroke="#5F7A4C" fill="none" stroke-linecap="round">
        <path d="M50 276 L54 92" stroke-width="5"/>
        <path d="M76 276 L80 118" stroke-width="4"/>
        <path d="M54 128 q-20 -13 -30 -2 q17 2 30 2Z" fill="#6E8E56" stroke="none"/>
        <path d="M54 152 q22 -14 34 -2 q-19 3 -34 2Z" fill="#6E8E56" stroke="none"/>
        <path d="M80 154 q-20 -12 -31 -1 q18 2 31 1Z" fill="#7E9F65" stroke="none"/>
        <path d="M54 185 q-24 -12 -35 0 q21 2 35 0Z" fill="#7E9F65" stroke="none"/>
      </g>
      <!-- 熊猫探头 -->
      <g transform="translate(108 219)">
        <circle cx="-17" cy="-13" r="9" fill="${INK}"/>
        <circle cx="17" cy="-13" r="9" fill="${INK}"/>
        <circle cx="0" cy="0" r="25" fill="${PAPER}" stroke="${INK}" stroke-width="2.8"/>
        <ellipse cx="-9" cy="-1" rx="6" ry="8" fill="${INK}" transform="rotate(18 -9 -1)"/>
        <ellipse cx="9" cy="-1" rx="6" ry="8" fill="${INK}" transform="rotate(-18 9 -1)"/>
        <circle cx="-9" cy="-3" r="1.8" fill="${PAPER}"/>
        <circle cx="9" cy="-3" r="1.8" fill="${PAPER}"/>
        <path d="M-4 8 Q0 12 4 8" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
      </g>
    `;
  }

  function shanghai(type) {
    return `
      ${commonSky(type)}
      <!-- 外滩建筑 -->
      <g stroke="${INK}" stroke-width="2.6" stroke-linejoin="round">
        <rect x="42" y="162" width="38" height="92" fill="${type.color}"/>
        <rect x="82" y="145" width="31" height="109" fill="${type.deep}"/>
        <rect x="115" y="174" width="39" height="80" fill="${type.color}"/>
        <path d="M82 145 h31 l-8 -18 h-15 Z" fill="${type.accent}"/>
        <path d="M42 174 h38 M42 190 h38 M42 206 h38 M115 186 h39 M115 202 h39" stroke="${PAPER}" stroke-width="3" opacity=".55"/>
      </g>
      <!-- 东方明珠 -->
      <g stroke="${INK}" stroke-width="2.8" stroke-linejoin="round" fill="none">
        <path d="M205 252 L207 136 M215 252 L213 136" stroke="${type.deep}" stroke-width="4"/>
        <circle cx="210" cy="132" r="24" fill="${type.accent}"/>
        <circle cx="210" cy="132" r="17" fill="${PAPER}" opacity=".45"/>
        <circle cx="210" cy="182" r="18" fill="${type.accent}"/>
        <circle cx="210" cy="182" r="11" fill="${PAPER}" opacity=".45"/>
        <path d="M210 108 L210 73" stroke="${type.deep}" stroke-width="3"/>
        <path d="M198 92 L222 92 M196 103 L224 103" stroke="${type.deep}" stroke-width="2"/>
        <path d="M186 221 L234 221" stroke="${type.deep}" stroke-width="3"/>
      </g>
      <!-- 梧桐 -->
      <g stroke="${INK}" stroke-width="2.6">
        <path d="M70 253 v-38" />
        <circle cx="70" cy="204" r="23" fill="#8FAF93"/>
        <circle cx="53" cy="214" r="15" fill="#7E9E85"/>
        <circle cx="87" cy="214" r="16" fill="#7E9E85"/>
        <path d="M60 198 q10 -8 20 0 M48 211 q7 -5 14 0" fill="none" stroke-width="1.8" opacity=".55"/>
      </g>
      <!-- 江面 -->
      <path d="M18 253 Q70 243 120 253 T220 253 T286 253 L286 286 L18 286 Z" fill="${type.water}" opacity=".7"/>
      <g stroke="${PAPER}" stroke-width="2" fill="none" opacity=".55">
        <path d="M48 266 q18 -6 36 0"/><path d="M146 272 q20 -6 40 0"/><path d="M226 264 q16 -5 32 0"/>
      </g>
      <g transform="translate(128 260)">
        <path d="M-16 0 q16 12 32 0 l-5 6 h-22 Z" fill="${INK}" opacity=".7"/>
        <path d="M0 -1 v-16 l12 13 Z" fill="${PAPER}" stroke="${INK}" stroke-width="1.8"/>
      </g>
    `;
  }

  function beijing(type) {
    return `
      ${commonSky(type)}
      <path d="M18 224 Q70 185 130 207 Q186 174 286 215 L286 286 L18 286 Z" fill="${type.deep}" opacity=".17"/>
      <!-- 城楼 -->
      <g stroke="${INK}" stroke-width="2.8" stroke-linejoin="round">
        <path d="M48 249 L252 249 L252 273 L48 273 Z" fill="${type.deep}"/>
        <path d="M48 249 h20 v-12 h18 v12 h20 v-12 h18 v12 h20 v-12 h18 v12 h20 v-12 h18 v12 h20 v-12 h18 v12 h20" fill="none"/>
        <rect x="106" y="196" width="88" height="53" fill="${type.color}"/>
        <path d="M94 198 Q150 171 206 198 L197 211 Q150 191 103 211 Z" fill="${type.accent}"/>
        <path d="M86 198 Q74 186 82 173 M214 198 Q226 186 218 173" fill="none" stroke-linecap="round"/>
        <path d="M132 249 v-29 q18 -15 36 0 v29 Z" fill="${PAPER}"/>
        <path d="M132 220 q18 -15 36 0" fill="none"/>
      </g>
      <!-- 宫墙与屋檐 -->
      <g transform="translate(50 144)" stroke="${INK}" stroke-width="2.6">
        <path d="M-10 44 Q34 18 82 44 L74 58 Q34 40 0 58 Z" fill="${type.deep}"/>
        <rect x="8" y="56" width="56" height="36" fill="${type.color}"/>
        <path d="M20 74 h10 v18 h-10 Z M42 74 h10 v18 h-10 Z" fill="${PAPER}"/>
      </g>
      <!-- 飞鸟 -->
      <g stroke="${INK}" stroke-width="2" fill="none" opacity=".55">
        <path d="M74 82 q7 -6 14 0 q7 -6 14 0"/>
        <path d="M105 68 q5 -4 10 0 q5 -4 10 0"/>
      </g>
      <!-- 灯笼 -->
      <g transform="translate(236 133)">
        <path d="M0 0 v12" stroke="${INK}" stroke-width="2"/>
        <ellipse cx="0" cy="23" rx="10" ry="12" fill="${type.accent}" stroke="${INK}" stroke-width="2.3"/>
        <path d="M0 35 v8" stroke="${INK}" stroke-width="2"/>
      </g>
    `;
  }

  function dali(type) {
    return `
      ${commonSky(type)}
      <!-- 苍山 -->
      <path d="M18 190 L64 126 L102 166 L143 104 L188 168 L224 130 L286 194 L286 286 L18 286 Z" fill="${type.color}" opacity=".62"/>
      <path d="M56 138 L64 126 L74 140 L68 148 L60 145 Z M132 116 L143 104 L156 120 L148 131 L139 126 Z M216 140 L224 130 L235 145 L227 153 L220 148 Z" fill="${PAPER}" opacity=".82"/>
      <!-- 洱海 -->
      <path d="M18 220 Q80 207 140 220 T286 218 L286 286 L18 286 Z" fill="${type.water}" opacity=".72"/>
      <g stroke="${PAPER}" stroke-width="2.2" fill="none" opacity=".6">
        <path d="M52 242 q18 -6 36 0"/><path d="M114 256 q24 -7 48 0"/><path d="M208 240 q20 -6 40 0"/>
      </g>
      <!-- 小船 -->
      <g transform="translate(156 244)" stroke="${INK}" stroke-width="2.2">
        <path d="M-24 0 q24 14 48 0 l-7 10 h-34 Z" fill="${PAPER}"/>
        <path d="M0 -2 v-23 l17 19 Z" fill="${type.accent}"/>
      </g>
      <!-- 白族小屋 -->
      <g transform="translate(220 205)" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
        <rect x="0" y="14" width="34" height="24" fill="${PAPER}"/>
        <path d="M-6 15 L17 -1 L40 15 Z" fill="${type.deep}"/>
        <rect x="12" y="24" width="9" height="14" fill="${type.soft}"/>
      </g>
      <!-- 月亮 -->
      <circle cx="218" cy="78" r="31" fill="${PAPER}" opacity=".9"/>
      <circle cx="207" cy="70" r="5" fill="${type.soft}" opacity=".55"/>
      <circle cx="228" cy="90" r="3" fill="${type.soft}" opacity=".55"/>
      <g stroke="${INK}" stroke-width="1.8" fill="none" opacity=".45">
        <path d="M48 78 q8 -6 16 0 q8 -6 16 0"/>
        <path d="M90 97 q6 -4 12 0 q6 -4 12 0"/>
      </g>
    `;
  }

  function guangzhou(type) {
    return `
      ${commonSky(type)}
      <!-- 骑楼 -->
      <g stroke="${INK}" stroke-width="2.6" stroke-linejoin="round">
        <rect x="34" y="158" width="112" height="101" fill="${PAPER}"/>
        <path d="M28 160 h124 v13 H28 Z" fill="${type.deep}"/>
        <path d="M48 191 q14 -20 28 0 v51 H48 Z M82 191 q14 -20 28 0 v51 H82 Z M116 191 q10 -15 20 0 v51 h-20 Z" fill="${type.soft}"/>
        <path d="M48 197 q14 -15 28 0 M82 197 q14 -15 28 0" fill="none" stroke-width="1.8"/>
        <path d="M73 160 v-9 h12 v9 M108 160 v-9 h12 v9" fill="${type.accent}"/>
      </g>
      <!-- 广州塔 -->
      <g stroke="${INK}" stroke-width="2.8" fill="none" stroke-linejoin="round">
        <path d="M198 262 C201 208 203 145 207 76" stroke="${type.deep}" stroke-width="3"/>
        <path d="M220 262 C216 208 213 145 209 76" stroke="${type.deep}" stroke-width="3"/>
        <path d="M200 238 h19 M201 212 h17 M202 186 h15 M203 160 h13 M205 132 h10 M206 104 h8" stroke-width="1.8"/>
        <path d="M204 238 l15 -26 M219 238 l-15 -26 M203 212 l17 -26 M220 212 l-17 -26 M203 186 l15 -26 M218 186 l-15 -26" stroke-width="1.2" opacity=".55"/>
        <ellipse cx="208" cy="151" rx="14" ry="8" fill="${type.accent}" fill-opacity=".65"/>
        <ellipse cx="208" cy="104" rx="10" ry="6" fill="${type.accent}" fill-opacity=".65"/>
        <path d="M208 76 v-22" stroke-width="3"/>
      </g>
      <!-- 棕榈 -->
      <g transform="translate(58 222)" stroke="${INK}" stroke-width="2.4">
        <path d="M0 45 q6 -28 1 -52" fill="none"/>
        <path d="M1 -7 q-21 -12 -30 2 q19 2 30 -2Z M1 -7 q20 -15 31 -2 q-21 3 -31 2Z M1 -7 q-9 -23 7 -29 q4 19 -7 29Z" fill="#6C8E5C"/>
      </g>
      <!-- 江面 -->
      <path d="M18 259 Q70 247 130 259 T240 259 T286 259 L286 286 L18 286 Z" fill="${type.water}" opacity=".8"/>
      <g stroke="${PAPER}" stroke-width="2" fill="none" opacity=".6">
        <path d="M132 272 q20 -6 40 0"/><path d="M210 276 q17 -5 34 0"/>
      </g>
      <!-- 木棉 -->
      <g fill="${RED}">
        <circle cx="163" cy="129" r="4"/><circle cx="174" cy="121" r="3"/><circle cx="181" cy="133" r="3.5"/>
      </g>
    `;
  }

  function hangzhou(type) {
    return `
      ${commonSky(type)}
      <!-- 远山 -->
      <path d="M18 195 Q58 132 105 175 Q144 125 190 171 Q226 137 286 190 L286 286 L18 286 Z" fill="${type.color}" opacity=".38"/>
      <!-- 湖面 -->
      <path d="M18 214 Q80 202 140 214 T286 212 L286 286 L18 286 Z" fill="${type.water}" opacity=".72"/>
      <!-- 雷峰塔 -->
      <g transform="translate(214 139)" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round">
        <path d="M-26 13 Q0 -3 26 13 L21 20 Q0 10 -21 20 Z" fill="${type.deep}"/>
        <path d="M-20 21 Q0 12 20 21 L17 28 Q0 20 -17 28 Z" fill="${type.deep}"/>
        <path d="M-14 29 Q0 22 14 29 L12 36 Q0 30 -12 36 Z" fill="${type.deep}"/>
        <rect x="-14" y="36" width="28" height="50" fill="${type.color}"/>
        <path d="M-6 46 h12 v22 h-12 Z" fill="${PAPER}"/>
        <path d="M0 4 v-16" stroke-width="2.4"/>
        <path d="M-4 49 h8 M-4 58 h8 M-4 67 h8" stroke="${PAPER}" stroke-width="2"/>
      </g>
      <!-- 拱桥 -->
      <g stroke="${INK}" stroke-width="3" fill="none">
        <path d="M48 254 Q92 211 136 254"/>
        <path d="M48 254 q44 9 88 0"/>
        <path d="M68 238 v16 M82 228 v26 M98 223 v31 M114 228 v26 M128 238 v16" stroke-width="2.2" opacity=".65"/>
      </g>
      <!-- 柳树 -->
      <g stroke="${type.deep}" stroke-width="2.2" fill="none">
        <path d="M44 270 q2 -38 12 -60"/>
        <path d="M55 214 q-18 11 -28 32 M56 214 q-8 24 -5 45 M57 214 q12 17 12 43 M57 214 q21 10 27 35" stroke-linecap="round" opacity=".8"/>
      </g>
      <g fill="#7C9B64" opacity=".85">
        <ellipse cx="50" cy="208" rx="18" ry="8" transform="rotate(-18 50 208)"/>
        <ellipse cx="67" cy="208" rx="17" ry="8" transform="rotate(15 67 208)"/>
      </g>
      <g stroke="${PAPER}" stroke-width="2" fill="none" opacity=".55">
        <path d="M148 259 q18 -5 36 0"/><path d="M195 269 q14 -4 28 0"/>
      </g>
    `;
  }

  function xiamen(type) {
    return `
      ${commonSky(type)}
      <!-- 海 -->
      <path d="M18 205 Q80 192 140 205 T286 203 L286 286 L18 286 Z" fill="${type.water}" opacity=".8"/>
      <g stroke="${PAPER}" stroke-width="2.2" fill="none" opacity=".7">
        <path d="M42 226 q18 -6 36 0"/><path d="M120 243 q24 -7 48 0"/><path d="M210 228 q20 -6 40 0"/>
      </g>
      <!-- 红屋顶 -->
      <g stroke="${INK}" stroke-width="2.5" stroke-linejoin="round">
        <path d="M36 213 L84 180 L132 213 Z" fill="${type.deep}"/>
        <rect x="48" y="212" width="70" height="46" fill="${PAPER}"/>
        <rect x="62" y="229" width="13" height="18" fill="${type.soft}"/>
        <rect x="86" y="229" width="13" height="18" fill="${type.soft}"/>
        <path d="M124 213 L158 190 L192 213 Z" fill="${type.color}"/>
        <rect x="134" y="212" width="48" height="38" fill="${PAPER}"/>
        <rect x="148" y="226" width="10" height="13" fill="${type.soft}"/>
      </g>
      <!-- 灯塔 -->
      <g transform="translate(224 147)" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round">
        <path d="M-17 86 L-11 8 L11 8 L17 86 Z" fill="${PAPER}"/>
        <path d="M-13 35 h24 M-14 54 h28 M-15 72 h30" stroke="${type.deep}" stroke-width="8"/>
        <path d="M-14 6 L0 -10 L14 6 Z" fill="${type.accent}"/>
        <rect x="-9" y="-15" width="18" height="10" fill="${type.deep}"/>
        <path d="M0 -15 v-8" stroke-width="2"/>
      </g>
      <!-- 棕榈 -->
      <g transform="translate(198 224)" stroke="${INK}" stroke-width="2.2">
        <path d="M0 43 q4 -28 0 -48" fill="none"/>
        <path d="M0 -5 q-20 -13 -29 1 q18 3 29 -1Z M0 -5 q20 -15 30 -1 q-20 4 -30 1Z M0 -5 q-8 -22 7 -27 q3 18 -7 27Z" fill="#5F8C6A"/>
      </g>
      <!-- 海鸥 -->
      <g stroke="${INK}" stroke-width="1.8" fill="none" opacity=".65">
        <path d="M56 74 q7 -6 14 0 q7 -6 14 0"/>
        <path d="M96 92 q5 -4 10 0 q5 -4 10 0"/>
      </g>
    `;
  }

  function xian(type) {
    return `
      ${commonSky(type)}
      <!-- 远山 -->
      <path d="M18 195 Q68 145 116 180 Q160 140 210 178 Q244 151 286 186 L286 286 L18 286 Z" fill="${type.color}" opacity=".22"/>
      <!-- 城墙 -->
      <g stroke="${INK}" stroke-width="2.8" stroke-linejoin="round">
        <path d="M24 248 L276 248 L276 278 L24 278 Z" fill="${type.deep}"/>
        <path d="M24 248 h18 v-12 h18 v12 h18 v-12 h18 v12 h18 v-12 h18 v12 h18 v-12 h18 v12 h18 v-12 h18 v12 h18 v-12 h18 v12 h18" fill="none"/>
        <rect x="116" y="206" width="68" height="42" fill="${type.color}"/>
        <path d="M104 208 Q150 185 196 208 L188 220 Q150 203 112 220 Z" fill="${type.accent}"/>
        <path d="M134 248 v-26 q16 -14 32 0 v26 Z" fill="${PAPER}"/>
      </g>
      <!-- 大雁塔 -->
      <g transform="translate(216 153)" stroke="${INK}" stroke-width="2.3" stroke-linejoin="round">
        <path d="M-26 16 Q0 2 26 16 L22 23 Q0 13 -22 23 Z" fill="${type.deep}"/>
        <path d="M-21 24 Q0 15 21 24 L18 31 Q0 23 -18 31 Z" fill="${type.deep}"/>
        <path d="M-16 32 Q0 24 16 32 L14 39 Q0 32 -14 39 Z" fill="${type.deep}"/>
        <path d="M-12 40 Q0 34 12 40 L10 46 Q0 41 -10 46 Z" fill="${type.deep}"/>
        <rect x="-15" y="46" width="30" height="48" fill="${type.color}"/>
        <path d="M-8 55 h16 v20 h-16 Z" fill="${PAPER}"/>
        <path d="M0 8 v-16" stroke-width="2.4"/>
      </g>
      <!-- 红灯笼 -->
      <g transform="translate(92 166)">
        <path d="M0 0 v12" stroke="${INK}" stroke-width="2"/>
        <ellipse cx="0" cy="22" rx="9" ry="11" fill="${type.accent}" stroke="${INK}" stroke-width="2.3"/>
        <path d="M0 33 v7" stroke="${INK}" stroke-width="2"/>
      </g>
      <g transform="translate(112 166)">
        <path d="M0 0 v12" stroke="${INK}" stroke-width="2"/>
        <ellipse cx="0" cy="22" rx="9" ry="11" fill="${type.accent}" stroke="${INK}" stroke-width="2.3"/>
        <path d="M0 33 v7" stroke="${INK}" stroke-width="2"/>
      </g>
      <!-- 燕子 -->
      <g stroke="${INK}" stroke-width="1.9" fill="none" opacity=".55">
        <path d="M58 79 q7 -6 14 0 q7 -6 14 0"/>
        <path d="M92 97 q5 -4 10 0 q5 -4 10 0"/>
      </g>
    `;
  }

  const SCENES = { chengdu, shanghai, beijing, dali, guangzhou, hangzhou, xiamen, xian };

  function citySvg(type, opts) {
    const options = opts || {};
    const size = options.size || 300;
    const uid = options.uid || type.id;
    const clipId = `city-clip-${type.id}-${uid}`;
    const scene = SCENES[type.id] ? SCENES[type.id](type) : commonSky(type);
    return `
      <svg viewBox="0 0 300 300" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${type.name}城市插画">
        <defs>
          <clipPath id="${clipId}"><circle cx="150" cy="150" r="124"/></clipPath>
        </defs>
        <circle cx="150" cy="150" r="124" fill="${type.soft}" stroke="${INK}" stroke-width="4"/>
        <g clip-path="url(#${clipId})">
          <rect x="20" y="20" width="260" height="260" fill="${type.soft}"/>
          ${scene}
          <path d="M20 274 q70 -12 140 0 t120 0 v22 H20 Z" fill="${type.deep}" opacity=".14"/>
        </g>
        <circle cx="150" cy="150" r="124" fill="none" stroke="${INK}" stroke-width="4"/>
        <circle cx="150" cy="150" r="113" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="3 5" opacity=".25"/>
        ${
          options.decorate !== false
            ? `<g transform="translate(51 56) rotate(12)" stroke="${INK}" stroke-width="2" stroke-linejoin="round">
                <path d="M0 0 L34 10 L0 19 L7 10 Z" fill="${PAPER}"/>
                <path d="M7 10 L22 9" fill="none"/>
              </g>
              <g fill="${type.deep}" opacity=".55">
                <circle cx="60" cy="230" r="2.3"/><circle cx="75" cy="242" r="1.6"/><circle cx="248" cy="120" r="2"/>
              </g>`
            : ''
        }
        ${
          options.pin === false
            ? ''
            : `<g transform="translate(245 65) rotate(8)" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round">
                <path d="M0 0 C-13 0 -22 9 -22 21 C-22 37 0 55 0 55 C0 55 22 37 22 21 C22 9 13 0 0 0 Z" fill="${RED}"/>
                <circle cx="0" cy="21" r="6.5" fill="${PAPER}"/>
              </g>`
        }
      </svg>
    `;
  }

  function heroCitySvg() {
    return `
      <svg viewBox="0 0 420 340" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="城市天际线与航线插画">
        <defs>
          <linearGradient id="hero-river" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#9CBFCC" stop-opacity=".55"/>
            <stop offset="1" stop-color="#9CBFCC" stop-opacity=".12"/>
          </linearGradient>
        </defs>
        <circle cx="334" cy="76" r="43" fill="#F2C14E" opacity=".9"/>
        <circle cx="320" cy="65" r="8" fill="#F4EBDD" opacity=".3"/>
        <circle cx="348" cy="89" r="5" fill="#F4EBDD" opacity=".3"/>
        <g fill="#F4EBDD" opacity=".55">
          <circle cx="50" cy="52" r="2.2"/><circle cx="74" cy="78" r="1.4"/><circle cx="116" cy="44" r="1.8"/>
          <circle cx="250" cy="38" r="1.7"/><circle cx="292" cy="55" r="1.1"/><circle cx="390" cy="42" r="1.8"/>
          <circle cx="200" cy="96" r="1.2"/><circle cx="370" cy="110" r="1.5"/>
        </g>
        <path d="M-10 216 Q52 154 112 194 Q168 128 228 184 Q286 142 430 208 L430 340 L-10 340 Z" fill="#536E8C" opacity=".42"/>
        <path d="M-10 236 Q74 204 150 228 Q228 200 430 232 L430 340 L-10 340 Z" fill="url(#hero-river)"/>
        <!-- 天际线 -->
        <g stroke="#2D2723" stroke-width="3" stroke-linejoin="round">
          <rect x="28" y="198" width="48" height="105" fill="#F4EBDD"/>
          <rect x="80" y="166" width="34" height="137" fill="#D9E5D6"/>
          <rect x="118" y="214" width="54" height="89" fill="#F1D6C8"/>
          <path d="M80 166 h34 l-7 -18 h-20 Z" fill="#D6A84C"/>
          <rect x="176" y="184" width="42" height="119" fill="#E7D5BD"/>
          <rect x="222" y="144" width="34" height="159" fill="#F4EBDD"/>
          <rect x="260" y="203" width="48" height="100" fill="#F2C14E"/>
          <path d="M222 144 h34 l-10 -20 h-14 Z" fill="#E5543D"/>
          <rect x="312" y="178" width="36" height="125" fill="#D3DDEB"/>
          <rect x="352" y="216" width="50" height="87" fill="#F1D6C8"/>
          <!-- 细长地标 -->
          <path d="M293 303 L295 154 M302 303 L300 154" fill="none" stroke="#F4EBDD" stroke-width="4"/>
          <circle cx="297" cy="148" r="15" fill="#D97E68"/>
          <circle cx="297" cy="194" r="10" fill="#D97E68"/>
          <path d="M297 132 v-18" fill="none" stroke="#F4EBDD" stroke-width="3"/>
        </g>
        <!-- 窗户 -->
        <g fill="#2D2723" opacity=".55">
          <path d="M39 215 h9 v10 h-9 Z M56 215 h9 v10 h-9 Z M39 234 h9 v10 h-9 Z M56 234 h9 v10 h-9 Z"/>
          <path d="M90 183 h7 v8 h-7 Z M100 183 h7 v8 h-7 Z M90 200 h7 v8 h-7 Z M100 200 h7 v8 h-7 Z"/>
          <path d="M130 228 h8 v9 h-8 Z M146 228 h8 v9 h-8 Z M130 247 h8 v9 h-8 Z M146 247 h8 v9 h-8 Z"/>
          <path d="M188 198 h7 v8 h-7 Z M201 198 h7 v8 h-7 Z M188 216 h7 v8 h-7 Z M201 216 h7 v8 h-7 Z"/>
          <path d="M234 160 h6 v8 h-6 Z M245 160 h6 v8 h-6 Z M234 179 h6 v8 h-6 Z M245 179 h6 v8 h-6 Z"/>
          <path d="M272 219 h8 v9 h-8 Z M286 219 h8 v9 h-8 Z M272 238 h8 v9 h-8 Z M286 238 h8 v9 h-8 Z"/>
          <path d="M323 194 h6 v8 h-6 Z M335 194 h6 v8 h-6 Z M323 213 h6 v8 h-6 Z M335 213 h6 v8 h-6 Z"/>
          <path d="M365 231 h7 v8 h-7 Z M379 231 h7 v8 h-7 Z M365 249 h7 v8 h-7 Z M379 249 h7 v8 h-7 Z"/>
        </g>
        <!-- 航线 -->
        <path d="M44 100 C112 55 210 78 292 118 C320 132 344 145 376 142" fill="none" stroke="#E5543D" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="5 8" opacity=".9"/>
        <g transform="translate(214 73) rotate(15)" stroke="#2D2723" stroke-width="2" stroke-linejoin="round">
          <path d="M0 0 L30 9 L0 18 L6 9 Z" fill="#F4EBDD"/>
          <path d="M6 9 L19 8" fill="none"/>
        </g>
        <g transform="translate(382 137) rotate(8)" stroke="#2D2723" stroke-width="2.4" stroke-linejoin="round">
          <path d="M0 0 C-11 0 -19 8 -19 18 C-19 31 0 46 0 46 C0 46 19 31 19 18 C19 8 11 0 0 0 Z" fill="#E5543D"/>
          <circle cx="0" cy="18" r="5.5" fill="#F4EBDD"/>
        </g>
        <g stroke="#F4EBDD" stroke-width="2" fill="none" opacity=".5">
          <path d="M48 282 q28 -7 56 0"/><path d="M150 294 q34 -8 68 0"/><path d="M280 280 q25 -6 50 0"/>
        </g>
        <g stroke="#2D2723" stroke-width="2" fill="none" opacity=".35">
          <path d="M44 78 q7 -6 14 0 q7 -6 14 0"/>
          <path d="M92 57 q5 -4 10 0 q5 -4 10 0"/>
        </g>
      </svg>
    `;
  }

  const api = { citySvg, heroCitySvg };
  root.CityArt = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
