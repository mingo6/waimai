webpackJsonp([189],{FlGF:function(t,a){},vb2W:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=o("Gu7T"),n=o.n(i),e=o("Dd8w"),d=o.n(e),s=o("NYxO"),g=o("mzkE"),c=o("fgl9"),l=o("kEnp"),h={data:function(){return{getLocationFail:!1,showPreLoading:!0,is_use_diy:0,diydata:{diy:{data:{}},tongcheng:{has_get_all:0,page:2,psize:10,loading:!0,loaded:!1,finished:!1,empty:!1,data:[]},guideData:{is_show:!1},config:{}},menufooter:{},showFixedSearchBar:!1,follow:{}}},components:{PublicFooter:g.a,diy:l.a,follow:c.a},methods:d()({},Object(s.b)(["setLocation","getLocation"]),{onToggleDiscount:function(t,a){"waimai_stores"==this.diydata.diy.data.items[a].id?this.diydata.diy.data.items[a].data[t].activity.is_show_all=!this.diydata.diy.data.items[a].data[t].activity.is_show_all:this.diydata.stores.data[t].activity.is_show_all=!this.diydata.stores.data[t].activity.is_show_all},onToggleInformation:function(t){this.diydata.tongcheng.data[t].showall=!this.diydata.tongcheng.data[t].showall},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onLoad:function(){var t=this,a=this;this.util.request({url:"gohome/home/index",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,menufooter:1}}).then(function(o){a.showPreLoading=!1;var i=o.data.message;if(i.errno)t.$toast(i.message);else{if(a.diydata.diy=i.message.diy,a.diydata.config=i.message.config,a.util.setWXTitle(a.diydata.diy.data.page.title),a.diydata.cart_sum=i.message.cart_sum,a.diydata.diy.guide)if(1==a.diydata.diy.guide.params.status&&"interval"==a.diydata.diy.guide.params.show_setting){var e=t.util.getStorage("guideStorage");(!e||e&&!e.show)&&(t.util.setStorage("guideStorage",{show:1},60*a.diydata.diy.guide.params.interval_time),a.diydata.guideData.is_show=!0)}else 1==a.diydata.diy.guide.params.status&&"everytime"==a.diydata.diy.guide.params.show_setting&&(t.util.removeStorage("guideStorage"),a.diydata.guideData.is_show=!0);var d=a.diydata.config.default_location;d&&d.location_x&&(t.getLocationFail=!1,a.setLocation(d)),i.message.diy.tongcheng&&i.message.diy.tongcheng.informationdata&&(a.diydata.tongcheng.data=[].concat(n()(i.message.diy.tongcheng.informationdata)),0==a.diydata.tongcheng.data.length&&(a.diydata.tongcheng.empty=!0),a.diydata.tongcheng.loading=!1,a.diydata.tongcheng.has_get_all=a.diydata.diy.tongcheng.has_get_all,delete a.diydata.diy.tongcheng,1==a.diydata.tongcheng.has_get_all&&(a.diydata.tongcheng.finished=!0,a.diydata.tongcheng.loaded=!0)),a.menufooter=window.menufooter,1==a.diydata.diy.is_show_kefu&&a.util.imeiqia()}})},onGetCartNums:function(){var t=this;this.util.request({url:"gohome/home/cart"}).then(function(a){var o=a.data.message;o.errno?t.util.$toast(o.message):t.diydata.cart_sum=o.message.cart_sum})},onGetInformation:function(t){var a=this,o=this;t&&(o.diydata.tongcheng={page:1,psize:10,loaded:0,empty:!1,loading:!0,data:[]}),o.diydata.tongcheng.loading=!0,this.util.request({url:"gohome/home/information",data:{page:o.diydata.tongcheng.page,psize:o.diydata.tongcheng.psize}}).then(function(t){var i=t.data.message.message;o.diydata.tongcheng.data=[].concat(n()(a.diydata.tongcheng.data),n()(i.informations)),i.informations.length<o.diydata.tongcheng.psize&&(o.diydata.tongcheng.loaded=1,o.diydata.tongcheng.data.length||(o.diydata.tongcheng.empty=!0),o.diydata.tongcheng.finished=!0),o.diydata.tongcheng.loading=!1,o.diydata.tongcheng.page++})},onInit:function(){var t=this;this.getLocation(),this.locationInfo.location_x?(t.getLocationFail=!1,t.locationInfo.last_location_x=this.locationInfo.location_x,t.onLoad()):this.util.getLocation({successLocation:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y}),t.onLoad()},successAddress:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y,address:a.address})},fail:function(a){t.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),t.getLocationFail=!0,t.onLoad()}})}}),created:function(){},activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.tongcheng={has_get_all:0,page:2,psize:10,loading:!0,loaded:!1,finished:!1,empty:!1,data:[]},void this.onInit();1==this.diydata.diy.is_show_cart&&this.onGetCartNums()},computed:d()({},Object(s.c)(["locationInfo"])),mounted:function(){var t=this;t.onInit(),window.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.showFixedSearchBar=a>100})}},r={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"diy-gohome-index"}},[t.follow&&1==t.follow.status?o("follow",{attrs:{follow:t.follow}}):t._e(),t._v(" "),o("public-footer",{attrs:{menufooter:t.menufooter,preLoading:t.showPreLoading}}),t._v(" "),o("div",{staticClass:"container"},[o("diy",{attrs:{diydata:t.diydata,preLoading:t.showPreLoading,getLocationFail:t.getLocationFail,showFixedSearchBar:t.showFixedSearchBar},on:{onToggleDiscount:t.onToggleDiscount,onGetInformation:t.onGetInformation,onToggleInformation:t.onToggleInformation,onCloseGuide:t.onCloseGuide}})],1)],1)},staticRenderFns:[]};var u=o("VU/8")(h,r,!1,function(t){o("FlGF")},"data-v-0e90db6b",null);a.default=u.exports}});
//# sourceMappingURL=189.7933157f0dc870c83262.js.map