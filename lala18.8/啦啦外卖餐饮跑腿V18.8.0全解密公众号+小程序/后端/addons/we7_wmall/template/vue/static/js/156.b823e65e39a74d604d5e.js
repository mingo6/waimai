webpackJsonp([156],{"F/XI":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("Cz8s"),n=a("Fd2+"),e=a("deIj"),d={components:{PublicHeader:s.a,Dialog:n.a},data:function(){return{showPreLoading:!0,isRefresh:!1,zhezhaoShow:!1,pindan:{mine:{}},store:{cn:{}},table:{category:{}},extra:{},goback:!0}},methods:{onPullDownRefresh:function(){this.onLoad()},onLoad:function(){var t=this;Object(e.a)({vue:t,url:"wmall/store/table/pindan",data:{sid:t.sid,pindan_id:t.pindan_id,table_id:t.table_id},success:function(i){t.pindan=i.pindan,t.store=i.store,t.extra=i.extra,t.isRefresh=!1,t.pindan_id=t.pindan.pindan_id,t.table=i.table,window.history.pushState(null,null,document.URL),window.addEventListener("popstate",t.onBrowserBack,!1)},fail:function(i){t.util.$toast(i.message,t.util.getUrl({path:"/tangshi/pages/table/goods",query:{sid:t.sid,table_id:t.table_id}}),1e3,"replace")}})},onEditGoods:function(){this.$router.replace(this.util.getUrl({path:"tangshi/pages/table/goods",query:{sid:this.store.id,table_id:this.table_id,pindan_id:this.pindan_id}}))},onGiveUp:function(t,i){var a=this,s="确定不要继续点餐了吗？";1==i&&(s="删除后不可恢复，确认删除吗？"),Object(e.c)({vue:a,confirm:s,url:"wmall/store/table/giveupPindan",data:{sid:a.sid,cart_id:t,table_id:a.table_id},success:function(i){a.pindan=i.pindan,a.extra.not_takepart=i.extra.not_takepart,t==a.pindan_id?a.util.$toast("取消点餐成功, 继续参与点餐请再次扫码",a.util.getUrl({path:"pages/store/index",query:{sid:a.sid}}),1e3,"replace"):a.util.$toast("取消点餐成功","",1e3)},fail:function(t){-1e3==t.errno&&a.onGoBack()}})},onContinue:function(t){var i=this;Object(e.c)({vue:i,url:"wmall/store/table/continuePindan",data:{sid:i.sid,table_id:i.table_id},success:function(t){i.onLoad()}})},onTakePindan:function(){this.$router.replace(this.util.getUrl({path:"tangshi/pages/table/goods",query:{sid:this.sid,table_id:this.table_id}}))},onSubmit:function(){var t=this;n.a.confirm({title:"温馨提示",message:"有其他桌友正与你一起点餐，确定去结算吗？"}).then(function(){t.$router.push(t.util.getUrl({path:"tangshi/pages/table/create",query:{sid:t.store.id,table_id:t.table_id,is_pindan:1,pindan_id:t.pindan.pindan_id}}))})},onGoBack:function(){window.history.length<2?this.$router.replace(this.util.getUrl({path:"/pages/store/index",query:{sid:this.sid}})):(this.goback=!1,this.$router.replace(this.util.getUrl({path:"/pages/store/index",query:{sid:this.sid}})))},onBrowserBack:function(){var t=this,i=this;if(!i.goback)return i.onGoBack(),!1;this.goback=!1,n.a.confirm({title:"你确定退出拼单吗",message:"退出拼单不会保留此次拼单内容"}).then(function(){Object(e.c)({vue:i,url:"wmall/store/table/giveupPindan",data:{sid:i.sid,cart_id:i.pindan_id,table_id:i.table_id},success:function(t){i.onGoBack()},fail:function(t){-1e3==t.errno&&i.onGoBack()}})}).catch(function(){t.goback=!0,window.history.pushState(null,null,document.URL)})}},created:function(){this.query=this.$route.query,this.sid=this.query.sid,this.pindan_id=this.query.pindan_id,this.table_id=this.query.table_id},mounted:function(){this.onLoad()},beforeDestroy:function(){return window.removeEventListener("popstate",this.onBrowserBack,!1),!1}},l={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"table-pindan"}},[a("public-header",{attrs:{title:"同桌点餐"}}),t._v(" "),a("div",{staticClass:"content"},[1==t.extra.is_founder&&2==t.pindan.mine.pindan_status?[a("div",{staticClass:"lock"},[a("div",{staticClass:"lock-inner w-100 text-center"},[a("div",{staticClass:"tip font-15"},[t._v("锁定状态，手动解锁后可以继续点餐")]),t._v(" "),a("van-button",{staticClass:"bg-danger font-16 deblock",attrs:{size:"normal",block:""},on:{click:t.onContinue}},[t._v("解锁")])],1)])]:[a("div",{staticClass:"content-inner"},[a("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(i){t.isRefresh=i},expression:"isRefresh"}},[a("div",{staticClass:"store bg-default span-center padding-15"},[a("img",{attrs:{src:t.store.logo}}),t._v(" "),a("div",{staticClass:"name ellipsis"},[t._v(t._s(t.store.title)+" "+t._s(t.table.category.title)+"~"+t._s(t.table.title)+"桌")]),t._v(" "),1==t.pindan.pindan_status?[t._e(),t._v(" "),1==t.extra.not_takepart?a("van-button",{staticClass:"bg-danger font-16",attrs:{size:"normal",block:""},on:{click:t.onTakePindan}},[t._v("参与点餐")]):t._e()]:2==t.pindan.pindan_status?[a("div",{staticClass:"tip font-15"},[t._v("正在提交订单中...")])]:3==t.pindan.pindan_status?[a("div",{staticClass:"tip font-15"},[t._v("订单已提交成功")])]:t._e()],2),t._v(" "),t.pindan.mine?[a("div",{staticClass:"font-14 c-gray margin-10"},[t._v("点餐详情")]),t._v(" "),a("div",{staticClass:"order-info bg-default padding-10-l"},[t.pindan.mine.member?a("div",{staticClass:"user flex-lr padding-10-t"},[a("div",{staticClass:"left flex"},[a("img",{staticClass:"avatar",attrs:{src:t.pindan.mine.member.avatar}})]),t._v(" "),a("div",{staticClass:"right flex-lr van-hairline--bottom"},[a("div",{staticClass:"nickname"},[a("span",{staticClass:"ellipsis"},[t._v(t._s(t.pindan.mine.member.nickname))]),t._v(" "),a("span",{staticClass:"label label-mine"},[t._v("我")]),t._v(" "),t.pindan.mine.id==t.pindan.pindan_id?a("span",{staticClass:"label label-start"},[t._v("发起")]):t._e()]),t._v(" "),1==t.pindan.pindan_status?a("div",{staticClass:"btn-group flex"},[a("div",{staticClass:"btn-item edit-btn",on:{click:t.onEditGoods}},[t._v("编辑商品")]),t._v(" "),a("div",{staticClass:"btn-item cancle-btn",on:{click:function(i){return t.onGiveUp(t.pindan.mine.id,0)}}},[t._v("不点了")])]):t._e()])]):t._e(),t._v(" "),t.pindan.mine.data?a("div",{staticClass:"goods flex-lr"},[a("div",{staticClass:"left"}),t._v(" "),a("div",{staticClass:"right"},[t._l(t.pindan.mine.data,function(i){return t._l(i,function(i){return a("div",{key:i.id,staticClass:"goods-item"},[a("div",{staticClass:"goods-title ellipsis"},[t._v(t._s(i.title))]),t._v(" "),a("div",{staticClass:"goods-num"},[t._v("x"+t._s(i.num))]),t._v(" "),a("div",{staticClass:"goods-price c-danger"},[t._v("¥"+t._s(i.total_discount_price))])])})})],2)]):t._e()])]:t._e(),t._v(" "),t.pindan.other&&t.pindan.other.length>0?[a("div",{staticClass:"font-14 c-gray margin-10"},[t._v("其他桌友")]),t._v(" "),t._l(t.pindan.other,function(i){return a("div",{key:i.id,staticClass:"order-info bg-default padding-10-l margin-10-b"},[a("div",{staticClass:"user flex-lr padding-10-t"},[a("div",{staticClass:"left flex"},[a("img",{staticClass:"avatar",attrs:{src:i.member.avatar}})]),t._v(" "),a("div",{staticClass:"right flex-lr van-hairline--bottom"},[a("div",{staticClass:"nickname"},[a("span",{staticClass:"ellipsis"},[t._v(t._s(i.member.nickname))]),t._v(" "),i.id==t.pindan.pindan_id?a("span",{staticClass:"label label-start"},[t._v("发起")]):t._e()]),t._v(" "),t.extra.is_founder?a("i",{staticClass:"icon icon-delete margin-10-r font-18 c-gray",on:{click:function(a){return t.onGiveUp(i.id,1)}}}):t._e()])]),t._v(" "),a("div",{staticClass:"goods flex-lr"},[a("div",{staticClass:"left"}),t._v(" "),a("div",{staticClass:"right"},[t._l(i.data,function(i){return t._l(i,function(i){return a("div",{key:i.id,staticClass:"goods-item"},[a("div",{staticClass:"goods-title ellipsis"},[t._v(t._s(i.title))]),t._v(" "),a("div",{staticClass:"goods-num"},[t._v("x"+t._s(i.num))]),t._v(" "),a("div",{staticClass:"goods-price c-danger"},[t._v("¥"+t._s(i.total_discount_price))])])})})],2)])])})]:t._e(),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",{attrs:{title:"商品费用"}},[a("span",{staticClass:"c-danger",attrs:{slot:"right-icon"},slot:"right-icon"},[t._v("\n\t\t\t\t\t\t\t¥"+t._s(t.pindan.price)+"\n\t\t\t\t\t\t")])])],1)],2)],1),t._v(" "),1==t.extra.is_founder?a("div",{staticClass:"cart flex-lr"},[t.pindan.takepart_num>1?a("div",{staticClass:"takepart-tips"},[t._v("\n\t\t\t\t\t共"),a("span",{staticClass:"c-danger"},[t._v(t._s(t.pindan.takepart_num))]),t._v("人在同时点餐\n\t\t\t\t")]):t._e(),t._v(" "),a("div",{staticClass:"cart-tips"},[a("div",{staticClass:"total font-bold"},[t._v("¥"+t._s(t.pindan.price))])]),t._v(" "),t.pindan.num>0?[a("div",{staticClass:"cart-btn",on:{click:t.onSubmit}},[t._v("去结算")])]:[a("div",{staticClass:"cart-btn disabled"},[t._v("未选择商品")])]],2):t._e()]],2),t._v(" "),a("transition",{attrs:{name:"loading"}},[t.showPreLoading?a("iloading"):t._e()],1)],1)},staticRenderFns:[]};var o=a("VU/8")(d,l,!1,function(t){a("R+6x")},null,null);i.default=o.exports},"R+6x":function(t,i){}});
//# sourceMappingURL=156.b823e65e39a74d604d5e.js.map