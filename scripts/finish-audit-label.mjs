import fs from 'node:fs';const p='layouts/_partials/docs/menu.html';fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace('}}品牌与套餐指南{{ else }}','}}机场介绍与套餐指南{{ else }}'));
