webpackJsonp([111],{K9hs:function(s,a){},jt6Z:function(s,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=e("Gu7T"),i=e.n(d),t=e("Cz8s"),l=e("deIj"),r={data:function(){return{order:{address:"",username:"",sex:"",mobile:""},addresses:{available:[],dis_available:[]},config:{},selectIndex:-1,islegal:!1,showPreLoading:!0}},components:{PublicHeader:t.a},methods:{onLoad:function(){var s=this;Object(l.a)({vue:s,url:"wmall/order/index/update_address",data:{id:s.id},success:function(a){s.order=s.util.extend(s.order,a.order),a.addresses&&a.addresses.available&&a.addresses.available.length>0&&(s.addresses.available=[].concat(i()(a.addresses.available))),a.addresses&&a.addresses.dis_available&&a.addresses.dis_available.length>0&&(s.addresses.dis_available=[].concat(i()(a.addresses.dis_available))),s.config=s.util.extend(s.config,a.config),s.islegal=!0}})},onSelectAddress:function(s){s!=this.selectIndex&&(this.selectIndex=s)},onSubmit:function(){var s=this,a=s.selectIndex;a<0||!s.addresses.available[a]||!s.islegal||(s.islegal=!1,Object(l.c)({vue:s,url:"wmall/order/index/update_address",confirm:"确认修改该订单的收货地址吗",data:{id:s.id,address_id:s.addresses.available[a].id},success:function(a){s.util.$toast(a,s.util.getUrl({path:"/pages/order/detail",query:{id:s.id}}),1500,"replace")},fail:function(a){s.util.$toast(a),s.islegal=!0},cancel:function(){s.islegal=!0}}))}},mounted:function(){var s=this.util.parseQuery(this.$route.query);this.id=s.id,this.onLoad()}},n={render:function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{attrs:{id:"order-address"}},[e("public-header",{attrs:{title:"修改收货信息"}},[e("div",{staticClass:"font-16",attrs:{slot:"right"},on:{click:function(a){return s.util.jsUrl("/pages/member/addressPost",{sid:s.order.sid,orderId:s.order.id})}},slot:"right"},[s._v("新增地址")])]),s._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"header-remind flex"},[e("div",{staticClass:"icon icon-notice font-18 c-gray"}),s._v(" "),e("div",{staticClass:"padding-5-l c-gray"},[s._v("温馨提示: 当前订单仅能修改"+s._s(s.config.address_update_num)+"次, 只支持将地址修改为距离原地址"+s._s(s.config.newaddress_distance)+"km以内的地点")])]),s._v(" "),e("div",{staticClass:"address-now"},[e("div",{staticClass:"icon icon-location font-18 c-gray"}),s._v(" "),e("div",{staticClass:"padding-10-l"},[e("div",{staticClass:"font-14 c-gray"},[s._v("当前下单地址")]),s._v(" "),e("div",{staticClass:"font-16 padding-10-t"},[s._v(s._s(s.order.address))]),s._v(" "),e("div",{staticClass:"font-14 c-gray padding-10-t flex"},[e("div",[s._v(s._s(s.order.username)+"("+s._s(s.order.sex)+")")]),s._v(" "),e("div",{staticClass:"padding-15-l"},[s._v(s._s(s.order.mobile))])])])]),s._v(" "),s.addresses.available.length>0?[e("div",{staticClass:"padding-10-tb padding-15-lr c-gray font-14"},[s._v("可更改地址")]),s._v(" "),e("div",{staticClass:"address-list"},s._l(s.addresses.available,function(a,d){return e("div",{key:a.id,staticClass:"address-item flex van-hairline--top",on:{click:function(a){return a.preventDefault(),a.stopPropagation(),s.onSelectAddress(d)}}},[e("div",{staticClass:"address-icon"},[e("i",{staticClass:"icon",class:{"icon-check":d==s.selectIndex}})]),s._v(" "),e("div",{staticClass:"flex-lr address-info-group"},[e("div",{staticClass:"address-info"},[e("div",{staticClass:"font-14 ellipsis"},[s._v(s._s(a.address))]),s._v(" "),e("div",{staticClass:"font-14 c-gray padding-5-t"},[s._v(s._s(a.realname)+"("+s._s(a.sex)+")"),e("span",{staticClass:"padding-15-l font-14 c-gray"},[s._v(s._s(a.mobile))])])]),s._v(" "),e("div",{staticClass:"icon icon-edit",on:{click:function(e){return s.util.jsUrl("/pages/member/addressPost",{id:a.id,sid:s.order.sid,orderId:s.order.id})}}})])])}),0)]:s._e(),s._v(" "),s.addresses.dis_available.length>0?[e("div",{staticClass:"padding-10-tb padding-15-lr c-gray font-14"},[s._v("超出可更改范围地址")]),s._v(" "),e("div",{staticClass:"address-list address-more"},s._l(s.addresses.dis_available,function(a,d){return e("div",{key:a.id,staticClass:"address-item flex van-hairline--top"},[e("div",{staticClass:"address-icon"}),s._v(" "),e("div",{staticClass:"flex-lr address-info-group"},[e("div",{staticClass:"address-info"},[e("div",{staticClass:"font-14 ellipsis c-gray flex"},[s._v(s._s(a.address))]),s._v(" "),e("div",{staticClass:"font-14 c-gray padding-5-t"},[s._v(s._s(a.realname)+"("+s._s(a.sex)+")"),e("span",{staticClass:"padding-15-l font-14 c-gray"},[s._v(s._s(a.mobile))])])])])])}),0)]:s._e(),s._v(" "),e("div",{staticClass:"address-btn ",class:{disabled:s.selectIndex<0||!s.islegal},on:{click:s.onSubmit}},[s._v("确认修改")])],2),s._v(" "),s.showPreLoading?e("iloading"):s._e()],1)},staticRenderFns:[]};var c=e("VU/8")(r,n,!1,function(s){e("K9hs")},null,null);a.default=c.exports}});
//# sourceMappingURL=111.033d9044bdfbe78b6e6e.js.map