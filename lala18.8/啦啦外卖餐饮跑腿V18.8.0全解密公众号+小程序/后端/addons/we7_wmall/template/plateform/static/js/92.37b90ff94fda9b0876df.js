webpackJsonp([92],{"3y2Y":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s("Dd8w"),e=s.n(n),o=s("NYxO"),r=s("Cz8s"),_=s("deIj"),v={components:{publicHeader:r.a},data:function(){return{showPreLoading:!0,stat:[],total:[],store:{},orderby:{final_fee:"营业额",total_success_order:"有效订单量",store_final_fee:"总收入"}}},methods:{onLoad:function(){var t=this;Object(_.a)({vue:this,data:{detail:1,filter:t.filter?t.filter.items:{}},url:"plateform/statcenter/takeoutOrder/index",success:function(a){t.stat=a.stat,t.total=a.total,t.store=a.store}})}},computed:e()({},Object(o.c)(["filter"])),mounted:function(){this.onLoad()}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"statcenter-takeout-order"}},[s("public-header",{attrs:{title:"店铺订单统计"}}),t._v(" "),s("div",{staticClass:"content padding-15 font-14 "},[s("van-row",{staticClass:"c-gray"},[s("van-col",{staticClass:"padding-10-tb",attrs:{span:"3"}},[t._v("排名")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"6"}},[t._v("商户")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("营业额")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("总收入")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("有效单量")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"3"}},[t._v("无效单量")])],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"3"}},[t._v("--")]),t._v(" "),s("van-col",{attrs:{span:"6"}},[t._v("总计")]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v("￥"+t._s(t.total.final_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v("￥"+t._s(t.total.store_final_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(t.total.total_success_order))]),t._v(" "),s("van-col",{attrs:{span:"3"}},[t._v(t._s(t.total.total_cancel_order))])],1),t._v(" "),t._l(t.stat,function(a,n){return t.stat?s("van-row",{key:n},[s("van-col",{attrs:{span:"3"}},[t._v(t._s(n+1))]),t._v(" "),s("van-col",{attrs:{span:"6"}},[t._v(t._s(a.store_name))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v("￥"+t._s(a.final_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v("￥"+t._s(a.store_final_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(a.total_success_order))]),t._v(" "),s("van-col",{attrs:{span:"3"}},[t._v(t._s(a.total_cancel_order))])],1):t._e()})],2),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var l=s("VU/8")(v,c,!1,function(t){s("a2/w")},"data-v-08d43ec3",null);a.default=l.exports},"a2/w":function(t,a){}});