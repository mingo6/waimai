webpackJsonp([57],{"1ZWw":function(a,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=t("Gu7T"),n=t.n(o),e=t("woOf"),d=t.n(e),s=t("Dd8w"),c=t.n(s),r=t("Cz8s"),l=t("mzkE"),h=t("NYxO"),_=t("deIj"),v={components:{PublicHeader:r.a,PublicFooter:l.a},data:function(){return{category:{id:0,title:"好店分类"},haodian:{page:2,psize:10,loading:!1,loaded:!1,empty:!1,data:[]},popup:{haodianSearch:!1},haodianExtra:{orderby:"distance",haodian_cid:0,haodian_child_id:0},haodianCategory:[],haodianTemp:{haodian_cid:0,haodian_child_id:0,cIndexActive:0},showPreLoading:!0,getLocationFail:!1,menufooter:{}}},methods:c()({},Object(h.b)(["setLocation","getLocation"]),{onLoad:function(a){var i=this;a&&(i.haodian={page:2,psize:10,loaded:!1,empty:!1,loading:!0,data:[]}),Object(_.a)({vue:i,url:"haodian/index/category",data:{lat:i.locationInfo.location_x,lng:i.locationInfo.location_y,psize:i.haodian.psize,orderby:i.haodianExtra.orderby,haodian_cid:i.haodianExtra.haodian_cid,haodian_child_id:i.haodianExtra.haodian_child_id,menufooter:1},success:function(a){i.category=d()(i.category,a.category),i.util.setWXTitle(i.category.title),i.haodianExtra.haodian_cid=i.category.id,i.haodianCategory=[].concat(n()(a.categorys)),i.haodian.data=[].concat(n()(i.haodian.data),n()(a.store)),i.haodian.loading=!1,(!a.store||a.store.length<i.haodian.psize)&&(i.haodian.loaded=!0),i.haodian.data.length||(i.haodian.empty=!0),console.log(i.haodian)}})},onGetHaodianStore:function(a){var i=this;a&&(i.haodian={page:1,psize:10,loaded:!1,empty:!1,loading:!0,data:[]}),Object(_.a)({vue:i,url:"haodian/index/store",data:{lat:i.locationInfo.location_x,lng:i.locationInfo.location_y,page:i.haodian.page,psize:i.haodian.psize,orderby:i.haodianExtra.orderby,haodian_cid:i.haodianExtra.haodian_cid,haodian_child_id:i.haodianExtra.haodian_child_id},success:function(a){i.haodian.data=[].concat(n()(i.haodian.data),n()(a.store)),a.store.length<i.haodian.psize&&(i.haodian.loaded=!0),i.haodian.data.length||(i.haodian.empty=!0),i.haodian.loading=!1,i.haodian.page++}})},onInit:function(){var a=this;this.getLocation(),this.locationInfo.location_x?(a.getLocationFail=!1,a.locationInfo.last_location_x=this.locationInfo.location_x,a.onLoad()):this.util.getLocation({successLocation:function(i){a.setLocation({location_x:i.location_x,location_y:i.location_y}),a.onLoad()},successAddress:function(i){a.setLocation({location_x:i.location_x,location_y:i.location_y,address:i.address})},fail:function(i){a.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),a.getLocationFail=!0,a.onLoad()}})},onChangeHaodianExtra:function(a){if("filter"==a)this.popup.haodianSearch=!this.popup.haodianSearch;else{if(a==this.haodianExtra.orderby)return;this.haodianExtra.orderby=a,this.onGetHaodianStore(!0)}},onClickHaodianParentCategory:function(a){this.haodianTemp.cIndexActive=a,this.haodianCategory.hasOwnProperty(a)&&(this.haodianTemp.haodian_cid=this.haodianCategory[a].id,this.haodianTemp.haodian_child_id=0)},onClickHaodianChildCategory:function(a){a&&(this.haodianTemp.haodian_child_id=a.id,0==this.haodianTemp.haodian_cid&&this.haodianCategory.length>0&&(this.haodianTemp.haodian_cid=this.haodianCategory[0].id))},onHaodianCategoryConfirm:function(){this.haodianExtra=this.util.extend(this.haodianExtra,this.haodianTemp),this.onLoad(!0),this.onChangeHaodianExtra("filter")}}),computed:c()({},Object(h.c)(["locationInfo"])),mounted:function(){this.$route.query&&this.$route.query.cid>0&&(this.haodianExtra.haodian_cid=this.$route.query.cid),this.onInit()}},g={render:function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("div",{attrs:{id:"haodian-category"}},[t("public-header",{attrs:{title:a.category.title}}),a._v(" "),t("public-footer",{attrs:{menufooter:a.menufooter,preLoading:a.showPreLoading}}),a._v(" "),t("div",{staticClass:"content"},[a.getLocationFail?[t("div",{staticClass:"no-data"},[t("img",{attrs:{src:"static/img/store_no_con.png",alt:""}}),a._v(" "),t("p",[a._v("获取定位失败!您可以选择手动搜索地址")]),a._v(" "),t("router-link",{staticClass:"navigator",attrs:{to:a.util.getUrl({path:"/pages/home/location"})}},[a._v("手动搜索地址")])],1)]:[t("div",{staticClass:"diy-haodian-list"},[t("div",{staticClass:"haodian-filter fixed padding-15-tb padding-10-lr flex-lr bg-default font-14 van-hairline--bottom"},[t("div",{staticClass:"filter-item",class:{active:"distance"==a.haodianExtra.orderby},on:{click:function(i){return a.onChangeHaodianExtra("distance")}}},[a._v("附近")]),a._v(" "),t("div",{staticClass:"filter-item",class:{active:"new"==a.haodianExtra.orderby},on:{click:function(i){return a.onChangeHaodianExtra("new")}}},[a._v("最新")]),a._v(" "),t("div",{staticClass:"filter-item",class:{active:"score"==a.haodianExtra.orderby},on:{click:function(i){return a.onChangeHaodianExtra("score")}}},[a._v("评分")]),a._v(" "),t("div",{staticClass:"flex filter-item",on:{click:function(i){return a.onChangeHaodianExtra("filter")}}},[a._v("\n\t\t\t\t\t\t筛选"),t("i",{staticClass:"icon icon-unfold"}),a._v(" "),t("span",{staticClass:"haodian-search-sign"})])]),a._v(" "),a.haodian.empty?t("div",{staticClass:"no-data"},[t("img",{attrs:{src:"static/img/collect_no_bg.png",alt:""}}),a._v(" "),t("p",[a._v("暂无好店，您可以更换筛选条件试试")])]):t("van-list",{attrs:{finished:a.haodian.loaded,offset:100,"immediate-check":!1},on:{load:a.onGetHaodianStore},model:{value:a.haodian.loading,callback:function(i){a.$set(a.haodian,"loading",i)},expression:"haodian.loading"}},[a._l(a.haodian.data,function(i,o){return t("div",{key:o,staticClass:"store-item ",class:{"van-hairline--top":o>0}},[t("router-link",{staticClass:"img-wrap",attrs:{tag:"div",to:a.util.getUrl({path:"/gohome/pages/haodian/detail",query:{sid:i.id}})}},[t("img",{attrs:{src:i.logo,alt:""}})]),a._v(" "),t("div",{staticClass:"store-main"},[t("router-link",{attrs:{tag:"div",to:a.util.getUrl({path:"/gohome/pages/haodian/detail",query:{sid:i.id}})}},[t("div",{staticClass:"flex-lr"},[t("div",{staticClass:"flex"},[t("div",{staticClass:"store-title"},[a._v(a._s(i.title))]),a._v(" "),t("van-rate",{attrs:{size:12,"disabled-color":"#ff2d4b",disabled:""},model:{value:i.haodian_score,callback:function(t){a.$set(i,"haodian_score",t)},expression:"haodianItem.haodian_score"}}),a._v(" "),t("span",{staticClass:"c-gray font-12 margin-5-l"},[a._v(a._s(i.haodian_score)+"分")])],1),a._v(" "),t("div",{staticClass:"c-danger"},[a._v(a._s(i.distance)+"km")])]),a._v(" "),t("div",{staticClass:"c-gray font-12 margin-10-t"},[a._v("营业时间: "+a._s(i.business_hours_cn))]),a._v(" "),i.haodian_tags&&i.haodian_tags.length>0?t("ul",{staticClass:"store-tags"},a._l(i.haodian_tags,function(i,o){return t("li",{key:o,staticClass:"tag-item"},[a._v(a._s(i))])}),0):a._e()]),a._v(" "),i.activity&&i.activity.length>0?t("div",{staticClass:"discount-box"},a._l(i.activity,function(i,o){return t("div",{key:o,staticClass:"single-line"},[t("img",{staticClass:"discount-icon",attrs:{src:i.thumb_vue}}),a._v(" "),t("div",{staticClass:"discount-text"},[a._v(a._s(i.text))])])}),0):a._e()],1)],1)}),a._v(" "),a.haodian.loaded?t("div",{staticClass:"loaded"},[t("div",{staticClass:"loaded-tips"},[a._v("我是有底线的")])]):a._e()],2)],1)]],2),a._v(" "),t("van-popup",{attrs:{position:"top"},model:{value:a.popup.haodianSearch,callback:function(i){a.$set(a.popup,"haodianSearch",i)},expression:"popup.haodianSearch"}},[t("div",{staticClass:"haodian-filter padding-15-tb padding-10-lr flex-lr bg-default font-14 van-hairline--bottom"},[t("div",{staticClass:"filter-item",class:{active:"distance"==a.haodianExtra.orderby},on:{click:function(i){return a.onChangeHaodianExtra("distance")}}},[a._v("附近")]),a._v(" "),t("div",{staticClass:"filter-item",class:{active:"new"==a.haodianExtra.orderby},on:{click:function(i){return a.onChangeHaodianExtra("new")}}},[a._v("最新")]),a._v(" "),t("div",{staticClass:"filter-item",class:{active:"score"==a.haodianExtra.orderby},on:{click:function(i){return a.onChangeHaodianExtra("score")}}},[a._v("评分")]),a._v(" "),t("div",{staticClass:"filter-item"},[a._v("筛选")])]),a._v(" "),t("van-tree-select",{staticClass:"font-14",attrs:{items:a.haodianCategory,"main-active-index":a.haodianTemp.cIndexActive,"active-id":a.haodianTemp.haodian_child_id},on:{navclick:a.onClickHaodianParentCategory,itemclick:a.onClickHaodianChildCategory}}),a._v(" "),t("ul",{staticClass:"flex van-hairline--top"},[t("li",{staticClass:"flex-1 c-gray van-hairline--right text-center padding-15-tb",on:{click:function(i){return a.onChangeHaodianExtra("filter")}}},[a._v("取消")]),a._v(" "),t("li",{staticClass:"flex-1 c-danger text-center padding-15-tb",on:{click:a.onHaodianCategoryConfirm}},[a._v("确定")])])],1)],1)},staticRenderFns:[]};var u=t("VU/8")(v,g,!1,function(a){t("QIMw")},null,null);i.default=u.exports},QIMw:function(a,i){}});
//# sourceMappingURL=57.12b59280cd556eba2b63.js.map