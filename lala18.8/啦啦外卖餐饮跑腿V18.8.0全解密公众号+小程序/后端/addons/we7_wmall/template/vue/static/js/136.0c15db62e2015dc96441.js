webpackJsonp([136],{Qksr:function(t,i){},"y3//":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Cz8s"),n=e("deIj"),r={components:{PublicHeader:s.a},data:function(){return{status:0,type:"",complainUrl:"",options:[{type:"cheat",title:"网页包含欺诈信息（如：假红包）"},{type:"eroticism",title:"网页包含欺色情信息"},{type:"violence",title:"网页包含欺暴力恐怖信息"},{type:"politics",title:"网页包含欺政治敏感信息"},{type:"privacy",title:"网页在手机个人隐私信息（如：钓鱼链接）"},{type:"induce",title:"网页包含诱导分享/关注性质的内容"},{type:"rumor",title:"网页可能包含谣言信息"},{type:"gamble",title:"网页包含赌博信息"}]}},methods:{onChooseOption:function(t){t&&(this.type=t,this.$router.push(this.util.getUrl({path:"/gohome/pages/complain/index",query:{type:t,status:1}})))},onSubmit:function(){var t=this;this.type&&this.complainUrl&&Object(n.c)({vue:this,url:"gohome/complain/post",data:{type:this.type,link:this.complainUrl},success:function(i){t.$router.push(t.util.getUrl({path:"/gohome/pages/complain/index",query:{status:2}}))}})},onClose:function(){window.location.href=this.complainUrl}},mounted:function(){this.$route.query&&this.$route.query.status&&(this.status=this.$route.query.status),this.$route.query&&this.$route.query.type&&(this.type=this.$route.query.type),this.complainUrl=this.util.getStorage("complainUrl"),this.util.isWeixin()||this.$router.push(this.util.getUrl({path:"/pages/home/index"}))},watch:{$route:function(t,i){this.$route.query&&this.$route.query.status?this.status=this.$route.query.status:this.status=0,this.$route.query&&this.$route.query.type&&(this.type=this.$route.query.type)}}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"complain-index"}},[e("div",{staticClass:"content"},[t.status?1==t.status?[e("div",{staticClass:"tips"},[t._v("你可以:")]),t._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"交给微信团队审核","is-link":""},on:{click:t.onSubmit}})],1),t._v(" "),"induce"==t.type?[e("div",{staticClass:"tips info",on:{click:function(i){return t.util.jsUrl("https://mp.weixin.qq.com/s/LJkN77dgg2A9C8GepUGdeA")}}},[t._v("了解什么是诱导分享类内容")])]:"rumor"==t.type?[e("div",{staticClass:"tips info",on:{click:function(i){return t.util.jsUrl("https://mp.weixin.qq.com/s/w2VEz97HTsYTNALskHlSIQ")}}},[t._v("了解微信对谣言的治理")])]:t._e(),t._v(" "),e("div",{staticClass:"complain-help"},[e("div",{staticClass:"help",on:{click:function(i){return t.util.jsUrl("https://weixin110.qq.com/security/readtemplate?t=w_security_center_website/report_agreement&lang=zh_CN")}}},[t._v("投诉须知")])])]:2==t.status?[e("div",{staticClass:"imessage success"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"btn-area"},[e("div",{staticClass:"button",on:{click:function(i){return t.util.jsUrl("close")}}},[t._v("\n\t\t\t\t\t\t关闭\n\t\t\t\t\t")])])])]:t._e():[e("div",{staticClass:"tips"},[t._v("请选择投诉该网页的原因:")]),t._v(" "),e("van-cell-group",t._l(t.options,function(i,s){return e("van-cell",{key:s,attrs:{title:i.title,"is-link":""},on:{click:function(e){return t.onChooseOption(i.type)}}})}),1),t._v(" "),e("div",{staticClass:"tips info",on:{click:function(i){return t.util.jsUrl("https://mp.weixin.qq.com/s/TbX1CcZhQNReneXVc3At9Q")}}},[t._v("遇到网页流量被劫持怎么办")]),t._v(" "),e("div",{staticClass:"complain-help"},[e("div",{staticClass:"help",on:{click:function(i){return t.util.jsUrl("https://weixin110.qq.com/security/readtemplate?t=w_security_center_website/report_agreement&lang=zh_CN")}}},[t._v("投诉须知")])])]],2)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"icon-area"},[i("i",{staticClass:"icon icon-icon"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"text-area"},[i("p",{staticClass:"msg-title"},[this._v("投诉已提交")]),this._v(" "),i("p",{staticClass:"desc"},[this._v('微信团队会尽快核实，并通过"微信团队"通知你审核结果。感谢你的支持')])])}]};var l=e("VU/8")(r,c,!1,function(t){e("Qksr")},null,null);i.default=l.exports}});
//# sourceMappingURL=136.0c15db62e2015dc96441.js.map