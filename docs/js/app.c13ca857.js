(function(t){function n(n){for(var a,s,i=n[0],l=n[1],c=n[2],f=0,d=[];f<i.length;f++)s=i[f],o[s]&&d.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(n);while(d.length)d.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(a=!1)}a&&(r.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},o={app:0},r=[];function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("c21b"),o=e.n(a);o.a},"0d84":function(t,n,e){"use strict";var a=e("8c1c"),o=e.n(a);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Alexander Jacks's app Portfolio 😸",msg2:"React, VUE, CSS3, Sketch"}})],1)},r=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",{staticClass:"mt-3"},[t._v(t._s(t.msg))]),e("h2",[t._v(t._s(t.msg2))]),e("div",{attrs:{id:"project-carousel"}},[e("Project",{attrs:{value1:"test1 😸",value2:"test2"}})],1),e("div",{attrs:{id:"buttons-with-counter"}},[e("h2",{staticClass:"mt-5"},[t._v("Party count")]),e("ul",[e("li",[t._v("Nyans: "+t._s(t.nyans))]),e("li",[t._v("Doges: "+t._s(t.doges))]),e("li",[t._v("Butterfrees: "+t._s(t.bfs))])]),e("button",{staticClass:"btn-lg nyan_btn",on:{click:t.swal_nyan}},[t._v("\n        Meow? 🐈\n      ")]),e("button",{staticClass:"btn-lg shibe_btn",on:{click:t.swal_shibe}},[t._v("\n        Rough. 🐕\n      ")]),e("button",{staticClass:"btn-lg whoosh_btn",on:{click:t.swal_whoosh}},[t._v("\n        :whoosh: 🦋\n      ")])]),t._m(0)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar fixed-bottom navbar-dark bg-primary d-flex flex-row align-items-center"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#!"}},[t._v("No More Ads Project")]),e("div",{staticClass:"coinhive-miner card p-2 m-3 w-75 mx-auto",staticStyle:{width:"100px",height:"80px"},attrs:{"data-key":"m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq","data-autostart":"true","data-whitelabel":"false","data-background":"#ff8c00","data-text":"#000000","data-action":"#ffffff","data-graph":"#000080","data-threads":"4","data-throttle":"0.25"}},[e("em",[t._v("Loading...")])]),e("h6",{staticClass:"m-2"},[t._v("\n      Miner "),t._v("only runs "),e("i",[t._v("while you are on this site")]),t._v(". Please close this browser to stop miner and destroy the script.\n    ")])])}],l=e("bc3a"),c=e.n(l),u={name:"HelloWorld",components:{},props:{msg:String,msg2:String},data:function(){return{loading:!1,nyans:0,doges:0,bfs:0,icons:[{name:"Apple",price:"10"},{name:"AppleWorm",price:"2"},{name:"Avocado",price:"50"}],users:[]}},methods:{swal_nyan:function(){this.$swal({html:"<h1 style='color:white;'>Nyancat Joins the Party~</h1>",width:600,padding:"3em",background:"#faa url(bg_knot.png)",backdrop:"\n          rgba(200,0,100,0.4)\n          url(nyan-cat.gif)\n          bottom center\n          no-repeat\n        "}),this.nyans++},swal_shibe:function(){this.$swal({html:"<h1 style='color:white;'>Doge Joins the Party~</h1>",width:"80%",padding:"3em",background:"#aff url(bg_knot.png)",backdrop:"\n          rgba(100,60,0,0.4)\n          url(doge2.png)\n          bottom center\n          no-repeat\n        "}),this.doges++},swal_whoosh:function(){this.$swal({html:"<h1 style='color:white;'>Butterfree Joins the Party~</h1>",width:600,padding:"3em",background:"#faf url(bg_knot.png)",backdrop:"\n          rgba(50,00,80,0.4)\n          url(butterfree.png)\n          bottom center\n          no-repeat\n        "}),this.bfs++}}},f=u,d=(e("0d84"),e("2877")),h=Object(d["a"])(f,s,i,!1,null,"447ed788",null);h.options.__file="HelloWorld.vue";var p=h.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h1",{staticClass:"m-3"},[t._v(t._s(t.value1))])},m=[],g={components:{Project:Project},data:function(){return{}},methods:{}},v=g,_=Object(d["a"])(v,b,m,!1,null,null,null);_.options.__file="Project.vue";var w=_.exports,y={name:"app",components:{HelloWorld:p,Project:w},methods:{myFunctionOnLoad:function(){this.$swal({title:"<strong>Mining <u>in browser</u></strong>",type:"info",html:'\n          <h4><a href="https://coinhive.com/info/faq">This site uses <b>mining</b>\n          instead of ads </a><br/>\n          and <b><i>stops mining when you leave</i></b>.</h4>\n          <h2>⛏ 🔜 🛑 </h2>\n          ',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="fa fa-thumbs-up"></i> Sounds great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'OK, whatevs. <i class="fa fa-thumbs-down"></i>',cancelButtonAriaLabel:"Thumbs down"})}},created:function(){this.myFunctionOnLoad()}},k=y,x=(e("034f"),Object(d["a"])(k,o,r,!1,null,null,null));x.options.__file="App.vue";var j=x.exports,P=e("619c"),O=e("97d1"),C=e.n(O);a["a"].use(c.a),a["a"].use(P["a"]),a["a"].use(C.a),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(j)}}).$mount("#app")},"8c1c":function(t,n,e){},c21b:function(t,n,e){}});
//# sourceMappingURL=app.c13ca857.js.map