webpackJsonp([130],{"4d0m":function(a,t){},kYuw:function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("Gu7T"),e=i.n(o),d=i("mvHQ"),s=i.n(d),n=i("woOf"),r=i.n(n),h=i("Dd8w"),l=i.n(h),c=i("NYxO"),g=i("Cz8s"),y=i("mzkE"),f=i("fgl9"),u=i("kEnp"),m={name:"diyIndex",data:function(){return{title:"",id:0,getLocationFail:!1,showPreLoading:!0,styleContent:"#fff",diydata:{diy:{data:{}},storeExtra:{condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},stores:{loading:!0,finished:!1,page:1,psize:20,loaded:0,empty:0,data:[]},popup:{storeSearch:!1,haodianSearch:!1,serviceQrcode:!1},superRedpacketData:{},guideData:{is_show:!1},tongcheng:{get_all:0,page:2,psize:10,loading:!0,loaded:!1,finished:!1,empty:!1,data:[]},haodian:{page:2,psize:15,loading:!1,loaded:!1,finished:!1,empty:!1,data:[]},haodianExtra:{orderby:"distance",haodian_cid:0,haodian_child_id:0,cIndexActive:0},haodianCategory:[],showSearchSign:!1},showFixedSearchBar:!1,goodsTabActive:0,goodsTabFixed:0,goodsTabHeights:[],goodsTabOffsetTop:0,storesTabActive:0,storesTabActiveReal:0,storesTabFixed:0,storesTabHeights:[],storesTabOffsetTop:0,followHeight:0,scrollFromClickTab:!1,menufooter:{},follow:{},followShow:!1}},components:{PublicHeader:g.a,PublicFooter:y.a,diy:u.a,follow:f.a},watch:{$route:function(){this.id=this.$route.query.id},id:function(){this.onInit()}},methods:l()({},Object(c.b)(["setLocation","getLocation","setState"]),{onInit:function(){var a=this;this.getLocation(),this.locationInfo.location_x?(a.getLocationFail=!1,a.locationInfo.last_location_x=this.locationInfo.location_x,a.onLoad()):this.util.getLocation({successLocation:function(t){a.setLocation({location_x:t.location_x,location_y:t.location_y}),a.onLoad()},successAddress:function(t){a.setLocation({location_x:t.location_x,location_y:t.location_y,address:t.address})},fail:function(t){a.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),a.getLocationFail=!0,a.onLoad()}})},onToggleDiscount:function(a,t){"waimai_stores"==this.diydata.diy.data.items[t].id?this.diydata.diy.data.items[t].data[a].activity.is_show_all=!this.diydata.diy.data.items[t].data[a].activity.is_show_all:this.diydata.stores.data[a].activity.is_show_all=!this.diydata.stores.data[a].activity.is_show_all,this.diydata=r()({},this.diydata)},onToggleStoresTabDiscount:function(a,t,i){this.diydata.diy.data.items[i].data[a].stores[t].activity.is_show_all=!this.diydata.diy.data.items[i].data[a].stores[t].activity.is_show_all},onCloseRedpacket:function(){this.diydata.superRedpacketData.is_show=!1,this.diydata.superRedpacketData=r()({},this.diydata.superRedpacketData)},onChangeStoreExtra:function(a){"multiple"==a?(this.diydata.storeExtra.multiple=!0,this.diydata.storeExtra.filter=!1):(this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter=!0),this.diydata.popup.storeSearch=!0},onStoreOrderby:function(a,t,i){if("order"==a)"svipRedpacket"==t?this.diydata.storeExtra.condition.dis=t:(this.diydata.storeExtra.condition.order=t,this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter_title="sailed"!=t&&"distance"!=t?i:"综合排序");else if("discounts"==a){if(this.diydata.storeExtra.condition.dis==t&&(t=""),this.diydata.storeExtra.condition.dis=t,"refresh"!=i)return!1}else{if("mode"==a)return this.diydata.storeExtra.condition.mode==t&&(t=""),this.diydata.storeExtra.condition.mode=t,!1;"clear"==a?(this.diydata.storeExtra.condition.dis="",this.diydata.storeExtra.condition.order="",this.diydata.storeExtra.condition.mode="",this.diydata.storeExtra.filter=!1,this.diydata.storeExtra.filter_title="综合排序"):"finish"==a&&(this.diydata.storeExtra.filter=!1)}this.diydata.popup.storeSearch=!1,this.onGetStore(!0)},onGetStore:function(a){var t=this,i=this;a&&(i.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0}),i.diydata.stores.loading=!0,this.util.request({url:"wmall/home/index/store",data:{lat:i.locationInfo.location_x,lng:i.locationInfo.location_y,page:i.diydata.stores.page,psize:i.diydata.stores.psize,condition:s()(i.diydata.storeExtra.condition)}}).then(function(o){var d=o.data.message.message;a&&(i.diydata.stores.data=[]),i.diydata.stores.data=[].concat(e()(t.diydata.stores.data),e()(d.stores)),d.pagetotal<=i.diydata.stores.page&&(i.diydata.stores.loaded=1,i.diydata.stores.data.length||(i.diydata.stores.empty=!0),i.diydata.stores.finished=!0),i.diydata.stores.loading=!1,i.diydata.stores.page++,i.diydata.stores.loaded||d.stores.length||t.onGetStore()})},onGetInformation:function(a){var t=this,i=this;a&&(i.diydata.tongcheng={page:1,psize:10,loaded:0,empty:!1,loading:!0,data:[]}),i.diydata.tongcheng.loading=!0,this.util.request({url:"diypage/diy/information",data:{page:i.diydata.tongcheng.page,psize:i.diydata.tongcheng.psize}}).then(function(a){var o=a.data.message.message;i.diydata.tongcheng.data=[].concat(e()(t.diydata.tongcheng.data),e()(o.informations)),o.informations.length<i.diydata.tongcheng.psize&&(i.diydata.tongcheng.loaded=1,i.diydata.tongcheng.data.length||(i.diydata.tongcheng.empty=!0),i.diydata.tongcheng.finished=!0),i.diydata.tongcheng.loading=!1,i.diydata.tongcheng.page++})},onLoad:function(){var a=this;this.util.request({url:"diypage/diy",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,id:this.id,menufooter:1}}).then(function(t){var i=a;i.showPreLoading=!1;var o=t.data.message;if(o.errno)i.util.$toast(o.message);else{if(i.diydata.config=o.message.config,i.diydata.diy=o.message.diy,i.diy=o.message.diy,i.diydata.diy.guide)if(1==i.diydata.diy.guide.params.status&&"interval"==i.diydata.diy.guide.params.show_setting){var d=a.util.getStorage("guideStorage");(!d||d&&!d.show)&&(a.util.setStorage("guideStorage",{show:1},60*i.diydata.diy.guide.params.interval_time),i.diydata.guideData.is_show=!0)}else 1==i.diydata.diy.guide.params.status&&"everytime"==i.diydata.diy.guide.params.show_setting&&(a.util.removeStorage("guideStorage"),i.diydata.guideData.is_show=!0);var s=o.message.default_location;s&&s.location_x&&(a.getLocationFail=!1,i.setLocation(s)),i.diydata.diy.tongcheng&&(i.diydata.tongcheng.data=[].concat(e()(i.diydata.diy.tongcheng.informationdata)),0==i.diydata.tongcheng.data.length&&(i.diydata.tongcheng.empty=!0),i.diydata.tongcheng.loading=!1,i.diydata.tongcheng.has_get_all=i.diydata.diy.tongcheng.has_get_all,delete i.diydata.diy.tongcheng,1==i.diydata.tongcheng.has_get_all&&(i.diydata.tongcheng.finished=!0,i.diydata.tongcheng.loaded=!0)),i.diydata.diy.haodian&&(i.diydata.haodianCategory=[].concat(e()(i.diydata.diy.haodian.category)),i.diydata.haodianExtra.haodian_child_id=i.diydata.diy.haodian.haodian_child_id,i.diydata.haodian.data=[].concat(e()(i.diydata.diy.haodian.store)),i.diydata.haodian.loading=!1,(!i.diydata.diy.haodian.store||i.diydata.diy.haodian.store.length<i.diydata.haodian.psize)&&(i.diydata.haodian.loaded=!0),i.diydata.haodian.data.length||(i.diydata.haodian.empty=!0)),i.title=o.message.diy.data.page.title,i.util.setWXTitle(i.title),i.diydata.superRedpacketData=o.message.superRedpacketData,i.diydata.superRedpacketData.is_show=!0,i.diydata.cart_sum=o.message.cart_sum,i.menufooter=window.menufooter,i.follow=window.follow,1==i.diy.data.page.followbar&&i.follow&&1==i.follow.status&&(i.followShow=!0),i.styleContent={"background-color":a.diydata.diy.data.page.background},1==i.diy.is_show_kefu&&i.util.imeiqia(),1==i.diy.is_has_allstore&&i.onGetStore(!0),1==i.diy.is_has_goodsTab&&a.$nextTick(function(){a.onCalculateGoodsTabItemHeight()}),1==i.diy.is_has_storesTab&&a.$nextTick(function(){a.onCalculateStoresTabItemHeight()})}})},onGetCartNums:function(){var a=this;this.util.request({url:"wmall/home/index/cart"}).then(function(t){var i=t.data.message;i.errno?a.util.$toast(i.message):a.diydata.cart_sum=i.message.cart_sum})},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onToggleInformation:function(a){this.diydata.tongcheng.data[a].showall=!this.diydata.tongcheng.data[a].showall},onGetHaodianStore:function(a){var t=this;a&&(t.diydata.haodian={page:1,psize:10,loaded:!1,empty:!1,loading:!0,data:[]}),this.util.request({url:"haodian/index/store",data:{lat:t.locationInfo.location_x,lng:t.locationInfo.location_y,page:t.diydata.haodian.page,psize:t.diydata.haodian.psize,orderby:t.diydata.haodianExtra.orderby,haodian_cid:t.diydata.haodianExtra.haodian_cid,haodian_child_id:t.diydata.haodianExtra.haodian_child_id}}).then(function(a){var i=a.data.message.message;t.diydata.haodian.data=[].concat(e()(t.diydata.haodian.data),e()(i.store)),i.store.length<t.diydata.haodian.psize&&(t.diydata.haodian.loaded=!0),t.diydata.haodian.data.length||(t.diydata.haodian.empty=!0),t.diydata.haodian.loading=!1,t.diydata.haodian.page++})},onChangeHaodianExtra:function(a){if("filter"==a)this.diydata.popup.haodianSearch=!this.diydata.popup.haodianSearch;else{if(a==this.diydata.haodianExtra.orderby)return;this.diydata.showSearchSign=!1,this.diydata.haodianExtra.orderby=a,this.diydata.haodianExtra.haodian_cid=0,this.diydata.haodianCategory.length>0&&this.diydata.haodianCategory[0].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[0].children[0].id),this.diydata.haodianExtra.cIndexActive=0,this.onGetHaodianStore(!0)}},onClickHaodianParentCategory:function(a){this.diydata.haodianExtra.cIndexActive=a,this.diydata.haodianCategory.hasOwnProperty(a)&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[a].id,this.diydata.haodianCategory[a].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[a].children[0].id))},onClickHaodianChildCategory:function(a){a&&(this.diydata.haodianExtra.haodian_child_id=a.id,0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id))},onHaodianCategoryConfirm:function(){this.diydata.haodianExtra.haodian_child_id>0&&0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id),this.diydata.showSearchSign=!0,this.onGetHaodianStore(!0),this.onChangeHaodianExtra("filter")},onToggleService:function(){this.diydata.popup.serviceQrcode=!this.diydata.popup.serviceQrcode},onChangeFollowStatus:function(a){a.status||(this.followHeight=0)},onCalculateGoodsTabItemHeight:function(){this.goodsTabOffsetTop=document.getElementsByClassName("goods-tab-inner")[0].offsetTop,this.goodsTabOffsetTop-=document.getElementsByClassName("van-tabs")[0].clientHeight-44,document.getElementById("follow")&&(this.followHeight=document.getElementsByClassName("follow-tips")[0].clientHeight,this.goodsTabOffsetTop-=this.followHeight);for(var a=document.getElementsByClassName("goods-tab-item"),t=this.goodsTabOffsetTop,i=[],o=0;o<a.length;o++){t+=a[o].clientHeight,i.push(t)}this.goodsTabHeights=i},onToggleGoodsTab:function(a){this.scrollFromClickTab=!0;var t=this.goodsTabOffsetTop-44;a.index>=1&&(t=this.goodsTabHeights[a.index-1]-44),t-=this.followHeight,this.diydata.diy.is_has_location&&t>100?(this.goodsTabFixed=2,t-=52):this.util.isWeixin()?this.goodsTabFixed=1:(this.goodsTabFixed=3,t-=46),window.scrollTo(0,t),this.goodsTabActive=a.index},onCalculateStoresTabItemHeight:function(){this.storesTabOffsetTop=document.getElementsByClassName("stores-tab-group")[0].offsetTop,this.storesTabOffsetTop-=document.getElementById("stores-tab").clientHeight-44,document.getElementById("follow")&&(this.followHeight=document.getElementsByClassName("follow-tips")[0].clientHeight,this.storesTabOffsetTop-=this.followHeight);for(var a=document.getElementsByClassName("stores-tab-list"),t=this.storesTabOffsetTop,i=[],o=0;o<a.length;o++){t+=a[o].clientHeight,i.push(t)}this.storesTabHeights=i},onToggleStoresTab:function(a){this.scrollFromClickTab=!0;var t=this.storesTabOffsetTop-44;a.index>=1&&(t=this.storesTabHeights[a.index-1]-44),t-=this.followHeight,this.diydata.diy.is_has_location&&t>100?(this.storesTabFixed=2,t-=52):this.util.isWeixin()?this.storesTabFixed=1:(this.storesTabFixed=3,t-=46),window.scrollTo(0,t),this.storesTabActive=a.index}}),created:function(){this.$route.query.id?this.id=this.$route.query.id:this.util.$toast("页面不存在！")},computed:l()({},Object(c.c)(["locationInfo"])),activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.storeExtra={condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},void this.onInit();this.onGetCartNums()},mounted:function(){var a=this;window.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(a.showFixedSearchBar=t>100,1==a.diy.is_has_goodsTab){var i=44;if(a.util.isWeixin()||(i=90),a.diydata.diy.is_has_location&&a.showFixedSearchBar&&(i=96),(t=Math.ceil(t+i))>=a.goodsTabOffsetTop?a.diydata.diy.is_has_location&&a.showFixedSearchBar?a.goodsTabFixed=2:a.util.isWeixin()?a.goodsTabFixed=1:a.goodsTabFixed=3:a.goodsTabFixed=0,!a.scrollFromClickTab)for(var o=a.goodsTabHeights,e=o.length,d=0;d<e;d++){if(!o[d+1]){a.goodsTabActive=d;break}if(t<o[d]){a.goodsTabActive=d;break}if(t>=o[d]&&t<o[d+1]){a.goodsTabActive=d+1;break}}}if(1==a.diy.is_has_storesTab){i=44;if(a.util.isWeixin()||(i=90),a.diydata.diy.is_has_location&&a.showFixedSearchBar&&(i=96),(t=Math.ceil(t+i))>=a.storesTabOffsetTop?a.diydata.diy.is_has_location&&a.showFixedSearchBar?a.storesTabFixed=2:a.util.isWeixin()?a.storesTabFixed=1:a.storesTabFixed=3:a.storesTabFixed=0,!a.scrollFromClickTab){var s=a.storesTabHeights;for(e=s.length,d=0;d<e;d++){if(!s[d+1]){a.storesTabActive=d;break}if(t<s[d]){a.storesTabActive=d;break}if(t>=s[d]&&t<s[d+1]){a.storesTabActive=d+1;break}}}}a.scrollFromClickTab=!1})}},p={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{attrs:{id:"diy"}},[a.followShow?i("follow",{attrs:{follow:a.follow},on:{changeStatus:a.onChangeFollowStatus}}):a._e(),a._v(" "),a.isWeixin?a._e():i("public-header",{attrs:{title:a.title}}),a._v(" "),a.menufooter?i("public-footer",{attrs:{menufooter:a.menufooter}}):a._e(),a._v(" "),i("div",{staticClass:"container",style:a.styleContent},[i("diy",{attrs:{diydata:a.diydata,preLoading:a.showPreLoading,getLocationFail:a.getLocationFail,showFixedSearchBar:a.showFixedSearchBar,goodsTabActive:a.goodsTabActive,goodsTabFixed:a.goodsTabFixed,storesTabActive:a.storesTabActive,storesTabFixed:a.storesTabFixed},on:{onToggleDiscount:a.onToggleDiscount,onToggleStoresTabDiscount:a.onToggleStoresTabDiscount,onChangeStoreExtra:a.onChangeStoreExtra,onStoreOrderby:a.onStoreOrderby,onGetStore:a.onGetStore,onCloseRedpacket:a.onCloseRedpacket,onCloseGuide:a.onCloseGuide,onGetInformation:a.onGetInformation,onToggleInformation:a.onToggleInformation,onGetHaodianStore:a.onGetHaodianStore,onChangeHaodianExtra:a.onChangeHaodianExtra,onClickHaodianParentCategory:a.onClickHaodianParentCategory,onClickHaodianChildCategory:a.onClickHaodianChildCategory,onHaodianCategoryConfirm:a.onHaodianCategoryConfirm,onToggleService:a.onToggleService,onToggleGoodsTab:a.onToggleGoodsTab,onToggleStoresTab:a.onToggleStoresTab}})],1)],1)},staticRenderFns:[]};var _=i("VU/8")(m,p,!1,function(a){i("4d0m")},null,null);t.default=_.exports}});
//# sourceMappingURL=130.4599bf7e102194518317.js.map