(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],a[s]&&p.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Boilerplate Vue 🍳",msg2:"Lots of tools (Bootstrap, FontAwesome, SweetAlert, Coinhive) and now Axios for API calls"}})],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[o("img",{attrs:{alt:"Henry Software Image Apple",src:"Apple.png"}}),t._v(" "+t._s(t.msg))]),o("h2",[t._v(t._s(t.msg2))]),o("h2",[t._v("Click the button to get Chuck Norris 'jokes'")]),o("button",{attrs:{id:"btn"},on:{click:t.getJokes}},[t._v("Get Jokes")]),t.loading?o("div",[o("img",{attrs:{src:n("cf05")}}),t._v("\n      Loading.....\n    ")]):t._e(),o("div",{staticClass:"wrapper"},[o("div",{staticClass:"row"},t._l(t.jokes,function(e){return o("div",{key:e.id,staticClass:"card-deck"},[o("div",{staticClass:"card"},[o("img",{staticClass:"img-responsive",attrs:{src:"https://placeimg.com/300/300/arch",alt:"Random images placeholder"}}),o("div",[o("h3",[t._v(t._s(e.id))]),o("p",[t._v(t._s(e.joke))]),o("p",[t._v(t._s(e.category))])])])])}))]),o("div",{attrs:{id:"buttons-with-counter"}},[o("button",{staticClass:"btn-lg nyan_btn",on:{click:t.swal_nyan}},[t._v("\n        Meow? 😸\n      ")]),o("button",{staticClass:"btn-lg shibe_btn",on:{click:t.swal_shibe}},[t._v("\n        Rough. 🐕\n      ")]),o("button",{staticClass:"btn-lg whoosh_btn",on:{click:t.swal_whoosh}},[t._v("\n        :whoosh: 🦋\n      ")]),o("h2",{staticClass:"mt-5"},[t._v("Party count")]),o("ul",[o("li",[t._v("Nyans: "+t._s(t.nyans))]),o("li",[t._v("Doges: "+t._s(t.doges))]),o("li",[t._v("Butterfrees: "+t._s(t.bfs))])])]),t._m(0),t._m(1),t._m(2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coinhive-miner card p-2 m-3 w-75 mx-auto",staticStyle:{width:"256px",height:"260px"},attrs:{"data-key":"m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq","data-autostart":"true","data-whitelabel":"false","data-background":"#7de2ff","data-text":"#000000","data-action":"#00ff00","data-graph":"#b22222","data-threads":"4","data-throttle":"0.3"}},[n("em",[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("\n    Miner can only run while you are on this site."),n("br"),t._v("\n    Please close your browser to stop miner and destroy the script.\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("Some images courtesy of "),n("a",{attrs:{href:"https://henrysoftware.itch.io/pixel-food/download/eyJleHBpcmVzIjoxNTM0NTMwNDI5LCJpZCI6NDI1Nzd9.vlNqqXJCyOGCuIQZyqB9QK6HE5M%3d"}},[t._v("Henry Software")]),t._v(".\n    ")])])}],l=n("bc3a"),c=n.n(l),u={name:"HelloWorld",components:{},props:{msg:String,msg2:String},data:function(){return{jokes:[],loading:!1,nyans:0,doges:0,bfs:0,icons:[{name:"Apple",price:"10"},{name:"AppleWorm",price:"2"},{name:"Avocado",price:"50"}],users:[]}},methods:{getJokes:function(){var t=this;this.loading=!0,c.a.get("http://api.icndb.com/jokes/random/10").then(function(e){t.loading=!1,t.jokes=e.data.value},function(e){t.loading=!1})},swal_nyan:function(){this.$swal({html:"<h1 style='color:white;'>Nyancat Joins the Party~</h1>",width:600,padding:"3em",background:"#faa url(bg_knot.png)",backdrop:"\n          rgba(200,0,100,0.4)\n          url(nyan-cat.gif)\n          bottom center\n          no-repeat\n        "}),this.nyans++},swal_shibe:function(){this.$swal({html:"<h1 style='color:white;'>Doge Joins the Party~</h1>",width:"80%",padding:"3em",background:"#aff url(bg_knot.png)",backdrop:"\n          rgba(100,60,0,0.4)\n          url(doge2.png)\n          bottom center\n          no-repeat\n        "}),this.doges++},swal_whoosh:function(){this.$swal({html:"<h1 style='color:white;'>Butterfree Joins the Party~</h1>",width:600,padding:"3em",background:"#faf url(bg_knot.png)",backdrop:"\n          rgba(50,00,80,0.4)\n          url(butterfree.png)\n          bottom center\n          no-repeat\n        "}),this.bfs++}}},d=u,p=(n("ecba"),n("2877")),f=Object(p["a"])(d,s,i,!1,null,"46459b7c",null);f.options.__file="HelloWorld.vue";var h=f.exports,g={name:"app",components:{HelloWorld:h}},b=g,v=(n("034f"),Object(p["a"])(b,a,r,!1,null,null,null));v.options.__file="App.vue";var _=v.exports,m=n("619c"),w=n("97d1"),y=n.n(w);o["a"].use(c.a),o["a"].use(m["a"]),o["a"].use(y.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(_)}}).$mount("#app")},"992b":function(t,e,n){},c21b:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ecba:function(t,e,n){"use strict";var o=n("992b"),a=n.n(o);a.a}});
//# sourceMappingURL=app.621661cb.js.map