webpackJsonp([177],{"/psw":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Gu7T"),e=i.n(a),n=i("Cz8s"),o=i("mzkE"),l=i("deIj"),d={components:{PublicHeader:n.a,PublicFooter:o.a},data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},navs:[],menufooter:{},isRefresh:!1,showPreLoading:!0,showFailedTips:!1,failedTips:{type:"location",tips:"获取定位失败!您可以选择手动搜索地址",btnText:"手动搜索地址",link:"/pages/home/location"}}},methods:{onLoad:function(t){var s=this;Object(l.b)({vue:s,force:t,url:"pintuan/index/index",data:{menufooter:1,forceLocation:1},recordsName:"goods",success:function(t){s.navs=[].concat(e()(t.navs)),s.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"pintuan-index"}},[i("public-header",{attrs:{title:"钜惠拼团"}}),t._v(" "),i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter,failedTips:t.failedTips,showFailedTips:t.showFailedTips}}),t._v(" "),i("div",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:function(s){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[i("div",{staticClass:"pintuan-navs margin-10-b"},[i("van-swipe",{attrs:{"indicator-color":"#ff2d4b"}},t._l(t.navs,function(s,a){return i("van-swipe-item",{key:s.id},[i("div",{staticClass:"pintuan-navs-container col-5 circle"},t._l(s,function(s,a){return i("div",{key:s.id,staticClass:"pintuan-nav-col",on:{click:function(i){return t.util.jsUrl(s.link)}}},[i("div",{staticClass:"pintuan-nav-icon"},[i("img",{attrs:{src:s.thumb}})]),t._v(" "),i("div",{staticClass:"pintuan-nav-text"},[t._v(t._s(s.title))])])}),0)])}),1)],1),t._v(" "),t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无拼团活动!")])]):[i("div",{staticClass:"padding-15-t padding-15-lr font-14 c-danger bg-default"},[t._v("拼团购物更优惠")]),t._v(" "),i("van-list",{staticClass:"activity-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},t._l(t.records.data,function(s,a){return i("div",{key:s.id,staticClass:"activity-item bg-default flex-lr padding-15 van-hairline--bottom"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),i("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.peoplenum)+"人团\n\t\t\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"font-14 w-100"},[i("div",{staticClass:"flex-lr margin-10-b"},[i("div",{staticClass:"font-500"},[t._v(t._s(s.store.title))]),t._v(" "),t._e()]),t._v(" "),i("p",[t._v(t._s(s.name))])]),t._v(" "),i("div",{staticClass:"flex-lr-bottom w-100"},[i("div",[i("div",{staticClass:"flex"},[i("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v(t._s(s.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(s.oldprice))]),t._v(" "),i("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),2==s.status?[i("div",{staticClass:"bar"},[i("div",{staticClass:"bar-inner",staticStyle:{width:"0%"}}),t._v(" "),i("div",{staticClass:"bar-text",staticStyle:{width:"0%"}},[t._v("已团0份")])])]:[i("div",{staticClass:"bar",class:{"bar-end":0==s.total}},[-1!=s.total?i("div",{staticClass:"bar-inner",style:"width:"+s.sailed_percent+"%"}):t._e(),t._v(" "),i("div",{staticClass:"bar-text",staticStyle:{width:"0%"}},[t._v("已团"+t._s(s.falesailed_total)+"份")])])]],2),t._v(" "),2==s.status?i("div",{staticClass:"btn btn-end"},[t._v("未开始")]):3==s.status?i("div",{staticClass:"btn btn-end"},[t._v("已结束")]):1==s.status?[0==s.total?i("div",{staticClass:"btn btn-end"},[t._v("已抢完")]):i("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/detail",query:{id:s.id}})}},[t._v("去拼团")])]:t._e()],2)])])}),0),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("已经到底了")])]):t._e()]],2)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(d,r,!1,function(t){i("6gKr")},null,null);s.default=c.exports},"6gKr":function(t,s){}});
//# sourceMappingURL=177.67cfbb1b02f4cba96092.js.map