# 全站品牌与套餐指南优化执行报告

日期：2026-10-13。代码、文章、样式、搜索、SEO与构建检查已完成；官网现售套餐核验仍未完成，以下明确区分参考数据与官网事实。

## A. 实际修改

- data/airports/*.json：29个品牌统一顺序、名称、指定邀请码，112行参考套餐；扩展来源、核实状态、重置和独立问答；planArchive完整保留旧数据。
- content/reviews/*.md：29篇品牌与套餐指南；保留原URL，每篇1500—2000汉字并显示6项品牌FAQ。
- content/providers/*.md：29篇速查页保留URL和noindex。
- content/_index.md、content/reviews/_index.md、content/recommendations/*、content/providers/_index.md、content/about/_index.md、content/faq/*：定位和前台文案同步，首页完整29家目录，FAQ唯一数据源同步。
- data/navigation.json、data/faq.json、data/tutorials.json、docs/keyword-map.csv、docs/site-seo-profile.json：导航与索引同步。
- layouts/_shortcodes/airport.html、airports.html、brand-links.html：从统一数据渲染金额与额度，删除日期列，推广属性保留。
- layouts/_partials/docs/menu.html、ordered-pages.html、inject/content-after.html、html-head.html、footer.html：所有品牌列表共用数据排序，侧栏短名分组，Article/Breadcrumb保留，FAQPage移除。
- layouts/home.json、static/search-core.js、static/manual.js：别名/英文/套餐/金额/流量全文索引、部分匹配与一字差容错，移动目录关闭逻辑。
- static/manual.css：原米白配色保留，修复上游侧栏优先级与页眉遮挡，正文表格充分利用宽度，窄屏局部滚动。
- scripts/verify.mjs、verify-brand-optimization.mjs、verify-review-header.mjs：按本次授权清单执行验收，保留URL、历史套餐与部署校验。一次性迁移脚本不可作为常规内容生成器反复执行。
- docs/evidence/optimization/、docs/airport-data-audit.md、reports/brand-*.json：原始请求、35个网页快照、访问日志、旧资料和待补充清单。完整文件差异另见 reports/modified-files.json（与修改前源码包比较）。

## B. 29家逐项检查

“参考行数”包含不同付款周期，不等于独立商品数量。下列品牌均未取得官网现售完整清单，不能写成套餐已经完整核实。

| 顺序 | 品牌 | 文章URL | 参考套餐行 | 文章/指定入口 | 官网套餐完整 |
|---:|---|---|---:|---|---|
| 1 | 灵动云 | /reviews/lingdong/ | 3 | 存在 / 参数一致 | 否 |
| 2 | 暮光加速 | /reviews/twilight/ | 3 | 存在 / 参数一致 | 否 |
| 3 | 飞猫云 | /reviews/flycat/ | 6 | 存在 / 参数一致 | 否 |
| 4 | 大佬云 | /reviews/dalaoyun/ | 5 | 存在 / 参数一致 | 否 |
| 5 | 微风网络 Breezenet | /reviews/breezenet/ | 6 | 存在 / 参数一致 | 否 |
| 6 | 梯子云 LadderCloud | /reviews/laddercloud/ | 3 | 存在 / 参数一致 | 否 |
| 7 | 隐形人 | /reviews/invisible/ | 3 | 存在 / 参数一致 | 否 |
| 8 | 浪网 WaveNet | /reviews/wavenet/ | 3 | 存在 / 参数一致 | 否 |
| 9 | 飞V | /reviews/flyv/ | 7 | 存在 / 参数一致 | 否 |
| 10 | 星岛梦 StarDream | /reviews/xingdaomeng/ | 3 | 存在 / 参数一致 | 否 |
| 11 | 光速云 LightSpeed | /reviews/lightspeed/ | 3 | 存在 / 参数一致 | 否 |
| 12 | 唯兔云（V2云） | /reviews/v2cloud/ | 3 | 存在 / 参数一致 | 否 |
| 13 | U1S1（有一说一） | /reviews/u1s1/ | 3 | 存在 / 参数一致 | 否 |
| 14 | 极连云 | /reviews/jilian/ | 3 | 存在 / 参数一致 | 否 |
| 15 | 全球云 | /reviews/globalcloud/ | 3 | 存在 / 参数一致 | 否 |
| 16 | 光年梯 | /reviews/lightyear/ | 3 | 存在 / 参数一致 | 否 |
| 17 | Sogo云 | /reviews/sogo/ | 3 | 存在 / 参数一致 | 否 |
| 18 | 宇宙云 YuZhou | /reviews/yuzhou/ | 3 | 存在 / 参数一致 | 否 |
| 19 | 二猫云 2mao | /reviews/2mao/ | 3 | 存在 / 参数一致 | 否 |
| 20 | 一翻云 1fly | /reviews/1fly/ | 3 | 存在 / 参数一致 | 否 |
| 21 | 边缘节点 EdgeNova | /reviews/edgenova/ | 3 | 存在 / 参数一致 | 否 |
| 22 | 可信云 | /reviews/trustedcloud/ | 3 | 存在 / 参数一致 | 否 |
| 23 | 速界 SuJie | /reviews/sujie/ | 3 | 存在 / 参数一致 | 否 |
| 24 | 快狸 KuaiLi | /reviews/kuaili/ | 3 | 存在 / 参数一致 | 否 |
| 25 | 无忧 | /reviews/wuyou/ | 3 | 存在 / 参数一致 | 否 |
| 26 | 灵猫 | /reviews/lingmao/ | 3 | 存在 / 参数一致 | 否 |
| 27 | 闪跃 FlashLeap | /reviews/flashleap/ | 16 | 存在 / 参数一致 | 否 |
| 28 | 飞为 Firefly | /reviews/firefly/ | 3 | 存在 / 参数一致 | 否 |
| 29 | 跨界 | /reviews/kuajie/ | 3 | 存在 / 参数一致 | 否 |

## C. 资料审计

- 官网已核实完整价目：0/29。29个用户指定入口HTTP200；仅说明响应，不证明当前价目、品牌运营关系或可下单。浏览器渲染大佬云到登录页、飞猫云到线路检测页，未登录、未支付、未猜测API。
- 已有参考资料：112行，包括69行项目历史可追溯数据、27行用户提供参考规格、16行公开品牌页与用户价目对应规格。所有行附来源/来源快照及核实状态；金额均标参考价。
- 微风网络：六档价目与公开品牌页对应，旧25/55/125元保留内部，新27/57/127元不称官网现价。
- 宇宙云：采用公开品牌页对应的60/120/240GB三档，旧160/300/700GB不混用。
- 飞猫云：参考站15元100GB、28元200GB、0元1000GB与用户价目不同，设备数也自相矛盾，不采用该站报价；定制550元版本不发布。
- 大佬云：初云23元120/130GB冲突，整档排除。
- 飞V：商业档1843GB与1.84/1.8TB冲突，排除；年付65GB不确定重置周期，不作为月容量计算；黄金专线暂不发布。
- 闪跃：Leap年付422/442元不任选，排除；月/季/半年保留。公开参考站仅对应24元150GB，其余周期仍为用户参考规格。
- 全部品牌的节点地区、设备限额、倍率、退款、客户端订阅格式未取得足够一致证据，没有填无限设备、评分、测速截图或保证解锁。

## D. 构建与验收

```powershell
& ..\tools\hugo\hugo.exe --gc --minify
node scripts/verify.mjs
node scripts/verify-brand-optimization.mjs
```

- Hugo Extended 0.167.0 构建成功；生成151个HTML（含404），150个页面SEO检查通过。
- 12929条内部链接、2993个锚点、755处本地资源检查通过，无缺失。
- 29个原URL、推广参数、排序与历史planArchive断言通过；112行来源检查通过。
- 29篇指南每篇6项问答，共174项；正文汉字1519—1959；首页简介1873汉字。
- 搜索索引111项公开内容，覆盖29家品牌；飞猫、大佬、微风、年付、Flicker、星耀版、25元、150GB、无忧链接、FlashLeep、飞猫芸均有正确品牌结果。
- 桌面1440×900、手机390×844及320×740检查：首页/目录/飞猫/大佬；菜单展开关闭与导航关闭成功，搜索链接正确。320px整页不横向溢出，宽表在独立区域滚动。预览捕获的JavaScript错误为0。
- 主背景#F7F3EC、侧栏#EFE7DC、目录#F4EEE6、正文#FBF8F3、标题#3E3A36、链接#6B5B4D，浏览器计算样式确认。
- hugo.toml、Cloudflare部署文档、主题锁定文件哈希未变；上游主题Git干净。
- 初次全站检查因六篇选购文章替换目录后长度不足未通过，已补充对应操作与决策说明后重测通过；没有把失败结果当作成功。

## E. 仍需的具体资料与部署状态

已提供的名单、入口、排序和参考价格无需重复提供。仅需各品牌可公开取得或脱敏的在售价目、正式商品名、重置日与结转/期限、设备/速率/倍率、地区/协议对应、订阅格式/客户端版本、退款规则。大佬云入门额度、闪跃Leap年价、飞V商业容量/年付周期/黄金权益、飞猫定制在售为专项待核项。23家其余品牌的正式商品名称尚未核实，前台使用付款周期与额度描述方案，不冒充正式商品名。每品牌字段见 docs/airport-data-audit.md。

本项目目录及其父目录未配置主仓库.git；仅上游主题有独立Git仓库。因此未创建提交、未推送GitHub、未部署Cloudflare。没有猜测仓库/分支，也没有使用force或修改其他项目。当前进度已保存为源码、报告、原始证据与更新后的源码/构建包。

本地预览：http://localhost:1313/ ，可进入 /recommendations/ 和 /reviews/ 阅读。

打包日志：首次在子目录执行tar时找不到待打包的jcshouce目录，未影响源码或构建；已切换父目录重新打包。旧源码包保留为jcshouce-source-before-brand-optimization.zip。
源码哈希脚本首次从父目录调用时也报告工作目录不一致，现已改成按脚本位置自动定位项目；未产生跨项目修改。

入口核验限制：飞猫云指定URL跳转到线路检测页，候选域名含civetnet，目标品牌归属尚不能确认；需要额外核对，但没有擅自替换用户链接。报告中的入口通过表示指定URL及邀请码一致，不代表目标品牌运营归属或当前产品已验证。
