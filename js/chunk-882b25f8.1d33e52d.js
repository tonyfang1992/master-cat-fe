(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-882b25f8"],{"073e":function(t,e,o){"use strict";var c=o("2fa3");e["a"]={category:{get:function(t){return c["b"].get("/category/".concat(t))}},subcategory:{get:function(t){return c["b"].get("/subcategory/".concat(t))}},ThisWeekActivity:{get:function(t){return c["b"].get("/thisweekactivity/".concat(t))}},NewActivity:{get:function(t){return c["b"].get("/newactivity/".concat(t))}},Feed:{get:function(t){return c["b"].get("/feed/".concat(t))}},FeedAge:{get:function(t){return c["b"].get("/feedage/".concat(t))}},FeedFunction:{get:function(t){return c["b"].get("/feedfunction/".concat(t))}},Can:{get:function(t){return c["b"].get("/can/".concat(t))}},CanType:{get:function(t){return c["b"].get("/cantype/".concat(t))}}}},c538:function(t,e,o){},c662:function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inner row"},[o("div",{staticClass:"col-1 mt-5"}),o("div",{staticClass:"Menu col-3 mt-5"},[o("Menu")],1),t.isLoading?o("div",{staticClass:"col-7 forComputer"},[o("dot-loader",{attrs:{color:t.color,size:t.size}})],1):o("div",{staticClass:"forComputer container col-7 mt-5"},[o("div",{staticClass:"col-12"},[o("router-link",{staticClass:"mr-5",attrs:{to:"/cats"}},[o("span",[t._v("首頁")])]),o("span",[t._v("/")]),o("span",[t._v(t._s(t.FeedFunction.function))])],1),o("div",{staticClass:"col-12 mt-3 mb-5"},[o("span",[t._v(t._s(t.FeedFunction.description))])]),o("TopSales",{attrs:{TopProducts:t.FeedFunctionTopProducts,NewProducts:t.FeedFunctionNewProducts}}),o("TopSales",{attrs:{TopProducts:t.TopProducts,NewProducts:t.NewProducts}})],1),t.isLoading?o("div",{staticClass:"col-12 forMobile"},[o("dot-loader",{attrs:{color:t.color,size:t.size}})],1):o("div",{staticClass:"forMobile container col-12 mt-5"},[o("div",{staticClass:"col-12"},[o("router-link",{staticClass:"mr-5",attrs:{to:"/cats"}},[o("span",[t._v("首頁")])]),o("span",[t._v("/")]),o("span",[t._v(t._s(t.FeedFunction.function))])],1),o("div",{staticClass:"col-12 mt-3 mb-5"},[o("span",[t._v(t._s(t.FeedFunction.description))])]),o("TopSales",{attrs:{TopProducts:t.FeedFunctionTopProducts,NewProducts:t.FeedFunctionNewProducts}}),o("TopSales",{attrs:{TopProducts:t.TopProducts,NewProducts:t.NewProducts}})],1),o("div",{staticClass:"col-1 mt-5"})])},n=[],s=(o("96cf"),o("1da1")),r=o("fb62"),a=o("4e77"),i=o("073e"),u=o("2fa3"),d=o("42c5"),l={components:{Menu:r["a"],TopSales:a["a"],DotLoader:d["a"]},data:function(){return{TopProducts:[],NewProducts:[],FeedFunctionTopProducts:[],FeedFunctionNewProducts:[],FeedFunction:{},isLoading:!0,color:"#F5B7B1",size:"200px"}},created:function(){var t=this.$route.params.id;this.fetchFeedFunction(t)},beforeRouteUpdate:function(t,e,o){var c=t.params.id;this.fetchFeedFunction(c),o()},methods:{fetchFeedFunction:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var c,n,s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,i["a"].FeedFunction.get(t);case 3:if(c=o.sent,n=c.data,s=c.statusText,"OK"===s){o.next=8;break}throw new Error(s);case 8:e.TopProducts=n.TopProducts,e.NewProducts=n.NewProducts,e.FeedFunctionTopProducts=n.FeedFunctionTopProducts,e.FeedFunctionNewProducts=n.FeedFunctionNewProducts,e.FeedFunction=n.FeedFunction,e.isLoading=!1,o.next=20;break;case 16:o.prev=16,o.t0=o["catch"](0),e.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得該分類商品，請稍後再試"});case 20:case"end":return o.stop()}}),o,null,[[0,16]])})))()}}},p=l,F=(o("cb44"),o("2877")),f=Object(F["a"])(p,c,n,!1,null,"7a4c5b8f",null);e["default"]=f.exports},cb44:function(t,e,o){"use strict";var c=o("c538"),n=o.n(c);n.a}}]);
//# sourceMappingURL=chunk-882b25f8.1d33e52d.js.map