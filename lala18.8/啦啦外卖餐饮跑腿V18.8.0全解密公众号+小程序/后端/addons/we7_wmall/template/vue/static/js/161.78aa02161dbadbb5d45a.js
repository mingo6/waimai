webpackJsonp([161],{"8SHr":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),a=i.n(s),o=i("Dd8w"),n=i.n(o),r=i("Yo4o"),l=i("NYxO"),c=i("Cz8s"),u=i("mzkE"),d={name:"paotuiGuide",components:{PublicHeader:c.a,PublicFooter:u.a},data:function(){return{home_setting:"",showPreLoading:!0,menufooter:{},note:"",inputStatus:!1,title:"跑腿",homepage:{},home:{},categorys:[],orders:[],delivery_num:0,config:{},deliveryers:[],getLocationStatus:!0,failedTips:{type:"location",tips:"获取定位失败!您可以选择手动搜索地址",btnText:"手动搜索地址",link:"/pages/home/location"}}},computed:n()({},Object(l.c)(["erranderExtra"])),methods:n()({},Object(l.b)(["setState"]),{onLoad:function(){var t=this;this.util.request({url:"errander/guide/index",data:{forceLocation:1,menufooter:1}}).then(function(e){t.showPreLoading=!1;var i=e.data.message;return-1==i.errno?(t.util.$toast(i.message,"",1e3),!1):-2==i.errno?(t.getLocationStatus=!1,t.failedTips.tips=i.message,!1):(i=i.message,t.home_setting=i.home_setting,t.home_setting&&"index"!=t.home_setting?"diy"==t.home_setting&&(t.homepage=i.homepage,t.home=t.homepage.data,t.home&&t.home.page&&t.home.page.title&&(t.title=t.home.page.title,t.util.setWXTitle(t.title))):(t.categorys=[].concat(a()(i.categorys)),t.orders=[].concat(a()(i.orders)),t.delivery_num=i.delivery_num,t.config=i.config,t.deliveryers=i.deliveryers,t.menufooter=window.menufooter,t.loadmap()),void(t.menufooter=window.menufooter))}).catch(function(e){"fail"==window.forceGetLocationStatus&&(t.showPreLoading=!1,t.getLocationStatus=!1)})},onChangeInputStatus:function(){this.inputStatus=!0},onSubmit:function(t){this.setState({type:"erranderExtra",key:"note",val:this.note}),this.util.jsUrl(t)},loadmap:function(){var t=this;Object(r.a)().then(function(e){var i=new e.Map("map-container",{resizeEnable:!0,zoom:11,center:[t.config.map.location_y,t.config.map.location_x]});for(var s in t.deliveryers){var a=t.deliveryers[s];if(a.location_x&&a.location_y)new e.Marker({position:[a.location_y,a.location_x],offset:new e.Pixel(-26,-80),content:'<div class="map-center"><img src="'+a.avatar+'"alt=""></div>'}).setMap(i)}i.setFitView()})}}),mounted:function(){this.onLoad()}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"paotui-guide"}},[t.isWeixin?t._e():i("public-header",{attrs:{title:t.title}}),t._v(" "),"index"!=t.home_setting&&t.home_setting?"diy"==t.home_setting?t._l(t.home.items,function(e,s){return[i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter,failedTips:t.failedTips,showFailedTips:!t.getLocationStatus}}),t._v(" "),i("div",{staticClass:"content",style:{background:e.style.background}},[i("van-swipe",{staticClass:"swiper",attrs:{autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(e.picture,function(e,s){return i("van-swipe-item",{key:s},[i("div",{staticClass:"img-box",on:{click:function(i){return t.util.jsUrl(e.linkurl)}}},[i("img",{attrs:{src:e.imgurl,alt:""}})])])}),1),t._v(" "),i("div",{staticClass:"rider-nearby flex",style:{color:e.rider.color}},[i("img",{attrs:{src:"static/img/paotui_rider.png",alt:""}}),t._v(" "),i("span",[t._v(t._s(e.rider.text.left))]),t._v(" "),i("span",{staticClass:"num",style:{color:e.rider.num_color}},[t._v(t._s(e.rider.text.num))]),t._v(" "),i("span",[t._v(t._s(e.rider.text.right))])]),t._v(" "),i("div",{staticClass:"goods-edit"},[i("div",{staticClass:"goods-input"},[t.inputStatus||t.note?i("div",{staticClass:"goods-input-content flex-lr"},[i("van-field",{staticClass:"border-0px",attrs:{type:"textarea",placeholder:e.params.placeholder},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),t._v(" "),i("div",{staticClass:"good-input-submit",on:{click:function(i){return t.onSubmit(e.params.submiturl)}}},[i("img",{attrs:{src:"static/img/goods_submit.png",alt:""}})])],1):i("div",{staticClass:"goods-input-placeholder",on:{click:function(e){return t.onChangeInputStatus()}}},[i("img",{attrs:{src:"static/img/edit_icon.png",alt:""}}),t._v("\n\t\t\t\t\t\t"+t._s(e.params.placeholder)+"\n\t\t\t\t\t")])]),t._v(" "),i("van-row",{staticClass:"goods-tags",attrs:{gutter:"5"}},t._l(e.lanmu,function(e,s){return i("van-col",{key:s,attrs:{span:"6"}},[i("div",{staticClass:"tag-item ellipsis",style:{color:e.color,"background-color":e.background_color},on:{click:function(i){return t.onSubmit(e.linkurl)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t"),1==e.is_hot?i("div",{staticClass:"tag-item-hot"},[i("img",{attrs:{src:"static/img/goods_hot.png",alt:""}})]):t._e()])])}),1)],1),t._v(" "),i("div",{staticClass:"paotui-feature"},[i("div",{staticClass:"feature-title"},[t._v("\n\t\t\t\t\t跑腿特色\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"feature-list"},t._l(e.feature,function(e,s){return i("div",{key:s,staticClass:"feature-item",on:{click:function(i){return t.util.jsUrl(e.linkurl)}}},[i("div",{staticClass:"feature-item-icon",style:{"border-color":e.icon_color}},[i("span",{staticClass:"icon",class:e.icon,style:{color:e.icon_color}})]),t._v(" "),i("div",{staticClass:"feature-item-text font-13",style:{color:e.color}},[t._v(t._s(e.text))])])}),0)])],1),t._v(" "),i("router-link",{staticClass:"paotui-order",style:{"border-color":e.order.border_color,color:e.order.color},attrs:{tag:"div",to:t.util.getUrl({path:"/pages/paotui/order"})}},[i("div",{staticClass:"icon",class:e.order.icon}),t._v(" "),i("span",{staticClass:"font-12"},[t._v(t._s(e.order.text))])])]}):t._e():[i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter,failedTips:t.failedTips,showFailedTips:!t.getLocationStatus}}),t._v(" "),i("div",{staticClass:"content"},[t._m(0),t._v(" "),t.orders.length>0?i("van-swipe",{staticClass:"order-swiper",attrs:{autoplay:3e3,vertical:"","show-indicators":!1}},t._l(t.orders,function(e,s){return i("van-swipe-item",{key:s},[i("router-link",{staticClass:"swiper-item flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/paotui/diy?id="+e.order_cid})}},[i("div",{staticClass:"left flex-lr"},[i("img",{attrs:{src:e.thumb,alt:""}}),t._v(" "),i("p",{staticClass:"ellipsis"},[t._v(t._s(e.anonymous_username)+"购买了"+t._s(e.goods_name))])]),t._v(" "),i("span",{staticClass:"icon icon-right"})])],1)}),1):t._e(),t._v(" "),i("div",{staticClass:"cate"},[i("p",{staticClass:"cate-title"},[t._v("\n\t\t\t\t\t平台共有 "),i("span",{staticClass:"c-danger"},[t._v(t._s(t.delivery_num))]),t._v(" 位骑士为您服务\n\t\t\t\t")]),t._v(" "),i("van-row",{staticClass:"cate-list"},t._l(t.categorys,function(e,s){return i("van-col",{key:s,attrs:{span:"6"}},[i("router-link",{staticClass:"cate-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/paotui/diy?id="+e.id})}},[i("img",{attrs:{src:e.thumb,alt:""}}),t._v(" "),i("p",{staticClass:"ellipsis"},[t._v(t._s(e.name))])])],1)}),1)],1)],1)]],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-content"},[e("div",{attrs:{id:"map-container"}})])}]};var m=i("VU/8")(d,p,!1,function(t){i("m9kD")},null,null);e.default=m.exports},m9kD:function(t,e){}});
//# sourceMappingURL=161.78aa02161dbadbb5d45a.js.map