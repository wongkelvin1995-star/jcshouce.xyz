# 机场手册 · Airport Manual

面向新手的数字使用手册，正式域名 https://jcshouce.xyz/ 。使用 Hugo Extended 0.167.0、Hugo Book 上游主题及独立覆盖文件。首页为正文阅读路线，桌面三栏，手机单列。

## 本地构建与预览

在本目录执行，先安装 [官方 Hugo Extended](https://gohugo.io/installation/) 的 **0.167.0** 版本，运行 hugo version 确认 extended。Node 仅用于可选的维护与验收脚本，不是站点运行依赖。

```powershell
hugo --gc --minify
hugo server --disableFastRender
node scripts/verify.mjs
```

本次下载的Windows可执行文件位于上级 tools/hugo/hugo.exe；也可从上级用 `tools/hugo/hugo.exe --source jcshouce --gc --minify`。预览地址以终端输出为准，构建产物为本项目 public。不要把预览产生的 localhost Canonical 当成生产产物，发布前运行正式构建。

## 文章与章节维护

- 正文唯一编辑入口为 content 下的 Markdown；常规文章95篇（60篇教程、6篇选购与29篇机场介绍分析），FAQ100题另计，29家资料页另计。FAQ唯一数据源为data/faq.json，编辑后运行node scripts/sync-faq.mjs同步正文。
- 新教程可用 `hugo new content install/new-task.md` 生成草稿。填写独立title、description、适用设备、准备、编号步骤、验证、错误处理及参考来源，完成后移除draft或置false。
- content/章节/_index.md 管理章节说明；data/navigation.json 管理编号、标题与入口，普通教程按weight排序，品牌文章列表统一按data/airports的order排序。新增章节时同时加入导航数据。
- 文章避免重复操作意图；常规正文目标1500—2000中文字，必要扩展不超过2500。数据不足的资料页宁可说明未知，不能填虚构结果。
- 编辑后填写真实lastmod；date是初始发布记录，测试执行时间与编辑时间分开。
- 运行 `node scripts/sync-catalog.mjs` 从正文同步教程目录与 docs/keyword-map.csv，正文仍是单一内容源。docs/site-seo-profile.json 维护品牌与关键词原则。Search Console数据未提供前不宣称点击优势。

## 机场价格与来源

每家唯一资料源是 data/airports/ID.json。原价、配额、付款周期、来源日期与证据等级逐项维护，历史导入报告在 docs/import-report.json，来源快照在 docs/evidence。价格字段变更应有当日来源，保留历史对照，未知值用null或空数组。品牌指南主入口统一为reviews/ID/，providers/ID/保留为noindex速查页；表格入口从机场ID解析真实Hugo页面，缺页会阻止构建。

前三种日期不要混淆：sourceUpdatedAt是来源记录日期，checkedAt保留原项目的核验记录，importedAt是本站导入日期。现有资料主要为第三方历史记录，本次没有登录账户确认现售，也没有购买性能实测。AI、流媒体与线路声明不提升为已测。

固定前五位是灵动云、暮光加速、飞猫云、大佬云和微风网络；顺序由order管理，属于编辑及商业安排。推广URL原值保留，展示统一添加 sponsored nofollow noopener。不补造邀请码或折扣码。

## 添加截图

把真实脱敏截图放入 static/images/ 或文章同名页面包目录。正文用Markdown图片并写清设备、客户端版本、时间、节点与测试方法。隐藏URL、token、UUID、密码、Cookie和个人订单数据。截图缺失时明确未测，不能生成仿测试图片。

## 中文搜索

Hugo layouts/home.json 自动从标题和全部正文生成 public/index.json，每次构建自动重建，覆盖中文标题、正文、机场与英文客户端。static/search-core.js 进行浏览器本地子串匹配、Unicode NFKC和大小写规范化，支持空格分隔的多个检索词，最多展示40条。不会把搜索词发送到后端。static/manual.js 管理对话框、失败重试和移动目录。

修改文章后运行 hugo --gc --minify 即可重建索引，不需要服务器数据库。搜索验收和静态链接检查执行 node scripts/verify.mjs；浏览器交互结果另见 reports/browser-qa.json。

## 主题安装与定制

上游原样保存在 themes/hugo-book，仓库、精确commit与Hugo版本记录于 docs/theme-lock.json；本次没有改上游文件。所有定制在 layouts 与 static，可比较追踪。主题LICENSE保留。主题升级先独立检查版本与模板变化，再重新构建验收。

本地主题是官方仓库克隆。首次建立主项目Git时应把它登记为submodule，或按锁定commit完整vendor并保存来源。若使用submodule，现有路径可以执行 `git submodule add https://github.com/alex-shpak/hugo-book.git themes/hugo-book`，然后检查git status与记录的commit；不要不经检查运行自动升级到未知新版本。Cloudflare与GitHub克隆必须启用submodules。

## GitHub与Cloudflare Pages部署

当前没有已确认的GitHub远程仓库、分支或Cloudflare账号，不擅自创建或推送到猜测地址。取得用户确认的仓库后，在正确项目根建立Git，按所选主题管理方式纳入文件，检查diff和构建，再普通提交与push，禁止force push。不要提交凭据或本地Hugo二进制。

在Cloudflare Pages连接正确仓库与分支。若仓库直接以此目录为根，Root directory留空；若仓库根是上级jcshouce.xyz，则设置Root directory为jcshouce。构建命令固定为 **hugo --gc --minify**，输出目录 **public**，环境变量 **HUGO_VERSION=0.167.0**，可设 **HUGO_ENVIRONMENT=production**。必须确保构建使用Extended版本。版本固定依据见 [Cloudflare官方Hugo部署说明](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/)。

成功部署后核对自定义域名、HTTPS、Canonical、robots、sitemap、RSS、搜索及移动阅读。在Search Console验证域名并提交sitemap；需要账号权限时由账户所有者完成，不绕过登录与验证码。

## 已知边界

静态产物可本地构建，但尚未公开部署。29家资料多数缺官网现售、节点地区、逐设备兼容、限制、退款与性能实测；见每家verification.missing。TG交流入口为用户提供的 https://t.me/+7J7nWmMUSbFhMzY1 ，已加入页脚与关于页，本次未发送消息。

## 2026-10-13 品牌指南更新

29家品牌顺序、入口和套餐字段以data/airports为唯一站点数据源，授权清单只用于验收对照。plans是带来源的参考规格，planArchive为历史版本，dataConflicts为内部冲突；所有现售官网完整清单尚未核实。前台删除日期列，不展示内部工作状态。

验收运行node scripts/verify.mjs与node scripts/verify-brand-optimization.mjs。reports/brand-optimization-report.md列出29家逐项结果；docs/airport-data-audit.md列出字段缺口。scripts/optimize-brands.mjs、write-brand-guides.mjs和finish-brand-copy.mjs属于本次一次性迁移，已有验收报告后禁止重跑；常规维护直接编辑各品牌JSON和Markdown。

## 本地审计与恢复

2026-10-14已建立本项目本地Git恢复基线，不配置远程仓库、不推送。主题仍保留独立上游仓库；本地主仓库只跟踪项目源代码与资料，主题未改动。接入未来发布仓库时仍需按上面的锁定主题方案准备依赖，不能将这个本地恢复快照当作已确认的GitHub部署配置。

没有npm lint/typecheck脚本；可以运行node --check静态JS作语法检查，以及node --test scripts/site-audit.test.mjs验证搜索异步及弹层行为，再执行现有四个verify脚本与Hugo构建。审计修复范围由reports/site-audit-baseline.json逐文件记录，历史校验只接受这些具体修复，不放宽机场数据保护。
