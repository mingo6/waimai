webpackJsonp([2],{Yeco:function(t,e){},fNmx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),o=i.n(s),a=i("woOf"),n=i.n(a),d=i("Dd8w"),l=i.n(d),c=i("NYxO"),r=i("mzkE"),v=i("NPH5"),_=i("RoZr"),g=i("Vr3d"),p=i("MHEY"),u=i("S+Zb"),m=i("GQaK"),h={name:"StoreGoods",data:function(){return{goodsActive:{},popupNotInSailTime:!1,ParentPopupSpecShow:!1,preLoading:!0,goodsLoading:!0,store:{is_rest:0,activity:{num:0}},activetabs:0,swiper_dots:!1,tabswiperable:!0,is_rest:0,status:{options_show:!1,not_in_time_show:!1,cart_show:!1},vanColHeight:0,commentHeight:0,categorySelectedIndex:0,categorySelectedId:0,categoryAll:[],categorySelected:{child:[{}]},childSelectedIndex:0,childSelectedId:0,goodsAll:[],goodsItem:{orderby:{type:"",value:""}},table:{},coupon:[],cart:{num:0},template:2,couponStatus:1,lazyload_goods:"",showMoveDot:[],windowHeight:0,showNotice:!0,cateHasGoods:[],template_page:0,scrollY:0,listHeight:[],tabActive:0,pindan_id:0}},components:{PublicFooter:r.a,Load:v.a,StoreCart:_.a,GoodsHandle:g.a,StoreHeader:p.a,noticePopup:u.a},methods:l()({},Object(c.b)(["replaceStore","replaceCart","replaceState"]),{showMoveDotFun:function(t,e,i){this.showMoveDot.push(!0),this.elLeft=e,this.elBottom=i},onCollectCoupon:function(){var t=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:this.sid}}).then(function(e){if((e=e.data.message).errno)return t.util.$toast("领取失败","",1e3),!1;t.couponStatus=0,t.util.$toast(e.message,"",1e3)})},onParentSelectOption:function(t){this.goodsActive=t,this.goods=t,this.ParentPopupSpecShow=!0,this.goods.activeOptions||this.onParentGoodsOptionInit()},onParentGoodsOptionInit:function(){if(this.goodsActive=this.goods,this.goodsActive.activeOptions={option:0,attrs:[],optionSelected:0,attrsSelected:[],num:0},1==this.goodsActive.is_options&&(this.goodsActive.activeOptions.option=this.goodsActive.options[0].id,this.goodsActive.activeOptions.optionSelected=this.goodsActive.options[0].id),1==this.goodsActive.is_attrs)for(var t=0;t<this.goodsActive.attrs.length;t++)this.goodsActive.activeOptions.attrs.push(t+"s0"),this.goodsActive.activeOptions.attrsSelected[t]=0;this.onParentToggleActiveOption()},onParentToggleOption:function(t,e,i){var s=this.goods;"option"==i?(s.activeOptions.option=t,s.activeOptions.optionSelected=t):(s.activeOptions.attrs[t]=t+"s"+e,s.activeOptions.attrsSelected[t]=e),this.goodsActive=s,this.onParentToggleActiveOption()},onParentToggleActiveOption:function(t){var e=this.goodsActive;t?e.activeOptionId=t:(e.activeOptionId=e.activeOptions.option,e.activeOptions.attrs.length>0&&(e.activeOptionId=e.activeOptionId+"_"+e.activeOptions.attrs.join("v"))),e.activeOption=e.options_data[e.activeOptionId],e.activeOption.num=this.parentGetSpecNum(),this.goodsActive=n()({},e)},parentGetSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0},onParentPlus:function(t,e,i,s){var o=this,a=e.id||e.goods_id,n=e.activeOptionId||i,d={sid:this.istore.id,goods_id:a,option_id:n,num:1,sign:"+"};this.util.request({url:"wmall/store/table/cart",data:d}).then(function(e){if((e=e.data.message).errno)return o.$toast(e.message),!1;e.message.msg&&o.$toast(e.message.msg);var i=t.target.getBoundingClientRect().left,a=t.target.getBoundingClientRect().bottom;"cart"==s&&(a+=50),o.elLeft=i,o.elBottom=a,o.showMoveDot.push(!0),o.replaceCart(e.message.cart)})},onParentMinus:function(t,e,i){var s=this,o=t.id||t.goods_id,a=t.activeOptionId||e,n={sid:this.istore.id,goods_id:o,option_id:a,num:1,sign:"-"};this.util.request({url:"wmall/store/table/cart",data:n}).then(function(t){if((t=t.data.message).errno)return s.$toast(t.message),!1;s.replaceCart(t.message.cart)})},onParentPopupNotInSailTime:function(t){this.goodsActive=t,this.popupNotInSailTime=!0},onToggleCategory:function(t,e,i){var s=0;"child"==i?(s=e,this.childSelectedIndex=s,this.categoryAll[this.categorySelectedIndex].childSelectedIndex=s,this.categorySelected=this.categoryAll[this.categorySelectedIndex]):(this.categoryAll[e].childSelectedIndex>0&&(s=this.categoryAll[e].childSelectedIndex),this.categorySelected=this.categoryAll[e],this.categorySelectedIndex=e,this.childSelectedIndex=s,this.categoryAll[e].childSelectedIndex=s),this.categorySelectedId=this.categorySelected.id,this.childSelectedId=0,this.categorySelected.child&&this.categorySelected.child.length>0&&(this.childSelectedId=this.categorySelected.child[s].id),this.onGetGoods()},onGetGoods:function(){var t=this;if(this.goodsLoading,this.goodsAll[this.categorySelectedIndex]||(this.goodsAll[this.categorySelectedIndex]=[]),this.goodsItem=this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex],this.goodsItem){if(this.goodsItem.empty)return!1;if(this.goodsItem.loaded)return console.log("商品全部加载完成"),!1}else this.goodsItem={page:1,psize:30,empty:0,loaded:!1,data:[],orderby:{type:"",value:""}};this.goodsLoading=!0,this.util.request({url:"wmall/store/table/goods",data:{sid:this.sid,page:this.goodsItem.page,psize:this.goodsItem.psize,cid:this.categorySelectedId,child_id:this.childSelectedId,type:this.goodsItem.orderby.type,value:this.goodsItem.orderby.value}}).then(function(e){t.goodsLoading=!1;var i=e.data.message.message;t.goodsItem.data=[].concat(o()(t.goodsItem.data),o()(i.goods)),t.goodsItem.page++,i.goods.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,i.goods.length||(t.goodsItem.empty=1)),t.goodsAll[t.categorySelectedIndex]||(t.goodsAll[t.categorySelectedIndex]=[]),t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem})},onOrderby:function(t,e){this.goodsItem={page:1,psize:30,empty:0,data:[],orderby:{type:t,value:e}},this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex]=this.goodsItem,this.onGetGoods()},onLoad:function(){var t=this;this.util.request({url:"wmall/store/table/index_vue",data:{sid:this.sid,cid:this.cid,table_id:this.table_id,order_id:this.order_id}}).then(function(e){t.goodsLoading=!1,t.preLoading=!1;var i=e.data.message;if(i.errno)return t.$toast(i.message),!1;if(i=i.message,t.template_page=i.template_page,1==t.template_page?(t.goodsItem={page:2,psize:30,empty:0,data:i.goods,orderby:{type:"",value:""}},t.goodsItem.data.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,t.goodsItem.data.length||(t.goodsItem.empty=1)),t.categorySelectedId=i.cid,t.childSelectedId=i.child_id,t.goodsAll[t.categorySelectedIndex]=[],t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem,t.categorySelected=i.category[t.categorySelectedIndex]||{}):t.cateHasGoods=i.cate_has_goods,t.store=i.store,t.store.tips){var s="storeNotice"+t.store.id,o=t.util.getStorage(s);!o||o&&!o.notice?t.util.setStorage(s,{notice:1},300):t.showNotice=!1}i.store.data&&i.store.data.shopPage&&(t.shopPage=i.store.data.shopPage),t.table=i.table,t.table.jiacai_id=t.order_id,t.coupon=i.coupon,t.categoryAll=i.category,t.is_rest=i.store.is_rest,t.template=i.template,t.lazyload_goods=i.lazyload_goods,t.util.setWXTitle(t.store.title),t.replaceStore(i.store),t.replaceCart(i.cart.message.cart),t.pindan_id=i.cart.message.cart.pindan_id,t.template_page||t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},onParentBeforeEnter:function(t){t.style.bottom=this.windowHeight-this.elBottom+"px",t.style.left=this.elLeft+5+"px",t.style.opacity=0},onParentAfterEnter:function(t){var e=this;t.style.bottom="-20px",t.style.left="20px",t.style.opacity=1,setTimeout(function(){e.replaceState({key:"cart_animate",val:!0})},400)},_initScroll:function(){var t=this;this.categoryScroll=new m.a(this.$refs.categoryWrapper,{click:!0}),this.goodsScroll=new m.a(this.$refs.goodsWrapper,{click:!0,probeType:3}),this.goodsScroll.on("scroll",function(e){e.y<=0&&(t.scrollY=Math.abs(Math.round(e.y)))})},_calculateHeight:function(){var t=this.$refs.goodsList,e=0;this.$refs.couponWrapper&&(e+=this.$refs.couponWrapper.clientHeight),this.$refs.shopPageWrapper&&(e+=this.$refs.shopPageWrapper.clientHeight),this.listHeight.push(0);for(var i=0;i<t.length;i++){e+=t[i].clientHeight,this.listHeight.push(e)}},_followScroll:function(t){if(t!=this.tabActive){var e=this.$refs.categoryItem[t];this.categoryScroll.scrollToElement(e,300,0,-100),this.tabActive=t}},selectCategory:function(t,e){if(e._constructed){var i=this.$refs.goodsList[t];this.goodsScroll.scrollToElement(i,500)}}}),watch:{icart:function(){var t=this.icart.data;if(1==this.template_page){var e=this.categoryAll;if(t)for(var i in e)if(e[i].total=0,e[i].child&&e[i].child.length>0)for(var s in e[i].child){e[i].child[s].total=0;var o=0,a=0;for(var n in t)for(var d in t[n])t[n][d].cid==e[i].id&&(a+=t[n][d].num,e[i].total=a,t[n][d].child_id==e[i].child[s].id&&(o+=t[n][d].num,e[i].child[s].total=o))}else{a=0;for(var n in t)for(var d in t[n])t[n][d].cid==e[i].id&&(a+=t[n][d].num,e[i].total=a)}else for(var i in e)if(e[i].total=0,e[i].child)for(var s in e[i].child)e[i].child[s].total=0;this.categoryAll=e}else{var l=this.cateHasGoods;if(t)for(var c in l){l[c].total=0;a=0;for(var n in t)for(var d in t[n])t[n][d].cid==l[c].id&&(a+=t[n][d].num,l[c].total=a)}else for(var c in l)l[c].total=0;this.cateHasGoods=l}}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid,this.order_id=this.query.order_id,this.cid=this.query.cid,this.table_id=this.query.table_id)},computed:l()({},Object(c.c)(["istore","icart"]),{goodsSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0},currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],i=this.listHeight[t+1];if(!i||this.scrollY>=e&&this.scrollY<i)return this._followScroll(t),t}return 0}}),mounted:function(){var t=this;this.onLoad(),this.$nextTick(function(){var e=document.documentElement.clientHeight,i=document.getElementsByClassName("header")[0].clientHeight,s=document.getElementsByClassName("store-tabs")[0].clientHeight;t.vanColHeight=e-i-s-50,t.windowHeight=window.innerHeight})}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"store-goods"}},[4==t.template||5==t.template?[i("div",{staticClass:"container",class:{"has-child-4":t.categorySelected&&t.categorySelected.child&&t.categorySelected.child.length>0&&t.categorySelected.child.length<=4,"has-child-8":t.categorySelected&&t.categorySelected.child&&t.categorySelected.child.length>4}},[i("div",{staticClass:"category-container bg-default"},[i("van-swipe",{attrs:{width:90,height:97,"show-indicators":!1,loop:!1}},t._l(t.categoryAll,function(e,s){return i("van-swipe-item",{key:e.id,staticClass:"cate-item",class:{active:e.id==t.categorySelectedId},on:{click:function(i){return t.onToggleCategory(e.id,s,"")}}},[i("div",{staticClass:"img-wrap"},[i("img",{staticClass:"img-100",attrs:{src:e.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"cate-title ellipsis"},[t._v(t._s(e.title))])])}),1),t._v(" "),t.categorySelected&&t.categorySelected.child&&t.categorySelected.child.length>0?i("div",{staticClass:"category-children van-hairline--top"},t._l(t.categorySelected.child,function(e,s){return i("div",{key:e.id,staticClass:"cate-child-item ",on:{click:function(i){return t.onToggleCategory(e.id,s,"child")}}},[i("div",{staticClass:"child-inner ellipsis",class:{active:e.id==t.childSelectedId}},[t._v(t._s(e.title))])])}),0):t._e()],1),t._v(" "),t.coupon.id>0&&1==t.couponStatus?i("div",{staticClass:"coupon-show-container"},[i("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t¥"),i("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),i("div",{staticClass:"coupon-detail"},[i("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),i("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),i("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t._e(),t._v(" "),i("van-list",{staticClass:"goods-container",attrs:{finished:t.goodsItem.loaded,offset:50},on:{load:t.onGetGoods},model:{value:t.goodsLoading,callback:function(e){t.goodsLoading=e},expression:"goodsLoading"}},[5==t.template?[i("div",{staticClass:"diy-goods-single-row"},t._l(t.goodsItem.data,function(e){return i("div",{key:e.id,staticClass:"goods-item"},[i("router-link",{staticClass:"goods-img",attrs:{tag:"div",to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]}),t._v(" "),e.unitnum>1?i("div",{staticClass:"discount hide"},[t._v(t._s(e.unitnum_multi_cn)+"购")]):t._e()]),t._v(" "),i("router-link",{staticClass:"goods-info",attrs:{tag:"div",to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("div",[i("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"sale-num"},[t._v("已售:"+t._s(e.sailed)+" 好评率:"+t._s(e.comment_good_percent))]),t._v(" "),i("div",{staticClass:"discount"},[e.discount?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum_multi_cn+"购":"")+"\n\t\t\t\t\t\t\t\t\t\t")]:e.unitnum>1?[i("van-icon",{attrs:{name:"tag"}}),t._v(t._s(e.unitnum_multi_cn)+"购\n\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),i("div",[i("div",{staticClass:"goods-price"},[i("div",{staticClass:"in-b now-price"},[t._v("￥"+t._s(e.price)),i("span",{staticClass:"font-14"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price>0?i("div",{staticClass:"in-b old-price"},[t._v("￥"+t._s(e.old_price))]):t._e()])])]),t._v(" "),i("goods-handle",{attrs:{goods:e,optionId:0,from:"list",type:"table",table:t.table},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)}),0)]:4==t.template?[i("div",{staticClass:"diy-goods-double-row"},t._l(t.goodsItem.data,function(e){return i("div",{key:e.id,staticClass:"goods-item"},[i("div",{staticClass:"goods-item-inner"},[i("router-link",{staticClass:"goods-img",attrs:{tag:"div",to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]}),t._v(" "),(1!=e.svip_status||e.discount_price>0)&&e.discount>0?i("div",{staticClass:"discount"},[i("div",[i("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum_multi_cn+"":"")+"\n\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),e.unitnum>1&&!e.discount_price?i("div",{staticClass:"discount"},[i("div",[i("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.unitnum_multi_cn)+"\n\t\t\t\t\t\t\t\t\t\t")],1)]):t._e()]),t._v(" "),i("router-link",{staticClass:"goods-info",attrs:{tag:"div",to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("div",{staticClass:"info-top"},[i("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"sale-num"},[t._v("已售:"+t._s(e.sailed)+" 好评率:"+t._s(e.comment_good_percent))])]),t._v(" "),i("div",{staticClass:"goods-price"},[i("div",{staticClass:"now-price"},[t._v("￥"+t._s(e.price)),i("span",{staticClass:"font-14"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price>0?i("div",{staticClass:"old-price margin-5-t"},[t._v("￥"+t._s(e.old_price))]):t._e()])]),t._v(" "),i("goods-handle",{attrs:{goods:e,optionId:0,from:"list",type:"table",table:t.table},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)])}),0)]:t._e(),t._v(" "),1==t.goodsItem.empty?i("load",{attrs:{type:"loaded",text:"暂无商品",bgcolor:"#f5f5f5"}}):t.goodsItem.loaded?i("load",{attrs:{type:"loaded",text:"已经到底了",bgcolor:"#f5f5f5"}}):t._e()],2)],1)]:[i("store-header",{attrs:{store:t.store,table:t.table}}),t._v(" "),i("div",{staticClass:"store-tabs flex-lr van-hairline--bottom"},[i("div",{staticClass:"tab-item active"},[t._v("商品")]),t._v(" "),i("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/comment?sid="+t.store.id}),tag:"div"}},[t._v("评价")]),t._v(" "),i("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/index?sid="+t.store.id}),tag:"div"}},[t._v("商家")])],1),t._v(" "),i("div",{staticClass:"goods-container"},[1==t.template_page?i("van-row",{staticClass:"goods-some"},[i("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[i("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.categorySelectedIndex}},[i("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id,table_id:t.table_id}})}},[i("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.categoryAll,function(e,s){return[e.total>0?i("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title,info:e.total},on:{click:function(i){return t.onToggleCategory(e.id,s,"")}}}):i("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title},on:{click:function(i){return t.onToggleCategory(e.id,s,"")}}})]})],2)],1),t._v(" "),i("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[i("van-list",{attrs:{finished:t.goodsItem.loaded,offset:50},on:{load:t.onGetGoods},model:{value:t.goodsLoading,callback:function(e){t.goodsLoading=e},expression:"goodsLoading"}},[t.coupon.id>0&&1==t.couponStatus?i("div",{staticClass:"coupon-show-container"},[i("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t\t¥"),i("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),i("div",{staticClass:"coupon-detail"},[i("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),i("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),i("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t._e(),t._v(" "),t.categorySelected.child?[t.categorySelected.child.length>0?i("div",{staticClass:"tag2-list"},t._l(t.categorySelected.child,function(e,s){return i("div",{staticClass:"tag2-item",class:{selected:s==t.childSelectedIndex},on:{click:function(i){return t.onToggleCategory(e.id,s,"child")}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t"),e.total>0?i("div",{class:{dot:e.total}}):t._e()])}),0):t._e()]:t._e(),t._v(" "),i("div",{staticClass:"title border-1px-t"},[i("div",{staticClass:"title-text ellipsis"},[i("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.categorySelected.child&&t.categorySelected.child.length>0?t.categorySelected.child[t.childSelectedIndex].title:t.categorySelected.title)+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"title-rank"},[i("div",{staticClass:"sales ",class:{selected:"sailed"==t.goodsItem.orderby.type},on:{click:function(e){return t.onOrderby("sailed","desc")}}},[t._v("销量")]),t._v(" "),i("div",{staticClass:"shu"},[t._v("|")]),t._v(" "),i("div",{staticClass:"prionToggleCategoryce-container",on:{click:function(e){t.onOrderby("price","desc"==t.goodsItem.orderby.value?"asc":"desc")}}},[i("div",{staticClass:"price"},[t._v("价格")]),t._v(" "),i("div",{staticClass:"triangle"},[i("div",{staticClass:"triangle-top",class:{selected:"price"==t.goodsItem.orderby.type&&"asc"==t.goodsItem.orderby.value}}),t._v(" "),i("div",{staticClass:"triangle-bottom ",class:{selected:"price"==t.goodsItem.orderby.type&&"desc"==t.goodsItem.orderby.value}})])])])]),t._v(" "),2==t.template?t._l(t.goodsItem.data,function(e,s){return t.goodsItem.data.length>0?i("div",{staticClass:"goods clearfix "},[i("div",{staticClass:"goods-inner border-1px-b"},[i("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),e.label?i("div",{staticClass:"label"},[t._v(t._s(e.label))]):t._e()]),t._v(" "),i("div",{staticClass:"shop-info clearfix"},[i("div",{staticClass:"name ellipsis"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"description"},[t._v(t._s(e.content))]),t._v(" "),i("div",{staticClass:"sold"},[t._v("已售"+t._s(e.sailed)+" 赞"+t._s(e.comment_good))]),t._v(" "),i("div",{staticClass:"price"},[i("div",{staticClass:"now-price"},[i("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(e.price)),i("span",{staticClass:"font-14 font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price?i("div",{staticClass:"old-price"},[i("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(e.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),i("div",{staticClass:"discount"},[e.discount?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum_multi_cn+"购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t")]:e.unitnum>1?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.unitnum_multi_cn)+"购\n\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),i("goods-handle",{attrs:{goods:e,optionId:0,from:"list",type:"table",table:t.table},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}}),t._v(" "),i("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):1==t.template?[t.goodsItem.data&&t.goodsItem.data.length>0?i("div",{staticClass:"goods-list clearfix"},[t._l(t.goodsItem.data,function(e,s){return i("div",{staticClass:"col-50 goods-item"},[i("div",{staticClass:"goods-info"},[i("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),i("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t已售"+t._s(e.sailed)+" "),i("div",[t._v("赞"+t._s(e.comment_good))])]),t._v(" "),i("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t\t"),i("div",[t._v(t._s(e.price))]),i("span",{staticClass:"font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),i("div",{staticClass:"discount"},[e.discount?i("div",[i("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum_multi_cn+"购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t")],1):e.unitnum>1?i("div",[i("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.unitnum_multi_cn)+"购\n\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()]),t._v(" "),i("goods-handle",{attrs:{goods:e,template:t.template,optionId:0,from:"list",type:"table",table:t.table},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)])}),t._v(" "),i("div",{staticStyle:{clear:"both"}})],2):t._e()]:[t.goodsItem.data&&t.goodsItem.data.length>0?i("div",{staticClass:"big-goods-list"},t._l(t.goodsItem.data,function(e,s){return i("div",{staticClass:"big-goods-item"},[i("router-link",{staticClass:"big-goods-img",attrs:{tag:"div",to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]}),t._v(" "),e.label?i("div",{staticClass:"label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),i("div",{staticClass:"sell-info"},[t._v("已售"+t._s(e.sailed)+" 赞"+t._s(e.comment_good))])]),t._v(" "),i("div",{staticClass:"goods-wrap"},[i("div",{staticClass:"goods-info"},[i("div",{staticClass:"goods-name ellipsis"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"description"},[t._v(t._s(e.content))]),t._v(" "),i("div",{staticClass:"price flex"},[i("div",{staticClass:"now-price"},[i("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(e.price)),i("span",{staticClass:"font-14 font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price?i("div",{staticClass:"old-price"},[i("span",{staticClass:"price-icon"},[t._v("¥")]),t._v(t._s(e.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),i("div",{staticClass:"discount"},[e.discount?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum_multi_cn+"购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]:e.unitnum>1?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.unitnum_multi_cn)+"购\n\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),i("goods-handle",{attrs:{goods:e,optionId:0,from:"list",type:"table",table:t.table},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)],1)}),0):t._e()],t._v(" "),1==t.goodsItem.empty?i("load",{attrs:{type:"loaded",text:"暂无商品"}}):t.goodsItem.loaded?i("load",{attrs:{type:"loaded",text:"已经到底了"}}):t._e()],2)],1)],1):i("van-row",{staticClass:"goods-all"},[i("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[i("div",{ref:"categoryWrapper",style:{height:t.vanColHeight+"px"}},[i("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.currentIndex}},[i("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id,table_id:t.table_id,pindan_id:t.pindan_id}})}},[i("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.cateHasGoods,function(e,s){return[i("li",{ref:"categoryItem",refInFor:!0,on:{click:function(e){return t.selectCategory(s,e)}}},[e.total>0?i("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title,info:e.total}}):i("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title}})],1)]})],2)],1)]),t._v(" "),i("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[i("div",{ref:"goodsWrapper",style:{height:t.vanColHeight+"px"}},[i("div",[t.coupon.id>0&&1==t.couponStatus?i("div",{ref:"couponWrapper",staticClass:"coupon-show-container"},[i("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t\t\t¥"),i("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),i("div",{staticClass:"coupon-detail"},[i("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),i("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),i("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t._e(),t._v(" "),i("ul",t._l(t.cateHasGoods,function(e,s){return i("li",{key:s,ref:"goodsList",refInFor:!0},[i("div",{staticClass:"title border-1px-t"},[i("div",{staticClass:"title-text"},[i("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),2==t.template?t._l(e.goods,function(s,o){return e.goods.length>0?i("div",{key:o,staticClass:"goods clearfix"},[i("div",{staticClass:"goods-inner ",class:{"border-1px-b":o<e.goods.length-1}},[i("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:s.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:s.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),s.label?i("div",{staticClass:"label"},[t._v(t._s(s.label))]):t._e()]),t._v(" "),i("div",{staticClass:"shop-info clearfix"},[i("div",{staticClass:"name ellipsis"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"description"},[t._v(t._s(s.content))]),t._v(" "),i("div",{staticClass:"sold"},[t._v("已售"+t._s(s.sailed)+" 赞"+t._s(s.comment_good))]),t._v(" "),i("div",{staticClass:"price"},[i("div",{staticClass:"now-price"},[i("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(s.price)),i("span",{staticClass:"font-14 font-bold"},[t._v(t._s(s.unitname_cn))])]),t._v(" "),s.old_price?i("div",{staticClass:"old-price"},[i("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(s.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),i("div",{staticClass:"discount"},[s.discount?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份 "+t._s(s.unitnum>1?s.unitnum_multi_cn+"购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:s.unitnum>1?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.unitnum_multi_cn)+"购\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),i("goods-handle",{attrs:{goods:s,optionId:0,from:"list",templatePage:"1",type:"table",table:t.table},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}}),t._v(" "),i("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):1==t.template?[e.goods&&e.goods.length>0?i("div",{staticClass:"goods-list clearfix"},[t._l(e.goods,function(e,s){return i("div",{staticClass:"col-50 goods-item"},[i("div",{staticClass:"goods-info"},[i("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),i("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t已售"+t._s(e.sailed)+" "),i("div",[t._v("赞"+t._s(e.comment_good))])]),t._v(" "),i("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),i("div",[t._v(t._s(e.price))]),i("span",{staticClass:"font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),i("div",{staticClass:"discount"},[e.discount?i("div",[i("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum_multi_cn+"购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):e.unitnum>1?i("div",[i("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.unitnum_multi_cn)+"购\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()]),t._v(" "),i("goods-handle",{attrs:{goods:e,template:t.template,optionId:0,from:"list",templatePage:"1",type:"table",table:t.table},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}})],1)])}),t._v(" "),i("div",{staticStyle:{clear:"both"}})],2):t._e()]:[e.goods.length>0?i("div",{staticClass:"big-goods-list"},t._l(e.goods,function(e,s){return i("div",{key:s,staticClass:"big-goods-item"},[i("router-link",{staticClass:"big-goods-img",attrs:{tag:"div",to:t.util.getUrl({path:"/tangshi/pages/table/goodsDetail",query:{id:e.id,sid:t.store.id,table_id:t.table_id,order_id:t.order_id,pindan_id:t.pindan_id}})}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]}),t._v(" "),e.label?i("div",{staticClass:"label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),i("div",{staticClass:"sell-info"},[t._v("已售"+t._s(e.sailed)+" 赞"+t._s(e.comment_good))])]),t._v(" "),i("div",{staticClass:"goods-wrap"},[i("div",{staticClass:"goods-info"},[i("div",{staticClass:"goods-name ellipsis"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"description"},[t._v(t._s(e.content))]),t._v(" "),i("div",{staticClass:"price flex"},[i("div",{staticClass:"now-price"},[i("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(e.price)),i("span",{staticClass:"font-14 font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price?i("div",{staticClass:"old-price"},[i("span",{staticClass:"price-icon"},[t._v("¥")]),t._v(t._s(e.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),i("div",{staticClass:"discount"},[e.discount?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum_multi_cn+"购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:e.unitnum>1?[i("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.unitnum_multi_cn)+"购\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),i("goods-handle",{attrs:{goods:e,optionId:0,from:"list",type:"table",table:t.table,templatePage:"1"},on:{onParentPlus:t.onParentPlus,onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}})],1)],1)}),0):t._e()]],2)}),0)])])])],1)],1)],t._v(" "),t.popupNotInSailTime?i("van-popup",{staticClass:"not-in-time-popup",model:{value:t.popupNotInSailTime,callback:function(e){t.popupNotInSailTime=e},expression:"popupNotInSailTime"}},[i("div",{staticClass:"popup-top"},[t.goodsActive.week_cn?i("div",{staticClass:"popup-item"},[i("div",{staticClass:"popup-title"},[t._v("每周可售日期")]),t._v(" "),i("div",{staticClass:"popup-text"},[t._v(t._s(t.goodsActive.week_cn))])]):t._e(),t._v(" "),t.goodsActive.time_cn?i("div",{staticClass:"popup-item"},[i("div",{staticClass:"popup-title"},[t._v("每天可售时间")]),t._v(" "),i("div",{staticClass:"popup-text"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.time_cn)+"\n\t\t\t\t")])]):t._e()]),t._v(" "),i("div",{staticClass:"popup-bottom border-1px-t",on:{click:function(e){t.popupNotInSailTime=!1}}},[t._v("知道了")])]):t._e(),t._v(" "),t.ParentPopupSpecShow?i("van-popup",{staticClass:"options-popup",model:{value:t.ParentPopupSpecShow,callback:function(e){t.ParentPopupSpecShow=e},expression:"ParentPopupSpecShow"}},[i("div",{staticClass:"options-dialog"},[i("div",{staticClass:"muti-close",on:{click:function(e){t.ParentPopupSpecShow=!1}}}),t._v(" "),i("div",{staticClass:"muti-wrap"},[i("div",{staticClass:"muti-food-title border-1px-b"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.title)+"\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"muti-cont"},[i("div",{staticClass:"muti-cont-inner"},[1==t.goodsActive.is_options?i("div",{staticClass:"muti-sec first"},[i("div",{staticClass:"muti-sec-title"},[t._v("规格")]),t._v(" "),i("div",{staticClass:"muti-choice"},[t._l(t.goodsActive.options,function(e,s){return[i("div",{class:{selected:t.goodsActive.activeOptions.optionSelected==e.id},on:{click:function(i){return t.onParentToggleOption(e.id,"","option")}}},[t._v(t._s(e.name))])]})],2)]):t._e(),t._v(" "),1==t.goodsActive.is_attrs?i("div",{staticClass:"muti-sec"},[t._l(t.goodsActive.attrs,function(e,s){return[i("div",{staticClass:"muti-sec-title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"muti-choice"},[t._l(e.label,function(e,o){return[i("div",{class:{selected:t.goodsActive.activeOptions.attrsSelected[s]==o},on:{click:function(e){return t.onParentToggleOption(s,o,"attr")}}},[t._v(t._s(e))])]})],2)]})],2):t._e()])]),t._v(" "),i("div",{staticClass:"muti-choose"},[i("div",{staticClass:"muti-oprt"},[i("div",{staticClass:"muti-cart-oprt clearfix"},[i("div",{staticClass:"add-food"},[i("van-icon",{staticStyle:{"background-color":"#6BBA50"},attrs:{name:"plus"},on:{click:function(e){return t.onParentPlus(e,t.goodsActive)}}})],1),t._v(" "),t.goodsSpecNum?[i("div",{staticClass:"food-num"},[t._v(t._s(t.goodsSpecNum))]),t._v(" "),i("div",{staticClass:"remove-food"},[i("div",{staticClass:"remove icon icon-minus",on:{click:function(e){return t.onParentMinus(t.goodsActive)}}})])]:t._e()],2)]),t._v(" "),i("div",{staticClass:"muti-info"},[i("div",{staticClass:"muti-price"},[t._v("¥"+t._s(t.goodsActive.activeOption.price))]),t._v(" "),i("div",{staticClass:"muti-type"},[t._v("("+t._s(t.goodsActive.activeOption.name)+")")])])])])])]):t._e(),t._v(" "),i("store-cart",{attrs:{show:0==t.activetabs,store:t.store,cart:t.cart,from:"table",table:t.table,pindan_id:t.pindan_id}}),t._v(" "),i("transition",{attrs:{name:"loading"}},[t.preLoading?i("iloading"):t._e()],1),t._v(" "),t._l(t.showMoveDot,function(e,s){return i("transition",{key:s,attrs:{appear:""},on:{"after-appear":t.onParentAfterEnter,"before-appear":t.onParentBeforeEnter}},[e?i("div",{staticClass:"parent_move_dot"}):t._e()])}),t._v(" "),t.store.tips&&t.showNotice?i("notice-popup",{attrs:{tips:t.store.tips}}):t._e()],2)},staticRenderFns:[]};var y=i("VU/8")(h,C,!1,function(t){i("Yeco")},null,null);e.default=y.exports}});
//# sourceMappingURL=2.3b1ee426640e68b490b2.js.map