webpackJsonp([25],{"Ek/6":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("Cz8s"),e=a("deIj"),l={components:{publicHeader:s.a},data:function(){return{showPreLoading:!0,activity:{},perm:{}}},methods:{onLoad:function(){var t=this;Object(e.a)({vue:t,url:"manage/activity/index",success:function(i){t.activity=i.activity,t.perm=i.perm}})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"activity-index"}},[a("public-header",{attrs:{title:"店铺活动"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search"},[a("div",{staticClass:"tab-group"},[a("div",{staticClass:"tab-item active"},[t._v("新建活动")]),t._v(" "),a("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list"})}},[t._v("已创建活动")]),t._v(" "),a("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/bargainList"})}},[t._v("天天特价")])],1)]),t._v(" "),a("van-list",{staticClass:"list"},[t.perm.discount&&1==t.perm.discount.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("店铺满减")]),t._v(" "),t.activity.discount?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.discount.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/deliveryFee",query:{type:"discount"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("配置店铺满减活动, 吸引更多用户下单")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.cashGrant&&1==t.perm.cashGrant.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("返现优惠")]),t._v(" "),t.activity.cashGrant?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.cashGrant.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/deliveryFee",query:{type:"cashGrant"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("配置店铺返现优惠活动, 吸引更多用户下单")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.newMember&&1==t.perm.newMember.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("门店新用户")]),t._v(" "),t.activity.newMember?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.newMember.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/deliveryFee",query:{type:"newMember"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("新用户下单满足条件后可享受减免优惠")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.grant&&1==t.perm.grant.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("满赠活动")]),t._v(" "),t.activity.grant?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.grant.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/deliveryFee",query:{type:"grant"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("下单满足条件后可获得赠品")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.selfDelivery&&1==t.perm.selfDelivery.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("自提打折")]),t._v(" "),t.activity.selfDelivery?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.selfDelivery.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/deliveryFee",query:{type:"selfDelivery"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("自提满足条件后可享受打折优惠")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.couponCollect&&1==t.perm.couponCollect.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("进店领券")]),t._v(" "),t.activity.couponCollect?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.couponCollect.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/couponCollect",query:{type:"couponCollect"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("顾客进店可领取代金券")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.couponGrant&&1==t.perm.couponGrant.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("下单返券")]),t._v(" "),t.activity.couponGrant?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.couponGrant.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/couponCollect",query:{type:"couponGrant"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("下单满足条件后可返代金券")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.bargain&&1==t.perm.bargain.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("天天特价")]),t._v(" "),a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/bargain"})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("下单满足条件后可返代金券")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.deliveryFeeDiscount&&1==t.perm.deliveryFeeDiscount.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("满减配送费")]),t._v(" "),t.activity.deliveryFeeDiscount?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.deliveryFeeDiscount.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/deliveryFee",query:{type:"deliveryFeeDiscount"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("配送费满足条件后可享受减免优惠")]),t._v(" "),t._e()])]):t._e(),t._v(" "),t.perm.selfPickup&&1==t.perm.selfPickup.status?a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("自提满减")]),t._v(" "),t.activity.selfPickup?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.selfPickup.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/deliveryFee",query:{type:"selfPickup"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("配置自提满减活动,吸引更多用户下单")]),t._v(" "),t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"list-item"},[a("div",{staticClass:"flex-lr margin-15-b"},[a("div",{staticClass:"title"},[t._v("超级会员红包")]),t._v(" "),t.activity.svipRedpacket?a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/list",query:{status:t.activity.svipRedpacket.status}})}},[t._v("已创建")]):a("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/activity/svipRedpacket",query:{type:"svipRedpacket"}})}},[t._v("立即创建")])],1),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("div",[t._v("配置超级会员红包,吸引更多用户下单")])])])])],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var v=a("VU/8")(l,r,!1,function(t){a("l7RH")},null,null);i.default=v.exports},l7RH:function(t,i){}});
//# sourceMappingURL=25.e2775e15db9c3addc48b.js.map