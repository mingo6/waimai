webpackJsonp([198],{blTQ:function(t,i){},i4AA:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={components:{PublicHeader:e("Cz8s").a},data:function(){return{detail:{}}},methods:{onLoad:function(){var t=this;this.util.request({url:"spread/current/detail",data:{id:this.id}}).then(function(i){var e=i.data.message;if(e.errno)return t.util.$toast(e.message),!1;t.detail=e.message.detail})}},created:function(){if(!this.$route.query.id)return this.util.$toast("参数错误"),!1;this.id=this.$route.query.id},mounted:function(){this.onLoad()}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"spread-currentDetail"}},[e("public-header",{attrs:{title:"佣金明细详情"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"current-detail"},[e("div",{staticClass:"current-head van-hairline--bottom"},[e("div",{staticClass:"price"},[t._v("金额")]),t._v(" "),e("div",{staticClass:"number"},[t._v(t._s(t.detail.fee))])]),t._v(" "),e("div",{staticClass:"current-body"},[e("div",{staticClass:"current-item"},[e("div",{staticClass:"left"},[t._v("类型")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(t.detail.trade_type_cn))])]),t._v(" "),e("div",{staticClass:"current-item"},[e("div",{staticClass:"left"},[t._v("申请时间")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(t.detail.addtime))])]),t._v(" "),e("div",{staticClass:"current-item"},[e("div",{staticClass:"left"},[t._v("详细信息")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(t.detail.remark))])])])])])],1)},staticRenderFns:[]};var r=e("VU/8")(s,a,!1,function(t){e("blTQ")},null,null);i.default=r.exports}});
//# sourceMappingURL=198.83a830c6057a9b7eb178.js.map