webpackJsonp([73],{L7FF:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),o=s("mzkE"),a=s("yxKT"),n=s("deIj"),r={components:{PublicHeader:i.a,PublicFooter:o.a,InformationItem:a.a},data:function(){return{showPreLoading:!0,isRefresh:!1,records:{page:1,psize:5,loading:!0,finished:!1,empty:!1,data:[]},filter:{items:{status:-1}},menufooter:{}}},methods:{onLoad:function(t){var e=this;Object(n.b)({vue:e,force:t,recordsName:"informations",url:"tongcheng/index/mine",data:{menufooter:1},success:function(t){e.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){this.filter.items.status!=t&&(this.filter.items.status=t,this.onLoad(!0))}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"publish-list"}},[s("public-header",{attrs:{title:"我的发布"}}),t._v(" "),s("public-footer",{attrs:{menufooter:t.menufooter,preLoading:t.showPreLoading}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"tab-group"},[s("div",{staticClass:"tab-item",class:{active:-1==t.filter.items.status},on:{click:function(e){return t.onToggleStatus(-1)}}},[t._v("全部")]),t._v(" "),s("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(e){return t.onToggleStatus(1)}}},[t._v("待支付")]),t._v(" "),s("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(e){return t.onToggleStatus(2)}}},[t._v("审核中")]),t._v(" "),s("div",{staticClass:"tab-item",class:{active:3==t.filter.items.status},on:{click:function(e){return t.onToggleStatus(3)}}},[t._v("已通过")]),t._v(" "),s("div",{staticClass:"tab-item",class:{active:4==t.filter.items.status},on:{click:function(e){return t.onToggleStatus(4)}}},[t._v("未通过")])]),t._v(" "),s("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.records.empty?s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),s("p",[t._v("还没有发布任何信息")])]):s("van-list",{attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(e){t.$set(t.records,"loading",e)},expression:"records.loading"}},[s("div",{staticClass:"list-wrap van-hairline--top"},[s("information-item",{attrs:{informations:t.records.data,from:"mine"}})],1),t._v(" "),t.records.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()])],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(r,c,!1,function(t){s("eVtF")},null,null);e.default=l.exports},eVtF:function(t,e){}});
//# sourceMappingURL=73.acee927135349484b713.js.map