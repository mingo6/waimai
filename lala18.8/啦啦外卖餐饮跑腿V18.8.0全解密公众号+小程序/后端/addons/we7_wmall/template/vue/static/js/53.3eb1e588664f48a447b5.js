webpackJsonp([53],{JeNW:function(t,s){},WIJE:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Gu7T"),e=i.n(a),n=i("woOf"),l=i.n(n),o=i("Cz8s"),c=i("mzkE"),v=i("deIj"),r={components:{publicHeader:o.a,publicFooter:c.a},data:function(){return{member:{num_taked:0,total_discount:0},redpackets:[],goods:[],tasks:[],islegal:!1,menufooter:{},showPreLoading:!0,agreement:"",agreementShow:!1}},methods:{onLoad:function(){var t=this;Object(v.a)({vue:t,url:"svip/mine",data:{menufooter:1},success:function(s){t.member=l()(t.member,s.member),s.redpackets&&(t.redpackets=[].concat(e()(s.redpackets))),s.goods&&(t.goods=[].concat(e()(s.goods))),t.tasks=s.tasks,t.agreement=s.agreement,t.islegal=!0},fail:function(s){-2==s.errno?t.util.$toast(s.message,t.util.getUrl({path:"/package/pages/svip/index"}),1500,"replace"):t.util.$toast(s.message)}})},onExchange:function(t){var s=this;s.islegal&&(s.islegal=!1,Object(v.c)({vue:s,url:"svip/mine/exchange",data:{id:t,exchange_cost:-1},confirm:"确认领取该红包吗？",success:function(t){s.util.$toast("领取成功"),s.$set(s.member,"num_taked",t.num_taked),s.$set(s.member,"total_discount",t.total_discount),s.islegal=!0},fail:function(t){s.util.$toast(t.message),s.islegal=!0},cancel:function(){s.islegal=!0}}))},onTakepartTask:function(t,s,i){var a=this;1!=s?a.islegal&&(a.islegal=!1,Object(v.c)({vue:a,url:"svip/task/takepart",data:{id:t},success:function(t){a.islegal=!0,a.util.$toast(t,"",1e3),a.onLoad()},fail:function(t){a.islegal=!0,a.util.$toast(t.message,"",1e3)}})):a.$router.push(a.util.getUrl({path:i}))},onTogglePopup:function(){this.agreementShow=!this.agreementShow}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"svip-mine"}},[i("public-header",{attrs:{title:"超级会员"}}),t._v(" "),i("public-footer",{attrs:{menufooter:t.menufooter,preLoading:t.showPreLoading}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"svip-header"},[i("div",{staticClass:"flex margin-10-b"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:t.member.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"margin-10-lr member-info"},[i("div",{staticClass:"user-title"},[t._v(t._s(t.member.nickname))]),t._v(" "),i("div",{staticClass:"font-12 flex padding-5-t"},[t._e(),t._v(" "),i("span",[t._v(t._s(t.member.svip_endtime_cn)+" 到期 ")]),t._v(" "),i("i",{staticClass:"icon icon-question1"})],2)]),t._v(" "),i("router-link",{staticClass:"pay-button",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/svip/purchase"})}},[t._v("管理续费")])],1),t._v(" "),i("div",{staticClass:"discounts-group"},[i("div",{staticClass:"discounts-list flex"},[i("div",{staticClass:"discounts-item"},[i("div",{staticClass:"font-14"},[t._v("免费红包")]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.member.exchange_max))]),t._v("\n\t\t\t\t\t\t\t个\n\t\t\t\t\t\t")]),t._v(" "),i("router-link",{staticClass:"discounts-but",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/svip/redpacketCoupon"})}},[t._v("领取")])],1),t._v(" "),i("div",{staticClass:"discounts-item"},[i("div",{staticClass:"font-12"},[t._v("奖励金")]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.member.svip_credit1))]),t._v("\n\t\t\t\t\t\t\t个\n\t\t\t\t\t\t")]),t._v(" "),i("router-link",{staticClass:"discounts-but",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/svip/redpacketCoupon",query:{exchange_cost:1}})}},[t._v("兑换")])],1),t._v(" "),i("div",{staticClass:"discounts-item"},[i("div",{staticClass:"font-12"},[t._v("已节省")]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.member.total_discount))]),t._v("\n\t\t\t\t\t\t\t元\n\t\t\t\t\t\t")]),t._v(" "),i("router-link",{staticClass:"discounts-but",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/svip/record"})}},[t._v("查看")])],1)]),t._v(" "),i("div",{staticClass:"notice"},[i("div",{staticClass:"notice-group"},[i("i",{staticClass:"icon icon-shengyin"}),t._v(" "),i("span",[t._v("每月可免费领取"+t._s(t.member.exchange_max)+"个红包，本月已领取"+t._s(t.member.num_taked)+"个")])])])])]),t._v(" "),i("div",{staticClass:"padding-15"},[t.tasks&&t.tasks.length>0?i("div",{staticClass:"svip-body"},[i("div",{staticClass:"margin-10-b flex-lr"},[t._m(0),t._v(" "),i("router-link",{staticClass:"font-14 c-gray",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/svip/mission"})}},[t._v("更多"),i("i",{staticClass:"icon icon-right"})])],1),t._v(" "),i("div",{staticClass:"mission-list"},t._l(t.tasks,function(s){return i("div",{key:s.id,staticClass:"mission-item"},[i("div",{staticClass:"mission-left"},[i("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"mission-right flex-lr"},[i("div",{staticClass:"activity-info"},[i("div",{staticClass:"font-15 c-default"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"ellipsis"},[t._v(t._s(s.content))]),t._v(" "),t._e()]),t._v(" "),i("div",{staticClass:"activity-price"},[i("div",{staticClass:"c-danger font-13 padding-5-b"},[t._v(t._s(s.award_cn))]),t._v(" "),i("div",{staticClass:"activity-but",on:{click:function(i){return t.onTakepartTask(s.id,s.button.link_type,s.button.link)}}},[t._v(t._s(s.button.text))])])])])}),0)]):t._e(),t._v(" "),t.redpackets&&t.redpackets.length>0?i("div",{staticClass:"svip-body"},[i("div",{staticClass:"margin-10-b flex-lr"},[i("div",{staticClass:"font-16 font-bold"},[t._v("会员专享红包")]),t._v(" "),i("router-link",{staticClass:"font-14 c-gray",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/svip/redpacketCoupon"})}},[t._v("详情"),i("i",{staticClass:"icon icon-right"})])],1),t._v(" "),i("div",{staticClass:"redpacket-list flex"},t._l(t.redpackets,function(s,a){return i("div",{key:s.id,staticClass:"redpacket-item"},[i("div",{staticClass:"redpacket-title"},[i("div",{staticClass:"font-bold c-default price ellipsis"},[i("i",[t._v("¥")]),t._v(" "),i("span",[t._v(t._s(s.discount))])]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"font-14 ellipsis"},[t._v(t._s(s.title))]),t._v(" "),0==s.condition?i("div",{staticClass:"font-12 c-gray ellipsis padding-5-t"},[t._v("无门槛")]):s.condition>0?i("div",{staticClass:"font-12 c-gray ellipsis padding-5-t"},[t._v("满"+t._s(s.condition)+"元")]):t._e()])]),t._v(" "),i("div",{staticClass:"redpacket-but",on:{click:function(i){return t.onExchange(s.id)}}},[t._v("领取")])])}),0)]):t._e(),t._v(" "),i("div",{staticClass:"svip-body"},[i("div",{staticClass:"margin-10-b flex-lr"},[i("div",{staticClass:"font-16 font-bold"},[t._v("会员特权")]),t._v(" "),i("div",{staticClass:"font-14 c-gray",on:{click:t.onTogglePopup}},[t._v("详情"),i("i",{staticClass:"icon icon-right"})])]),t._v(" "),t._m(1)]),t._v(" "),t.goods&&t.goods.length>0?i("div",{staticClass:"svip-body"},[i("div",{staticClass:"margin-10-b flex-lr"},[i("div",{staticClass:"font-16 font-bold"},[t._v("专享商品")]),t._v(" "),i("router-link",{staticClass:"font-14 c-gray",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/svip/vipEnjoy"})}},[t._v("更多"),i("i",{staticClass:"icon icon-right"})])],1),t._v(" "),i("div",{staticClass:"goods-list"},t._l(t.goods,function(s,a){return i("div",{key:s.id,staticClass:"goods-item"},[i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"goods-img"},[i("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-info"},[i("div",[i("div",{staticClass:"font-14 flex-lr c-gray"},[i("div",[t._v(t._s(s.store_title))]),t._v(" "),i("div",[t._v(t._s(s.store_score)+"分")])]),t._v(" "),i("div",{staticClass:"font-16 c-default padding-5-t"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"goods-discount"},[i("i",{staticClass:"icon icon-crownfill font-12"}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(s.svip_discount)+"折\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"flex-lr"},[i("div",[i("span",{staticClass:"font-14 c-danger"},[t._v("¥ "),i("span",{staticClass:"font-20"},[t._v(t._s(s.svip_price))])]),t._v(" "),i("span",{staticClass:"font-14 c-gray line-through"},[t._v("¥"+t._s(s.price))])]),t._v(" "),i("router-link",{staticClass:"goods-but",attrs:{tag:"div",to:t.util.getUrl({path:"pages/store/goodsDetail",query:{sid:s.sid,id:s.id}})}},[t._v("立即抢")])],1)])])])}),0)]):t._e()])]),t._v(" "),i("van-popup",{staticClass:"agreement-popup",attrs:{position:"bottom"},model:{value:t.agreementShow,callback:function(s){t.agreementShow=s},expression:"agreementShow"}},[i("van-nav-bar",{staticClass:"border-0px",style:{background:"#ff2d4b",color:"#fff"},attrs:{title:"会员特权说明"},on:{"click-left":t.onTogglePopup}},[i("van-icon",{staticClass:"font-20",style:{color:"#fff"},attrs:{slot:"left",name:"left"},slot:"left"})],1),t._v(" "),i("div",{staticClass:"popup-content margin-10",domProps:{innerHTML:t._s(t.agreement)}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"font-16 font-bold"},[this._v("会员特属任务 "),s("span",{staticClass:"font-14 c-gray"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"tequan-item"},[i("li",[i("img",{attrs:{src:"static/img/svip-list-bg1.png",alt:""}}),t._v(" "),i("span",[t._v("专享红包")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg2.png",alt:""}}),t._v(" "),i("span",[t._v("奖励金")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg3.png",alt:""}}),t._v(" "),i("span",[t._v("专属客服")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg4.png",alt:""}}),t._v(" "),i("span",[t._v("专属折扣")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg5.png",alt:""}}),t._v(" "),i("span",[t._v("金币特权")])])])}]};var _=i("VU/8")(r,d,!1,function(t){i("JeNW")},null,null);s.default=_.exports}});
//# sourceMappingURL=53.3eb1e588664f48a447b5.js.map