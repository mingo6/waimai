webpackJsonp([8],{IDfr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s("Gu7T"),e=s.n(n),r=s("Cz8s"),o=s("deIj"),c={components:{publicHeader:r.a},data:function(){return{days:{},stat_day:{start:"",end:""},records:[],showPreLoading:!0}},methods:{onLoad:function(){var t=this,a=t.util.parseQuery(t.$route.query);t.days=a.days,t.stat_day.start=a.start,t.stat_day.end=a.end,Object(o.a)({vue:t,url:"manage/gohome/statcenter/detail",data:{days:t.days,stat_day:t.stat_day},success:function(a){t.records=[].concat(e()(t.records),e()(a.records))}})}},mounted:function(){this.onLoad()}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"gohome-statcenter-detail"}},[s("public-header",{attrs:{title:"订单统计详情"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"text-center"},[s("van-row",{staticClass:"font-14 c-gray flex-lr"},[s("van-col",{staticClass:"c-danger",attrs:{span:"8"}},[t._v("对账单以天为单位")]),t._v(" "),s("van-col",{attrs:{span:"6"}},[t._v("应收金额")]),t._v(" "),s("van-col",{attrs:{span:"6"}},[t._v("应付金额")]),t._v(" "),s("van-col",{attrs:{span:"4"}})],1),t._v(" "),s("van-row",{staticClass:"font-14 c-gray flex-lr"},[s("van-col",{attrs:{span:"5"}},[t._v("账期")]),t._v(" "),s("van-col",{attrs:{span:"3"}},[t._v("完成单数")]),t._v(" "),s("van-col",{attrs:{span:"6"}},[t._v("用户支付"),s("br"),t._v("平台补贴")]),t._v(" "),s("van-col",{attrs:{span:"6"}},[t._v("补贴(商家)"),s("br"),t._v("平台服务费")]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v("实际到账")])],1),t._v(" "),t._l(t.records,function(a,n){return s("van-row",{key:n,staticClass:"font-14 flex-lr"},[s("van-col",{attrs:{span:"5"}},[t._v(t._s(a.stat_day))]),t._v(" "),s("van-col",{attrs:{span:"3"}},[t._v(t._s(a.total_success_order))]),t._v(" "),s("van-col",{staticClass:"c-primary",attrs:{span:"6"}},[t._v("+¥"+t._s(a.final_fee)),s("br"),t._v("+¥"+t._s(a.plateform_discount_fee))]),t._v(" "),s("van-col",{staticClass:"c-danger",attrs:{span:"6"}},[t._v("\n\t\t\t\t\t-¥"+t._s(a.store_discount_fee)),s("br"),t._v("\n\t\t\t\t\t-¥"+t._s(a.plateform_serve_fee)),s("br")]),t._v(" "),s("van-col",{staticClass:"c-primary font-bold",attrs:{span:"4"}},[t._v("¥"+t._s(a.store_final_fee))])],1)})],2)]),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var v=s("VU/8")(c,_,!1,function(t){s("Q3gg")},null,null);a.default=v.exports},Q3gg:function(t,a){}});
//# sourceMappingURL=8.7c528210320bb3c31354.js.map