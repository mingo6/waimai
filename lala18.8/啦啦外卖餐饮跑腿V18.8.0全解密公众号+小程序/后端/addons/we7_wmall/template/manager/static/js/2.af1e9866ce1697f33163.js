webpackJsonp([2],{Cu9e:function(a,t){},lGS2:function(a,t,s){"use strict";s.d(t,"a",function(){return i});var r=s("woOf"),e=s.n(r),n=s("EuEE");s("YaEn");function i(a){var t=a.order,s=a.type,r=function(a){return{cancel:{tip:"确定取消订单吗",success_status:7},refund_handle:{tip:"确定发起退款吗",success_status:2},refund_status:{tip:"确定设置为已退款吗",success_status:3},team_success:{tip:"确定立即成团吗",success_status:3},team_cancel:{tip:"确定取消成团吗",success_status:7}}[a]}(s),i=r.success_status,o={id:t.id};if("team_success"==s)var c="manage/gohome/order/cancel";else{"team_cancel"==s&&(o.team_cancel=1,s="cancel");c="manage/gohome/order/"+s}var d={url:c,data:o,confirm:r.tip,success:function(t){n.a.$toast(t),"detail"==a.from?("refund_handle"==s||"refund_status"==s?a.vue.order.refund_status=i:a.vue.order.status=i,a.vue.order=e()({},a.vue.order)):"refund_handle"==s||"refund_status"==s?a.vue.records.data[a.index].refund_status=i:a.vue.records.data.splice(a.index,1)}};n.a.jspost(d)}},wIgR:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("woOf"),e=s.n(r),n=s("Cz8s"),i=s("deIj"),o=s("lGS2"),c={data:function(){return{id:123,order:{overtime:"",store:{},goods:{}},showPreLoading:!0,remarkShow:!1,remark:""}},components:{publicHeader:n.a},methods:{onLoad:function(){var a=this;Object(i.a)({vue:a,url:"manage/gohome/order/detail",data:{id:a.id},success:function(t){a.order=a.util.extend(a.order,t.order)}})},onRemark:function(a){var t=this;if("submit"==a){if(!t.remark)return void t.util.$toast("请先输入备注");Object(i.c)({vue:t,url:"manage/gohome/order/remark",data:{id:t.id,remark:t.remark},success:function(a){t.util.$toast(a),t.remarkShow=!1,t.order.remark=t.remark,t.order=e()({},t.order)}})}t.remarkShow=!t.remarkShow},onChangeStatus:function(a){Object(o.a)({vue:this,type:a,from:"detail",order:this.order})}},mounted:function(){this.$route.query&&this.$route.query.id&&(this.id=this.$route.query.id),this.onLoad()}},d={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"gohome-order-detail"}},[s("public-header",{attrs:{title:"订单详情"}}),a._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"goods-info margin-10 padding-15 bg-default radius-3"},[s("div",{staticClass:"flex-lr van-hairline--bottom padding-10-b"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"number"},[a._v("#"+a._s(a.order.id))]),a._v(" "),a.order.order_type_all?s("div",{staticClass:"itag",class:a.order.order_type_all.css},[a._v(a._s(a.order.order_type_all.text))]):a._e()]),a._v(" "),s("div",{staticClass:"font-14 c-danger"},[a._v(a._s(a.order.status_cn))])]),a._v(" "),s("div",{staticClass:"padding-15-tb flex-lr van-hairline--bottom"},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:a.order.goods.thumb,alt:""}})]),a._v(" "),s("div",{staticClass:"info"},[s("p",[a._v(a._s(a.order.goods.name))]),a._v(" "),s("div",{staticClass:"flex-lr w-100"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"c-danger font-16 font-500"},[a._v("¥"+a._s(a.order.final_fee))]),a._v(" "),s("div",{staticClass:"c-gray font-12 line-through margin-10-l"},[a._v("¥"+a._s(a.order.goods.oldprice))])]),a._v(" "),s("span",{staticClass:"c-gray"},[a._v("x"+a._s(a.order.num))])])])]),a._v(" "),s("div",{staticClass:"padding-15-tb van-hairline--bottom"},[s("div",{staticClass:"flex-lr font-14"},[s("div",{staticClass:"c-gray"},[a._v("总价")]),a._v(" "),s("div",[a._v("￥"+a._s(a.order.final_fee))])])]),a._v(" "),s("div",{staticClass:"padding-15-t"},[s("div",{staticClass:"flex-lr"},[s("div",{staticClass:"c-gray"},[a._v("预计收入")]),a._v(" "),s("div",{staticClass:"price"},[a._v("￥"+a._s(a.order.final_fee))])])])]),a._v(" "),s("div",{staticClass:"margin-10 padding-15 bg-default radius-3 font-13"},[s("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[a._v("预留信息")]),a._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("下单顾客：")]),a._v(" "),s("van-col",{attrs:{span:"18"}},[a._v(a._s(a.order.username))])],1),a._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("手机号：")]),a._v(" "),s("van-col",{attrs:{span:"18"}},[a._v(a._s(a.order.mobile))])],1)],1),a._v(" "),s("div",{staticClass:"margin-10 padding-15 bg-default radius-3 font-13"},[s("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[a._v("订单信息")]),a._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("订单编号：")]),a._v(" "),s("van-col",{attrs:{span:"18"}},[a._v(a._s(a.order.ordersn))])],1),a._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("支付方式：")]),a._v(" "),s("van-col",{attrs:{span:"18"}},[a._v(a._s(a.order.pay_type_cn))])],1),a._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("下单时间：")]),a._v(" "),s("van-col",{attrs:{span:"18"}},[a._v(a._s(a.order.addtime_cn))])],1),a._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("支付时间：")]),a._v(" "),s("van-col",{attrs:{span:"18"}},[a._v(a._s(a.order.paytime_cn))])],1),a._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("买家备注：")]),a._v(" "),s("van-col",{staticClass:"remark",attrs:{span:"18"}},[a._v(a._s(a.order.buyremark?a.order.buyremark:"无"))])],1),a._v(" "),a.order.remark?s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[a._v("卖家备注：")]),a._v(" "),s("van-col",{staticClass:"remark",attrs:{span:"18"}},[a._v(a._s(a.order.remark))])],1):a._e()],1),a._v(" "),s("div",{staticClass:"margin-10 btn-group1"},[s("div",{staticClass:"btn-item bg-info",on:{click:function(t){a.onRemark()}}},[a._v("备注")]),a._v(" "),a.order.status<5?s("div",{staticClass:"btn-item bg-danger",on:{click:function(t){a.onChangeStatus("cancel")}}},[a._v("取消")]):a._e(),a._v(" "),"pintuan"==a.order.order_type&&1==a.order.is_team?[2==a.order.status?s("div",{staticClass:"btn-item bg-success",on:{click:function(t){a.onChangeStatus("team_success")}}},[a._v("立即成团")]):a._e(),a._v(" "),2==a.order.status||3==a.order.status?s("div",{staticClass:"btn-item bg-danger",on:{click:function(t){a.onChangeStatus("team_cancel")}}},[a._v("取消成团")]):a._e()]:a._e()],2)]),a._v(" "),a.showPreLoading?s("iloading"):a._e(),a._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:a.remarkShow,callback:function(t){a.remarkShow=t},expression:"remarkShow"}},[s("div",{staticClass:"popup-title"},[s("span",{staticClass:"c-gray",on:{click:function(t){a.remarkShow=!1}}},[a._v("取消")]),a._v(" "),s("span",{staticClass:"c-info",on:{click:function(t){a.onRemark("submit")}}},[a._v("确定")])]),a._v(" "),s("van-field",{staticClass:"margin-10-t",attrs:{label:"备注",type:"textarea",placeholder:"请输入备注",rows:"5"},model:{value:a.remark,callback:function(t){a.remark=t},expression:"remark"}})],1)],1)},staticRenderFns:[]};var v=s("VU/8")(c,d,!1,function(a){s("Cu9e")},null,null);t.default=v.exports}});
//# sourceMappingURL=2.af1e9866ce1697f33163.js.map