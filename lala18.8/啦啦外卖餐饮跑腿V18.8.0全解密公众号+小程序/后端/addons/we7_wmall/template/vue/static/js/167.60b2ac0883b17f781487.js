webpackJsonp([167],{N7uu:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),o=i.n(e),a=i("NYxO"),d=i("Cz8s"),n=i("RoZr"),r=i("Vr3d"),c={data:function(){return{preLoading:!0,cart:{},store:{},goodsActive:{}}},components:{PublicHeader:d.a,StoreCart:n.a,GoodsHandle:r.a},methods:o()({},Object(a.b)(["replaceStore","replaceCart"]),{selectPinadan:function(t){this.pindan_id=t},onLoad:function(){var t=this;return this.$route.query.sid?(this.sid=this.$route.query.sid,this.$route.query.id?(this.id=this.$route.query.id,void this.util.request({url:"wmall/store/goods/detail",data:{sid:this.sid,id:this.id}}).then(function(s){t.preLoading=!1;var i=s.data.message;if(!i.errno){var e=(i=i.message).goodsDetail;t.goodsActive=e,t.cart=i.cart.message.cart,t.store=i.store,t.replaceStore(i.store),t.replaceCart(i.cart.message.cart)}})):(this.$toast("参数错误"),!1)):(this.$toast("参数错误"),!1)}}),computed:o()({},Object(a.c)(["istore","icart"])),created:function(){this.query=this.$route.query,this.query&&(this.pindan_id=0,this.query.pindan_id>0&&(this.pindan_id=this.query.pindan_id))},mounted:function(){this.onLoad()}},v={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"goods-detail"}},[i("public-header",{attrs:{title:"商品详情",textcolor:"#fff"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"goods-img"},[t.goodsActive.slides&&!t.goodsActive.slides.length?i("img",{attrs:{src:t.goodsActive.thumb_,alt:""}}):i("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(t.goodsActive.slides,function(t,s){return i("van-swipe-item",{key:s,attrs:{ss:""}},[i("img",{attrs:{src:t,alt:""}})])}),1)],1),t._v(" "),i("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsActive.title))]),t._v(" "),i("div",{staticClass:"sell-info"},[t._v("已售"+t._s(t.goodsActive.sailed)+"  好评"+t._s(t.goodsActive.comment_good))]),t._v(" "),i("div",{staticClass:"goods-num"},[i("van-row",[i("van-col",{staticClass:"price flex",attrs:{span:"18"}},[i("div",[t._v("\n\t\t\t\t\t\t¥ "),i("span",{staticClass:"fee"},[t._v(t._s(t.goodsActive.price))])]),t._v(" "),t.goodsActive.unitnum>1?i("div",[i("span",{staticClass:"goods-unitnum"},[t._v(t._s(t.goodsActive.unitnum_multi_cn)+"购")])]):t._e(),t._v(" "),1!=t.goodsActive.svip_status||t.goodsActive.discount_price?t._e():i("div",{staticClass:"svip-price-tips margin-10-l"},[i("div",{staticClass:"svip-price"},[i("i",{staticClass:"icon icon-crownfill"}),t._v(" "),i("span",[t._v(t._s(t.goodsActive.discount)+"折")])]),t._v(" "),i("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])])]),t._v(" "),i("goods-handle",{attrs:{goods:t.goodsActive,optionId:0,from:"detail"}})],1)],1),t._v(" "),i("div",{staticClass:"goods-evaluate"},[t._v("商品评价")]),t._v(" "),i("div",{staticClass:"praise text-center"},[t._v("\n\t\t\t好评率\n\t\t\t"),i("span",{staticClass:"rate"},[t._v(t._s(t.goodsActive.comment_good_percent))]),t._v(" "),i("span",{staticClass:"num"},[t._v("(共"+t._s(t.goodsActive.comment_total)+"人评价)")])]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"progress-active",style:{width:t.goodsActive.comment_good_percent}})])]),t._v(" "),i("div",{staticClass:"goods-desc"},[t._v("商品描述")]),t._v(" "),i("div",{staticClass:"goods-desc-con",domProps:{innerHTML:t._s(t.goodsActive.description)}}),t._v(" "),t._m(0)]),t._v(" "),i("router-link",{staticClass:"into-store",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.store.id}})}},[t._v("\n\t\t进入店铺\n\t")]),t._v(" "),i("store-cart",{attrs:{show:!0,store:t.store,pindan_id:t.pindan_id},on:{selectPinadan:t.selectPinadan}}),t._v(" "),i("transition",{attrs:{name:"loading"}},[t.preLoading?i("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips"},[this._v("\n\t\t\t温馨提示: 图片仅供参考,请以实物为准;"),s("br"),this._v("\n\t\t\t高峰时段及恶劣天气,请提前下单\n\t\t")])}]};var l=i("VU/8")(c,v,!1,function(t){i("k7ak")},null,null);s.default=l.exports},k7ak:function(t,s){}});
//# sourceMappingURL=167.60b2ac0883b17f781487.js.map