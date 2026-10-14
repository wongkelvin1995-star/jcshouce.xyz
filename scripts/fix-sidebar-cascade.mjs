import fs from 'node:fs';const r=p=>fs.readFileSync(p,'utf8'),w=(p,s)=>fs.writeFileSync(p,s);
const menu='layouts/_partials/docs/menu.html';w(menu,r(menu).replace('{{ if $section.IsSection }}<ul>','{{ if and $section.IsSection (eq $.Section $section.Section) }}<ul>'));
const footer='layouts/_partials/docs/footer.html';w(footer,r(footer).replace('价格与服务条件以购买当日服务商页面为准。','金额用于预算比较，交易前确认订单中的金额、配额及条款。'));
fs.appendFileSync('static/manual.css',`\n/* Hugo Book has contextual padding rules: match their specificity to keep both sidebars below our header. */\n.book-menu .book-menu-content{width:255px;padding:100px 22px 30px}.book-toc .book-toc-content{width:210px;padding:100px 16px 24px;background:var(--manual-toc)}\n@media(max-width:960px){.book-menu .book-menu-content{width:285px;padding:22px;height:100%;overflow-y:auto}.brand-nav a{min-height:36px}.chapters ul li{margin:5px 0}}\n`);
// Validation is read-only with respect to source data; historical restoration happened once during migration.
const v='scripts/verify-brand-optimization.mjs';w(v,r(v).replace(/\/\/ Restore historical arrays[\s\S]*?(?=const attrs=)/,''));
