webpackJsonp([28],{fYNi:function(t,s){},oNxd:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Cz8s"),a=i("deIj"),n={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},showPreLoading:!0,isRefresh:!1,filter:{items:{status:"-1"}}}},components:{publicHeader:e.a},methods:{onLoad:function(t){Object(a.b)({vue:this,force:t,url:"plateform/merchant/report/list"})},onPullDownRefresh:function(){this.onLoad(!0)},onChangeStatus:function(t,s,i,e){var a=this;a.util.jspost({url:"plateform/merchant/report/status",data:{id:t.id,status:s},confirm:"确定修改处理状态吗",success:function(){a.records.data[i].status=s,a.records.data[i].status_cn=e}})},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t)}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(t,s){this.onLoad(!0)},deep:!0}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"merchant-report"}},[i("public-header",{attrs:{title:"投诉列表"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"wrap-search wrap-search-input"},[i("div",{staticClass:"tab-group flex-lr border-1px-b"},[i("div",{staticClass:"tab-item",class:{active:-1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(-1)}}},[t._v("全部")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("已处理")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:0==t.filter.items.status},on:{click:function(s){t.onToggleStatus(0)}}},[t._v("未处理")])]),t._v(" "),i("van-search",{attrs:{placeholder:"请输入商户名称"},model:{value:t.filter.items.keyword,callback:function(s){t.$set(t.filter.items,"keyword",s)},expression:"filter.items.keyword"}})],1),t._v(" "),i("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("没有符合条件的数据!")])]):i("van-list",{staticClass:"current-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,e){return i("div",{key:s.id,staticClass:"report-item"},[i("div",{staticClass:"padding-10"},[i("div",{staticClass:"flex-lr padding-10-b"},[i("div",{staticClass:"font-bold"},[t._v(t._s(s.store_title))]),t._v(" "),1==s.status?i("div",{staticClass:"itag itag-primary"},[t._v("已处理")]):0==s.status?i("div",{staticClass:"itag itag-disabled"},[t._v("未处理")]):t._e()]),t._v(" "),i("div",{staticClass:"report-info flex"},[i("div",[t._v("投诉人手机号：")]),t._v(" "),i("div",{staticClass:"c-info",on:{click:function(i){t.util.jsUrl("tel:"+s.mobile)}}},[t._v(t._s(s.mobile)+" "),i("i",{staticClass:"icon icon-phone2"})])]),t._v(" "),i("div",{staticClass:"report-info flex"},[i("div",[t._v("投诉时间：")]),t._v(" "),i("div",[t._v(t._s(s.addtime_cn))])]),t._v(" "),i("div",{staticClass:"report-info flex"},[i("div",[t._v("投诉内容：")])]),t._v(" "),i("div",{staticClass:"replay"},[i("div",[t._v(t._s(s.title))]),t._v(" "),s.thumbs?i("div",{staticClass:"replay-img"},t._l(s.thumbs,function(e,a){return i("div",{staticClass:"img-item",on:{click:function(i){t.util.jsPreviewImage(s.thumbs)}}},[i("img",{staticClass:"img-100",attrs:{src:e,alt:""}})])})):t._e()])]),t._v(" "),i("div",{staticClass:"border-1px-t btn-group"},[1==s.status?i("div",{staticClass:"btn-item bg-default",on:{click:function(i){t.onChangeStatus(s,0,e,"未处理")}}},[t._v("设为未处理")]):t._e(),t._v(" "),0==s.status?i("div",{staticClass:"btn-item bg-primary",on:{click:function(i){t.onChangeStatus(s,1,e,"已处理")}}},[t._v("设为已处理")]):t._e()])])}),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("fYNi")},null,null);s.default=r.exports}});