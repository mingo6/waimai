webpackJsonp([67],{"8RL0":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Dd8w"),s=a.n(l),r=a("NYxO"),n=a("Cz8s"),i=a("deIj"),c={components:{publicHeader:n.a},data:function(){return{showPreLoading:!0,stat:{},store:{}}},methods:s()({},Object(r.b)(["setSearch"]),{onLoad:function(){var t=this;Object(i.a)({vue:t,data:{filter:t.filter?t.filter.items:{}},url:"plateform/statcenter/takeout/takeout",success:function(e){t.stat=e.stat,t.store=e.store}})}}),computed:s()({},Object(r.c)(["filter"])),mounted:function(){this.onLoad()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"statcenter-takeout"}},[a("public-header",{attrs:{title:"外卖统计"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"padding-15"},[a("span",{staticClass:"font-16"},[t._v(t._s(t.store.title?t.store.title:"全部店铺"))]),t._v(" "),a("span",{staticClass:"c-gray font-14"},[t._v(t._s(t.filter.items&&t.filter.items.stat_day?t.filter.items.stat_day.start+"-"+t.filter.items.stat_day.end:"今天"))])]),t._v(" "),a("van-cell-group",[a("van-cell",{attrs:{title:"营业总额",value:"¥"+t.stat.total_fee}}),t._v(" "),a("van-cell",{attrs:{title:"总入账",value:"¥"+t.stat.total_final_fee}}),t._v(" "),a("van-cell",{attrs:{title:"有效订单量",value:"¥"+t.stat.total_success_order}}),t._v(" "),a("van-cell",{attrs:{title:"客单价",value:"¥"+t.stat.avg_pre_order}}),t._v(" "),a("van-cell",{attrs:{title:"无效订单量",value:"¥"+t.stat.total_cancel_order}}),t._v(" "),a("van-cell",{attrs:{title:"损失营业额",value:"¥"+t.stat.total_cancel_fee}})],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",{attrs:{title:"佣金收入",value:"¥"+t.stat.total_serve_fee}}),t._v(" "),a("van-cell",{attrs:{title:"配送费收入",value:"¥"+t.stat.total_delivery_fee}}),t._v(" "),a("van-cell",{attrs:{title:"配送员配送费支出",value:"¥"+t.stat.total_deliveryer_fee}}),t._v(" "),a("van-cell",{attrs:{title:"平台补贴",value:"¥"+t.stat.plateform_discount_fee}}),t._v(" "),a("van-cell",{attrs:{title:"附加费",value:"¥"+t.stat.total_extra_fee}}),t._v(" "),a("van-cell",{attrs:{title:"总退款",value:"¥"+t.stat.total_refund_fee}})],1),t._v(" "),a("div",{staticClass:"padding-10"},[a("van-button",{staticClass:"font-16",attrs:{type:"primary",size:"normal",block:""},on:{click:function(e){t.util.jsUrl("pages/statcenter/current")}}},[t._v("查看详情")])],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var v=a("VU/8")(c,o,!1,function(t){a("AxsG")},null,null);e.default=v.exports},AxsG:function(t,e){}});