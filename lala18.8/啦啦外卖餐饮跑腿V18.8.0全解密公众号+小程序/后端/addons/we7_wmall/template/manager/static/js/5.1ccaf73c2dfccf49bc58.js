webpackJsonp([5],{"0wiy":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("woOf"),a=i.n(e),n=i("Cz8s"),o=i("mzkE"),r={replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(t,s){this.gogogo()}},props:{iclass:{type:String,default:"flex timer c-gray"},tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:""},secondsFixed:{type:Boolean,default:!1}},mounted:function(){this.gogogo()},methods:{gogogo:function(){var t=this;this.startTime?10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime:this.star=(new Date).getTime(),this.endTime&&(10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime),this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end?this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout(function(){t.runTime(t.star,t.current,t.start_message)},1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout(function(){t.runTime(t.end,t.star,t.end_message,!0)},1)):this.current>this.star&&(this.$set(this,"tipShow",!0),setTimeout(function(){t.runTime(t.current,t.star,"","addtime")},1))},runTime:function(t,s,i,e){var a=this,n=this.msTime,o=t-s;if(o>0){this.msTime.show=!0,n.day=Math.floor(o/864e5),o-=864e5*n.day,n.hour=Math.floor(o/36e5),o-=36e5*n.hour,n.minutes=Math.floor(o/6e4),o-=6e4*n.minutes,n.seconds=Math.floor(o/1e3).toFixed(0),o-=1e3*n.seconds,n.hour<10&&(n.hour="0"+n.hour),n.minutes<10&&(n.minutes="0"+n.minutes),n.seconds<10&&(n.seconds="0"+n.seconds);var r=Date.now(),c=Date.now();setTimeout(function(){"addtime"==e?a.runTime(t+=1e3,s,"","addtime"):e?a.runTime(a.end,s+=1e3,i,!0):a.runTime(a.star,s+=1e3,i)},1e3-(c-r))}else i()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout(function(){t.runTime(t.end,t.star,t.end_message,!0)},1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.msTime.show?i("div",{class:t.iclass},[t.msTime.day>0?[i("span",[t._v(t._s(t.msTime.day))]),t._v(t._s(t.dayTxt)+"\n\t\t")]:t._e(),t._v(" "),t.msTime.hour>0?[i("span",[t._v(t._s(t.msTime.hour))]),t._v(t._s(t.hourTxt)+"\n\t\t")]:t._e(),t._v(" "),i("span",[t._v(t._s(t.msTime.minutes))]),t._v(t._s(t.minutesTxt)+"\n\t\t"),i("span",[t._v(t._s(t.msTime.seconds))]),t._v(t._s(t.secondsTxt)+"\n\t")],2):t._e()},staticRenderFns:[]},d=i("VU/8")(r,c,!1,null,null,null).exports,l=i("deIj"),v=i("nZVv"),_={components:{publicHeader:n.a,publicFooter:o.a,countDown:d},data:function(){return{isRefresh:!1,filter:{items:{status:"1"}},showPreLoading:!0,records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},store:{},confirmDialog:!1,code:"",menufooter:{},hasFNScanner:!1}},methods:{onUpdateOrderStatus:function(t,s){Object(v.a)({vue:this,type:s,index:t,order:this.records.data[t]})},onLoad:function(t){var s=this;Object(l.b)({vue:s,force:t,url:"manage/order/takeout/list",recordsName:"orders",data:{menufooter:1},success:function(t){s.store=t.store,s.isRefresh=!1}})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t,this.onLoad(!0))},onToggleGoodsShow:function(t){var s=this;this.$nextTick().then(function(){s.records.data[t].showGoods=!s.records.data[t].showGoods,s.records=a()({},s.records)})},onToggleRefundShow:function(t){var s=this;this.$nextTick().then(function(){s.records.data[t].showRefund=!s.records.data[t].showRefund,s.records=a()({},s.records)})},onPushUU:function(t,s){if(!s)return!1;var i=this;Object(l.c)({vue:i,url:"manage/order/takeout/push_uupaotui",data:{id:s},success:function(t){Object(l.c)({vue:i,url:"manage/order/takeout/push_uupaotui",confirm:t.tips,data:{id:t.id,push:1}})}})},onCopy:function(t){this.util.$toast("复制成功")},onCodeConfirm:function(){var t=this.code;t?Object(v.c)({vue:this,code:t,confirm:""}):this.util.$toast("请输入核销码")},onHandleGoodsRefund:function(t,s,i){Object(l.c)({vue:this,url:"manage/order/takeout/handleGoodsRefund",data:{type:t,order_id:orderId,refund_id:i},success:function(t){}})}},mounted:function(){var t=this;t.util.ilogin({success:function(s){s&&s.hasFNScanner&&(t.hasFNScanner=!0),t.onLoad()}}),this.util.imap(),this.util.icloudapi()},created:function(){this.query=this.$route.query,this.query&&this.query.status&&(this.filter.items.status=this.query.status)}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"order-list"}},[i("public-header",{attrs:{title:"订单管理"}},[i("div",{staticClass:"flex",attrs:{slot:"right"},slot:"right"},[i("i",{staticClass:"icon icon-edit",on:{click:function(s){t.confirmDialog=!0}}}),t._v(" "),t.hasFNScanner?[i("i",{staticClass:"icon icon-scan  margin-15-l",on:{click:function(s){t.util.scanQRCode()}}})]:t._e()],2)]),t._v(" "),i("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"tabs flex-lr"},[i("div",{staticClass:"tabs-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[i("div",{staticClass:"mark"},[t._v("新")]),t._v(" "),i("div",{staticClass:"title"},[t._v("新订单")])]),t._v(" "),i("div",{staticClass:"tabs-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[i("div",{staticClass:"mark"},[t._v("备")]),t._v(" "),i("div",{staticClass:"title"},[t._v("备餐中")])]),t._v(" "),i("div",{staticClass:"tabs-item",class:{active:3==t.filter.items.status},on:{click:function(s){t.onToggleStatus(3)}}},[i("div",{staticClass:"mark"},[t._v("待")]),t._v(" "),i("div",{staticClass:"title"},[t._v("待配送")])]),t._v(" "),i("div",{staticClass:"tabs-item",class:{active:4==t.filter.items.status},on:{click:function(s){t.onToggleStatus(4)}}},[i("div",{staticClass:"mark"},[t._v("送")]),t._v(" "),i("div",{staticClass:"title"},[t._v("配送中")])]),t._v(" "),i("div",{staticClass:"tabs-item",class:{active:5==t.filter.items.status},on:{click:function(s){t.onToggleStatus(5)}}},[i("div",{staticClass:"mark"},[t._v("完")]),t._v(" "),i("div",{staticClass:"title"},[t._v("已完成")])]),t._v(" "),i("div",{staticClass:"tabs-item",class:{active:6==t.filter.items.status},on:{click:function(s){t.onToggleStatus(6)}}},[i("div",{staticClass:"mark"},[t._v("消")]),t._v(" "),i("div",{staticClass:"title"},[t._v("已取消")])])]),t._v(" "),i("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无数据")])]):i("van-list",{staticClass:"order-list padding-10 ",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},t._l(t.records.data,function(s,e){return i("div",{key:s.id,staticClass:"order-item bg-default font-14",class:{meituan:"meituan"==s.order_plateform&&!s.is_reserve,eleme:"eleme"==s.order_plateform&&!s.is_reserve,reserve:1==s.is_reserve}},[i("div",{staticClass:"order-nt bg-gray flex-lr padding-10-tb padding-10-r "},[i("div",{staticClass:"number-time flex"},[i("div",{staticClass:"number"},[t._v(t._s(s.serial_sn))]),t._v(" "),i("div",{staticClass:"time c-info"},[t._v(t._s(s.delivery_time))])]),t._v(" "),i("div",[t._v(t._s(s.order_status_cn))])]),t._v(" "),s.customer_cancel_endtime>0?i("div",{staticClass:"cancel-count-down flex"},[i("i",{staticClass:"icon icon-time"}),t._v("本单请在\n\t\t\t\t\t\t"),i("count-down",{staticClass:"c-danger margin-5-l margin-5-r",attrs:{endTime:s.customer_cancel_endtime}}),t._v("\n\t\t\t\t\t\t分钟后开始备餐\n\t\t\t\t\t")],1):t._e(),t._v(" "),i("div",{staticClass:"padding-10-lr padding-5-b"},[i("div",{staticClass:"flex-lr padding-10-t"},[i("div",{staticClass:"font-bold font-18"},[t._v(t._s(s.username)+"("+t._s(s.sex)+")")]),t._v(" "),s.location_x&&s.location_y?i("div",{staticClass:"icon icon-locationfill",on:{click:function(i){t.util.jsLocation({lat:s.location_x,lng:s.location_y,address:s.address})}}}):t._e()]),t._v(" "),i("div",{staticClass:"flex-lr c-info margin-5-t"},[i("div",{staticClass:"icon icon-telephone",on:{click:function(i){t.util.jsTel(s.mobile)}}},[i("span",{staticClass:"margin-5-l"},[t._v(t._s(s.mobile))])]),t._v(" "),2==s.order_type?i("div",{staticClass:"order-type bg-success"},[t._v("到店自提")]):t._e()]),t._v(" "),i("div",{staticClass:"c-gray flex margin-5-t"},[i("div",{staticClass:"accept-address ellipsis"},[t._v(t._s(s.address))]),t._v(" "),s.distance>0?[i("div",{staticClass:"padding-10-lr"},[t._v("|")]),t._v(" "),i("div",[t._v(t._s(s.distance)+"km")])]:t._e()],2)]),t._v(" "),i("div",{staticClass:"divide"},[i("div",{staticClass:"divide-line"})]),t._v(" "),i("div",{staticClass:"goods-info "},[i("div",{staticClass:"flex-lr padding-10-lr padding-5-t padding-10-b"},[i("div",{staticClass:"font-18 font-bold"},[t._v("商品")]),t._v(" "),i("div",{staticClass:"c-info flex goods-show",on:{click:function(s){t.onToggleGoodsShow(e)}}},[i("span",{staticClass:"margin-5-r"},[t._v("展开")]),t._v(" "),i("i",{staticClass:"icon icon-arrow-down"})])]),t._v(" "),s.showGoods?[i("van-row",{staticClass:"padding-10 "},[i("van-col",{staticClass:"c-danger",attrs:{span:"3"}},[t._v("备注:")]),t._v(" "),i("van-col",{staticClass:"line-12",attrs:{span:"21"}},[t._v(t._s(s.note?s.note:"无"))])],1),t._v(" "),i("div",{staticClass:"goods-list"},[t._l(s.goods,function(s){return i("van-row",{key:s.goods_id,staticClass:"goods-item"},[i("van-col",{attrs:{span:"16"}},[t._v(t._s(s.goods_title))]),t._v(" "),i("van-col",{staticClass:"c-danger",attrs:{span:"4"}},[t._v("x"+t._s(s.goods_num))]),t._v(" "),i("van-col",{staticClass:"text-right",attrs:{span:"4"}},[t._v("¥"+t._s(s.goods_price))])],1)}),t._v(" "),i("div",{staticClass:"other-fee flex-lr"},[i("div",[t._v("餐盒费")]),t._v(" "),i("div",[t._v("¥"+t._s(s.box_price))])]),t._v(" "),i("div",{staticClass:"other-fee flex-lr"},[i("div",[t._v("包装费")]),t._v(" "),i("div",[t._v("¥"+t._s(s.pack_fee))])]),t._v(" "),i("div",{staticClass:"other-fee flex-lr"},[i("div",[t._v("配送费")]),t._v(" "),i("div",[t._v("¥"+t._s(s.delivery_fee))])]),t._v(" "),s.person_num>0?i("div",{staticClass:"other-fee flex-lr"},[i("div",[t._v("餐具数量")]),t._v(" "),i("div",[t._v(t._s(s.person_num)+"套")])]):t._e()],2),t._v(" "),i("div",{staticClass:"padding-10-lr"},[i("div",{staticClass:"padding-10-tb van-hairline--bottom flex-lr font-16 "},[i("div",{staticClass:"font-bold"},[t._v("小计")]),t._v(" "),i("div",{staticClass:"font-bold"},[t._v("¥"+t._s(s.total_fee))])])])]:t._e(),t._v(" "),i("div",{staticClass:"padding-10-lr padding-10-t padding-5-b"},[i("div",{staticClass:"flex-lr "},[i("div",{staticClass:"font-18 font-bold"},[t._v("本单预计收入")]),t._v(" "),i("div",{staticClass:"font-16 c-danger font-bold"},[t._v("¥"+t._s(s.store_final_fee))])]),t._v(" "),i("div",{staticClass:"margin-10-t flex"},[i("span",{staticClass:"c-gray margin-10-r"},[t._v("本单顾客实际支付:")]),t._v(" "),i("span",{staticClass:"c-danger"},[t._v("¥"+t._s(s.final_fee))])])])],2),t._v(" "),i("div",{staticClass:"divide"},[i("div",{staticClass:"divide-line"})]),t._v(" "),s.refund_data&&s.refund_data.length>0?[i("div",{staticClass:"refund-log"},[i("div",{staticClass:"flex-lr padding-10-lr padding-5-t padding-10-b"},[i("div",{staticClass:"font-18 font-bold"},[t._v("退款")]),t._v(" "),i("div",{staticClass:"c-info flex goods-show",on:{click:function(s){t.onToggleRefundShow(e)}}},[i("span",{staticClass:"margin-5-r"},[t._v("展开")]),t._v(" "),i("i",{staticClass:"icon icon-arrow-down"})])]),t._v(" "),t._l(s.refund_data,function(e){return[s.showRefund?i("van-steps",{attrs:{direction:"vertical",active:e.logs.length-1,"active-color":"#33aafc"}},[t._l(e.logs,function(a){return i("van-step",["apply"==a.type?[i("div",{staticClass:"flex-lr"},[i("span",{staticClass:"c-default font-bold"},[t._v(t._s(a.title))]),t._v(" "),i("span",{staticClass:"c-gray"},[t._v(t._s(a.addtime_cn))])]),t._v(" "),i("van-row",{staticClass:"margin-5-t"},[i("van-col",{attrs:{span:"4"}},[t._v("金额:")]),t._v(" "),i("van-col",{staticClass:"flex",attrs:{span:"20"}},[i("span",{staticClass:"c-danger"},[t._v("¥"+t._s(e.fee))]),t._v(" "),i("div",{staticClass:"flex margin-10-l",on:{click:function(s){t.util.jsAlert({title:"计价规则",message:"退款金额 = [(退款菜品现价+餐盒费） / （全部菜品现价总和+餐盒费)]  ×（最终支付价格 - 配送费 - 附加费）"})}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t计价规则 "),i("i",{staticClass:"icon icon-question1"})])])],1),t._v(" "),"goods"==e.type?i("van-row",{staticClass:"margin-5-t"},[i("van-col",{attrs:{span:"4"}},[t._v("商品:")]),t._v(" "),e.data?i("van-col",{attrs:{span:"20"}},t._l(e.data.refund_goods,function(s,e){return i("van-row",{key:e},[i("van-col",{staticClass:"ellipsis",attrs:{span:"15"}},[t._v(t._s(s.goods_title))]),t._v(" "),i("van-col",{staticClass:"text-right",attrs:{span:"3"}},[t._v("x"+t._s(s.total_num))]),t._v(" "),i("van-col",{staticClass:"text-right",attrs:{span:"6"}},[t._v("¥"+t._s(s.fee))])],1)})):t._e()],1):t._e(),t._v(" "),e.data.refund_info?i("van-row",{staticClass:"margin-5-t"},[i("van-col",{attrs:{span:"4"}},[t._v("理由:")]),t._v(" "),i("van-col",{attrs:{span:"20"}},[i("div",[t._v(t._s(e.data.refund_info.reason))]),t._v(" "),e.data.refund_info.thumbs?i("van-row",{attrs:{gutter:"10"}},t._l(e.data.refund_info.thumbs,function(t,s){return i("van-col",{key:s,attrs:{span:"8"}},[i("div",{staticClass:"refund-img"},[i("img",{staticClass:"img-100",attrs:{src:t,alt:""}})])])})):t._e()],1)],1):t._e()]:[i("div",{staticClass:"flex-lr"},[i("span",{staticClass:"c-default font-bold"},[t._v(t._s(a.title))]),t._v(" "),i("span",{staticClass:"c-gray"},[t._v(t._s(a.addtime_cn))])]),t._v(" "),i("div",{staticClass:"margin-5-t"},[t._v(t._s(s.note))])]],2)}),t._v(" "),t._e(),t._v(" "),t._e()],2):t._e()]})],2),t._v(" "),i("div",{staticClass:"divide"},[i("div",{staticClass:"divide-line"})])]:t._e(),t._v(" "),i("div",{staticClass:" action"},[1==s.status?[i("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(e,"handle")}}},[t._v("确认")]),t._v(" "),i("div",{staticClass:"action-item bg-danger",on:{click:function(s){t.onUpdateOrderStatus(e,"cancel")}}},[t._v("取消")])]:2==s.status||3==s.status?[1==s.order_type?[i("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(e,"notify_deliveryer_collect")}}},[t._v("通知配送")]),t._v(" "),1==s.delivery_type?[i("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(e,"direct_deliveryer")}}},[t._v("指定配送员")]),t._v(" "),i("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(e,"delivery_ing")}}},[t._v("设为配送中")])]:t._e(),t._v(" "),t.store.data.uupaotui&&1==t.store.data.uupaotui.status?i("div",{staticClass:"action-item bg-info",on:{click:function(i){t.onPushUU(e,s.id)}}},[t._v("UU配送")]):t._e()]:2==s.order_type?[1==s.is_pay?i("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(e,"end")}}},[t._v("已自提")]):t._e()]:t._e()]:t._e(),t._v(" "),[i("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(e,"end")}}},[t._v("完成")])],t._v(" "),s.order_type<=2&&s.status>1&&s.status<6?[i("router-link",{staticClass:"action-item bg-info",attrs:{to:t.util.getUrl({path:"pages/order/refund",query:{order_id:s.id}})}},[t._v("部分退款")])]:t._e(),t._v(" "),i("router-link",{staticClass:"action-item",attrs:{tag:"div",to:t.util.getUrl({path:"pages/order/detail",query:{id:s.id}})}},[t._v("详情")])],2),t._v(" "),i("div",{staticClass:"divide"},[i("div",{staticClass:"divide-line"})]),t._v(" "),i("div",{staticClass:"order-info flex-lr padding-10 bg-gray"},[i("div",{staticClass:"c-gray"},[i("div",{staticClass:"flex c-danger"},[i("div",{staticClass:"margin-10-r"},[t._v("下单时间:")]),t._v(" "),i("div",[t._v(t._s(s.addtime_cn))])]),t._v(" "),i("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:s.ordersn,expression:"item.ordersn",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"flex margin-10-t"},[i("div",{staticClass:"margin-10-r"},[t._v("单号:")]),t._v(" "),i("div",[t._v(t._s(s.ordersn))]),t._v(" "),i("div",{staticClass:"margin-10-l c-default"},[t._v("复制")])])]),t._v(" "),i("div",{staticClass:"flex-tb-center",on:{click:function(s){t.onUpdateOrderStatus(e,"print")}}},[i("div",{staticClass:"icon icon-print font-20"}),t._v(" "),i("div",{staticClass:"margin-5-t"},[t._v("打印("+t._s(s.print_nums>0?s.print_nums:"")+")")])])]),t._v(" "),1==s.is_pay&&"delivery"==s.pay_type?i("div",{staticClass:"pay-status delivery-pay"}):1==s.is_pay&&"delivery"!=s.pay_type?i("div",{staticClass:"pay-status have-pay"}):t._e()],2)}))],1)],1),t._v(" "),i("van-dialog",{attrs:{title:"自提订单核销","show-cancel-button":""},on:{confirm:t.onCodeConfirm},model:{value:t.confirmDialog,callback:function(s){t.confirmDialog=s},expression:"confirmDialog"}},[i("van-field",{attrs:{placeholder:"请输入核销码","input-align":"center"},model:{value:t.code,callback:function(s){t.code=s},expression:"code"}})],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var f=i("VU/8")(_,u,!1,function(t){i("CgdY")},null,null);s.default=f.exports},CgdY:function(t,s){}});
//# sourceMappingURL=5.1ccaf73c2dfccf49bc58.js.map