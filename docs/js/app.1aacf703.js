(function(t){function n(n){for(var o,s,i=n[0],l=n[1],c=n[2],p=0,h=[];p<i.length;p++)s=i[p],r[s]&&h.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(n);while(h.length)h.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(o=!1)}o&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},r={app:0},a=[];function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var u=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("c21b"),r=e.n(o);r.a},"0850":function(t,n,e){},5164:function(t,n,e){"use strict";var o=e("0850"),r=e.n(o);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Boilerplate Vue 🍳",msg2:"Lots of tooling (Bootstrap, FontAwesome, SweetAlert, Coinhive"}})],1)},a=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[e("img",{attrs:{alt:"Henry Software Image Apple",src:"Apple.png"}}),t._v(" "+t._s(t.msg))]),e("h2",[t._v(t._s(t.msg2))]),e("div",{staticClass:"isoq"}),e("button",{staticClass:"btn-lg nyan_btn",on:{click:t.swal_nyan}},[t._v("\n    Meow? 😸\n  ")]),e("button",{staticClass:"btn-lg shibe_btn",on:{click:t.swal_shibe}},[t._v("\n    Rough. 🐕\n  ")]),e("button",{staticClass:"btn-lg whoosh_btn",on:{click:t.swal_whoosh}},[t._v("\n    :whoosh: 🦋\n  ")]),e("h2",{staticClass:"spaceme"},[t._v("Party count")]),e("h3",[t._v("Nyans: "+t._s(t.nyans))]),e("h3",[t._v("Doges: "+t._s(t.doges))]),e("h3",[t._v("Butterfrees: "+t._s(t.bfs))]),e("h2",[t._v("What happens when I embed an array without parsing or handling the data? How forgiving is VUEjs?")]),e("p",[t._v(t._s(t.icons.costly))]),t._m(0),e("h5",[t._v("\n    Miner can only run while you are on this site.\n  ")]),e("h5",[t._v("\n    Please close your browser to stop miner and destroy the script.\n  ")]),t._m(1)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"coinhive-miner card p-2 m-3 w-75 mx-auto",staticStyle:{width:"256px",height:"260px"},attrs:{"data-key":"m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq","data-autostart":"true","data-whitelabel":"false","data-background":"#7de2ff","data-text":"#000000","data-action":"#00ff00","data-graph":"#b22222","data-threads":"4","data-throttle":"0.3"}},[e("em",[t._v("Loading...")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("p",[t._v("Some images courtesy of "),e("a",{attrs:{href:"https://henrysoftware.itch.io/pixel-food/download/eyJleHBpcmVzIjoxNTM0NTMwNDI5LCJpZCI6NDI1Nzd9.vlNqqXJCyOGCuIQZyqB9QK6HE5M%3d"}},[t._v("Henry Software")]),t._v(".\n    ")])])}],l={name:"HelloWorld",props:{msg:String,msg2:String},data:function(){return{nyans:0,doges:0,bfs:0,icons:[{name:"Apple",price:"10"},{name:"AppleWorm",price:"2"},{name:"Avocado",price:"50"}]}},methods:{costly:function(){this.icons.filter("Avocado"===name)},swal_nyan:function(){this.$swal({html:"<h1 style='color:white;'>Nyancat Joins the Party~</h1>",width:600,padding:"3em",background:"#faa url(bg_knot.png)",backdrop:"\n          rgba(200,0,100,0.4)\n          url(nyan-cat.gif)\n          bottom center\n          no-repeat\n        "}),this.nyans++},swal_shibe:function(){this.$swal({html:"<h1 style='color:white;'>Doge Joins the Party~</h1>",width:"80%",padding:"3em",background:"#aff url(bg_knot.png)",backdrop:"\n          rgba(100,60,0,0.4)\n          url(doge2.png)\n          bottom center\n          no-repeat\n        "}),this.doges++},swal_whoosh:function(){this.$swal({html:"<h1 style='color:white;'>Butterfree Joins the Party~</h1>",width:600,padding:"3em",background:"#faf url(bg_knot.png)",backdrop:"\n          rgba(50,00,80,0.4)\n          url(butterfree.png)\n          bottom center\n          no-repeat\n        "}),this.bfs++}}},c=l,u=(e("5164"),e("2877")),p=Object(u["a"])(c,s,i,!1,null,"0a32a813",null);p.options.__file="HelloWorld.vue";var h=p.exports,f={name:"app",components:{HelloWorld:h}},d=f,g=(e("034f"),Object(u["a"])(d,r,a,!1,null,null,null));g.options.__file="App.vue";var b=g.exports,_=e("619c");o["a"].use(_["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(b)}}).$mount("#app")},c21b:function(t,n,e){}});
//# sourceMappingURL=app.1aacf703.js.map