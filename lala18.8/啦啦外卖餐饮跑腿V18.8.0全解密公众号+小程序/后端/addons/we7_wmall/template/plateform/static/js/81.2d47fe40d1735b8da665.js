webpackJsonp([81],{Z8fw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Cz8s"),n=a("deIj"),s={data:function(){return{showPreLoading:!0,finance:{member:{},store:{},deliveryer:{}}}},components:{publicHeader:l.a},methods:{onLoad:function(){Object(n.a)({vue:this,url:"plateform/statcenter/finance",autoAssign:!0,variable:"finance"})}},mounted:function(){this.onLoad()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"statcenter-finance"}},[a("public-header",{attrs:{title:"财务统计"}}),t._v(" "),a("div",{staticClass:"content"},[a("van-cell-group",[a("van-cell",[a("div",{staticClass:"c-default flex",attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"icon icon-peoplefill font-18 margin-5-r c-primary"}),t._v("\n\t\t\t\t\t顾客\n\t\t\t\t")])]),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"顾客总数",value:t.finance.member.total_num}}),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",[a("div",{staticClass:"c-default flex",attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"icon icon-shopfill font-18 margin-5-r c-info"}),t._v("\n\t\t\t\t\t商户\n\t\t\t\t")])]),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"商户总数",value:t.finance.store.total_num}}),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"商户未提现金额",value:"¥"+t.finance.store.total_amount}}),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"商户申请提现未处理金额",value:"¥"+t.finance.store.total_getcash}})],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",[a("div",{staticClass:"c-default flex",attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"icon icon-people3 font-18 margin-5-r c-danger"}),t._v("\n\t\t\t\t\t配送员\n\t\t\t\t")])]),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"配送员总数",value:t.finance.deliveryer.total_num}}),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"配送员未提现金额",value:"¥"+t.finance.deliveryer.total_credit2}}),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"配送员申请提现未处理金额",value:"¥"+t.finance.deliveryer.total_getcash}})],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("aMzm")},null,null);e.default=r.exports},aMzm:function(t,e){}});