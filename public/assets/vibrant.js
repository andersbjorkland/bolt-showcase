!function(e){function t(t){for(var n,c,u=t[0],l=t[1],i=t[2],s=0,f=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(t);f.length;)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={vibrant:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var p=l;a.push(["HjEW",1]),r()}({HjEW:function(e,t,r){"use strict";r.r(t);var n=r("BiEO");const o=document.getElementById("main_image");n.from(o.getAttribute("src")).getSwatches().then(e=>{for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t]){const r=document.createElement("span"),n=document.createTextNode(t+" / "+e[t].getHex()),o=document.getElementById("swatcheslist");r.className="badge badge-secondary my-2 py-2",r.setAttribute("style","display: block; text-shadow: 1px 1px 3px #000; background-color: "+e[t].getHex()),r.appendChild(n),o.append(r)}})}});