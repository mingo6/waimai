webpackJsonp([16],{Pvz1:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("woOf"),e=a.n(i),n=a("Cz8s"),c=a("deIj"),o={components:{publicHeader:n.a},data:function(){return{showPreLoading:!0,isRefresh:!1,activity:{},empty:!1,filter:{items:{status:1}}}},methods:{onLoad:function(){var t=this;t.empty=!1,Object(c.a)({vue:t,url:"manage/activity/list/index",data:{filter:this.filter.items},success:function(s){0==s.activity.length&&(t.empty=!0),t.activity=e()({},s.activity),t.isRefresh=!1}})},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t,this.onLoad())},onPullDownRefresh:function(){this.onLoad()}},created:function(){this.query=this.$route.query,this.query&&this.query.status&&(this.filter.items.status=this.query.status)},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"activity-list"}},[a("public-header",{attrs:{title:"店铺活动"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search"},[a("div",{staticClass:"tab-group"},[a("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[t._v("待生效")]),t._v(" "),a("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("进行中")]),t._v(" "),a("div",{staticClass:"tab-item",class:{active:0==t.filter.items.status},on:{click:function(s){t.onToggleStatus(0)}}},[t._v("已结束")])])]),t._v(" "),a("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("没有任何活动哦!")])]):a("van-list",t._l(t.activity,function(s){return a("div",{staticClass:"list-item"},[a("div",{staticClass:"padding-15 van-hairline--bottom"},[a("div",{staticClass:"flex margin-15-b"},[a("span",{staticClass:"font-15 padding-10-r"},[t._v(t._s(s.title))]),t._v(" "),1==s.status?a("span",{staticClass:"c-gray"},[t._v("\n\t\t\t\t\t\t\t\t剩余"),a("span",{staticClass:"c-danger font-14"},[t._v(t._s(s.until))]),t._v("天\n\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),"couponCollect"==s.type||"couponGrant"==s.type?[a("p",{staticClass:"desc"},[t._v("券总张数: "+t._s("couponCollect"==s.type?s.coupon_detail.total*s.coupon_detail.amount:s.coupon_detail.amount)+"张")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("发放数量: "+t._s("couponCollect"==s.type?s.coupon_detail.dosage_total:s.coupon_detail.dosage)+"张")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("使用数量: "+t._s(s.coupon_detail.is_use_total)+"张")])]:t._e(),t._v(" "),a("p",{staticClass:"desc"},[t._v("活动类型: "+t._s(s.type_cn))]),t._v(" "),"couponCollect"==s.type?[s.data?a("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t\t\t券的金额: \n\t\t\t\t\t\t\t\t"),t._l(s.data,function(s){return[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(s.discount)+"元|满"+t._s(s.condition)+"可用\n\t\t\t\t\t\t\t\t")]})],2):t._e(),t._v(" "),s.data?a("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t\t\t券有效期: \n\t\t\t\t\t\t\t\t"),t._l(s.data,function(s){return[t._v("\n\t\t\t\t\t\t\t\t\t领券后"+t._s(s.use_days_limit)+"天内\n\t\t\t\t\t\t\t\t")]})],2):t._e()]:"couponGrant"==s.type?[a("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t\t\t返券条件: 订单满"+t._s(s.coupon_detail.condition)+"元\n\t\t\t\t\t\t\t")]),t._v(" "),s.data?a("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t\t\t券的金额: "+t._s(s.data.discount)+"元|满"+t._s(s.data.condition)+"可用\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),a("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t\t\t券有效期: 领券后"+t._s(s.use_days_limit)+"天内\n\t\t\t\t\t\t\t")])]:t._e(),t._v(" "),"newMember"==s.type?[s.data?a("p",{staticClass:"desc"},[t._v("活动内容: 门店新客立减"+t._s(s.data.back)+"元")]):t._e()]:"grant"==s.type?[a("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t\t\t活动内容: \n\t\t\t\t\t\t\t\t"),t._l(s.data,function(s){return[t._v("\n\t\t\t\t\t\t\t\t\t满"+t._s(s.condition)+"赠送"+t._s(s.back)+"\n\t\t\t\t\t\t\t\t")]})],2)]:"discount"==s.type||"selfPickup"==s.type?[s.data?a("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t\t\t活动内容: \n\t\t\t\t\t\t\t\t"),t._l(s.data,function(s){return[t._v("\n\t\t\t\t\t\t\t\t\t满"+t._s(s.condition)+"减"+t._s(s.back)+"元\n\t\t\t\t\t\t\t\t")]})],2):t._e()]:t._e(),t._v(" "),a("p",{staticClass:"desc"},[t._v("活动时间: "+t._s(s.starttime_cn)+"~"+t._s(s.endtime_cn))]),t._v(" "),a("p",{staticClass:"desc"},[t._v("创建日期: "+t._s(s.addtime_cn))])],2),t._v(" "),a("div",{staticClass:"btn-group"},[a("span",{staticClass:"btn-item bg-danger",on:{click:function(a){t.util.jspost({url:"manage/activity/list/del",data:{type:s.type,status:s.status},confirm:"确定撤销活动吗?"})}}},[t._v("撤销")])]),t._v(" "),a("div",{staticClass:"status"},[2==s.status?a("img",{staticClass:"wh-100",attrs:{src:"static/img/activity_not_start.png",alt:""}}):t._e(),t._v(" "),1==s.status?a("img",{staticClass:"wh-100",attrs:{src:"static/img/activity_ing.png",alt:""}}):t._e(),t._v(" "),0==s.status?a("img",{staticClass:"wh-100",attrs:{src:"static/img/activity_end.png",alt:""}}):t._e()])])}))],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var _=a("VU/8")(o,l,!1,function(t){a("gRc1")},null,null);s.default=_.exports},gRc1:function(t,s){}});
//# sourceMappingURL=16.bb105f6ddaddbfcb152e.js.map