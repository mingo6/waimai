webpackJsonp([116],{JRai:function(t,e){},U7zU:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),a=s("mzkE"),n={name:"paotuiFeeRule",components:{PublicHeader:i.a,PublicFooter:a.a},data:function(){return{showPreLoading:!0,feeRule:{}}},methods:{onLoad:function(){var t=this;this.util.request({url:"errander/diy/feeRule",data:{id:this.id}}).then(function(e){t.showPreLoading=!1;var s=e.data.message;if(s.errno)return t.$toast(s.message),!1;t.feeRule=s.message.feeRule})}},created:function(){this.query=this.$route.query,this.query&&(this.id=this.query.id)},mounted:function(){this.onLoad()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"paotui-feerule"}},[s("public-header",{attrs:{title:"计费规则"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"rule-wrap"},[t._l(t.feeRule,function(e,i){return s("div",{key:i,staticClass:"rule-section"},[s("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"rule-repeater"},t._l(e.items,function(e,i){return s("div",{key:i,staticClass:"rule-item"},[s("div",{staticClass:"step-detail"},[s("p",{staticClass:"step-title"},[t._v(t._s(e.note))]),t._v(" "),s("p",{staticClass:"step-price"},[t._v(t._s(e.fee_cn))])])])}),0)])}),t._v(" "),t._m(0)],2)]),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rule-section"},[e("p",{staticClass:"title"},[this._v("溢价说明")]),this._v(" "),e("div",{staticClass:"introduction"},[this._v("\n\t\t\t\t\t在恶劣天气、下单高峰等情况下，为促进骑手接单，平台可能会临时适当调整价格，以保障良好的服务体验。\n\t\t\t\t")])])}]};var u=s("VU/8")(n,r,!1,function(t){s("JRai")},null,null);e.default=u.exports}});
//# sourceMappingURL=116.b85707e4d12c8ca00557.js.map