!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./styleguide/",n(n.s=165)}({165:function(t,e,n){"use strict";n.r(e);var o=n(52),i=(n(94),n(2));const r={active:[],targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,onReady(){document.querySelectorAll(".pl-js-pattern-extra-toggle").forEach(t=>{t.addEventListener("click",e=>{const n=t.getAttribute("data-patternpartial");r.toggle(n)})})},toggle(t){if(void 0!==r.active[t]&&r.active[t])r.highlightsHide(),r.close(t);else{const e=document.getElementById("pl-pattern-data-"+t);r.collectAndSend(e,!0,!1)}},open(t,e){let n=document.createElement("div");n.innerHTML=e,e=document.createElement("div").appendChild(n).querySelector("div"),e=o.a.addClickEvents(e,t),r.active[t]=!0,(n=document.getElementById("pl-pattern-extra-"+t))&&n.childNodes&&n.childNodes.length>0&&n.removeChild(n.childNodes[0]),document.getElementById("pl-pattern-extra-"+t).appendChild(e);const i=document.getElementById("pl-pattern-extra-toggle-"+t);i&&i.classList.add("pl-is-active"),document.getElementById("pl-pattern-extra-"+t).classList.add("pl-is-active")},close(t){r.active[t]=!1;const e=document.getElementById("pl-pattern-extra-toggle-"+t);e&&e.classList.remove("pl-is-active"),document.getElementById("pl-pattern-extra-"+t)&&document.getElementById("pl-pattern-extra-"+t).classList.remove("pl-is-active")},collectAndSend(t,e,n){if(/\S/.test(t.innerHTML)){const o=JSON.parse(t.innerHTML);if(void 0!==o.patternName){const t=document.querySelector("#"+o.patternPartial+" > .pl-js-pattern-example");o.patternMarkup=null!==t?t.innerHTML:document.querySelector("body").innerHTML,r.patternQueryInfo(o,e,n)}}},highlightsHide(t){const e=void 0!==t?"#"+t+" > ":"";let n=document.querySelectorAll(e+".pl-has-annotation");for(let o=0;o<n.length;o++)n[o].classList.remove("pl-has-annotation");n=document.querySelectorAll(e+".pl-c-annotation-tip");for(let o=0;o<n.length;o++)n[o].style.display="none"},patternQueryInfo(t,e,n){try{const o=JSON.stringify({event:"patternLab.patternQueryInfo",patternData:t,iframePassback:e,switchText:n});window.parent.postMessage(o,r.targetOrigin)}catch(o){}},receiveIframeMessage(t){const e=Object(i.c)(t);if(void 0!==e.event&&"patternLab.patternQuery"===e.event){const t=document.querySelectorAll(".pl-js-pattern-data"),n=t.length>1;for(let o=0;o<t.length;o++)r.collectAndSend(t[o],n,e.switchText)}else if(void 0!==e.event&&"patternLab.patternModalInsert"===e.event)r.open(e.patternPartial,e.modalContent);else if(void 0!==e.event&&"patternLab.annotationsHighlightShow"===e.event){let t,n,o;for(let i=0;i<e.annotations.length;i++)if(n=e.annotations[i],(t=document.querySelectorAll(n.el)).length>0)for(let e=0;e<t.length;e++){t[e].classList.add("pl-has-annotation"),(o=document.createElement("span")).innerHTML=n.displayNumber,o.classList.add("pl-c-annotation-tip"),"0px"===window.getComputedStyle(t[e],null).getPropertyValue("max-height")&&(o.style.display="none");const i=document.querySelector(n.el+" > span.pl-c-annotation-tip");null===i?t[e].insertBefore(o,t[e].firstChild):i.style.display="inline-flex",t[e].onclick=function(t){return function(e){e.preventDefault(),e.stopPropagation();const n=JSON.stringify({event:"patternLab.annotationNumberClicked",displayNumber:t.displayNumber});window.parent.postMessage(n,r.targetOrigin)}}(n)}}else if(void 0!==e.event&&"patternLab.annotationsHighlightHide"===e.event)r.highlightsHide();else if(void 0!==e.event&&"patternLab.patternModalClose"===e.event){const t=[];for(const e in r.active)e&&t.push(e);for(let e=0;e<t.length;e++){const n=t[e];r.active[n]&&r.close(n)}}}};r.onReady(),window.addEventListener("message",r.receiveIframeMessage,!1);var a=n(19),c=n.n(a);function l(t,e){try{window.parent.postMessage(JSON.stringify({event:"patternLab.".concat(e),key:t.key,code:t.code}),i.g)}catch(n){}}if(c.a.bind("command+shift+f",(function(t){t.preventDefault();try{const e=JSON.stringify({event:"patternLab.keyPress",key:t.key,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey});window.parent.postMessage(e,i.g)}catch(e){}return!1})),document.addEventListener("click",(function(){try{const t=JSON.stringify({event:"patternLab.pageClick"});window.parent.postMessage(t,i.g)}catch(t){}})),c.a.bind("esc",(function(t){try{const e=JSON.stringify({event:"patternLab.keyPress",key:t.key,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey});window.parent.postMessage(e,i.g)}catch(e){}return!1})),document.addEventListener("keydown",t=>{l(t,"iframeKeyDownEvent")}),document.addEventListener("keyup",t=>{l(t,"iframeKeyUpEvent")}),window.self!==window.top){const t={event:"patternLab.pageLoad",path:window.location.toString().split("?")[0],details:{patternData:window.patternData}};t.patternpartial=void 0!==window.patternData.patternPartial?window.patternData.patternPartial:"all",""!==window.patternData.lineage&&(t.lineage=window.patternData.lineage),window.parent.postMessage(t,i.g);const e={pattern:window.patternData.patternPartial};var s=new CustomEvent("patternPartial",{detail:e});window.parent.document.dispatchEvent(s)}},19:function(t,e,n){var o;!function(i,r,a){if(i){for(var c,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},d=1;d<20;++d)l[111+d]="f"+d;for(d=0;d<=9;++d)l[d+96]=d.toString();m.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},m.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},m.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},m.prototype.reset=function(){return this._callbacks={},this._directMap={},this},m.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){return null!==e&&e!==r&&(e===n||t(e.parentNode,n))}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},m.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},m.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(l[e]=t[e]);c=null},m.init=function(){var t=m(r);for(var e in t)"_"!==e.charAt(0)&&(m[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},m.init(),i.Mousetrap=m,t.exports&&(t.exports=m),void 0===(o=function(){return m}.call(e,n,e,t))||(t.exports=o)}function p(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function h(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return l[t.which]?l[t.which]:s[t.which]?s[t.which]:String.fromCharCode(t.which).toLowerCase()}function y(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function g(t,e,n){return n||(n=function(){if(!c)for(var t in c={},l)t>95&&t<112||l.hasOwnProperty(t)&&(c[l[t]]=t);return c}()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function v(t,e){var n,o,i,r=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),i=0;i<n.length;++i)o=n[i],f[o]&&(o=f[o]),e&&"keypress"!=e&&u[o]&&(o=u[o],r.push("shift")),y(o)&&r.push(o);return{key:o,modifiers:r,action:e=g(o,r,e)}}function m(t){var e=this;if(t=t||r,!(e instanceof m))return new m(t);e.target=t,e._callbacks={},e._directMap={};var n,o={},i=!1,a=!1,c=!1;function l(t){t=t||{};var e,n=!1;for(e in o)t[e]?n=!0:o[e]=0;n||(c=!1)}function s(t,n,i,r,a,c){var l,s,u,f,d=[],p=i.type;if(!e._callbacks[t])return[];for("keyup"==p&&y(t)&&(n=[t]),l=0;l<e._callbacks[t].length;++l)if(s=e._callbacks[t][l],(r||!s.seq||o[s.seq]==s.level)&&p==s.action&&("keypress"==p&&!i.metaKey&&!i.ctrlKey||(u=n,f=s.modifiers,u.sort().join(",")===f.sort().join(",")))){var h=!r&&s.combo==a,g=r&&s.seq==r&&s.level==c;(h||g)&&e._callbacks[t].splice(l,1),d.push(s)}return d}function u(t,n,o,i){e.stopCallback(n,n.target||n.srcElement,o,i)||!1===t(n,o)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function f(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=h(t);n&&("keyup"!=t.type||i!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):i=!1)}function d(t,e,r,a){function s(e){return function(){c=e,++o[t],clearTimeout(n),n=setTimeout(l,1e3)}}function f(e){u(r,e,t),"keyup"!==a&&(i=h(e)),setTimeout(l,10)}o[t]=0;for(var d=0;d<e.length;++d){var p=d+1===e.length?f:s(a||v(e[d+1]).action);g(e[d],p,a,t,d)}}function g(t,n,o,i,r){e._directMap[t+":"+o]=n;var a,c=(t=t.replace(/\s+/g," ")).split(" ");c.length>1?d(t,c,n,o):(a=v(t,o),e._callbacks[a.key]=e._callbacks[a.key]||[],s(a.key,a.modifiers,{type:a.action},i,t,r),e._callbacks[a.key][i?"unshift":"push"]({callback:n,modifiers:a.modifiers,action:a.action,seq:i,level:r,combo:t}))}e._handleKey=function(t,e,n){var o,i=s(t,e,n),r={},f=0,d=!1;for(o=0;o<i.length;++o)i[o].seq&&(f=Math.max(f,i[o].level));for(o=0;o<i.length;++o)if(i[o].seq){if(i[o].level!=f)continue;d=!0,r[i[o].seq]=1,u(i[o].callback,n,i[o].combo,i[o].seq)}else d||u(i[o].callback,n,i[o].combo);var p="keypress"==n.type&&a;n.type!=c||y(t)||p||l(r),a=d&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var o=0;o<t.length;++o)g(t[o],e,n)},p(t,"keypress",f),p(t,"keydown",f),p(t,"keyup",f)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},2:function(t,e,n){"use strict";n(29);
/*!
 * URL Handler
 *
 * Copyright (c) 2013-2014 Dave Olsen, http://dmolsen.com
 * Licensed under the MIT license
 *
 * Helps handle the initial iFrame source. Parses a string to see if it matches
 * an expected pattern in Pattern Lab. Supports Pattern Lab's fuzzy pattern partial
 * matching style.
 *
 */const o={skipBack:!1,goBack:!1,iframeElement:document.querySelector(".pl-js-iframe"),targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,getFileName(t,e){let n="";if(void 0===t)return n;if(void 0===e&&(e=!0),"all"===t)return"styleguide/html/styleguide.html";if("snapshots"===t)return"snapshots/index.html";const o=-1!==t.indexOf("viewall-")?window.viewAllPaths:window.patternPaths,i=t.replace("viewall-",""),r=this.getPatternInfo(i,o),a=r[0],c=r[1];if(void 0!==o[a]&&void 0!==o[a][c])n=o[a][c];else if(void 0!==o[a])for(const s in o[a])if(-1!==s.indexOf(c)){n=o[a][s];break}if(""===n)return n;const l=/\//g;if(-1!==t.indexOf("viewall-")&&0===t.indexOf("viewall-")&&""!==n)n="patterns/"+n.replace(l,"-")+"/index.html";else if(""!==n&&(n="patterns/"+n.replace(l,"-")+"/"+n.replace(l,"-"),e)){n=n+(void 0!==window.config.outputFileSuffixes&&void 0!==window.config.outputFileSuffixes.rendered?window.config.outputFileSuffixes.rendered:"")+".html"}return n},getPatternInfo(t,e){const n=t.split("-");let o=1;const i=n.length;let r=n[0];for(;void 0===e[r]&&o<i;)r+="-"+n[o],o++;return[r,t.slice(r.length+1,t.length)]},getRequestVars:()=>new function(t){if(t.length>1)for(let e,n=0,o=t.substr(1).split("&");n<o.length;n++)e=o[n].split("="),this[unescape(e[0])]=e.length>1?unescape(e[1]):""}(window.location.search),pushPattern(t,e){const n=o.getFileName(t);let i=window.location.pathname;if(i="file"===window.location.protocol?i.replace("/public/index.html","public/"):i.replace(/\/index\.html/,"/"),e!==window.location.protocol+"//"+window.location.host+i+n){const t=JSON.stringify({event:"patternLab.updatePath",path:n});document.querySelector(".pl-js-iframe").contentWindow.postMessage(t,o.targetOrigin)}},popPattern(t){let e;const n=t.state;if(null===n)return void(this.skipBack=!1);null!==n&&(e=n.currentPattern);let i="";""===(i=this.getFileName(e))&&(i="styleguide/html/styleguide.html");const r=JSON.stringify({event:"patternLab.updatePath",path:i});document.querySelector(".pl-js-iframe").contentWindow.postMessage(r,o.targetOrigin)}};window.onpopstate=function(t){o.skipBack=!0};var i=n(31);const r=new(n.n(i).a);"attachShadow"in Element.prototype&&"getRootNode"in Element.prototype||window.ShadyDOM;const a="file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host;let c="";if(window.config){c=void 0!==window.config.defaultPattern&&"string"==typeof window.config.defaultPattern&&window.config.defaultPattern.trim().length>0?window.config.defaultPattern:"all";const t=o.getRequestVars();void 0===t.p&&void 0===t.pattern||(c=void 0!==t.p?t.p:t.pattern)}let l=240,s=2600;if(void 0!==window.config&&(void 0!==window.config.ishMinimum&&(l=parseInt(window.config.ishMinimum,10)),void 0!==window.config.ishMaximum&&(s=parseInt(window.config.ishMaximum,10)),void 0!==window.config.ishViewportRange&&(l=window.config.ishViewportRange.s[0],s=window.config.ishViewportRange.l[1]),window.config.ishViewportRange&&window.config.ishMaximum)){const t=parseInt(window.config.ishViewportRange.l[1],10),e=parseInt(window.config.ishMaximum,10);s=t>e?t:e}const u=l,f=s;function d(t,e){return Math.floor(Math.random()*(e-t)+t)}function p(t){if("file:"===window.location.protocol||event.origin===window.location.protocol+"//"+window.location.host)try{return"string"!=typeof event.data?event.data:JSON.parse(event.data)}catch(t){return{}}}n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return p}))},29:function(t,e){
/*!
 * Basic postMessage Support
 *
 * Copyright (c) 2013-2016 Dave Olsen, http://dmolsen.com
 * Licensed under the MIT license
 *
 * Handles the postMessage stuff in the pattern, view-all, and style guide templates.
 *
 */
if(window.self!==window.top){const t=document.getElementsByTagName("a");for(let e=0;e<t.length;e++)t[e].onclick=function(t){const e=this.getAttribute("href"),n=this.getAttribute("target");if(void 0===n||"_parent"!==n&&"_blank"!==n){if(!e||"#"===e)return t.preventDefault(),!1;t.preventDefault(),window.location.replace(e)}else;return!0}}window.addEventListener("message",(function(t){if("file:"!==window.location.protocol&&t.origin!==window.location.protocol+"//"+window.location.host)return;let e,n={};try{n="string"!=typeof t.data?t.data:JSON.parse(t.data)}catch(o){}if(void 0!==n.event&&"patternLab.updatePath"===n.event)if(void 0!==window.patternData.patternPartial){const t=/(patterns|snapshots)\/(.*)$/;e=window.location.protocol+"//"+window.location.host+window.location.pathname.replace(t,"")+n.path+"?"+Date.now(),window.location.replace(e)}else e=window.location.protocol+"//"+window.location.host+window.location.pathname.replace("styleguide/html/styleguide.html","")+n.path+"?"+Date.now(),window.location.replace(e);else void 0!==n.event&&"patternLab.reload"===n.event&&window.location.reload()}),!1)},31:function(t,e,n){var o;
/*!
 * EventEmitter v5.2.8 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */!function(e){"use strict";function i(){}var r=i.prototype,a=e.EventEmitter;function c(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function l(t){return function(){return this[t].apply(this,arguments)}}r.getListeners=function(t){var e,n,o=this._getEvents();if(t instanceof RegExp)for(n in e={},o)o.hasOwnProperty(n)&&t.test(n)&&(e[n]=o[n]);else e=o[t]||(o[t]=[]);return e},r.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},r.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},r.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&t(e.listener)}(e))throw new TypeError("listener must be a function");var n,o=this.getListenersAsObject(t),i="object"==typeof e;for(n in o)o.hasOwnProperty(n)&&-1===c(o[n],e)&&o[n].push(i?e:{listener:e,once:!1});return this},r.on=l("addListener"),r.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},r.once=l("addOnceListener"),r.defineEvent=function(t){return this.getListeners(t),this},r.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},r.removeListener=function(t,e){var n,o,i=this.getListenersAsObject(t);for(o in i)i.hasOwnProperty(o)&&-1!==(n=c(i[o],e))&&i[o].splice(n,1);return this},r.off=l("removeListener"),r.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},r.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},r.manipulateListeners=function(t,e,n){var o,i,r=t?this.removeListener:this.addListener,a=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=n.length;o--;)r.call(this,e,n[o]);else for(o in e)e.hasOwnProperty(o)&&(i=e[o])&&("function"==typeof i?r.call(this,o,i):a.call(this,o,i));return this},r.removeEvent=function(t){var e,n=typeof t,o=this._getEvents();if("string"===n)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},r.removeAllListeners=l("removeEvent"),r.emitEvent=function(t,e){var n,o,i,r,a=this.getListenersAsObject(t);for(r in a)if(a.hasOwnProperty(r))for(n=a[r].slice(0),i=0;i<n.length;i++)!0===(o=n[i]).once&&this.removeListener(t,o.listener),o.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,o.listener);return this},r.trigger=l("emitEvent"),r.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},r.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},r._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},r._getEvents=function(){return this._events||(this._events={})},i.noConflict=function(){return e.EventEmitter=a,i},void 0===(o=function(){return i}.call(e,n,e,t))||(t.exports=o)}("undefined"!=typeof window?window:this||{})},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o={addClickEvents(t,e){const n=t.querySelectorAll(".pl-js-tab-link");for(let i=0;i<n.length;++i)n[i].onclick=function(t){t.preventDefault();const e=this.getAttribute("data-patternpartial"),n=this.getAttribute("data-panelid");o.show(e,n)};return t},show(t,e){const n=document.querySelector("#pl-".concat(t,"-").concat(e,"-panel")),o=n.closest(".pl-js-tabs"),i=o.querySelectorAll(".pl-js-tab-link"),r=o.querySelectorAll(".pl-js-tab-panel"),a=o.querySelector("#pl-".concat(t,"-").concat(e,"-tab"));for(let c=0;c<i.length;++c)i[c].classList.remove("pl-is-active-tab");for(let c=0;c<r.length;++c)r[c].classList.remove("pl-is-active-tab");a.classList.add("pl-is-active-tab"),n.classList.add("pl-is-active-tab")}}},53:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var o;o=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=l(n(1)),a=l(n(3)),c=l(n(4));function l(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===o(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,c.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(a.default);function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=s},function(t,e,n){"use strict";var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(2),c=(o=a)&&o.__esModule?o:{default:o},l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=l},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function i(){o.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},function(t,e,n){var o=n(5),i=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return i(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var o=n(7);function i(t,e,n,o,i){var a=r.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}function r(t,e,n,i){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&i.call(t,n)}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return i(t,e,n,o,r)})))}},function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=o()},94:function(t,e,n){"use strict";var o=n(53);new(n.n(o).a)(".pl-js-code-copy-btn").on("success",(function(t){const e=document.querySelectorAll(".pl-js-code-copy-btn");for(let n=0;n<e.length;n++)e[n].querySelector(".pl-c-code-copy-btn__icon-text").innerText="Copy";t.trigger.classList.add("is-copied"),t.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copied",setTimeout(()=>{t.trigger.classList.remove("is-copied"),t.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copy",t.clearSelection(),t.trigger.blur()},2e3)}))}});