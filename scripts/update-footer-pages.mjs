import fs from 'node:fs';import crypto from 'node:crypto';
if(fs.existsSync('reports/footer-verification.json'))throw Error('One-time migration already completed; edit current source directly.');
const files=['hugo.toml','docs/deployment.json','docs/theme-lock.json',...fs.readdirSync('data/airports').map(f=>'data/airports/'+f)];fs.writeFileSync('reports/footer-baseline.json',JSON.stringify(Object.fromEntries(files.map(f=>[f,crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex')])),null,2));
const pages={editor:{title:'编辑：内容方向与资料维护',description:'了解梯子手册如何编写品牌服务说明、套餐指南与客户端教程，以及事实核验、纠错和推广披露原则。',body:`## 把服务资料写成可以使用的手册

梯子手册由个人运营，编辑工作围绕机场品牌介绍、套餐选择、订阅管理和客户端操作展开。目标是让读者理解买到的资源、配置时需要的步骤，以及遇到问题后从哪里检查。

## 套餐资料与品牌说明

29家品牌分别管理名称、入口、套餐、流量与付款周期，避免把相似名称或不同品牌的产品混用。参考金额用于预算比较；正式商品名称、重置规则、设备限制和线路权益分别核对，不从一个字段推断全部服务条件。

编辑时优先使用可公开查阅的服务商资料，再核对已有可追溯资料。原始来源与版本差异用于内部维护；有冲突的数值不会任选一个发布，没有证据的节点、测速、评分和解锁承诺也不会补造。

## 客户端教程怎样编写

教程从设备和系统版本开始，依次说明安装、订阅导入、配置启用、应用验证和恢复操作。[客户端指南](/install/)与[订阅教程](/subscription/)解释操作方法；品牌指南说明该品牌的套餐与服务边界，两者不能互相代替。

## 修订与反馈

界面、价格或协议改变时，重新核对相应步骤和来源。文章显示编辑更新时间，它不是测速时间。欢迎通过页脚TG入口反馈页面地址、问题描述和脱敏截图；请不要发送密码、完整订阅链接或支付凭据。

本站部分品牌入口包含AFF推广关系，可能产生佣金。编辑展示顺序不代表客观性能排名，商业关系会明确披露。

[查看品牌与套餐指南](/reviews/) · [了解本站](/about/)
`},account:{title:'个人中心：本地收藏与阅读记录',description:'在当前浏览器保存梯子手册文章收藏与最近阅读记录，无需登录，不上传账户、密码或订阅信息。',body:`## 在当前浏览器继续阅读

这里提供真实可用的文章收藏和最近阅读记录，无需注册或登录。打开品牌文章或教程后，正文标题下的“收藏本文”按钮可以保存或取消收藏；最近阅读会自动保存已打开的文章，方便下次继续阅读。

数据仅保存在当前域名、当前浏览器的本地存储中，不会发送到服务器，也不会跨设备同步。清理浏览器站点数据、切换浏览器或使用另一域名后，记录可能不可见。不要把它当作机场账户、订单或云端备份。

{{< personal-center >}}

## 使用说明

- 从[品牌指南](/reviews/)或[新手教程](/start/)进入一篇文章，即可建立阅读记录。
- 点击文章标题下的收藏按钮，收藏状态会即时更新；再次点击即可取消。
- 下方每条记录可以单独移除。阅读记录最多保留最近100篇，收藏最多保存100篇。
- 如果浏览器禁止本地存储，页面会说明原因，不会伪装成已经保存成功。

本功能不要求机场密码、订阅令牌、支付信息或登录凭据。
`},'site-map':{title:'站点地图：全部公开阅读入口',description:'浏览梯子手册首页、29家机场品牌指南、新手教程、客户端安装、订阅导入、常见问题及其他公开页面。',body:`## 从目录查找文章

以下链接由本站实际页面和统一品牌数据自动生成。品牌顺序与首页保持一致，教程按所属章节归类，点击进入对应文章。

{{< public-site-map >}}

## 搜索引擎站点地图

本站同时提供[XML Sitemap](/sitemap.xml)与[robots.txt](/robots.txt)。XML中的页面地址统一使用正式域名 https://jcshouce.xyz/ 。个人中心展示的浏览记录和收藏属于浏览器数据，不进入任何站点地图。
`},domain:{title:'域名：梯子手册正式地址',description:'梯子手册唯一正式域名为https://jcshouce.xyz，查看本站正式地址与站内阅读入口。',body:`## 唯一正式域名

**梯子手册：[https://jcshouce.xyz](https://jcshouce.xyz)**

本站的正式页面、Canonical、XML Sitemap与robots.txt中的站点地图入口统一使用这个域名。不提供未经确认的镜像地址或备用网址。

## 站内入口与品牌入口

[首页](/)、[品牌与套餐指南](/reviews/)、[新手教程](/start/)、[客户端指南](/install/)和[站点地图](/site-map/)属于梯子手册站内页面。

机场注册或购买链接属于各品牌的外部服务入口，不是梯子手册的备用网址。通过推广入口进入时，请先确认页面品牌与订单条件；本站不会索取你的机场密码或完整订阅令牌。

## 保存阅读入口

可以将正式首页加入浏览器书签，或使用[个人中心](/account/)收藏具体文章。个人中心的数据按浏览器和域名分别保存，不在不同站点间自动同步。
`}};
const stamp=new Date().toISOString();for(const [slug,p]of Object.entries(pages)){fs.mkdirSync('content/'+slug,{recursive:true});fs.writeFileSync('content/'+slug+'/_index.md',`---\ntitle: ${JSON.stringify(p.title)}\ndescription: ${JSON.stringify(p.description)}\ndate: ${stamp}\nlastmod: ${stamp}\n---\n\n${p.body}`);}
let about=fs.readFileSync('content/about/_index.md','utf8');about=about.replace(/^lastmod: .*$/m,'lastmod: '+stamp);about=about.replace('## 资料与测试原则',`## 主要内容与功能

本站按章节提供新手入门、机场使用手册、套餐选择、客户端安装、订阅导入、节点线路说明和故障排查。29家机场各有独立[品牌与套餐指南](/reviews/)，价格与流量按同一数据源展示，保留每个品牌自己的服务入口。

全站中文搜索支持标题、正文、品牌别名和套餐关键词；[站点地图](/site-map/)列出实际阅读入口。[个人中心](/account/)提供当前浏览器的本地收藏和最近阅读记录，帮助继续阅读，不提供虚假登录或机场订单管理。

## 资料与测试原则`);about=about.replace('当前未加入分析追踪或第三方广告脚本；','收藏和阅读记录只写入当前浏览器的本地存储，不上传服务器；可在个人中心逐项移除。当前未加入分析追踪或第三方广告脚本；');fs.writeFileSync('content/about/_index.md',about);
let footer=fs.readFileSync('layouts/_partials/docs/footer.html','utf8');footer=footer.replace('<p><a href="https://t.me/+7J7nWmMUSbFhMzY1" target="_blank" rel="noopener noreferrer">TG 交流入口</a> · 请勿公开订阅凭据。</p>',`<nav class="footer-navigation" aria-label="页脚导航"><a href="https://t.me/+7J7nWmMUSbFhMzY1" target="_blank" rel="noopener noreferrer">TG 交流入口</a><span aria-hidden="true">|</span><a href="/editor/">编辑</a><span aria-hidden="true">|</span><a href="/about/">关于本站</a><span aria-hidden="true">|</span><a href="/account/">个人中心</a><span aria-hidden="true">|</span><a href="/site-map/">站点地图</a><span aria-hidden="true">|</span><a href="/domain/">域名</a></nav><p>请勿公开订阅凭据。</p>`);fs.writeFileSync('layouts/_partials/docs/footer.html',footer);
fs.writeFileSync('layouts/_shortcodes/personal-center.html',`<div id="personal-center"><p id="personal-storage-status" role="status" aria-live="polite">正在读取本地记录…</p><h2 id="saved-heading">我的收藏</h2><ul id="saved-articles" class="personal-list" aria-labelledby="saved-heading"></ul><h2 id="history-heading">最近阅读</h2><ul id="reading-history" class="personal-list" aria-labelledby="history-heading"></ul></div><noscript>收藏与阅读记录需要浏览器启用JavaScript。你仍可通过站点地图阅读所有公开页面。</noscript>\n`);
fs.writeFileSync('layouts/_shortcodes/public-site-map.html',`<h2>首页与功能页面</h2><ul>{{ range slice "/" "/editor/" "/about/" "/account/" "/site-map/" "/domain/" "/faq/" "/archives/" "/recommendations/" }}{{ with $.Site.GetPage . }}<li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>{{ end }}{{ end }}</ul><h2>29家机场品牌与套餐指南</h2><ol class="site-map-brands">{{ range sort hugo.Data.airports "order" }}{{ $page := $.Site.GetPage (printf "/reviews/%s" .id) }}{{ if not $page }}{{ errorf "站点地图缺少品牌页面%s" .id }}{{ end }}<li><a href="{{ $page.RelPermalink }}">{{ .name }}</a></li>{{ end }}</ol>{{ range slice "start" "basics" "plans" "install" "subscription" "nodes" "configuration" "troubleshooting" "safety" "recommendations" }}{{ with $.Site.GetPage (printf "/%s" .) }}<h2><a href="{{ .RelPermalink }}">{{ .Title }}</a></h2><ul>{{ range .RegularPages.ByWeight }}{{ if not .Params.noindex }}<li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>{{ end }}{{ end }}</ul>{{ end }}{{ end }}\n`);
let before=fs.readFileSync('layouts/_partials/docs/inject/content-before.html','utf8');before+='\n{{ if .IsPage }}<div class="reading-tools" data-reading-title="{{ .Title }}" data-reading-url="{{ .RelPermalink }}"><button id="bookmark-toggle" type="button" aria-pressed="false" disabled>收藏本文</button><a href="/account/">查看收藏与阅读记录</a><span id="bookmark-status" role="status" aria-live="polite"></span></div>{{ end }}\n';fs.writeFileSync('layouts/_partials/docs/inject/content-before.html',before);
let head=fs.readFileSync('layouts/_partials/docs/html-head.html','utf8');head+='\n{{ $personal := resources.FromString "personal.js" (readFile "static/personal.js") | resources.Minify | resources.Fingerprint }}<script defer src="{{ $personal.RelPermalink }}" integrity="{{ $personal.Data.Integrity }}"></script>\n';fs.writeFileSync('layouts/_partials/docs/html-head.html',head);
fs.appendFileSync('static/manual.css',`\n/* Footer utilities and browser-local reading features */\n.footer-navigation{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;line-height:1.8}.footer-navigation a{white-space:nowrap}.footer-navigation>span{color:var(--manual-muted)}.reading-tools{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;margin:12px 0 22px;font-size:13px}.reading-tools button{font-size:13px;padding:5px 10px}.reading-tools button[aria-pressed=true]{background:var(--manual-panel);border-color:var(--manual-link)}.reading-tools button:disabled{cursor:default;opacity:.65}.personal-list{padding-left:0!important;list-style:none}.personal-list li{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 12px;padding:12px 0;border-bottom:1px solid var(--manual-divider)}.personal-list a{flex:1 1 220px;overflow-wrap:anywhere}.personal-list time{color:var(--manual-muted);font-size:12px}.personal-list button{font-size:12px;padding:4px 8px}.personal-empty{color:var(--manual-muted)}@media(max-width:960px){.footer-navigation{gap:5px 8px}.footer-navigation a{padding:4px 0}.reading-tools{gap:8px}.personal-list a{flex-basis:100%}}\n`);
console.log('Footer and five real utility pages prepared; existing brand data and deployment untouched.');
