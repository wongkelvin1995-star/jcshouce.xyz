import fs from 'node:fs';
const read=p=>fs.readFileSync(p,'utf8');const verification=JSON.parse(read('reports/site-audit-verification.json'));const site=JSON.parse(read('reports/verification.json'));
const browser={result:'PASS',executedAt:new Date().toISOString(),viewports:[1440,390,320],homepageAndArticleHorizontalOverflow:false,chapterFont:'13px',hoverColor:'#735F4D',background:'#F7F3EC',desktopFullTextSearch:{query:'订阅链接',results:40,uniqueResults:40},mobileBrandSearch:{query:'Breezenet',results:13,uniqueResults:13,firstURL:'/reviews/breezenet/'},mobileMenuOpenScrollAndNavigationClose:true,articleTableScrollContained:true,firstEscapeCloses:true,nativeBackdropClickCloses:true,closeButton:{width:64,height:40,whiteSpace:'nowrap',scrollHeight:38,clientHeight:38},javascriptErrors:[],viewportRestored:true};fs.writeFileSync('reports/site-audit-browser.json',JSON.stringify(browser,null,2));
const files=[['static/manual.js','请求序号使过期异步回调失效；关闭时取消未完成结果；中文组合输入结束后搜索；Escape优先关闭；背景点击按四边界判断。'],['layouts/home.rss.xml','只输出公开文章并按发布日期倒序，移除RSS中39个noindex页面，保留所有原页面与资料。'],['assets/styles/custom.css','仅浅色主题的hover咖啡色加深为#735F4D，五种背景上对比度4.93—5.71。'],['static/manual.css','侧栏子目录字号12→13px；修正无效颜色变量；支持减少动画偏好；限定搜索弹层关闭按钮不收缩换行，窄屏标题20px。'],['layouts/_partials/docs/menu.html','缩短冗长栏目显示名，避免目录拥挤，保留统一29家排序与全部路径。'],['README.md','修正旧前六名说明为当前固定前五名；记录真实命令、本地Git用途和主题依赖边界。'],['scripts/site-audit.test.mjs','6项受控异步与键盘/输入法回归用例，使用Node内置测试器，无新依赖。'],['scripts/verify-site-audit.mjs','保护189个内容/资料/配置文件，检查RSS去重与日期、hover对比度、Git远程和内容重复。'],['scripts/check-preserved-config.mjs','历史保护只放行有前后哈希记录的三项明确修复，不放宽机场JSON保护。'],['scripts/verify-rebrand.mjs','保留更名验收，并区分本次授权的样式/搜索修复与保持原样的机场资料。']];
let report=`# 机场手册全站技术审计与修复报告

日期：2026-10-14。检查完成后按严重程度修复，未重建项目、未更换框架、未修改其他博客。

## 项目识别与修改前检查

- 项目根目录：当前jcshouce.xyz下的jcshouce。
- 框架：Hugo Extended 0.167.0；主题Hugo Book，锁定commit d8ace5aa6c27d0eeea7d20d36f2b47f87536c9b8。主题独立Git仓库未修改。
- 依赖：Hugo处理Go模板与主题样式；运行页面是静态HTML/CSS/原生JS；Node 24.19.0仅用于维护/测试。没有package.json、npm依赖安装、lint或typecheck脚本。
- 目录：content为154个Markdown页面；data为导航、FAQ、教程和29家品牌JSON；layouts为主题覆盖与短代码；assets为主题变量；static为搜索与本地阅读脚本；public为构建；resources为缓存；docs/reports为内部证据与验收。
- 路由：首页、start/basics/plans/install/subscription/nodes/configuration/troubleshooting/safety/recommendations/reviews/providers/faq及editor/about/account/site-map/domain。所有原slug保留；providers详情及FAQ分组继续noindex。
- 部署：文档约定Cloudflare Pages、public输出、hugo --gc --minify、HUGO_VERSION=0.167.0。未发现已确认GitHub远程、Cloudflare项目身份或真实线上构建日志，不伪称已经部署或存在部署失败。
- 修改前：构建、verify/brand/footer/rebrand四项验收与3份静态JS语法检查均通过；桌面1440px及手机320px基线没有整页横向溢出。未发现阻断构建的错误。

## 根因与按级别修复

| 严重程度 | 已确认问题 | 修复与证据 |
|---|---|---|
| P1 | 主项目没有Git，源文件修改无法通过Git恢复 | 创建仅本地的Git基线；不设remote，不推送；上游主题仍独立 |
| P1 | 索引加载时关闭再重开，同词旧回调仍追加；关闭后仍渲染 | 原3项复现测试全部失败；加入请求序号、打开状态与关闭失效检查后6项回归通过 |
| P2 | 背景关闭只判断offsetX<0，右侧与下方无效 | 改为对话框边界比较；单元测试与浏览器真实背景点击通过 |
| P2 | search类型输入框第一次Escape先清词而不关弹层 | 全局Escape处理阻止默认动作；增加回归；浏览器第一次Escape确实关闭 |
| P2 | 320px关闭按钮被flex收缩，中文标签换行越出按钮 | 按钮不收缩、64px最小宽度及nowrap；窄屏弹层标题20px；实际scrollHeight=clientHeight=38 |
| P2 | RSS包含已noindex的29个速查与10个FAQ专题页 | 仅输出95篇公开文章，按日期倒序；XML解析及内容/顺序断言通过 |
| P2 | hover色在常用背景对比度3.61—4.18 | 浅色hover改为咖啡色#735F4D；最低${verification.minimumHoverContrast.toFixed(2)}，超过普通文字4.5目标 |
| P3 | 子目录12px较小、长栏目名拥挤、README排序过时 | 子目录13px、栏目显示名收短，README按真实固定前五修正；机场数据完全不改 |

对比度依据：https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html 。这是目标颜色组合的检查，不是整站WCAG合规认证。

## 实际修改文件及原因

${files.map(([p,why])=>'- '+p+'：'+why).join('\n')}

另保存本次一次性修改/记录脚本和site-audit-*报告、日志。修改前后资源的准确哈希见site-audit-baseline.json；历史报告与原始证据保留，不改写过去结论。

## 最终真实执行结果

- 构建：Hugo Extended 0.167.0 --gc --minify，PASS；178个Hugo页面/输出、155个HTML、75个静态文件。真实日志site-audit-build.log。
- 语法：node --check static/manual.js、static/search-core.js、static/personal.js，PASS。语法检查不冒充lint。
- 测试：node --test scripts/site-audit.test.mjs，6/6 PASS；site-audit-tests.log。初始3项复现失败已如实记录，未当作成功。
- 现有四项验收：verify.mjs、verify-brand-optimization.mjs、verify-footer.mjs、verify-rebrand.mjs，全部PASS。
- 新专项：verify-site-audit.mjs，PASS；${verification.protectedFilesByteIdentical}个内容、品牌数据和配置文件字节一致；正式域名、29家名单、固定前五、112行参考套餐及推广参数保留。
- SEO：${site.seoChecked}个页面标题/描述/Canonical/结构化数据通过；${site.internalLinks}条内部链接、${site.fragmentLinks}个锚点通过；115个Sitemap地址正确，robots引用正式域名；930处本地资源可用。
- 搜索：115项公开索引覆盖29家，中文、正文、别名、英文、套餐名称和金额/流量关键字通过。浏览器全文搜索40条且唯一40，Breezenet13条且唯一13，第一结果进入正确品牌URL。
- 浏览器：1440/390/320px，首页和文章不整页横向溢出；手机目录可展开、滚动、选文后关闭；套餐表在独立区域滚动。首次Escape和背景点击关闭通过；捕获阻断JS错误0。新字号、hover变量与原米白主背景计算样式确认。
- lint：项目没有配置，未执行、未声称成功。
- typecheck：项目没有配置，未执行、未声称成功。

## Git恢复与范围

恢复基线：${verification.baselineCommit}。本地主项目已开启Git并保留原始换行字节；没有remote，不修改任何GitHub仓库/分支。主题仍由既有独立仓库和锁定版本管理，主仓库只用于本次源代码恢复；并非已确认的可克隆部署仓库。

修复与报告将作为本地提交保存。需要撤销时，对本次修复提交使用git revert，随后重新构建与重启本地预览；不需要force push或删除数据。具体修复提交可用git log --oneline查看。

## 仍然存在的问题

1. 内容层发现4组长段落在至少10篇文章重复，其中2段通用准备/验收说明分别出现在60篇教程。清单见site-audit-content-duplication.json。没有批量模板化重写、没有删除品牌或教程事实；后续宜按主题逐篇编辑。
2. 机场资料目前仍是参考版本，官网现售价目、地区、设备限制及部分冲突未完成核验；原审计清单继续保留。本次没有更改价格或虚构验证。
3. 没有已确认的GitHub远程或Cloudflare项目权限/线上日志，未推送、未部署，不能确认线上运行结果。正式域名及部署约定保持原样。
4. 当前没有已实现的太阳/月亮切换控件，站点配置仍是light；本次不宣称完成主题切换测试，不新增未经请求的模式。
`;fs.writeFileSync('reports/site-audit-report.md',report);console.log('Audit report saved.');
