(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-547feccf"],{1175:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"inner row"},[r("div",{staticClass:"col-2 mt-5"}),t.isLoading?r("div",{staticClass:"col-12 forComputer"},[r("dot-loader",{attrs:{color:t.color,size:t.size}})],1):r("div",{staticClass:"forComputer container col-8 mt-5 row"},[r("div",{staticClass:"col-12"},[t._v("確認訂單")]),t._l(t.order.items,(function(a){return r("div",{key:"B"+a.id,staticClass:"col-12 row mt-1"},[r("div",{staticClass:"col-6"},[r("h4",[t._v(t._s(a.name))]),r("h5",[t._v(t._s(a.specification))])]),r("div",{staticClass:"col-6"},[t._v(" 數量:"+t._s(a.OrderItem.quantity)+" 單價:"+t._s(a.price)+" 小計:"+t._s(a.OrderItem.quantity*a.price)+" ")])])})),r("div",{staticClass:"col-8 border-top"},[t.order.amount<666?r("h6",[t._v("運費:80 (滿666免運)")]):r("h4",[t._v("運費 : 免運費!")]),"一般會員"==t.currentUser.rank?r("div",[r("h3",[t._v("總計 :"+t._s(t.order.amount))])]):t._e(),"黃金會員"==t.currentUser.rank?r("div",{staticClass:"col-12 row"},[r("div",{staticClass:"col-6"},[r("b-badge",{attrs:{variant:"warning"}},[t._v("黃金會員 :再享75折")]),r("h3",[t._v("總計 :"+t._s(Math.floor(.75*t.order.amount)))])],1),r("div",{staticClass:"col-6"},[r("h6",[t._v("Master Cat 幫您省下了")]),r("h6",{staticStyle:{color:"red"}},[t._v(t._s(t.order.amount-Math.floor(.75*t.order.amount))+"元")]),r("h6",[t._v("太棒啦!")])])]):t._e(),"白銀會員"==t.currentUser.rank?r("div",{staticClass:"col-12 row"},[r("div",{staticClass:"col-6"},[r("b-badge",{attrs:{variant:"warning"}},[t._v("白銀會員 :再享85折")]),r("h3",[t._v("總計 :"+t._s(Math.floor(.85*t.order.amount)))])],1),r("div",{staticClass:"col-6"},[r("h6",[t._v("Master Cat 幫您省下了")]),r("h6",{staticStyle:{color:"red"}},[t._v(t._s(t.order.amount-Math.floor(.85*t.order.amount))+"元")]),r("h6",[t._v("太棒啦!")])])]):t._e()]),r("div",{staticClass:"col-3 column border-top"},[r("div",[r("form",{attrs:{name:"Spgateway",action:t.tradeInfo.PayGateWay,method:"POST"}},[r("input",{attrs:{type:"hidden",name:"MerchantID"},domProps:{value:t.tradeInfo.MerchantID}}),r("input",{attrs:{type:"hidden",name:"TradeInfo"},domProps:{value:t.tradeInfo.TradeInfo}}),r("input",{attrs:{type:"hidden",name:"TradeSha"},domProps:{value:t.tradeInfo.TradeSha}}),r("input",{attrs:{type:"hidden",name:"Version"},domProps:{value:t.tradeInfo.Version}}),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("前往藍新金流付款")])])])])],2),t.isLoading?r("div",{staticClass:"col-12 forMobile"},[r("dot-loader",{attrs:{color:t.color,size:t.size}})],1):r("div",{staticClass:"forMobile container col-12 mt-5 row"},[r("div",{staticClass:"col-12"},[t._v("確認訂單")]),t._l(t.order.items,(function(a){return r("div",{key:"B"+a.id,staticClass:"col-12 row mt-1"},[r("div",{staticClass:"col-6"},[r("h5",[t._v(t._s(a.name))]),r("h6",[t._v(t._s(a.specification))])]),r("div",{staticClass:"col-6"},[t._v(" 數量:"+t._s(a.OrderItem.quantity)+" 單價:"+t._s(a.price)+" 小計:"+t._s(a.OrderItem.quantity*a.price)+" ")])])})),r("div",{staticClass:"col-8 border-top"},[t.order.amount<666?r("h6",[t._v("運費:80 (滿666免運)")]):r("h4",[t._v("運費 : 免運費!")]),"一般會員"==t.currentUser.rank?r("div",[r("h3",[t._v("總計 :"+t._s(t.order.amount))])]):t._e(),"黃金會員"==t.currentUser.rank?r("div",{staticClass:"col-12 row"},[r("div",{staticClass:"col-6"},[r("b-badge",{attrs:{variant:"warning"}},[t._v("黃金會員 :再享75折")]),r("h3",[t._v("總計 :"+t._s(Math.floor(.75*t.order.amount)))])],1),r("div",{staticClass:"col-6"},[r("h6",[t._v("Master Cat 幫您省下了")]),r("h6",{staticStyle:{color:"red"}},[t._v(t._s(t.order.amount-Math.floor(.75*t.order.amount))+"元")]),r("h6",[t._v("太棒啦!")])])]):t._e(),"白銀會員"==t.currentUser.rank?r("div",{staticClass:"col-12 row"},[r("div",{staticClass:"col-6"},[r("b-badge",{attrs:{variant:"warning"}},[t._v("白銀會員 :再享85折")]),r("h3",[t._v("總計 :"+t._s(Math.floor(.85*t.order.amount)))])],1),r("div",{staticClass:"col-6"},[r("h6",[t._v("Master Cat 幫您省下了")]),r("h6",{staticStyle:{color:"red"}},[t._v(t._s(t.order.amount-Math.floor(.85*t.order.amount))+"元")]),r("h6",[t._v("太棒啦!")])])]):t._e()]),r("div",{staticClass:"col-4 column border-top"},[r("div",[r("form",{attrs:{name:"Spgateway",action:t.tradeInfo.PayGateWay,method:"POST"}},[r("input",{attrs:{type:"hidden",name:"MerchantID"},domProps:{value:t.tradeInfo.MerchantID}}),r("input",{attrs:{type:"hidden",name:"TradeInfo"},domProps:{value:t.tradeInfo.TradeInfo}}),r("input",{attrs:{type:"hidden",name:"TradeSha"},domProps:{value:t.tradeInfo.TradeSha}}),r("input",{attrs:{type:"hidden",name:"Version"},domProps:{value:t.tradeInfo.Version}}),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("前往藍新金流付款")])])])])],2),r("div",{staticClass:"col-2 mt-5"})])},o=[],s=(r("96cf"),r("1da1")),n=r("5530"),i=r("cc17"),c=r("2f62"),d=r("2fa3"),l=r("42c5"),v={components:{DotLoader:l["a"]},data:function(){return{order:[],totalPrice:0,tradeInfo:{},isLoading:!0,color:"#F5B7B1",size:"200px"}},created:function(){var t=this.$route.params.id;this.fetchPayment(t)},computed:Object(n["a"])({},Object(c["b"])(["currentUser","isAuthenticated"])),methods:{fetchPayment:function(t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var e,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i["a"].payments.getPayment(t);case 3:if(e=r.sent,o=e.data,s=e.statusText,"OK"===s){r.next=8;break}throw new Error(s);case 8:a.order=o.order,a.tradeInfo=o.tradeInfo,a.isLoading=!1,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),a.isLoading=!1,d["a"].fire({icon:"error",title:"目前無法取得訂單內容,請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}},u=v,m=(r("9a34"),r("2877")),h=Object(m["a"])(u,e,o,!1,null,"637eb86e",null);a["default"]=h.exports},1817:function(t,a,r){},"9a34":function(t,a,r){"use strict";var e=r("1817"),o=r.n(e);o.a}}]);
//# sourceMappingURL=chunk-547feccf.a964dd9a.js.map