webpackJsonp([72],{"7lpK":function(t,s){},bKja:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Cz8s"),e=a("deIj"),n={components:{publicHeader:i.a},data:function(){return{isRefresh:!1,showPreLoading:!0,records:{page:1,psize:10,loading:!1,finished:!1,empty:!1,data:[]},filter:{items:{status:1}}}},methods:{onToggleStatus:function(t){this.filter.items.status!=t&&(this.filter.items.status=t,this.onLoad(!0))},onLoad:function(t){Object(e.b)({vue:this,force:t,url:"svip/task/takepartlist"})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"svip-missionList"}},[a("public-header",{attrs:{title:"我的任务"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search"},[a("div",{staticClass:"tab-group flex-lr"},[a("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){return t.onToggleStatus(1)}}},[t._v("进行中")]),t._v(" "),a("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(s){return t.onToggleStatus(2)}}},[t._v("已完成")]),t._v(" "),a("div",{staticClass:"tab-item",class:{active:3==t.filter.items.status},on:{click:function(s){return t.onToggleStatus(3)}}},[t._v("已失败")])])]),t._v(" "),a("van-pull-refresh",{on:{refresh:function(s){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("还没有相关数据!")])]):a("van-list",{staticClass:"mission-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s){return a("div",{key:s.id,staticClass:"mission-item"},[a("div",{staticClass:"mission-group van-hairline--bottom"},[a("div",{staticClass:"mission-img"},[a("img",{staticClass:"img-100",attrs:{src:s.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"mission-info"},[a("div",{staticClass:"flex-lr"},[a("div",{staticClass:"font-15"},[t._v(t._s(s.data.title))]),t._v(" "),a("div",{staticClass:"c-danger font-15"},[t._v(t._s(s.takepart_status_all.text))])]),t._v(" "),a("div",{staticClass:"c-gray font-13 padding-10-t flex"},[a("span",[t._v("领取时间：")]),t._v(" "),a("span",[t._v(t._s(s.addtime_cn))])]),t._v(" "),a("div",{staticClass:"c-gray font-13 padding-5-t flex"},[a("span",[t._v("截止时间：")]),t._v(" "),a("span",[t._v(t._s(s.overtime_cn))])]),t._v(" "),2==s.status?a("div",{staticClass:"c-gray font-13 padding-5-t flex"},[a("span",[t._v("完成时间：")]),t._v(" "),a("span",[t._v(t._s(s.endtime_cn))])]):t._e(),t._v(" "),a("div",{staticClass:"mission-award"},[a("span",[t._v("任务奖励：")]),t._v(" "),a("span",[t._v(t._s(s.award_cn))])])])]),t._v(" "),1==s.status?a("div",{staticClass:"mission-footer"},["oneChargeFee"==s.task_type?a("router-link",{staticClass:"itag itag-danger",attrs:{to:t.util.getUrl({path:"pages/member/recharge"})}},[t._v("去充值")]):"oneOrderFee"==s.task_type?a("router-link",{staticClass:"itag itag-danger",attrs:{to:t.util.getUrl({path:"pages/home/index"})}},[t._v("去完成")]):t._e()],1):t._e()])}),t._v(" "),t.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[t._v("已经到底了")])]):t._e()],2)],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var r=a("VU/8")(n,o,!1,function(t){a("7lpK")},null,null);s.default=r.exports}});
//# sourceMappingURL=72.6c1b4fa5023dfd905d93.js.map