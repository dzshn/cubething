(function(e){function t(t){for(var r,c,u=t[0],i=t[1],d=t[2],l=0,p=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08cc":function(e,t,n){},"2bd1":function(e,t,n){"use strict";n("08cc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var u=Object(r["g"])("Cube");return Object(r["d"])(),Object(r["b"])(u)}var a=Object(r["h"])("data-v-9225d408");Object(r["f"])("data-v-9225d408");var c=Object(r["c"])("p",null,"😳 cube with da stroke 😳",-1),u=Object(r["c"])("div",{id:"renderWindow"},null,-1),i=Object(r["c"])("p",null,"bottom text",-1);Object(r["e"])();var d=a((function(e,t,n,o,a,d){return Object(r["d"])(),Object(r["b"])("div",null,[c,u,i])})),f=(n("4160"),n("5a89")),l={mounted:function(){var e=document.getElementById("renderWindow"),t=e.clientWidth,n=e.clientHeight,r=new f["e"],o=new f["d"](75,t/n,.1,1e3),a=new f["f"];a.setSize(t,n),e.appendChild(a.domElement);for(var c=new f["a"],u=new f["c"],i=[],d=0;d<10;d++)i[d]=new f["b"](c,u);function l(){requestAnimationFrame(l),i.forEach((function(e){e.scale.x+=.2*Math.random()-.1,e.scale.y+=.2*Math.random()-.1,e.scale.z+=.2*Math.random()-.1,e.rotation.x+=.2*Math.random()-.1,e.rotation.y+=.2*Math.random()-.1,e.rotation.z+=.2*Math.random()-.1})),a.render(r,o)}i.forEach((function(e){r.add(e)})),o.position.z=4,e.addEventListener("resize",(function(){})),l()}};n("2bd1");l.render=d,l.__scopeId="data-v-9225d408";var p=l,s={name:"App",components:{Cube:p}};n("e5b4");s.render=o;var b=s;Object(r["a"])(b).mount("#app")},e5b4:function(e,t,n){"use strict";n("f99d")},f99d:function(e,t,n){}});
//# sourceMappingURL=app.e5a0d828.js.map