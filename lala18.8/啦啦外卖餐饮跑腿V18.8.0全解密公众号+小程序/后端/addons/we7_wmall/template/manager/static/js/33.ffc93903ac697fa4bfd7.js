webpackJsonp([33],{OEbG:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Gu7T"),i=a.n(e),n=a("Cz8s"),c=a("deIj"),o={data:function(){return{cid:0,tables:{},table_category:{},isRefresh:!1,showPreLoading:!0}},components:{publicHeader:n.a},methods:{onLoad:function(t){t&&(this.tables={});var s=this;Object(c.a)({vue:this,url:"manage/order/table/index",data:{cid:s.cid},success:function(t){s.tables=[].concat(i()(s.tables),i()(t.tables)),s.table_category=t.table_category,s.isRefresh=!1}})},onToggleStatus:function(t){t=parseInt(t),this.cid!=t&&(this.cid=t,this.onLoad(!0))},onChangeStatus:function(t,s){var a=this;a.util.jspost({url:"manage/order/table/status",data:{id:t.id,status:t.status},confirm:"确定修改桌台状态吗？",success:function(){1==t.status?a.tables[s].status=2:a.tables[s].status=1}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"order-teble"}},[a("public-header",{attrs:{title:"店内桌台"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"tabs-list border-1px-b"},[a("div",{staticClass:"tabs-item",class:{active:0==t.cid},on:{click:function(s){t.onToggleStatus(0)}}},[t._v("全部")]),t._v(" "),t._l(t.table_category,function(s,e){return a("div",{key:s.id,staticClass:"tabs-item",class:{active:t.cid==s.id},on:{click:function(a){t.onToggleStatus(s.id)}}},[t._v(t._s(s.title))])})],2),t._v(" "),a("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.tables.length>0?a("div",{staticClass:"table-group"},[a("div",{staticClass:"table-list"},[a("van-row",{attrs:{gutter:"10"}},t._l(t.tables,function(s,e){return a("van-col",{key:s.id,attrs:{span:"8"}},[a("div",{staticClass:"table-item",class:{active:1==s.status},on:{click:function(a){t.onChangeStatus(s,e)}}},[a("div",{staticClass:"type"},[t._v(t._s(s.title))]),t._v(" "),1==s.status?a("div",{staticClass:"status"},[t._v("空闲中")]):a("div",{staticClass:"status"},[t._v("已开台")])])])}))],1)]):a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("暂无队列!")])])])],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var r=a("VU/8")(o,l,!1,function(t){a("blNU")},null,null);s.default=r.exports},blNU:function(t,s){}});
//# sourceMappingURL=33.ffc93903ac697fa4bfd7.js.map