webpackJsonp([4],{QFdw:function(t,e,r){"use strict";var s={props:{order:Object,order_index:Number},data:function(){return{isRefresh:!1}},components:{},methods:{onChangeOrderStatus:function(t,e,r){var s={order:t,type:e,index:r};this.$emit("onChangeOrderStatus",s)}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"paotui-order-item"}},[r("div",{staticClass:"order-item"},[r("div",{staticClass:"number-price flex-lr border-1px-b"},[r("div",{staticClass:"number"},[t._v("#"+t._s(t.order.id))]),t._v(" "),r("div",{staticClass:"price"},[t._v("¥"+t._s(t.order.final_fee))])]),t._v(" "),r("router-link",{staticClass:"order-detail border-1px-b",attrs:{tag:"div",to:t.util.getUrl({path:"pages/plugin/paotui/detail",query:{id:t.order.id}})}},[r("div",{staticClass:"padding-10-b"},[0==t.order.delivery_collect_type&&t.order.deliveryer_id>0?r("div",{staticClass:"ilabel ilabel-primary"},[t._v("配送员抢单")]):t._e(),t._v(" "),r("div",{staticClass:"ilabel ilabel-warning"},[t._v(t._s("buy"==t.order.order_type?"代购":"取送件"))]),t._v(" "),2==t.order.delivery_collect_type?r("div",{staticClass:"ilabel ilabel-info"},[t._v("系统派单")]):t._e(),t._v(" "),3==t.order.delivery_collect_type?r("div",{staticClass:"ilabel ilabel-danger"},[t._v("转单")]):t._e()]),t._v(" "),r("div",{staticClass:"detail-item buy-address flex-lr"},[r("div",{staticClass:"left c-info"},[t._v(t._s("buy"==t.order.order_type?"买":"取"))]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"store-title ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.buy_address)+"\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"store-address ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.buy_username)+" "+t._s(t.order.buy_mobile)+"\n\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"detail-item accept-address flex-lr"},[r("div",{staticClass:"left c-primary"},[t._v("送")]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"store-title"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.accept_address)+"\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.accept_username)+" "+t._s(t.order.accept_mobile)+"\n\t\t\t\t\t")])])]),t._v(" "),t.order.deliveryer_id>0&&t.order.deliveryer?r("div",{staticClass:"detail-item flex-lr"},[r("div",{staticClass:"left c-danger"},[t._v("配送:")]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"store-title"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.deliveryer.title)+" "+t._s(t.order.deliveryer.mobile)+"\n\t\t\t\t\t")]),t._v(" "),2==t.order.delivery_status?r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t已接单 (接单时间："+t._s(t.order.delivery_assign_time_cn)+")\n\t\t\t\t\t")]):3==t.order.delivery_status?r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t已取货 (取货时间："+t._s(t.order.delivery_instore_time_cn)+")\n\t\t\t\t\t")]):4==t.order.delivery_status?r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t已送达 (送达时间："+t._s(t.order.delivery_success_time_cn)+")\n\t\t\t\t\t")]):t._e()])]):t._e(),t._v(" "),r("div",{staticClass:"detail-item note flex-lr"},[r("div",{staticClass:"left"},[t._v("备注")]),t._v(" "),r("div",{staticClass:"right"},[t._v(t._s(t.order.note?t.order.note:"无"))])]),t._v(" "),r("div",{staticClass:"detail-item flex-lr"},[r("div",{staticClass:"left"},[t._v("下单")]),t._v(" "),r("div",{staticClass:"right"},[t._v(t._s(t.order.addtime_cn))])]),t._v(" "),r("div",{staticClass:"detail-item flex-lr"},[r("div",{staticClass:"left"},[t._v("配送")]),t._v(" "),r("div",{staticClass:"right"},[t._v(t._s(t.order.delivery_time))])])]),t._v(" "),t.order.status<3||1==t.order.refund_status||2==t.order.refund_status?r("ul",{staticClass:"btn-group"},[t.order.status<3?[1==t.order.is_pay?[1==t.order.status?[r("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"pages/plugin/paotui/dispatch",query:{id:t.order.id}})}},[t._v("调度")]),t._v(" "),r("li",{staticClass:"btn-item btn-primary",on:{click:function(e){t.onChangeOrderStatus(t.order,"delivery_wait",t.order_index)}}},[t._v("通知配送员抢单")])]:t._e(),t._v(" "),2==t.order.status?[r("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"pages/plugin/paotui/dispatch",query:{id:t.order.id}})}},[t._v("重新调度")]),t._v(" "),r("li",{staticClass:"btn-item btn-primary",on:{click:function(e){t.onChangeOrderStatus(t.order,"end",t.order_index)}}},[t._v("完成订单")])]:t._e(),t._v(" "),"delivery"!=t.order.pay_type?[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"cancel_refund",t.order_index)}}},[t._v("取消订单")])]:t._e()]:[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"cancel",t.order_index)}}},[t._v("取消订单")])]]:t._e(),t._v(" "),1==t.order.refund_status?[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_handle",t.order_index)}}},[t._v("发起退款")]),t._v(" "),r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_status",t.order_index)}}},[t._v("已退款")])]:2==t.order.refund_status?[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_query",t.order_index)}}},[t._v("查询退款")]),t._v(" "),r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_status",t.order_index)}}},[t._v("已退款")])]:t._e()],2):t._e(),t._v(" "),1==t.order.is_pay?r("div",{staticClass:"pay-status have-pay"}):t._e()],1)])},staticRenderFns:[]};var a=r("VU/8")(s,i,!1,function(t){r("hVyY")},null,null);e.a=a.exports},hOgD:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("Dd8w"),i=r.n(s),a=r("NYxO"),d=r("Cz8s"),n=r("mzkE"),o=r("QFdw"),l=r("CPNQ"),c={components:{publicHeader:d.a,publicFooter:n.a,orderItem:o.a},data:function(){return{showPreLoading:!0,isRefresh:!1,orders:{page:1,psize:15,finished:!1,loading:!1,data:[]},menufooter:menufooter}},methods:i()({},Object(a.b)(["setSearch"]),{onLoad:function(t){Object(l.b)({vue:this,force:t,data:{filter:this.filter?this.filter.items:{},menufooter:1}})},onPullDownRefresh:function(){this.onLoad(!0)},onChangeOrderStatus:function(t){t.vue=this,t.from="search",Object(l.a)(t)},onSetSearch:function(){this.setSearch({title:"跑腿订单搜索",type:"filter",key:"errander",url:"plateform/errander/order/search",redirctUrl:"pages/plugin/paotui/searchResult"}),this.$router.push(this.util.getUrl({path:"/pages/common/search"}))}}),computed:i()({},Object(a.c)(["filter"])),mounted:function(){this.onLoad(!1)},created:function(){this.query=this.$route.query,this.query&&this.query.status&&(this.filter.items.status=this.query.status)}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"paotui-search-result"}},[r("public-header",{attrs:{title:"跑腿订单搜索结果"}},[r("div",{staticClass:"search-btn",attrs:{slot:"right"},on:{click:function(e){t.onSetSearch()}},slot:"right"},[r("span",{staticClass:"icon icon-search"})])]),t._v(" "),r("public-footer",{attrs:{menufooter:t.menufooter,showPreLoading:t.showPreLoading}}),t._v(" "),r("div",{staticClass:"content"},[r("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.orders.empty?r("div",{staticClass:"no-data"},[r("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),r("p",[t._v("暂无符合条件订单!")])]):r("van-list",{staticClass:"order-list",attrs:{finished:t.orders.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.orders.loading,callback:function(e){t.$set(t.orders,"loading",e)},expression:"orders.loading"}},[t._l(t.orders.data,function(e,s){return[r("order-item",{attrs:{order:e,order_index:s},on:{onChangeOrderStatus:t.onChangeOrderStatus}})]})],2)],1)],1)],1)},staticRenderFns:[]};var u=r("VU/8")(c,_,!1,function(t){r("xSOH")},null,null);e.default=u.exports},hVyY:function(t,e){},xSOH:function(t,e){}});