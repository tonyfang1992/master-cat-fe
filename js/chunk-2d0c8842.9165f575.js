(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8842"],{"54e2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5"},[s("form",{staticClass:"w-100",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[t._m(0),s("div",{staticClass:"form-label-group mb-2"},[s("label",{attrs:{for:"email"}},[t._v("email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"form-label-group mb-3"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" Submit ")]),s("div",{staticClass:"text-center mb-3"},[s("p",[s("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")])],1)]),s("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[t._v("© 2017-2018")])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center mb-4"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Sign In")])])}],n=(s("96cf"),s("1da1")),i=s("2fa3"),o={signIn:function(t){var e=t.email,s=t.password;return i["b"].post("/signin",{email:e,password:s})}},l={name:"SignIn",data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.email&&e.password){t.next=4;break}return i["a"].fire({icon:"warning",title:"請填入 email 和 password"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,o.signIn({email:e.email,password:e.password});case 7:if(s=t.sent,a=s.data,r=s.statusText,"OK"===r&&"success"===a.status){t.next=11;break}throw new Error(r);case 11:localStorage.setItem("token",a.token),e.$store.commit("setCurrentUser",a.user),e.$router.push("/cats"),t.next=21;break;case 16:t.prev=16,t.t0=t["catch"](0),e.password="",e.isProcessing=!1,i["a"].fire({type:"warning",title:"請確認您輸入的帳號密碼錯誤"});case 21:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}},c=l,m=s("2877"),u=Object(m["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c8842.9165f575.js.map