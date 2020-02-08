webpackJsonp([75],{"0S5f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("Cz8s"),s=e("deIj"),n={components:{publicHeader:a.a},data:function(){return{page_title:"",datePicker:{type:"",maxDate:new Date(2050,12),currentDate:new Date,status:!1,start:"",end:""},filter:{items:{type:""}},activity:{discount:0,use_days_limit:0,amount:0},showPreLoading:!0,islegal:!1}},methods:{onLoad:function(){var t=this;Object(s.a)({vue:t,url:"manage/activity/index/activity_svipRedpacket",data:{filter:this.filter.items},success:function(i){t.islegal=!0,t.page_title=i.page_title;var e=t.util.formatDate(t.datePicker.currentDate);t.datePicker.start=t.datePicker.end=e}})},onToggleDatePicker:function(t){this.datePicker.status=!this.datePicker.status,t&&(this.datePicker.type=t)},onConfirmTime:function(t){var i=this.util.formatDate(t);this.datePicker[this.datePicker.type]=i,this.onToggleDatePicker()},onSubmit:function(){if(!this.islegal)return!1;if(!this.activity.discount)return this.util.$toast("红包金额不能为空"),!1;if(this.activity.use_days_limit<0)return this.util.$toast("红包有效期必须大于或等于零"),!1;if(this.activity.amount<=0)return this.util.$toast("每日限领红包数量必须大于零"),!1;var t={starttime:this.datePicker.start,endtime:this.datePicker.end,discount:this.activity.discount,use_days_limit:this.activity.use_days_limit,amount:this.activity.amount};Object(s.c)({vue:this,url:"manage/activity/index/activity_svipRedpacket",data:{type:this.filter.items.type,params:t},redirect:this.util.getUrl({path:"pages/activity/index"})})}},mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&this.query.type&&(this.filter.items.type=this.query.type)}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"activity-svipRedpacket"}},[e("public-header",{attrs:{title:t.page_title}}),t._v(" "),e("div",{staticClass:"content"},[e("van-cell-group",{staticClass:"margin-10-t"},[e("van-cell",[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("开始时间")]),t._v(" "),e("div",{staticClass:"c-gray",attrs:{slot:"right-icon"},on:{click:function(i){t.onToggleDatePicker("start")}},slot:"right-icon"},[t._v("\n\t\t\t\t\t"+t._s(this.datePicker.start?this.datePicker.start:"点击选择")+"\n\t\t\t\t\t"),e("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),e("van-cell",[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("结束时间")]),t._v(" "),e("div",{staticClass:"c-gray",attrs:{slot:"right-icon"},on:{click:function(i){t.onToggleDatePicker("end")}},slot:"right-icon"},[t._v("\n\t\t\t\t\t"+t._s(this.datePicker.end?this.datePicker.end:"点击选择")+"\n\t\t\t\t\t"),e("van-icon",{attrs:{name:"arrow"}})],1)])],1),t._v(" "),e("van-cell-group",{staticClass:"margin-10-t"},[e("van-cell",{attrs:{title:"红包金额"}},[e("div",{staticClass:"input-unit",attrs:{slot:"right-icon"},slot:"right-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.discount,expression:"activity.discount"}],attrs:{type:"number"},domProps:{value:t.activity.discount},on:{input:function(i){i.target.composing||t.$set(t.activity,"discount",i.target.value)}}}),t._v(" "),e("span",[t._v("元")])])]),t._v(" "),e("van-cell",{attrs:{title:"领取后几天内有效"}},[e("div",{staticClass:"input-unit",attrs:{slot:"right-icon"},slot:"right-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.use_days_limit,expression:"activity.use_days_limit"}],attrs:{type:"number"},domProps:{value:t.activity.use_days_limit},on:{input:function(i){i.target.composing||t.$set(t.activity,"use_days_limit",i.target.value)}}}),t._v(" "),e("span",[t._v("天")])])]),t._v(" "),e("van-cell",{attrs:{title:"每日发放红包数量"}},[e("div",{staticClass:"input-unit",attrs:{slot:"right-icon"},slot:"right-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.amount,expression:"activity.amount"}],attrs:{type:"number"},domProps:{value:t.activity.amount},on:{input:function(i){i.target.composing||t.$set(t.activity,"amount",i.target.value)}}}),t._v(" "),e("span",[t._v("个")])])])],1),t._v(" "),e("div",{staticClass:"padding-15"},[e("van-button",{staticClass:"font-16 bg-info",attrs:{size:"normal",disabled:!t.islegal,block:""},on:{click:function(i){t.onSubmit()}}},[t._v("确认并保存")])],1)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e(),t._v(" "),e("van-popup",{staticClass:"popup-time",attrs:{position:"bottom"},model:{value:t.datePicker.status,callback:function(i){t.$set(t.datePicker,"status",i)},expression:"datePicker.status"}},[e("van-datetime-picker",{attrs:{type:"datetime","min-data":t.datePicker.currentDate,"max-date":t.datePicker.maxDate},on:{confirm:t.onConfirmTime,cancel:t.onToggleDatePicker},model:{value:t.datePicker.currentDate,callback:function(i){t.$set(t.datePicker,"currentDate",i)},expression:"datePicker.currentDate"}})],1)],1)},staticRenderFns:[]};var c=e("VU/8")(n,r,!1,function(t){e("jkyv")},null,null);i.default=c.exports},jkyv:function(t,i){}});
//# sourceMappingURL=75.9eb84dea333c8d8ee85b.js.map