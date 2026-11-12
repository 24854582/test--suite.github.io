# 测试合集 · TEST SUITE

一个纯静态的小测试集合，每个测试放在独立文件夹里，后续可以继续新增。

## 当前内容

| 路径 | 测试 | 说明 |
| --- | --- | --- |
| `cat-archive/` | 猫格档案馆 | 12 道题，测测你是哪种猫；口令 `1990` |

根目录的 `index.html` 是测试入口页，会链接到各个测试。

## 部署

### Cloudflare Pages

- 连接本仓库
- Production branch：`main`
- Framework preset：`None`
- Build command：留空
- Build output directory：`/`

根目录的 `index.html` 会作为站点入口，`cat-archive/` 是其中一个测试。

### GitHub Pages

推送到 `main`，在仓库 Settings → Pages 选择 `main` / `/(root)`。根目录已经放了 `.nojekyll`，可以直接访问。

## 新增测试

1. 在根目录新建一个英文文件夹，例如 `next-test/`
2. 放入该测试自己的 `index.html` 和静态资源
3. 在根目录 `index.html` 的列表中加一张入口卡片
4. 推送后 Cloudflare Pages 会自动重新部署
