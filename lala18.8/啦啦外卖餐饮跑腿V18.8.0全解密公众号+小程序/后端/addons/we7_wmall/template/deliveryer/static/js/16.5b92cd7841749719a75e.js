webpackJsonp([16],{cgtr:function(t,a){},pXek:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Cz8s"),r=s("deIj"),n={components:{publicHeader:e.a},data:function(){return{days:0,stat_day:{start:"",end:""},records:[],showPreLoading:!0}},methods:{onLoad:function(){var t=this,a=t.util.parseQuery(t.$route.query);t.days=a.days,t.type=a.type,t.stat_day.start=a.start,t.stat_day.end=a.end,Object(r.a)({vue:t,url:"delivery/statcenter/stat/detail",data:{type:t.type,days:t.days,stat_day:t.stat_day},success:function(a){t.records=a.records}})}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"statcenter-order-detail"}},[s("public-header",{attrs:{title:"统计详情"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"text-center"},[s("van-row",{staticClass:"font-14 c-gray flex-lr"},[s("van-col",{attrs:{span:"8"}},[t._v("日期")]),t._v(" "),s("van-col",{attrs:{span:"8"}},[t._v("总收入")]),t._v(" "),s("van-col",{attrs:{span:"8"}},[t._v("配送成功")]),t._v(" "),t._e()],1),t._v(" "),t._l(t.records,function(a,e){return s("van-row",{key:e,staticClass:"font-14 flex-lr"},[s("van-col",{attrs:{span:"8"}},[t._v(t._s(a.stat_day))]),t._v(" "),s("van-col",{staticClass:"c-primary",attrs:{span:"8"}},[t._v("+¥"+t._s(a.total_fee))]),t._v(" "),s("van-col",{staticClass:"c-danger",attrs:{span:"8"}},[t._v(t._s(a.total_success_order))]),t._v(" "),t._e()],1)})],2)]),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var o=s("VU/8")(n,c,!1,function(t){s("cgtr")},null,null);a.default=o.exports}});