(function(e){function t(t){for(var o,a,u=t[0],i=t[1],l=t[2],d=0,b=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/cubething/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d8f":function(e,t,n){"use strict";n("6559")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,a){var u=Object(o["j"])("Cube");return Object(o["f"])(),Object(o["c"])(u)}var c=Object(o["n"])("data-v-a57b8b2e");Object(o["h"])("data-v-a57b8b2e");var a=Object(o["e"])("h2",null,"😳 cube with da stroke 😳",-1),u=Object(o["e"])("div",{id:"renderWindow"},null,-1),i={id:"controls"},l=Object(o["d"])(" / ");Object(o["g"])();var s=c((function(e,t,n,r,c,s){return Object(o["f"])(),Object(o["c"])("div",null,[a,u,Object(o["e"])("div",i,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(c.controls,(function(e,t){return Object(o["f"])(),Object(o["c"])("div",{key:"control-"+t},[Object(o["e"])("label",{for:e},Object(o["k"])(e.title),9,["for"]),Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":function(t){return e.value=t},type:"number",id:e},null,8,["onUpdate:modelValue","id"]),[[o["l"],e.value]])])})),128)),Object(o["e"])("div",null,[Object(o["e"])("button",{onClick:t[1]||(t[1]=function(){return s.addCube&&s.addCube.apply(s,arguments)})},"Add cube"),l,Object(o["e"])("button",{onClick:t[2]||(t[2]=function(){return s.removeCube&&s.removeCube.apply(s,arguments)})},"Eat cube")]),Object(o["e"])("div",null,[Object(o["e"])("button",{onClick:t[3]||(t[3]=function(){return s.nuke&&s.nuke.apply(s,arguments)})},"nuke")])]),Object(o["e"])("p",null,Object(o["k"])(c.cubeCount)+" cube"+Object(o["k"])(1==c.cubeCount?"":"s")+" stroking",1)])})),d=(n("4160"),n("159b"),n("5a89")),b={data:function(){return{showAdvanced:!1,controls:{main:{title:"Major speed: ",value:10},rotate:{title:"Rotation: ",value:1},move:{title:"Movement: ",value:1},scale:{title:"Scaling: ",value:1}},cubeCount:1}},methods:{addCube:function(){this.scene.add(new d["b"](new d["a"],new d["c"])),this.cubeCount++},removeCube:function(){if(0!=this.scene.children.length){var e=this.scene.children[this.scene.children.length-1];this.scene.remove(e),e.material.dispose(),e.geometry.dispose(),this.cubeCount--}},nuke:function(){while(this.scene.children.length>0){var e=this.scene.children[0];this.scene.remove(e),e.material.dispose(),e.geometry.dispose()}this.cubeCount=0}},mounted:function(){var e=this,t=document.getElementById("renderWindow"),n=t.clientWidth,o=t.clientHeight,r=new d["d"](75,n/o,.1,1e3),c=new d["f"];this.scene=new d["e"],c.setSize(n,o),t.appendChild(c.domElement),this.scene.add(new d["b"](new d["a"],new d["c"])),r.position.z=4;var a=function t(){requestAnimationFrame(t),e.scene.children.forEach((function(t){t.rotation.x+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.rotate.value/60,t.rotation.y+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.rotate.value/60,t.rotation.z+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.rotate.value/60,t.position.x+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.move.value/60,t.position.y+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.move.value/60,t.position.z+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.move.value/60,t.scale.x+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.scale.value/60,t.scale.y+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.scale.value/60,t.scale.z+=(.2*Math.random()-.1)*e.controls.main.value*e.controls.scale.value/60})),c.render(e.scene,r)};a()}};n("0d8f");b.render=s,b.__scopeId="data-v-a57b8b2e";var v=b,f={name:"App",components:{Cube:v}};n("e5b4");f.render=r;var p=f;Object(o["b"])(p).mount("#app")},6559:function(e,t,n){},e5b4:function(e,t,n){"use strict";n("f99d")},f99d:function(e,t,n){}});
//# sourceMappingURL=app.68beb5d6.js.map