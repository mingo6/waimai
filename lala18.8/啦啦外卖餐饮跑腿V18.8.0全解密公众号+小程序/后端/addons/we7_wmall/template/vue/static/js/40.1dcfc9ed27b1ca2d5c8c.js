webpackJsonp([40],{AKH8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Gu7T"),r=e.n(s),i={components:{PublicHeader:e("Cz8s").a},data:function(){return{title:"",type:"common",freelunch:{},luckiers:[],member_partaker:{},partake_status:{},record:{},partakers:{min:0,loading:!1,loaded:!1,empty:!1,data:[]},islegal:!1}},watch:{$route:function(t,a){this.title="",this.type="common",this.freelunch={},this.luckiers=[],this.member_partaker={},this.partake_status={},this.record={},this.partakers={min:0,loading:!1,loaded:!1,empty:!1,data:[]},this.islegal=!1,this.$route.query.type&&(this.type=this.$route.query.type),this.onLoad()}},methods:{onLoad:function(){var t=this;this.util.request({url:"freeLunch/freeLunch",data:{type:this.type}}).then(function(a){var e=a.data.message;if(e.errno)return t.util.$toast(e.message),!1;e=e.message,console.log(e),t.freelunch=e.freelunch,t.luckiers=[].concat(r()(t.luckiers),r()(e.luckiers)),t.member_partaker=e.member_partaker,t.partake_status=e.partake_status,t.record=e.record,t.title="common"==t.type?t.freelunch.title:t.freelunch.title+"Plus",t.onGetPartakers(),t.islegal=!0})},onGetPartakers:function(){var t=this;if(this.partakers.loaded)return!1;this.util.request({url:"freeLunch/freeLunch/partakers",data:{min:this.partakers.min,record_id:this.record.id}}).then(function(a){var e=a.data.message;if(e.errno)return t.util.$toast(e.message),!1;console.log(e),t.partakers.min=e.min,t.partakers.data=[].concat(r()(t.partakers.data),r()(e.message)),(e.message.length<10||!e.min)&&(t.partakers.loaded=!0),t.partakers.data.length||(t.partakers.empty=!0),t.partakers.loading=!1})},onSubmit:function(){var t=this;if(!this.islegal)return!1;this.islegal=!1,this.util.request({url:"freeLunch/freeLunch/partake",data:{record_id:this.record.id}}).then(function(a){var e=a.data.message;if(e.errno)return t.util.$toast(e.message),!1;var s=e.message;t.$router.replace(t.util.getUrl({path:"/pages/public/pay",query:{order_id:s,order_type:"freelunch"}}))})}},created:function(){this.$route.query.type&&(this.type=this.$route.query.type)},mounted:function(){this.onLoad()}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"freeLunch-index"}},[e("public-header",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"nav-tab"},[e("ul",{staticClass:"flex-lr"},[e("li",{class:{active:"common"==t.type}},[e("router-link",{attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/index"})}},[t._v("\n\t\t\t\t\t\t"+t._s(t.title)+"\n\t\t\t\t\t")])],1),t._v(" "),1==t.freelunch.plus_status?e("li",{class:{active:"plus"==t.type}},[e("router-link",{attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/index",query:{type:"plus"}})}},[t._v("\n\t\t\t\t\t\t"+t._s(t.title)+"\n\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.freelunch.pre_plus_reward_fee)+"元红包")])],1):t._e(),t._v(" "),e("li",{staticClass:"pull-right"},[e("router-link",{attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/mealCoupon"})}},[e("img",{staticClass:"dash-line",attrs:{src:"static/img/freeLunch_dash_line.png",alt:""}}),t._v(" "),e("img",{staticClass:"coupon-icon",attrs:{src:"static/img/freeLunch_coupon.png",alt:""}}),t._v(" "),e("span",[t._v("我的餐券")])])],1)])]),t._v(" "),e("div",{staticClass:"content-inner"},[e("div",{staticClass:"prize"},[e("img",{attrs:{src:"common"==t.type?t.freelunch.thumb:t.freelunch.plus_thumb,alt:""}}),t._v(" "),e("div",{staticClass:"batch"},[t._v("第"+t._s(t.record.serial_sn)+"期")]),t._v(" "),e("router-link",{staticClass:"rule",attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/rule"})}},[t._v("活动规则")]),t._v(" "),e("div",{staticClass:"prize-info"},[e("div",{staticClass:"pirze-inner"},[e("div",{staticClass:"draw-condition"},[t._v("每满"+t._s(t.record.partaker_total)+"人次，即抽取1人获得 "),e("span",[t._v(t._s(t.record.reward_fee)+"元无门槛红包")])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:{width:t.record.percent+"%"}})]),t._v(" "),e("div",{staticClass:"prize-data"},[t._v("\n\t\t\t\t\t\t\t总需人次: "+t._s(t.record.partaker_total)+" "),e("span",{staticClass:"vertical-line"},[t._v("|")]),t._v(" 剩余人次: "+t._s(t.record.partaker_dosage)+"\n\t\t\t\t\t\t")])])])],1),t._v(" "),e("div",{staticClass:"no-participate"},[t.member_partaker.nums?[e("div",{staticClass:"participate-num"},[t._v("我参与了: "),e("span",[t._v(t._s(t.member_partaker.nums))]),t._v(" "),e("strong",[t._v("次")])]),t._v(" "),t._l(t.member_partaker.data,function(a){return e("div",{key:a.id,staticClass:"participate-code"},[t._v("参与号码: "),e("strong",[t._v(t._s(a.number))])])})]:[t._v("\n\t\t\t\t\t您没有参与本期活动，立即参与领红包吧！\n\t\t\t\t")]],2),t._v(" "),t.luckiers?e("div",{staticClass:"lucky-history"},[e("router-link",{staticClass:"lucky-inner",attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/luckier"})}},[e("div",{staticClass:"lucky-tab van-hairline--right"},[e("img",{attrs:{src:"static/img/freeLunch_luckier.png",alt:""}}),t._v(" "),e("div",{staticClass:"subtitle"},[t._v("中奖直播")])]),t._v(" "),e("div",{staticClass:"luckier-list"},[e("van-swipe",{attrs:{autoplay:1e3,vertical:"","show-indicators":!1}},t._l(t.luckiers,function(a){return e("van-swipe-item",{key:a.id,staticClass:"flex-lr"},[e("img",{staticClass:"luckier-avatar",attrs:{src:a.avatar,alt:""}}),t._v(" "),e("div",{staticClass:"luckier-info"},[e("p",[t._v(t._s(a.nickname)+" "),e("span",{staticClass:"c-gray"},[t._v(t._s(a.time))])]),t._v(" "),e("p",[t._v("中奖 "),e("span",{staticClass:"c-danger"},[t._v(t._s(a.reward_fee))]),t._v(" 元")])])])}),1)],1),t._v(" "),e("van-icon",{staticClass:"lucky-icon",attrs:{name:"right"}})],1)],1):t._e(),t._v(" "),e("div",{staticClass:"current-participant"},[e("div",{staticClass:"participant-title border-1px-b"},[e("span",[t._v("本期参与人")]),t._v(" "),e("span",{staticClass:"start-time"},[t._v(t._s(t.record.starttime_cn)+" 开始")])]),t._v(" "),t.partakers.empty?t._e():e("van-list",{attrs:{finished:t.partakers.loaded,"immediate-check":!1,offset:100},on:{load:t.onGetPartakers},model:{value:t.partakers.loading,callback:function(a){t.$set(t.partakers,"loading",a)},expression:"partakers.loading"}},t._l(t.partakers.data,function(a,s){return e("div",{key:a.id,staticClass:"participant-list flex-lr"},[e("div",{staticClass:"col-20"},[e("img",{attrs:{src:a.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"col-80 ",class:{"van-hairline--bottom":s<t.partakers.data.length-1}},[e("span",{staticClass:"participant-name"},[t._v(t._s(a.nickname))]),t._v(" "),e("span",{staticClass:"participant-time"},[t._v(t._s(a.addtime))])])])}),0),t._v(" "),t.partakers.loaded&&!t.partakers.empty?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips",staticStyle:{"background-color":"#fff"}},[t._v("我是有底线的")])]):t._e(),t._v(" "),t.partakers.empty?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips",staticStyle:{"background-color":"#fff"}},[t._v("暂无参与记录")])]):t._e()],1)])]),t._v(" "),e("div",{staticClass:"bar"},[0==t.partake_status.errno?e("van-button",{staticClass:"font-16",attrs:{size:"normal",type:"danger",block:!0,disabled:!t.islegal},on:{click:t.onSubmit}},[t._v("立即参与")]):e("van-button",{staticClass:"font-16",attrs:{size:"normal",type:"danger",block:!0,disabled:!0}},[t._v(t._s(t.partake_status.message))])],1)],1)},staticRenderFns:[]};var n=e("VU/8")(i,l,!1,function(t){e("S41y")},null,null);a.default=n.exports},S41y:function(t,a){}});
//# sourceMappingURL=40.1dcfc9ed27b1ca2d5c8c.js.map