!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let r;n.r(t);const o=(new HTMLRewriter).on("title",new class{element(e){e.setInnerContent("Yizhi Hu's Title"+(r+1))}}).on("h1#title",new class{element(e){e.setInnerContent("Welcome to Yizhi "+(r+1))}}).on("p#description",new class{element(e){0===r?e.replace("Hi Cloudflare! Please check out my portfolio!"):e.replace("Hi Cloudflare! Please check out my LinkedIn!")}}).on("a#url",new class{element(e){0===r?e.setAttribute("href","https://ezyhoo.github.io/"):e.setAttribute("href","https://www.linkedin.com/in/yizhi-hu-84b846a6/")}}).on("a#url",new class{element(e){0===r?e.setInnerContent("My Portfolio"):e.setInnerContent("My LinkedIn")}});function i(e,t){r=parseInt(e);return o.transform(new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}}))}let a;let l=[];async function s(e){return await(await fetch(l[e])).text()}addEventListener("fetch",e=>{e.respondWith(async function(e){let t;await async function(){l.length>0||await fetch("https://cfw-takehome.developers.workers.dev/api/variants").then((function(e){return e.json()})).then(e=>{e.variants.forEach(e=>{l.push(e)})})}();let n=function(e,t){let n=null,r=e.headers.get("Cookie");if(r){r.split(";").forEach(e=>{if(e.split("=")[0].trim()===t){let t=e.split("=")[1];n=t}})}return n}(e,"__uid");if(n)return t=await s(n),i(n,t);{a=Math.floor(Math.random()*l.length),n=a,t=await s(n);const e=i(n,t);return function(e,t,n,r){var o="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),o="; expires="+i.toUTCString()}const a=e+"="+t+o+"; path=/";r.headers.set("Set-Cookie",a)}("__uid",n,7,e),e}}(e.request))})}]);