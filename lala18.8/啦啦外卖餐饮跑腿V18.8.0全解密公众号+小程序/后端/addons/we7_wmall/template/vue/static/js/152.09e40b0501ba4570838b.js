webpackJsonp([152],{"9RN1":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("Cz8s"),e=i("75NE"),n=i("lVAl"),l=i("deIj"),o=i("Jfm7"),d={components:{PublicHeader:s.a,CountDown:e.a,Comment:n.a},data:function(){return{showPreLoading:!0,zhezhaoShow:!1,star:3,detail:{},more_activity:{},teams:{},danmus:[],danmu:{index:0,item:{},show:!1},comment:{page:2,psize:8,data:[]}}},methods:{onLoad:function(t){var a=this;t&&(a.id=t),Object(l.a)({vue:a,url:"pintuan/index/detail",data:{id:a.id,page:1,psize:a.comment.psize},success:function(t){a.detail=t.detail,a.more_activity=t.more_activity,a.teams=t.teams,a.record=t.record,a.comment.data=t.comment,a.danmus=t.danmu;var i=window._share;i&&(i.success=function(){a.util.request({url:"gohome/common/share",data:{id:a.id,type:"pintuan"}}).then(function(t){})}),a.wx.share(i),setTimeout(function(){a.danmus&&(a.onToggleDanmu(),setInterval(function(){a.onToggleDanmu()},5e3))},5e3)}})},onJoinTeam:function(t,a,i){if("start"==a)return this.record&&this.record.id?(this.util.$toast("您已参与了该团，请等待本次团购结束后在进行开团",this.util.getUrl({path:"/gohome/pages/pintuan/share",query:{id:this.id,team_id:this.record.team_id}}),1e3),!1):void this.$router.push(this.util.getUrl({path:"/gohome/pages/pintuan/create",query:{id:this.id,is_team:"1"}}));this.record&&this.record.team_id>0?this.util.$toast("您已参与了该团，请等待本次团购结束后在进行开团",this.util.getUrl({path:"/gohome/pages/pintuan/share",query:{id:this.id,team_id:this.record.team_id}}),1e3):this.$router.push(this.util.getUrl({path:"/gohome/pages/pintuan/create",query:{id:this.id,team_id:t}}))},onFavor:function(){Object(o.c)({vue:this,goods_id:this.detail.id,type:"pintuan",target:"detail"})},onToggleDanmu:function(){Object(o.b)({vue:this})},onComment:function(){Object(o.a)({vue:this,type:"pintuan",id:this.id})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=this.$route.query.id)},mounted:function(){this.onLoad()},watch:{$route:function(t,a){this.showPreLoading=!0,this.$route.query&&this.$route.query.id>0&&(this.id=this.$route.query.id),this.$refs.content.scrollTop=0,this.onLoad()}}},r={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"pintuan-detail"}},[i("public-header",{attrs:{title:"商品详情"}}),t._v(" "),i("div",{ref:"content",staticClass:"content"},[t.danmu.item&&t.danmu.item.nickname?i("transition",{attrs:{name:"danmu-fade",mode:"out-in"}},[i("div",{staticClass:"order-danmu",class:{"opacity-0":!t.danmu.show}},[i("div",{staticClass:"flex"},[i("img",{staticClass:"thumb",attrs:{src:t.danmu.item.avatar,alt:""}}),t._v(" "),i("span",{staticClass:"info"},[t._v(t._s(t.danmu.item.nickname)+" "+t._s(t.danmu.item.time)+"购买了此商品")])])])]):t._e(),t._v(" "),i("div",{staticClass:"goods-info padding-15-lr padding-15-t bg-default"},[t.detail.thumbs&&t.detail.thumbs.length>0?i("van-swipe",{staticClass:"thumbs",attrs:{autoplay:5e3,"indicator-color":"#ff2d4b"}},t._l(t.detail.thumbs,function(t,a){return i("van-swipe-item",{key:a},[i("img",{attrs:{src:t,alt:""}})])}),1):i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:t.detail.thumb,alt:""}})]),t._v(" "),i("ul",{staticClass:"right-btn"},[i("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/poster/index",query:{goods_id:t.id,type:"pintuan"}})}},[i("span",[t._v("生成")]),i("span",[t._v("海报")])])],1),t._v(" "),i("div",{staticClass:"title"},[t._v("【"+t._s(t.detail.peoplenum)+"人团】"+t._s(t.detail.name))]),t._v(" "),i("div",{staticClass:"flex-lr van-hairline--bottom padding-15-b"},[i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"c-danger font-16 font-bold"},[t._v("¥"+t._s(t.detail.price))]),t._v(" "),i("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v("¥"+t._s(t.detail.oldprice))])])]),t._v(" "),1==t.detail.status?i("div",{staticClass:"flex"},[i("span",{staticClass:"font-12 c-gray margin-5-r"},[t._v("距结束")]),t._v(" "),i("count-down",{attrs:{endTime:t.detail.endtime}})],1):2==t.detail.status?i("div",{staticClass:"flex"},[i("span",{staticClass:"font-12 c-gray margin-5-r"},[t._v("距开始")]),t._v(" "),i("count-down",{attrs:{endTime:t.detail.starttime}})],1):t._e()]),t._v(" "),i("div",{staticClass:"padding-15-tb flex-lr font-12 c-gray"},[i("div",{staticClass:"take-info-item"},[i("i",{staticClass:"icon icon-browse"}),t._v(" "),i("span",[t._v(t._s(t.detail.total_looknum)+"人浏览")])]),t._v(" "),i("div",{staticClass:"take-info-item text-center van-hairline--left van-hairline--right"},[i("i",{staticClass:"icon icon-share"}),t._v(" "),i("span",[t._v(t._s(t.detail.total_sharenum)+"人分享")])]),t._v(" "),i("div",{staticClass:"take-info-item text-right"},[i("i",{staticClass:"icon icon-friend font-15"}),t._v(" "),i("span",[t._v(t._s(t.detail.falesailed_total)+"人参与")])])])],1),t._v(" "),t._m(0),t._v(" "),t.teams?i("div",{staticClass:"margin-10-t padding-15-l bg-default"},[t._m(1),t._v(" "),i("div",{staticClass:"wait-list padding-15-r padding-15-b"},t._l(t.teams,function(a,s){return i("van-row",{key:"t"+s,staticClass:"wait-item flex-lr"},[i("van-col",{staticClass:"flex",attrs:{span:"9"}},[i("div",{staticClass:"user-avatar"},[i("img",{staticClass:"img-100",attrs:{src:a.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"nickname ellipsis"},[t._v(t._s(a.nickname))])]),t._v(" "),i("van-col",{staticClass:"flex-lr",attrs:{span:"15"}},[i("ul",{staticClass:"font-12 padding-10-l"},[i("li",{staticClass:"c-danger"},[t._v("还差"+t._s(a.team_num-a.takepart_num)+"人成团")]),t._v(" "),a.overtime?i("li",{staticClass:"c-gray margin-5-t flex"},[t._v("\n\t\t\t\t\t\t\t\t还剩"),i("count-down",{attrs:{endTime:a.overtime}}),t._v("结束\n\t\t\t\t\t\t\t")],1):t._e()]),t._v(" "),1==t.detail.status&&0!=t.detail.total?i("span",{staticClass:"btn-take",on:{click:function(i){return t.onJoinTeam(a.id,"",a.uid)}}},[t._v("去参团")]):i("span",{staticClass:"btn-take"},[t._v("敬请关注")])])],1)}),1)]):t._e(),t._v(" "),i("div",{staticClass:"margin-10-t padding-15-l bg-default"},[i("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[i("div",{staticClass:"font-14"},[t._v("适用门店")]),t._v(" "),i("van-icon",{staticClass:"c-gray",attrs:{name:"arrow"}})],1),t._v(" "),t.detail.store?i("div",{staticClass:"padding-15-tb padding-15-r flex-lr"},[i("div",{staticClass:"font-14 store-info"},[i("div",{staticClass:"margin-10-b w-100 ellipsis"},[t._v(t._s(t.detail.store.title))]),t._v(" "),i("div",{staticClass:"flex c-gray w-100",on:{click:function(a){return t.util.jsLocation({lat:t.detail.store.location_x,lng:t.detail.store.location_y,address:t.detail.store.address})}}},[i("i",{staticClass:"icon icon-location margin-5-r font-15"}),t._v(" "),i("p",{staticClass:"ellipsis"},[t._v(t._s(t.detail.store.address))])])]),t._v(" "),i("i",{staticClass:"icon icon-telephone icon-telephone-circle",on:{click:function(a){return t.util.jsTel(t.detail.store.telephone)}}})]):t._e()]),t._v(" "),i("div",{staticClass:"margin-10-t padding-15-l bg-default"},[t._m(2),t._v(" "),i("div",{staticClass:"padding-15-tb padding-15-r richtext",domProps:{innerHTML:t._s(t.detail.detail)}})]),t._v(" "),t._e(),t._v(" "),i("comment",{attrs:{comment:t.comment.data},on:{onLoadingComment:t.onComment}}),t._v(" "),i("div",{staticClass:"margin-10-t bg-default"},[i("div",{staticClass:"padding-15-l"},[i("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[i("div",{staticClass:"font-14"},[t._v("更多优惠商品")]),t._v(" "),i("van-icon",{staticClass:"c-gray",attrs:{name:"arrow"}})],1)]),t._v(" "),i("div",{staticClass:"activity-list"},t._l(t.more_activity,function(a,s){return i("div",{key:"m"+s,staticClass:"activity-item"},[i("router-link",{staticClass:"item-inner",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/detail",query:{id:a.id}})}},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:a.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-title"},[t._v(t._s(a.name))]),t._v(" "),i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"flex"},[i("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v("¥"+t._s(a.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(a.oldprice))])]),t._v(" "),i("div",{staticClass:"c-gray font-12"},[t._v("已售"+t._s(a.falesailed_total)+"份")])])])],1)}),0)])],1),t._v(" "),i("van-goods-action",[i("van-goods-action-mini-btn",{attrs:{icon:"shop",text:"店铺"},on:{click:function(a){return t.util.jsUrl("gohome/pages/haodian/detail?sid="+t.detail.store.id)}}}),t._v(" "),i("van-goods-action-mini-btn",{class:{favorite:t.detail.is_favor},attrs:{icon:t.detail.is_favor?"favor_fill_light":"favor1",text:t.detail.is_favor?"已收藏":"收藏"},on:{click:function(a){return t.onFavor()}}}),t._v(" "),i("van-goods-action-mini-btn",{attrs:{icon:"share",text:"分享"},on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}}),t._v(" "),2==t.detail.status?[i("van-goods-action-big-btn",{staticClass:"btn-share"},[i("div",[t._v("活动尚未开始")])])]:3==t.detail.status?[i("van-goods-action-big-btn",{staticClass:"btn-share"},[i("div",[t._v("活动已经结束")])])]:1==t.detail.status?[0==t.detail.total?[i("van-goods-action-big-btn",{staticClass:"btn-share"},[i("div",[t._v("商品已被抢完了")])])]:[t.detail.aloneprice>0?i("van-goods-action-big-btn",{staticClass:"btn-buy",attrs:{to:t.util.getUrl({path:"/gohome/pages/pintuan/create",query:{id:t.id}})}},[i("div",[t._v("¥"+t._s(t.detail.aloneprice))]),t._v(" "),i("div",[t._v("单独购买")])]):t._e(),t._v(" "),i("van-goods-action-big-btn",{staticClass:"btn-share",on:{click:function(a){return t.onJoinTeam(0,"start")}}},[i("div",[t._v("¥"+t._s(t.detail.price))]),t._v(" "),i("div",[t._v("发起拼团")])])]]:t._e()],2),t._v(" "),i("transition",{attrs:{name:"van-fade"}},[t.zhezhaoShow?i("div",{staticClass:"share-zhezhao",on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}},[i("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()]),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"margin-10-t padding-15-l bg-default"},[i("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[i("div",{staticClass:"font-14"},[t._v("拼团规则")])]),t._v(" "),i("div",{staticClass:"padding-15-tb padding-15-r flex-lr"},[i("div",{staticClass:"step flex"},[i("span",{staticClass:"step-number"},[t._v("1")]),t._v(" "),i("ul",{staticClass:"c-gray font-12"},[i("li",{staticClass:"margin-5-b"},[t._v("选择商品")]),t._v(" "),i("li",[t._v("付款开团/参团")])])]),t._v(" "),i("div",{staticClass:"step flex"},[i("span",{staticClass:"step-number"},[t._v("2")]),t._v(" "),i("ul",{staticClass:"c-gray font-12"},[i("li",{staticClass:"margin-5-b"},[t._v("邀请好友")]),t._v(" "),i("li",[t._v("邀请好友支付参团")])])]),t._v(" "),i("div",{staticClass:"step flex"},[i("span",{staticClass:"step-number"},[t._v("3")]),t._v(" "),i("ul",{staticClass:"c-gray font-12"},[i("li",{staticClass:"margin-5-b"},[t._v("组团成功发货")]),t._v(" "),i("li",[t._v("失败退款")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[a("div",{staticClass:"font-14"},[this._v("待成团")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[a("div",{staticClass:"font-14"},[this._v("商品详情")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[a("div",{staticClass:"font-14"},[this._v("购买须知")])])}]};var c=i("VU/8")(d,r,!1,function(t){i("I60z")},null,null);a.default=c.exports},I60z:function(t,a){}});
//# sourceMappingURL=152.09e40b0501ba4570838b.js.map