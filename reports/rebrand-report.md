# 机场手册品牌更名执行报告

日期：2026-10-14。只修改jcshouce.xyz当前Hugo Book项目，未重建或更换框架。

## 实际修改文件

- content/about/_index.md
- content/account/_index.md
- content/archives/_index.md
- content/domain/_index.md
- content/editor/_index.md
- content/site-map/_index.md
- content/_index.md
- layouts/_partials/docs/footer.html
- layouts/_partials/docs/html-head.html
- layouts/_partials/docs/inject/body.html
- layouts/_partials/docs/inject/content-before.html
- layouts/_partials/docs/menu.html
- hugo.toml
- README.md
- docs/site-seo-profile.json
- docs/keyword-map.csv
- scripts/check-preserved-config.mjs
- scripts/verify-rebrand.mjs
- scripts/verify-footer.mjs
- scripts/verify-brand-optimization.mjs

另新增本次一次性迁移脚本、回归校验辅助脚本及reports/rebrand-*验收记录。

## 更名与文案

- 首页H1与浏览器Title：机场手册｜机场介绍、套餐价格与客户端使用指南。
- 首页Description按用户指定文案更新；首页简介完整替换为机场介绍、套餐选择、线路、客户端与排错定位的指定段落。
- LOGO与页眉显示机场手册，英文辅助名统一为Airport Manual；侧栏简介改成机场介绍 · 套餐指南 · 客户端教程。
- 页脚、编辑署名、关于本站、编辑、个人中心、域名、站点地图、归档、搜索弹层、RSS、品牌配置和关键词映射同步更新。
- Open Graph品牌名称、文章作者及JSON-LD统一；新增Twitter Card和首页WebSite.name=机场手册。
- 原始第三方证据、历史报告与迁移/验收样本保留旧名称，避免改写历史出处。原本讨论梯子使用方法的主题标题保留，不误当作站点品牌。

## 保留项与限制

- 正式域名仍为https://jcshouce.xyz/，全部154个内容路径不变；Canonical、robots.txt、Sitemap均继续使用正式域名。
- 29家机场的原始JSON、29篇品牌指南、29篇速查页、价格与推广邀请码逐文件校验一致；固定前五排序不变。
- 94个受保护文件字节一致，包括CSS、现有搜索/菜单/个人中心脚本和部署文档。hugo.toml仅站点title一行按要求改名，其他配置不变。
- 本地收藏继续沿用兼容存储键，已有收藏与阅读记录不会因更名丢失。
- 未发现现有Google/Bing验证文件；本次未修改静态验证文件或favicon。
- 当前页眉原有控件为搜索与TG，未发现太阳/月亮主题切换控件。本次未新增或删除主题控件，主题配置和样式保持原样，没有伪造主题切换测试结果。

## 验证结果

- Hugo Extended 0.167.0 --gc --minify：PASS，155个HTML，178个Hugo页面/输出。
- node scripts/verify.mjs：PASS，154个SEO页面、14192条内部链接、3017个锚点。
- node scripts/verify-brand-optimization.mjs：PASS，29家品牌、112行参考规格、原URL与推广属性完整。
- node scripts/verify-footer.mjs：PASS，页脚六个入口、个人中心逻辑、115个XML公开地址与功能页正确；配置仅放行本次明确授权的站点title变更。
- node scripts/verify-rebrand.mjs：PASS，所有生成HTML/JSON/XML/TXT没有旧中文或英文品牌，新首页SEO、WebSite及Twitter字段正确。
- 浏览器1440px桌面与320px手机：LOGO、H1、首页简介、搜索提示与结果更新；原米白背景保持，手机页眉64px、两个原图标仍在，没有整页横向溢出，捕获JS错误0。

更名仅在本地完成并保留预览，未推送或部署：当前主项目没有确认的Git仓库/远程分支。本次没有修改其他博客或部署账户。
