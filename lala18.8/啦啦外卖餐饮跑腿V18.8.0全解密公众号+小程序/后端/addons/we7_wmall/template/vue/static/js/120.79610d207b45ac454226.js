webpackJsonp([120],{RFoV:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("woOf"),a=e.n(i),n=e("Cz8s"),o=e("mzkE"),r=e("deIj"),d={components:{PublicHeader:n.a,PublicFooter:o.a},data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},cid:0,category:{},isRefresh:!1,showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(t){var s=this;Object(r.b)({vue:s,force:t,url:"seckill/goods/index",data:{menufooter:1,cid:s.cid},success:function(t){s.menufooter=window.menufooter,s.category=a()(s.category,t.category),s.util.setWXTitle(s.category.title)}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.$route.query&&this.$route.query.cid>0&&(this.cid=this.$route.query.cid),this.onLoad()}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"seckill-category"}},[e("public-header",{attrs:{title:t.category.title}}),t._v(" "),e("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),e("div",{staticClass:"content"},[e("van-pull-refresh",{on:{refresh:function(s){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?t._e():e("div",{staticClass:"padding-15-t padding-15-lr bg-default flex-lr c-danger font-14"},[t._v("\n\t\t\t\t超值好货限时抢购\n\t\t\t")]),t._v(" "),t.records.empty?e("div",{staticClass:"no-data"},[e("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),e("p",[t._v("暂无抢购活动!")])]):e("van-list",{staticClass:"goods-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,i){return e("div",{key:i,staticClass:"activity-item"},[e("div",{staticClass:"item-inner"},[e("div",{staticClass:"thumb"},[e("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),3==s.status?e("div",{staticClass:"end-bg"},[e("img",{attrs:{src:"static/img/end.png",alt:""}})]):t._e()]),t._v(" "),e("div",{staticClass:"goods-title"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"flex"},[e("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v("¥"+t._s(s.price))]),t._v(" "),e("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(s.oldprice))]),t._v(" "),e("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),e("div",{staticClass:"flex-lr margin-10-t"},[e("div",{staticClass:"bar",class:{"bar-end":3==s.status||!s.total}},[3!=s.status&&s.total>0?e("div",{staticClass:"bar-inner",style:{width:s.sailed_percent+"%"}}):t._e(),t._v(" "),e("div",{staticClass:"bar-text",staticStyle:{width:"100%"}},[t._v("已抢"+t._s(s.sailed)+"份")])]),t._v(" "),1==s.status?[0!=s.total?e("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/seckill/detail",query:{id:s.id}})}},[t._v("抢购")]):e("div",{staticClass:"btn btn-end"},[t._v("已抢光")])]:2==s.status?[e("div",{staticClass:"btn btn-end"},[t._v("未开始")])]:3==s.status?[e("div",{staticClass:"btn btn-end"},[t._v("已结束")])]:t._e()],2)])])}),t._v(" "),t.records.finished?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(d,c,!1,function(t){e("VL7y")},null,null);s.default=l.exports},VL7y:function(t,s){}});
//# sourceMappingURL=120.79610d207b45ac454226.js.map