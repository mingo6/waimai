webpackJsonp([88],{F0UT:function(t,s){},"cW+8":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Gu7T"),e=i.n(a),n=i("Cz8s"),l=i("mzkE"),o=i("deIj"),c={components:{PublicHeader:n.a,PublicFooter:l.a},data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},navs:[],isRefresh:!1,showPreLoading:!0,showFailedTips:!1,failedTips:{type:"location",tips:"获取定位失败!您可以选择手动搜索地址",btnText:"手动搜索地址",link:"/pages/home/location"},menufooter:{}}},methods:{onLoad:function(t){var s=this;Object(o.b)({vue:s,force:t,url:"seckill/goods/index",data:{menufooter:1,forceLocation:1},success:function(t){s.navs=[].concat(e()(t.navs)),s.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"seckill-index"}},[i("public-header",{attrs:{title:"超值抢购"}}),t._v(" "),i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter,failedTips:t.failedTips,showFailedTips:t.showFailedTips}}),t._v(" "),i("div",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:function(s){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[i("div",{staticClass:"seckill-navs margin-10-b"},[i("van-swipe",{attrs:{"indicator-color":"#ff2d4b"}},t._l(t.navs,function(s,a){return i("van-swipe-item",{key:s.id},[i("div",{staticClass:"seckill-navs-container col-5 circle"},t._l(s,function(s,a){return i("div",{key:s.id,staticClass:"seckill-nav-col",on:{click:function(i){return t.util.jsUrl(s.link)}}},[i("div",{staticClass:"seckill-nav-icon"},[i("img",{attrs:{src:s.thumb}})]),t._v(" "),i("div",{staticClass:"seckill-nav-text"},[t._v(t._s(s.title))])])}),0)])}),1)],1),t._v(" "),t.records.empty?t._e():i("div",{staticClass:"padding-15-t padding-15-lr bg-default flex-lr c-danger font-14"},[t._v("\n\t\t\t\t超值好货限时抢购\n\t\t\t")]),t._v(" "),t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无抢购活动!")])]):i("van-list",{staticClass:"goods-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,a){return i("div",{key:a,staticClass:"activity-item"},[i("div",{staticClass:"item-inner"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),3==s.status?i("div",{staticClass:"end-bg"},[i("img",{attrs:{src:"static/img/end.png",alt:""}})]):t._e()]),t._v(" "),i("div",{staticClass:"goods-title"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"flex"},[i("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v("¥"+t._s(s.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(s.oldprice))]),t._v(" "),i("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),i("div",{staticClass:"flex-lr margin-10-t"},[i("div",{staticClass:"bar",class:{"bar-end":3==s.status||!s.total}},[3!=s.status&&s.total>0?i("div",{staticClass:"bar-inner",style:{width:s.sailed_percent+"%"}}):t._e(),t._v(" "),i("div",{staticClass:"bar-text",staticStyle:{width:"100%"}},[t._v("已抢"+t._s(s.sailed)+"份")])]),t._v(" "),1==s.status?[0!=s.total?i("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/seckill/detail",query:{id:s.id}})}},[t._v("抢购")]):i("div",{staticClass:"btn btn-end"},[t._v("已抢光")])]:2==s.status?[i("div",{staticClass:"btn btn-end"},[t._v("未开始")])]:3==s.status?[i("div",{staticClass:"btn btn-end"},[t._v("已结束")])]:t._e()],2)])])}),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]};var r=i("VU/8")(c,d,!1,function(t){i("F0UT")},null,null);s.default=r.exports}});
//# sourceMappingURL=88.be0503cafff4891ef4b3.js.map