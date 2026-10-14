import fs from 'node:fs';
const request=fs.readFileSync('C:/Users/USERR/.codex/attachments/a1c9f796-669f-429b-ab74-cc187adbedcf/已粘贴的文本.txt','utf8');
const ids='lingdong twilight flycat dalaoyun breezenet laddercloud invisible wavenet flyv xingdaomeng lightspeed v2cloud u1s1 jilian globalcloud lightyear sogo yuzhou 2mao 1fly edgenova trustedcloud sujie kuaili wuyou lingmao flashleap firefly kuajie'.split(' ');
const names=['灵动云','暮光加速','飞猫云','大佬云','微风网络 Breezenet','梯子云 LadderCloud','隐形人','浪网 WaveNet','飞V','星岛梦 StarDream','光速云 LightSpeed','唯兔云（V2云）','U1S1（有一说一）','极连云','全球云','光年梯','Sogo云','宇宙云 YuZhou','二猫云 2mao','一翻云 1fly','边缘节点 EdgeNova','可信云','速界 SuJie','快狸 KuaiLi','无忧','灵猫','闪跃 FlashLeap','飞为 Firefly','跨界'];
const links=[...request.split('## 四、')[1].split('## 五、')[0].matchAll(/https:\/\/[^\s]+/g)].map(m=>m[0]);
if(links.length!==29)throw Error('Expected 29 user URLs');
fs.mkdirSync('docs/evidence/optimization',{recursive:true});
fs.writeFileSync('docs/evidence/optimization/user-request.txt',request);
const manifest=ids.map((id,i)=>({id,name:names[i],order:i+1,affiliateURL:links[i]}));
fs.writeFileSync('docs/evidence/optimization/authorized-brands.json',JSON.stringify(manifest,null,2));
const refs=['https://www.ermao.net/airport/','https://www.feimaoyunjc.com/','https://breezenetwork.my/','https://jichangnode.wiki/brands/flyv/','https://yuzouyun.sbs/','https://mianfeijichang.blog/brand/shanyue'];
const queue=[...manifest.map(a=>({id:a.id,url:a.affiliateURL,kind:'user_entry'})),...refs.map((url,i)=>({id:'reference-'+i,url,kind:'reference'}))];
let results=[];async function worker(){while(queue.length){let a=queue.shift();try{const r=await fetch(a.url,{signal:AbortSignal.timeout(18000)});const s=await r.text();fs.writeFileSync('docs/evidence/optimization/'+a.id+'.html',s);results.push({...a,httpStatus:r.status,resolvedURL:r.url,title:s.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1],bytes:s.length,checkedAt:new Date().toISOString(),note:'HTTP response only; not proof of current plans'});}catch(e){results.push({...a,error:e.message,checkedAt:new Date().toISOString()});}console.log(a.id+': '+(results.at(-1).httpStatus||results.at(-1).error));fs.writeFileSync('reports/public-source-checks.json',JSON.stringify(results,null,2));}}
await Promise.all([worker(),worker(),worker(),worker()]);
