(function(t){function e(e){for(var n,v,o=e[0],s=e[1],d=e[2],c=0,_=[];c<o.length;c++)v=o[c],r[v]&&_.push(r[v][0]),r[v]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(_.length)_.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var s=i[o];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=v(v.s=i[0]))}return t}var n={},r={app:0},a=[];function v(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,v),i.l=!0,i.exports}v.m=t,v.c=n,v.d=function(t,e,i){v.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},v.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},v.t=function(t,e){if(1&e&&(t=v(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(v.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)v.d(i,n,function(e){return t[e]}.bind(null,n));return i},v.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return v.d(e,"a",e),e},v.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},v.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=s;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("c21b"),r=i.n(n);r.a},1550:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ApiList"),i("HelloWorld",{attrs:{msg:"Boilerplate Vue 🍳",msg2:"Lots of tooling (Bootstrap, FontAwesome, SweetAlert, Coinhive)"}})],1)},a=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"list"}},[i("ul",t._l(t.users,function(e){return i("li",[t._v(t._s(e.name))])}))])},o=[];new Vue({el:"#list",data:{users:[]},created:function(){var t=this;axios.get("https://jsonplaceholder.typicode.com/users").then(function(e){t.users=e.data})}});var s=void 0,d=i("2877"),l=Object(d["a"])(s,v,o,!1,null,null,null);l.options.__file="ApiList.vue";var c=l.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[i("img",{attrs:{alt:"Henry Software Image Apple",src:"Apple.png"}}),t._v(" "+t._s(t.msg))]),i("h2",[t._v(t._s(t.msg2))]),t._m(0),i("button",{staticClass:"btn-lg nyan_btn",on:{click:t.swal_nyan}},[t._v("\n    Meow? 😸\n  ")]),i("button",{staticClass:"btn-lg shibe_btn",on:{click:t.swal_shibe}},[t._v("\n    Rough. 🐕\n  ")]),i("button",{staticClass:"btn-lg whoosh_btn",on:{click:t.swal_whoosh}},[t._v("\n    :whoosh: 🦋\n  ")]),i("h2",{staticClass:"spaceme"},[t._v("Party count")]),i("ul",[i("li",[t._v("Nyans: "+t._s(t.nyans))]),i("li",[t._v("Doges: "+t._s(t.doges))]),i("li",[t._v("Butterfrees: "+t._s(t.bfs))])]),i("h2",[t._v("When I embed an array without parsing or handling the data:")]),i("p",[t._v(t._s(t.icons))]),t._m(1),t._m(2),i("h5",[t._v("\n    Miner can only run while you are on this site.\n  ")]),i("h5",[t._v("\n    Please close your browser to stop miner and destroy the script.\n  ")]),t._m(3)])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"isoq"})]),i("div",{staticClass:"col"},[i("div",{staticClass:"isoq"})]),i("div",{staticClass:"col"},[i("div",{staticClass:"isoq"})]),i("div",{staticClass:"col"},[i("div",{staticClass:"isoq"})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{attrs:{id:"icons"}},[i("li",[i("img",{attrs:{alt:"Henry Software Image Apple",src:"Apple.png"}})]),i("li",[i("img",{attrs:{alt:"Henry Software Image Avocado",src:"Avocado.png"}})]),i("li",[i("img",{attrs:{alt:"Henry Software Image Bacon",src:"Bacon.png"}})]),i("li",[i("img",{attrs:{alt:"Henry Software Image Beer",src:"Beer.png"}})]),i("li",[i("img",{attrs:{alt:"Henry Software Image Boar",src:"Boar.png"}})]),i("li",[i("img",{attrs:{alt:"Henry Software Image Bread",src:"Bread.png"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"coinhive-miner card p-2 m-3 w-75 mx-auto",staticStyle:{width:"256px",height:"260px"},attrs:{"data-key":"m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq","data-autostart":"true","data-whitelabel":"false","data-background":"#7de2ff","data-text":"#000000","data-action":"#00ff00","data-graph":"#b22222","data-threads":"4","data-throttle":"0.3"}},[i("em",[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("p",[t._v("Some images courtesy of "),i("a",{attrs:{href:"https://henrysoftware.itch.io/pixel-food/download/eyJleHBpcmVzIjoxNTM0NTMwNDI5LCJpZCI6NDI1Nzd9.vlNqqXJCyOGCuIQZyqB9QK6HE5M%3d"}},[t._v("Henry Software")]),t._v(".\n    ")])])}],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:""}},[i("p",[t._v("\n    Circular timer gauge\n  ")]),i("vue-circle",{attrs:{progress:0,size:100,reverse:!1,"line-cap":"round",fill:t.fill,"empty-fill":{gradient:["red","green","blue"]},"animation-start-value":0,animation:{duration:1200,easing:"circleProgressEasing"},"start-angle":0,"insert-mode":"append",thickness:5,"show-percent":!0},on:{"vue-circle-progress":t.progress,"vue-circle-end":t.progress_end}},[i("p",[t._v("Slot!")])])],1)},f=[],g=i("97d1"),h=i.n(g),m={components:{VueCircle:h.a},data:function(){return{fill:{gradient:["red","green","blue"]}}},methods:{progress:function(t,e,i){console.log(i)},progress_end:function(t){console.log("Circle progress end")}}},b=m,y=Object(d["a"])(b,p,f,!1,null,null,null);y.options.__file="CircleLoading.vue";var w=y.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid",attrs:{id:"grid1"}},[i("div",[t._v("1")]),i("div",[t._v("2")]),i("div",[t._v("3")]),i("div",[t._v("4")]),i("div",[t._v("5")]),i("div",[t._v("6")]),i("div",[t._v("7")]),i("div",[t._v("8")]),i("div",[t._v("9")]),i("div",[t._v("10")]),i("div",[t._v("11")]),i("div",[t._v("12")]),i("div",[t._v("13")]),i("div",[t._v("14")]),i("div",[t._v("15")]),i("div",[t._v("16")]),i("div",[t._v("17")]),i("div",[t._v("18")]),i("div",[t._v("19")]),i("div",[t._v("20")]),i("div",[t._v("21")]),i("div",[t._v("22")]),i("div",[t._v("23")]),i("div",[t._v("24")]),i("div",[t._v("25")]),i("div",[t._v("26")]),i("div",[t._v("27")]),i("div",[t._v("28")]),i("div",[t._v("29")]),i("div",[t._v("30")]),i("div",[t._v("31")]),i("div",[t._v("32")]),i("div",[t._v("33")]),i("div",[t._v("34")]),i("div",[t._v("35")]),i("div",[t._v("36")]),i("div",[t._v("37")]),i("div",[t._v("38")]),i("div",[t._v("39")]),i("div",[t._v("40")]),i("div",[t._v("41")]),i("div",[t._v("42")]),i("div",[t._v("43")]),i("div",[t._v("44")]),i("div",[t._v("45")]),i("div",[t._v("46")]),i("div",[t._v("47")]),i("div",[t._v("48")]),i("div",[t._v("49")]),i("div",[t._v("50")]),i("div",[t._v("51")]),i("div",[t._v("52")]),i("div",[t._v("53")]),i("div",[t._v("54")]),i("div",[t._v("55")]),i("div",[t._v("56")]),i("div",[t._v("57")]),i("div",[t._v("58")]),i("div",[t._v("59")]),i("div",[t._v("60")]),i("div",[t._v("61")]),i("div",[t._v("62")]),i("div",[t._v("63")]),i("div",[t._v("64")]),i("div",[t._v("65")]),i("div",[t._v("66")]),i("div",[t._v("67")]),i("div",[t._v("68")]),i("div",[t._v("69")]),i("div",[t._v("70")]),i("div",[t._v("71")]),i("div",[t._v("72")]),i("div",[t._v("73")]),i("div",[t._v("74")]),i("div",[t._v("75")]),i("div",[t._v("76")]),i("div",[t._v("77")]),i("div",[t._v("78")]),i("div",[t._v("79")]),i("div",[t._v("80")]),i("div",[t._v("81")]),i("div",[t._v("82")]),i("div",[t._v("83")]),i("div",[t._v("84")]),i("div",[t._v("85")]),i("div",[t._v("86")]),i("div",[t._v("87")]),i("div",[t._v("88")]),i("div",[t._v("89")]),i("div",[t._v("90")]),i("div",[t._v("91")]),i("div",[t._v("92")]),i("div",[t._v("93")]),i("div",[t._v("94")]),i("div",[t._v("95")]),i("div",[t._v("96")]),i("div",[t._v("97")]),i("div",[t._v("98")]),i("div",[t._v("99")]),i("div",[t._v("100")])])}],S=(i("bb19"),{}),x=Object(d["a"])(S,C,k,!1,null,null,null);x.options.__file="GridTest.vue";var O=x.exports,j={name:"HelloWorld",components:{CircleLoading:w,GridTest:O},props:{msg:String,msg2:String},data:function(){return{nyans:0,doges:0,bfs:0,icons:[{name:"Apple",price:"10"},{name:"AppleWorm",price:"2"},{name:"Avocado",price:"50"}]}},methods:{swal_nyan:function(){this.$swal({html:"<h1 style='color:white;'>Nyancat Joins the Party~</h1>",width:600,padding:"3em",background:"#faa url(bg_knot.png)",backdrop:"\n          rgba(200,0,100,0.4)\n          url(nyan-cat.gif)\n          bottom center\n          no-repeat\n        "}),this.nyans++},swal_shibe:function(){this.$swal({html:"<h1 style='color:white;'>Doge Joins the Party~</h1>",width:"80%",padding:"3em",background:"#aff url(bg_knot.png)",backdrop:"\n          rgba(100,60,0,0.4)\n          url(doge2.png)\n          bottom center\n          no-repeat\n        "}),this.doges++},swal_whoosh:function(){this.$swal({html:"<h1 style='color:white;'>Butterfree Joins the Party~</h1>",width:600,padding:"3em",background:"#faf url(bg_knot.png)",backdrop:"\n          rgba(50,00,80,0.4)\n          url(butterfree.png)\n          bottom center\n          no-repeat\n        "}),this.bfs++}}},A=j,B=(i("ae7d"),Object(d["a"])(A,_,u,!1,null,"20e23c00",null));B.options.__file="HelloWorld.vue";var H=B.exports,I={name:"app",components:{HelloWorld:H,ApiList:c}},$=I,E=(i("034f"),Object(d["a"])($,r,a,!1,null,null,null));E.options.__file="App.vue";var P=E.exports,M=i("619c");n["a"].use(M["a"]),n["a"].use(h.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(P)}}).$mount("#app")},a56b:function(t,e,i){},ae7d:function(t,e,i){"use strict";var n=i("1550"),r=i.n(n);r.a},bb19:function(t,e,i){"use strict";var n=i("a56b"),r=i.n(n);r.a},c21b:function(t,e,i){}});
//# sourceMappingURL=app.53d83449.js.map