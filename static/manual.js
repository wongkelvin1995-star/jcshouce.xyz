(()=>{
  'use strict';
  const dialog=document.getElementById('search-dialog'),input=document.getElementById('search-input'),results=document.getElementById('search-results'),status=document.getElementById('search-status'),open=document.getElementById('search-open');
  if(!dialog||!input||!results||!status||!open)return;
  let items=null,pending=null,timer,revision=0,composing=false;
  async function load(){if(items)return items;if(!pending)pending=fetch('/index.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('索引请求失败');return r.json();}).then(data=>{if(!Array.isArray(data))throw Error('索引格式错误');items=data;return data;}).catch(e=>{pending=null;throw e;});return pending;}
  async function run(){const request=++revision,query=input.value;results.replaceChildren();if(!query.trim()){status.textContent='可搜索文章标题、正文、机场和客户端名称。';return;}status.textContent='正在搜索…';try{const data=await load();if(request!==revision||query!==input.value||!dialog.open)return;const found=ManualSearch.search(data,query);status.textContent=found.length?'找到 '+found.length+' 个结果（最多显示40条）':'没有找到结果，试试更短的关键词。';for(const page of found){const li=document.createElement('li'),a=document.createElement('a'),summary=document.createElement('p');a.href=page.url;a.textContent=page.title;summary.textContent=page.snippet;li.append(a,summary);results.append(li);}}catch{if(request===revision&&dialog.open)status.textContent='搜索索引暂时无法加载，请检查网络后重新输入。';}}
  function closeSearch(){++revision;clearTimeout(timer);dialog.close();}
  function schedule(){++revision;clearTimeout(timer);timer=setTimeout(run,100);}
  open.onclick=()=>{dialog.showModal();input.focus();run();};
  document.getElementById('search-close').onclick=closeSearch;
  dialog.addEventListener('close',()=>{if(!dialog.open){++revision;clearTimeout(timer);open.focus();}});
  dialog.addEventListener('cancel',e=>{e.preventDefault();closeSearch();});
  dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeSearch();});
  input.addEventListener('compositionstart',()=>{composing=true;++revision;clearTimeout(timer);});
  input.addEventListener('compositionend',()=>{composing=false;schedule();});
  input.addEventListener('input',e=>{++revision;clearTimeout(timer);if(!composing&&!e.isComposing)schedule();});
  document.addEventListener('keydown',e=>{const active=document.activeElement;if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(active.tagName)&&!active.isContentEditable&&!dialog.open){e.preventDefault();open.click();}});
  const menu=document.getElementById('menu-toggle');
  menu.onclick=()=>{const show=document.body.classList.toggle('menu-visible');menu.setAttribute('aria-expanded',String(show));};
  document.getElementById('manual-nav').addEventListener('click',e=>{if(e.target.closest('a')){document.body.classList.remove('menu-visible');menu.setAttribute('aria-expanded','false');}});
  document.addEventListener('click',e=>{if(document.body.classList.contains('menu-visible')&&!e.target.closest('.book-menu')&&!e.target.closest('#menu-toggle')){document.body.classList.remove('menu-visible');menu.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(dialog.open&&!composing&&!e.isComposing){e.preventDefault();closeSearch();}document.body.classList.remove('menu-visible');menu.setAttribute('aria-expanded','false');}});
})();
