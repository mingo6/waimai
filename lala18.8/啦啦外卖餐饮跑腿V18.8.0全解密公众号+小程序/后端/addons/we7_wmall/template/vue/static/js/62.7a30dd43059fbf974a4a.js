webpackJsonp([62],{XSyN:function(t,i){},pmUY:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("Gu7T"),o=s.n(a),n=s("Cz8s"),c=s("KgXo"),e={data:function(){return{coupons:{loading:!1,finished:!1,data:[]},showLoading:!0}},components:{PublicHeader:n.a,loading:c.a},methods:{onLoad:function(){var t=this;if(this.coupons.finished)return!1;this.coupons.loading=!0,this.showLoading=!0,this.util.request({url:"wmall/channel/coupon/list",data:{min:this.coupons.min}}).then(function(i){var s=i.data.message;t.coupons.data=[].concat(o()(t.coupons.data),o()(s.message)),t.hideLoading(),s.message.length<15&&(t.coupons.finished=!0),t.coupons.loading=!1,t.coupons.min=s.min,s.min||(t.coupons.finished=!0)})},hideLoading:function(){this.showLoading=!1},onGetCoupon:function(t,i){var s=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:t}}).then(function(t){var a=t.data.message;a.errno||(s.coupons.data[i].get=!0),s.$toast(a.message)})}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"get-coupon"}},[s("public-header",{attrs:{title:"领券中心"}}),t._v(" "),s("div",{staticClass:"content"},[t.coupons.data.length>0?s("van-list",{attrs:{finished:t.coupons.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.coupons.loading,callback:function(i){t.$set(t.coupons,"loading",i)},expression:"coupons.loading"}},[s("div",{staticClass:"coupon-list"},[t._l(t.coupons.data,function(i,a){return[s("div",{staticClass:"coupon-item"},[s("div",{staticClass:"coupon-left"},[s("div",{staticClass:"triangle-border-left"},[s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div")]),t._v(" "),s("div",{staticClass:"img-div-backg"},[s("div",{staticClass:"img-div"},[s("img",{attrs:{src:i.logo,alt:""}})])]),t._v(" "),s("div",{staticClass:"pro-content"},[s("div",{staticClass:"pro-info"},[t._v(t._s(i.store_title))]),t._v(" "),s("div",{staticClass:"pro-price"},[s("div",{staticClass:"coupon-discount"},[t._v(t._s(i.discount)+"元")]),t._v(" "),s("div",{staticClass:"coupon-title"},[t._v(t._s(i.title))])]),t._v(" "),s("div",{staticClass:"pro-condition"},[t._v(t._s(i.couponInfo))])])]),t._v(" "),s("div",{staticClass:"coupon-right"},[s("div",{staticClass:"triangle-border-right"},[s("div",{staticClass:"circular0"}),t._v(" "),s("div",{staticClass:"circular1"}),t._v(" "),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"}),s("div",{staticClass:"i"})]),t._v(" "),s("div",{staticClass:"change-block"},[i.get?t._e():s("div",{staticClass:"diy-circle"},[s("div",{staticClass:"circle",staticStyle:{"{'background-color'":"item.percent > 50 ? '#E3BC03' : '#fff'}"}},[s("div",{staticClass:"circle_left",style:{transform:i.percent>50?"rotate("+i.percent/100*360-360+"deg)":"rotate(0deg)","background-color":i.percent>50?"#fff":"#E3BC03","z-index":5}},[s("div",{staticClass:"clip_left"})]),t._v(" "),s("div",{staticClass:"circle_right",style:{transform:i.percent<=50?"rotate("+i.percent/100*360+"deg)":"rotate(0deg)","background-color":i.percent>50?"#fff":"#E3BC03","z-index":10}},[s("div",{staticClass:"clip_right"})]),t._v(" "),s("div",{staticClass:"mask"},[t._v("\n\t\t\t\t\t\t\t\t\t\t已抢\n\t\t\t\t\t\t\t\t\t\t"),s("span",[t._v(t._s(i.percent))]),t._v("%\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),i.get?t._e():s("div",{staticClass:"coupon-btn",on:{click:function(s){return t.onGetCoupon(i.sid,a)}}},[t._v("\n\t\t\t\t\t\t\t\t立即领取\n\t\t\t\t\t\t\t")]),t._v(" "),i.get?s("div",{staticClass:"had"},[s("img",{attrs:{src:"http://cos.lalawaimai.com/we7_wmall/wxapp/gone.png"}})]):t._e(),t._v(" "),i.get?s("router-link",{staticClass:"coupon-btn coupon-btn-yellow",attrs:{to:t.util.getUrl({path:"/pages/store/goods",query:{sid:i.sid}})}},[t._v("\n\t\t\t\t\t\t\t\t去使用\n\t\t\t\t\t\t\t")]):t._e()],1)])])]})],2)]):s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/coupon_no_con.png",alt:""}}),t._v(" "),s("p",[t._v("没有可以领取的代金券")])])],1),t._v(" "),s("transition",{attrs:{name:"loading"}},[s("iloading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)],1)},staticRenderFns:[]};var l=s("VU/8")(e,d,!1,function(t){s("XSyN")},"data-v-7d018794",null);i.default=l.exports}});
//# sourceMappingURL=62.7a30dd43059fbf974a4a.js.map