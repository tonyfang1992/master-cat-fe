(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20744f"],{a08b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inner row"},[i("div",{staticClass:"col-1"}),t._m(0),i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-1 mt-5"}),i("div",{staticClass:"col-3 mt-5"},[i("AdminMenu")],1),i("div",{staticClass:"col-7 row mt-5"},[i("form",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticStyle:{width:"100%"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v("活動名稱")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.NewActivity.name,expression:"NewActivity.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"商品名稱",required:""},domProps:{value:t.NewActivity.name},on:{input:function(e){e.target.composing||t.$set(t.NewActivity,"name",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"description"}},[t._v("活動描述")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.NewActivity.description,expression:"NewActivity.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",name:"description",placeholder:"商品描述",required:""},domProps:{value:t.NewActivity.description},on:{input:function(e){e.target.composing||t.$set(t.NewActivity,"description",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"image"}},[t._v("Image")]),t.NewActivity.image?i("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.NewActivity.image,width:"150",height:"150"}}):t._e(),i("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("送出")])])]),i("div",{staticClass:"col-1 mt-5"})])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-10 mt-5"},[i("h1",[t._v("修改活動")]),i("hr")])}],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("96cf"),i("1da1")),s=i("ddfd"),c=i("be6c"),o=i("2fa3"),d={components:{AdminMenu:s["a"]},data:function(){return{NewActivityId:"",NewActivity:{name:"",description:"",image:""},isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchEditNewActivity(t)},beforeRouteUpdate:function(t,e,i){var a=t.params.id;this.fetchEditNewActivity(a),i()},methods:{fetchEditNewActivity:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,r,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,e.NewActivityId=t,i.next=4,c["a"].getEditNewActivity(t);case 4:if(a=i.sent,r=a.data,n=a.statusText,"OK"===n){i.next=9;break}throw new Error(n);case 9:e.NewActivity=r.NewActivity,e.isLoading=!1,i.next=16;break;case 13:i.prev=13,i.t0=i["catch"](0),o["a"].fire({icon:"error",title:"無法取得商品資料，請稍後再試"});case 16:case"end":return i.stop()}}),i,null,[[0,13]])})))()},handleFileChange:function(t){var e=t.target.files;if(e.length){var i=window.URL.createObjectURL(e[0]);this.product.image=i}},handleSubmit:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,r,n,s,d;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,a=e.NewActivityId,r=t.target,n=new FormData(r),i.next=6,c["a"].editNewActivity({formData:n,targetNewActivityId:a});case 6:if(s=i.sent,d=s.statusText,"OK"===d){i.next=10;break}throw new Error(d);case 10:o["a"].fire({icon:"success",title:"成功修改活動資訊"}),e.$router.push({name:"AdminGetActivity"}),i.next=17;break;case 14:i.prev=14,i.t0=i["catch"](0),o["a"].fire({icon:"error",title:"現在無法修改活動，請稍後再試"});case 17:case"end":return i.stop()}}),i,null,[[0,14]])})))()}}},l=d,m=i("2877"),u=Object(m["a"])(l,a,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20744f.3008e10c.js.map