(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595d7b14"],{"073e":function(t,e,a){"use strict";var o=a("2fa3");e["a"]={category:{get:function(t){return o["b"].get("/category/".concat(t))}},subcategory:{get:function(t){return o["b"].get("/subcategory/".concat(t))}},ThisWeekActivity:{get:function(t){return o["b"].get("/thisweekactivity/".concat(t))}},NewActivity:{get:function(t){return o["b"].get("/newactivity/".concat(t))}},Feed:{get:function(t){return o["b"].get("/feed/".concat(t))}},FeedAge:{get:function(t){return o["b"].get("/feedage/".concat(t))}},FeedFunction:{get:function(t){return o["b"].get("/feedfunction/".concat(t))}},Can:{get:function(t){return o["b"].get("/can/".concat(t))}},CanType:{get:function(t){return o["b"].get("/cantype/".concat(t))}}}},"18bf":function(t,e,a){},"5f7d":function(t,e,a){"use strict";var o=a("18bf"),n=a.n(o);n.a},"7cee":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner row"},[a("div",{staticClass:"col-1 mt-5"}),a("div",{staticClass:"Menu col-3 mt-5"},[a("Menu")],1),t.isLoading?a("div",{staticClass:"col-7 forComputer"},[a("dot-loader",{attrs:{color:t.color,size:t.size}})],1):a("div",{staticClass:"forComputer container col-7 mt-5"},[a("div",{staticClass:"col-12"},[a("router-link",{staticClass:"mr-5",attrs:{to:"/cats"}},[a("span",[t._v("首頁")])]),a("span",[t._v("/")]),a("span",[t._v(t._s(t.Can.brand))])],1),a("div",{staticClass:"col-12 mt-3 mb-5"},[a("span",[t._v(t._s(t.Can.description))])]),a("TopSales",{attrs:{TopProducts:t.CanTopProducts,NewProducts:t.CanNewProducts}}),a("TopSales",{attrs:{TopProducts:t.TopProducts,NewProducts:t.NewProducts}})],1),t.isLoading?a("div",{staticClass:"col-7 forMobile"},[a("dot-loader",{attrs:{color:t.color,size:t.size}})],1):a("div",{staticClass:"forMobile container col-12 mt-5 column"},[a("div",{staticClass:"col-12"},[a("router-link",{staticClass:"mr-5",attrs:{to:"/cats"}},[a("span",[t._v("首頁")])]),a("span",[t._v("/")]),a("span",[t._v(t._s(t.Can.brand))])],1),a("div",{staticClass:"col-12 mt-3 mb-5"},[a("span",[t._v(t._s(t.Can.description))])]),a("TopSales",{attrs:{TopProducts:t.CanTopProducts,NewProducts:t.CanNewProducts}}),a("TopSales",{attrs:{TopProducts:t.TopProducts,NewProducts:t.NewProducts}})],1),a("div",{staticClass:"col-1 mt-5"})])},n=[],c=(a("96cf"),a("1da1")),s=a("fb62"),r=a("4e77"),i=a("073e"),u=a("2fa3"),d=a("42c5"),l={components:{Menu:s["a"],TopSales:r["a"],DotLoader:d["a"]},data:function(){return{TopProducts:[],NewProducts:[],CanTopProducts:[],CanNewProducts:[],Can:{},isLoading:!0,color:"#F5B7B1",size:"200px"}},created:function(){var t=this.$route.params.id;this.fetchCan(t)},beforeRouteUpdate:function(t,e,a){var o=t.params.id;this.fetchCan(o),a()},methods:{fetchCan:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var o,n,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i["a"].Can.get(t);case 3:if(o=a.sent,n=o.data,c=o.statusText,"OK"===c){a.next=8;break}throw new Error(c);case 8:e.TopProducts=n.TopProducts,e.NewProducts=n.NewProducts,e.CanTopProducts=n.CanTopProducts,e.CanNewProducts=n.CanNewProducts,e.Can=n.Can,e.isLoading=!1,a.next=20;break;case 16:a.prev=16,a.t0=a["catch"](0),e.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得該分類商品，請稍後再試"});case 20:case"end":return a.stop()}}),a,null,[[0,16]])})))()}}},p=l,f=(a("5f7d"),a("2877")),C=Object(f["a"])(p,o,n,!1,null,"97c50d80",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-595d7b14.2c1b5c5f.js.map