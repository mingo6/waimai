webpackJsonp([60],{LOMV:function(t,a){},ctmF:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Cz8s"),n=e("deIj"),i={components:{publicHeader:s.a},data:function(){return{timePicker:!1,minDate:new Date(2014,12,1),maxDate:new Date,currentDate:new Date,showPreLoading:!0,stat:{final_fee:0,store_final_fee:0,total_success_order:0,total_cancel_order:0,total_cancel_fee:0,avg_pre_order:0},days:0,timeType:"",stat_day:{start:this.util.formatDate(new Date,"date"),end:this.util.formatDate(new Date,"date")}}},methods:{onLoad:function(){Object(n.a)({vue:this,url:"manage/statcenter/order/index",data:{days:this.days,stat_day:this.stat_day},autoAssign:!0,variable:"stat"})},onTogglePicker:function(t){t&&(this.timeType=t),this.timePicker=!this.timePicker},onConfirmTime:function(t){t=this.util.formatDate(t,"date"),this.stat_day[this.timeType]=t,this.onTogglePicker()},onToggleTab:function(t){t!=this.days&&(this.days=t,-1!=this.days&&this.onLoad())}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"statcenter-order"}},[e("public-header",{attrs:{title:"营业统计"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"wrap-search"},[e("div",{staticClass:"tab-group"},[e("div",{staticClass:"tab-item",class:{active:0==t.days},on:{click:function(a){t.onToggleTab(0)}}},[t._v("今天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:7==t.days},on:{click:function(a){t.onToggleTab(7)}}},[t._v("近7天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:30==t.days},on:{click:function(a){t.onToggleTab(30)}}},[t._v("近30天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:-1==t.days},on:{click:function(a){t.onToggleTab(-1)}}},[t._v("自定义")])])]),t._v(" "),e("van-list",{staticClass:"border-0px"},[-1==t.days?e("div",{staticClass:"diy-time"},[e("span",{on:{click:function(a){t.onTogglePicker("start")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stat_day.start,expression:"stat_day.start"}],attrs:{type:"text",disabled:""},domProps:{value:t.stat_day.start},on:{input:function(a){a.target.composing||t.$set(t.stat_day,"start",a.target.value)}}})]),t._v(" "),e("span",{staticClass:"padding-15-lr c-gray"},[t._v("~")]),t._v(" "),e("span",{on:{click:function(a){t.onTogglePicker("end")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stat_day.end,expression:"stat_day.end"}],attrs:{type:"text",disabled:""},domProps:{value:t.stat_day.end},on:{input:function(a){a.target.composing||t.$set(t.stat_day,"end",a.target.value)}}})]),t._v(" "),e("van-button",{staticClass:"bg-info margin-10-l",attrs:{size:"mini",disabled:!t.stat_day.start||!t.stat_day.end},on:{click:t.onLoad}},[t._v("确定")])],1):t._e(),t._v(" "),e("van-cell-group",{staticClass:"border-0px"},[e("van-cell",{attrs:{title:"营业总额",value:"¥"+t.stat.final_fee}}),t._v(" "),e("van-cell",{attrs:{title:"总收入",value:"¥"+t.stat.store_final_fee}}),t._v(" "),e("van-cell",{attrs:{title:"有效订单量",value:t.stat.total_success_order}}),t._v(" "),e("van-cell",{attrs:{title:"客单价",value:"¥"+t.stat.avg_pre_order}}),t._v(" "),e("van-cell",{attrs:{title:"无效订单量",value:t.stat.total_cancel_order}}),t._v(" "),e("van-cell",{attrs:{title:"损失营业额",value:"¥"+t.stat.total_cancel_fee}})],1)],1),t._v(" "),e("div",{staticClass:"padding-15"},[e("router-link",{staticClass:"van-button van-button van-button--default van-button--normal van-button--block bg-info font-16",attrs:{to:t.util.getUrl({path:"/pages/statcenter/detail",query:{days:t.days,start:t.stat_day.start,end:t.stat_day.end}}),tag:"button"}},[t._v("查看详情")])],1)],1),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.timePicker,callback:function(a){t.timePicker=a},expression:"timePicker"}},[e("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:t.onTogglePicker,confirm:t.onConfirmTime},model:{value:t.currentDate,callback:function(a){t.currentDate=a},expression:"currentDate"}})],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var l=e("VU/8")(i,o,!1,function(t){e("LOMV")},null,null);a.default=l.exports}});
//# sourceMappingURL=60.d1e58818613cb11a4065.js.map