(function(t){function e(e){for(var r,s,l=e[0],i=e[1],c=e[2],f=0,p=[];f<l.length;f++)s=l[f],o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},1661:function(t,e,n){"use strict";var r=n("af4a"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to 🍳"}})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[n("img",{attrs:{alt:"Henry Software Image Apple",src:"Apple.png"}}),t._v(" "+t._s(t.msg))]),t._m(0),n("button",{staticClass:"btn-lg nyan_btn",on:{click:t.swal_nyan}},[t._v("\n    Meow? 😸\n  ")]),n("button",{staticClass:"btn-lg shibe_btn",on:{click:t.swal_shibe}},[t._v("\n    Rough. 🐕\n  ")]),n("button",{staticClass:"btn-lg whoosh_btn",on:{click:t.swal_whoosh}},[t._v("\n    :whoosh: 🦋\n  ")]),n("h2",{staticClass:"spaceme"},[t._v("Party count")]),n("h3",[t._v("Nyans: "+t._s(t.nyans))]),n("h3",[t._v("Doges: "+t._s(t.doges))]),n("h3",[t._v("Butterfrees: "+t._s(t.bfs))]),t._m(1),t._m(2)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    Do we actually still endorse br tags?"),n("br"),t._v("\n    I mean just to break up a line,"),n("br"),t._v("srsly?\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"coinhive-miner card p-2 m-3 w-75 mx-auto",staticStyle:{width:"256px",height:"260px"},attrs:{"data-key":"m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq","data-autostart":"true","data-whitelabel":"false","data-background":"#7de2ff","data-text":"#000000","data-action":"#00ff00","data-graph":"#b22222","data-threads":"4","data-throttle":"0.3"}},[n("em",[t._v("Loading...")])]),n("h5",[t._v("\n        Miner can only run while you are on this site.\n    ")]),n("h5",[t._v("\n        Please close your browser to stop miner and destroy the script.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("Some images courtesy of "),n("a",{attrs:{href:"https://henrysoftware.itch.io/pixel-food/download/eyJleHBpcmVzIjoxNTM0NTMwNDI5LCJpZCI6NDI1Nzd9.vlNqqXJCyOGCuIQZyqB9QK6HE5M%3d"}},[t._v("Henry Software")]),t._v(".\n    ")])])}],i={name:"HelloWorld",props:{msg:String},data:function(){return{bfs:0}},methods:{swal_nyan:function(){this.$swal({html:"<h1 style='color:white;'>Nyancat Joins the Party~</h1>",width:600,padding:"3em",background:"#faa url(bg_knot.png)",backdrop:"\n          rgba(200,0,100,0.4)\n          url(nyan-cat.gif)\n          bottom center\n          no-repeat\n        "}),this.nyans++},swal_shibe:function(){this.$swal({html:"<h1 style='color:white;'>Doge Joins the Party~</h1>",width:"80%",padding:"3em",background:"#aff url(bg_knot.png)",backdrop:"\n          rgba(100,60,0,0.4)\n          url(doge2.png)\n          bottom center\n          no-repeat\n        "}),this.doges++},swal_whoosh:function(){this.$swal({html:"<h1 style='color:white;'>Butterfree Joins the Party~</h1>",width:600,padding:"3em",background:"#faf url(bg_knot.png)",backdrop:"\n          rgba(50,00,80,0.4)\n          url(butterfree.png)\n          bottom center\n          no-repeat\n        "}),this.bfs++}}},c=i,u=(n("1661"),n("2877")),f=Object(u["a"])(c,s,l,!1,null,"89c6311e",null);f.options.__file="HelloWorld.vue";var p=f.exports,h={name:"app",components:{HelloWorld:p}},d=h,b=(n("034f"),Object(u["a"])(d,o,a,!1,null,null,null));b.options.__file="App.vue";var _=b.exports,g=n("619c");r["a"].use(g["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(_)}}).$mount("#app")},af4a:function(t,e,n){},c21b:function(t,e,n){}});
//# sourceMappingURL=app.debf3ef6.js.map