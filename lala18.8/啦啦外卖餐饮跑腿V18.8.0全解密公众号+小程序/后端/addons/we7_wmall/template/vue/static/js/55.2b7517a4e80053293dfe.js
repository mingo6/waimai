webpackJsonp([55],{F0Ck:function(t,e){},V1el:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),s=a.n(i),n=a("Cz8s"),l=a("q0vl"),o=a("P8xa"),r={name:"storeApplication",components:{PublicHeader:n.a,Agreement:l.a,imessage:o.a},data:function(){return{submitting:!1,agreementShow:!1,agreement:{},mobile:"",title:"",content:"",address:"",config:{},message:{type:"",message:"",description:"",redirect:"",btnText:""},qualification:{0:{},1:{},2:{}},showPreLoading:!0}},methods:{agreementHide:function(){this.agreementShow=!1},onSubmit:function(){var t=this;return!this.submitting&&(this.mobile?this.util.isValidMobile(this.mobile)?this.address?this.title?1==this.config.qualification_verify_status&&0==this.qualification[0].update?(this.$toast("请上传营业执照照片"),!1):(this.submitting=!0,void this.util.request({url:"wmall/store/settle/store",method:"POST",data:{telephone:this.mobile,address:this.address,content:this.content,title:this.title,qualification:this.qualification}}).then(function(e){var a=e.data.message;if(-1==a.errno)return t.$toast(a.message),t.submitting=!1,!1;t.onLoad()})):(this.$toast("商户名称不能为空"),!1):(this.$toast("商户地址不能为空"),!1):(this.$toast("手机号格式错误"),!1):(this.$toast("手机号不能为空"),!1))},onLoad:function(){var t=this;this.util.request({url:"wmall/store/settle/store"}).then(function(e){var a=e.data.message;t.showPreLoading=!1,-1e3==a.errno?t.util.$toast(a.message,t.util.getUrl({path:"/pages/store/settle"}),1e3,"replace"):-1001==a.errno?t.message={type:"info",message:a.message.message,redirect:t.util.getUrl({path:"/pages/member/mine"}),btnText:"确定"}:-1==a.errno?t.message={type:"error",message:a.message,redirect:t.util.getUrl({path:"/pages/member/mine"}),btnText:"返回"}:0==a.errno?t.util.$toast(a.message.message,t.util.getUrl({path:"/pages/home/index"}),1e3,"replace"):(t.agreement=a.message.agreement,t.config=a.message.config)})},onUploadImage:function(t,e){var a=this;a.util.image({obj:e,success:function(e,i){i.url&&i.filename&&(a.qualification[t]={url:i.url,filename:i.filename,update:1},a.qualification=s()({},a.qualification))},options:{channel:"h5"}})}},mounted:function(){this.onLoad()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"store-application"}},[a("public-header",{attrs:{title:"商户信息"}}),t._v(" "),a("div",{staticClass:"content"},[a("van-cell-group",[a("van-field",{attrs:{label:"商户名称",placeholder:"店铺名称"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("van-field",{attrs:{label:"商户地址",placeholder:"店铺详细地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),t._v(" "),a("van-field",{attrs:{label:"联系电话",placeholder:"店铺负责人电话"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),a("van-field",{attrs:{type:"textarea",label:"商户简介"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),a("van-field",{attrs:{label:"资质认证",placeholder:"仅用于平台认证",readonly:"readonly"}})],1),t._v(" "),a("div",{staticClass:"store-aptitude"},[a("div",{staticClass:"aptitude-img"},[a("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){return t.onUploadImage(0,e)}}}),t._v(" "),t.qualification[0].url?a("img",{attrs:{src:t.qualification[0].url,alt:""}}):a("img",{attrs:{src:"static/img/store_aptitude.png",alt:""}})]),t._v(" "),a("div",{staticClass:"aptitude-img"},[a("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){return t.onUploadImage(1,e)}}}),t._v(" "),t.qualification[1].url?a("img",{attrs:{src:t.qualification[1].url,alt:""}}):a("img",{attrs:{src:"static/img/food_aptitude.png",alt:""}})]),t._v(" "),a("div",{staticClass:"aptitude-img"},[a("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){return t.onUploadImage(2,e)}}}),t._v(" "),t.qualification[2].url?a("img",{attrs:{src:t.qualification[2].url,alt:""}}):a("img",{attrs:{src:"static/img/other_aptitude.png",alt:""}})])]),t._v(" "),a("div",{staticClass:"protocol"},[t._v("\n\t\t\t我已阅读并同意 "),a("span",{staticClass:"c-danger",on:{click:function(e){t.agreementShow=!0}}},[t._v("《商户入驻协议》")])]),t._v(" "),a("div",{staticClass:"submit"},[a("van-button",{attrs:{size:"normal",type:"danger",block:!0,disabled:t.submitting},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),a("agreement",{attrs:{show:t.agreementShow,title:t.agreement.title,content:t.agreement.value},on:{agreementHide:t.agreementHide}}),t._v(" "),t.message.type?a("imessage",{attrs:{message:t.message}}):t._e(),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var c=a("VU/8")(r,u,!1,function(t){a("F0Ck")},"data-v-818f9532",null);e.default=c.exports}});
//# sourceMappingURL=55.2b7517a4e80053293dfe.js.map