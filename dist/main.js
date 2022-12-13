(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    box-sizing: border-box;\n}\n\nh1 {\n    font-size: 3rem;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    text-align: center;\n}\n\nh2 {\n    font-size: 2rem;\n    text-transform: capitalize;\n    padding-left: 10px;\n}\n\n.content {\n    display: flex;\n    gap: 20px;\n    padding: 10px;\n}\n\n.projects,\n.todo-div {\n    padding: 10px;\n    width: 25%;\n    border-radius: 15px;\n    background-color: rgb(134, 56, 56);\n    box-shadow: 5px 5px 5px 5px rgb(192, 140, 140);\n}\n\n.projects input {\n    width: 40%;\n    height: 2rem;\n    font-size: 1.25rem;\n    border-radius: 5px;\n    box-sizing: border-box;\n    border: none;\n}\n\nbutton {\n    display: block;\n    margin-top: 5px;\n    height: 2rem;\n    padding: 5px 15px;\n    font-size: 1rem;\n    font-weight: 600;\n    text-transform: capitalize;\n    border-radius: 5px;\n    border: none;\n}\n\n.items {\n    padding: 10px;\n    width: 40%;\n    border: none;\n    border-radius: 15px;\n    background-color: rgb(86, 206, 224);\n    box-shadow: 5px 5px 5px 5px rgb(9, 74, 84);\n}\n\nul {\n    padding-left: 10px;\n}\n\nli {\n    list-style-type: none;\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n    display: grid;\n    grid-template-columns: repeat(2, 48%);\n    gap: 10px\n}\n\nli>span {\n    display: grid;\n    align-self: center;\n}\n\n.line-through {\n    text-decoration: line-through;\n}\n\n.hidden {\n    display: none;\n}\n\nli>div {\n    display: flex;\n    gap: 8px;\n    justify-self: flex-end;\n}\n\nli>p {\n    font-size: 1rem;\n    background-color: rgb(209, 228, 234);\n    border-radius: 5px;\n    padding: 15px 5px;\n    margin-top: 0;\n}\n\nform {\n    border: none;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: none;\n    padding-left: 0;\n}\n\nfieldset:last-of-type {\n    flex-direction: row;\n    align-items: center;\n}\n\nlabel {\n    text-transform: uppercase;\n    font-size: 0.8rem;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=class{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.isDone=!1}changeTitle(e){e.length>2&&""!==e.trim()&&(this.title=e)}changeDescription(e){this.description=e}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}toggleIsDone(){this.isDone=!this.isDone}},g=class{constructor(e){this.name=e,this.items=new Array}addItem(e){this.items.push(e)}removeItem(e){for(let t=0;t<this.items.length;t++)if(this.items[t].title===e.title){this.items.splice(t,1);break}}getItems(){return this.items}},x=new g("Blog");for(let e=0;e<5;e++){const t=new f(`${e} Blog item`,"Something anything some description of the prject, Something anything some description of the prject, Something anything some description of the prject, Something anything some description of the prject","today","low");x.addItem(t)}const b=new g("Garden");for(let e=0;e<4;e++){const t=new f(`${e+1} garden item`,"","tomorrow","high");b.addItem(t)}const v=[x,b],y=function(){const e=document.querySelector("body"),t=document.createElement("main");e.append(t);const n=document.createElement("h1");n.textContent="To do list",t.append(n);const o=document.createElement("div");o.classList.add("content"),t.append(o);const r=document.createElement("div");r.classList.add("projects");const i=document.createElement("h2");i.textContent="projects",r.append(i);const a=document.createElement("div"),c=document.createElement("input");c.setAttribute("type","text");const s=document.createElement("button");s.textContent="Add Project",s.addEventListener("click",(()=>{c.value.trim().length>3&&(e=>{const t=document.querySelector(".project-list"),n=document.createElement("li");n.textContent=e.name,n.addEventListener("click",C.bind(null,e)),t.appendChild(n),C(e)})(new g(c.value)),c.value=""})),a.appendChild(c),a.appendChild(s),r.append(a),o.append(r);const d=document.createElement("div");d.classList.add("items");const l=document.createElement("h2");function p(){const e=document.createElement("div");e.classList.add("todo-div");const t=document.createElement("h2");t.textContent="add new todo",e.append(t);const n=document.createElement("form");n.setAttribute("onsubmit","event.preventDefault()");const r=document.createElement("fieldset"),i=document.createElement("label");i.textContent="title";const a=document.createElement("input");a.setAttribute("name","title"),a.setAttribute("type","text"),r.append(i),r.append(a),n.append(r);const c=document.createElement("fieldset"),s=document.createElement("label");s.textContent="description";const d=document.createElement("textarea");d.setAttribute("name","description"),d.setAttribute("rows","5"),c.append(s),c.append(d),n.append(c);const l=document.createElement("fieldset"),p=document.createElement("label");p.textContent="due date";const m=document.createElement("input");m.setAttribute("name","dueDate"),m.setAttribute("type","date"),l.append(p),l.append(m),n.append(l);const h=document.createElement("fieldset"),f=document.createElement("label");f.textContent="high priority";const g=document.createElement("input");g.setAttribute("type","checkbox"),g.setAttribute("name","priority"),h.append(g),h.append(f),n.append(h);const x=document.createElement("button");x.textContent="add",x.setAttribute("type","submit"),x.addEventListener("click",u.bind(null,n)),n.append(x),e.append(n),o.append(e)}l.textContent="to do...",d.append(l),o.append(d);const u=e=>{const t=new f(e.title.value,e.description.value,e.dueDate.value,e.priority.checked),n=d.firstChild.textContent;var r,i;r=n,i=t,v.map((e=>{e.name===r&&(e.items.push(i),console.log("Successfully added item to project!"))})),o.removeChild(o.children[2]),m(t)},m=e=>{document.querySelector(".items-list").append(E(e))},h=e=>{const t=e.querySelectorAll("p");for(let e of t)e.classList.toggle("hidden")},x=e=>{console.log(e)},b=e=>{document.querySelector(".items-list").removeChild(e)},y=e=>{e.firstChild.classList.toggle("line-through")},E=e=>{const t=document.createElement("li"),n=document.createElement("span");n.textContent=e.title;const o=document.createElement("div"),r=document.createElement("button");r.textContent="...",r.addEventListener("click",h.bind(null,t));const i=document.createElement("button");i.textContent="edit",i.addEventListener("click",x.bind(null,t));const a=document.createElement("button");a.textContent="delete",a.addEventListener("click",b.bind(null,t));const c=document.createElement("input");c.setAttribute("type","checkbox"),c.addEventListener("change",y.bind(null,t)),o.append(r,i,a,c);const s=document.createElement("p");s.textContent=e.description||"No description yet...",s.classList.add("hidden");const d=document.createElement("p");return d.textContent=`Due date: ${e.dueDate||"Whenever..."}`,d.classList.add("hidden"),t.append(n,o,s,d),t},C=e=>{o.children[2]&&o.removeChild(o.lastChild),d.replaceChildren(l),l.textContent=e.name;const t=document.createElement("ul");t.classList.add("items-list");for(let n of e.getItems())t.append(E(n));d.append(t);const n=document.createElement("button");n.textContent="add new todo",n.addEventListener("click",p),d.append(n)};return{createProjectsList:e=>{const t=document.createElement("ul");t.classList.add("project-list");for(let n of e){console.log(n);const e=document.createElement("li");e.textContent=n.name,e.addEventListener("click",C.bind(null,n)),t.append(e)}r.insertBefore(t,a)},createItemsList:C}}();y.createProjectsList(v),y.createItemsList(v[0])})()})();