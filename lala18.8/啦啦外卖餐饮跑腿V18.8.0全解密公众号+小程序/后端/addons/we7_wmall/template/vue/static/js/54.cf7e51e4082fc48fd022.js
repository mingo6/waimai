webpackJsonp([54],{OB9n:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Cz8s"),i=r("deIj"),o={data:function(){return{id:0,order:{},showPreLoading:!0}},components:{PublicHeader:a.a},methods:{onLoad:function(){var t=this;Object(i.a)({vue:this,url:"wmall/order/index/order_info_update",data:{id:this.id},success:function(e){t.order=e.order}})}},mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&this.query.id&&(this.id=this.query.id)}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"order-op"}},[r("public-header",{attrs:{title:"修改订单信息"}}),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"header-remind c-gray"},[t._v("温馨提示: 订单支付后无法修改以下信息，请仔细确认")]),t._v(" "),r("van-cell-group",[r("van-cell",{attrs:{to:t.util.getUrl({path:"pages/order/opUpdate",query:{type:"note",id:t.order.id}}),title:"备注"}},[r("div",{staticClass:"flex c-gray",attrs:{slot:"right-icon"},slot:"right-icon"},[t.order.note?r("span",[t._v("点击修改")]):r("span",[t._v("口味、偏好等要求")]),t._v(" "),r("van-icon",{staticClass:"margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),t._e(),t._v(" "),r("van-cell",{attrs:{to:t.util.getUrl({path:"pages/order/opUpdate",query:{type:"mobile",id:t.order.id}}),title:"收货电话"}},[r("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[r("span",[t._v(t._s(t.order.mobile))]),t._v(" "),r("van-icon",{staticClass:"margin-5-l c-gray",attrs:{name:"arrow"}})],1)]),t._v(" "),r("van-cell",{attrs:{to:t.util.getUrl({path:"pages/order/opUpdate",query:{type:"person_num",id:t.order.id}}),title:"餐具数量"}},[r("div",{staticClass:"flex c-gray",attrs:{slot:"right-icon"},slot:"right-icon"},[t.order.person_num?r("span",[t._v(t._s(t.order.person_num)+"套")]):r("span",[t._v("未选择")]),t._v(" "),r("van-icon",{staticClass:"margin-5-l",attrs:{name:"arrow"}})],1)])],1)],1),t._v(" "),t.showPreLoading?r("iloading"):t._e()],1)},staticRenderFns:[]};var n=r("VU/8")(o,s,!1,function(t){r("ooVM")},null,null);e.default=n.exports},ooVM:function(t,e){}});
//# sourceMappingURL=54.cf7e51e4082fc48fd022.js.map