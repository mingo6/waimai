webpackJsonp([5],{"8bY+":function(t,i){},CGRQ:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("Gu7T"),e=s.n(a),o=s("Dd8w"),n=s.n(o),c=s("Cz8s"),l=s("+CBI"),r=s("deIj"),d=s("NYxO"),v={components:{publicHeader:c.a,iswitch:l.a},data:function(){return{showPreLoading:!0,cid:0,bargain_id:0,orderby:"sailed desc",categorys:[],cIndexActive:0,cTitleActive:"",goodsAll:[],goodsList:[],cids:[],bargainGoodsOld:[]}},computed:n()({},Object(d.c)(["bargainGoods"])),methods:n()({},Object(d.b)(["setBargainGoods"]),{onGetData:function(t){var i=this;Object(r.a)({vue:i,url:"manage/activity/bargain/goods_list",data:{cid:i.cid,bargain_id:i.bargain_id},success:function(s){var a={};if(s.bargain_goods.length>0)for(var o in s.bargain_goods)a[s.bargain_goods[o].id]=s.bargain_goods[o];if(i.bargainGoodsOld=a,i.util.length(i.bargainGoods)>0?a=i.bargainGoods:i.setBargainGoods(a),t){var n=s.categorys;if(i.cids=s.cids,i.util.length(a)>0){for(var c in a)n[i.cidToCindex(a[c].cid)].total+=1}i.categorys=[].concat(e()(n))}var l=s.goods,r={};if(i.util.length(a)>0)for(var d in l)r=l[d],a.hasOwnProperty(r.id)&&(l[d]=a[r.id]);i.goodsAll[i.cIndexActive]=[].concat(e()(l)),i.cTitleActive=i.categorys[i.cIndexActive].title,i.goodsList=[].concat(e()(i.goodsAll[i.cIndexActive]))}})},onChangeCategory:function(t){this.goodsAll[this.cIndexActive]=this.goodsList,this.cIndexActive=t,this.goodsAll.hasOwnProperty(t)?(this.cTitleActive=this.categorys[this.cIndexActive].title,this.goodsList=[].concat(e()(this.goodsAll[this.cIndexActive]))):(this.cid=this.categorys[this.cIndexActive].id,this.onGetData())},onToggleCheckBox:function(t,i){var s=1;this.goodsList[t].is_bargain&&(s=-1);var a=this.cIndexActive;this.categorys[a].total=this.categorys[a].total+s,this.goodsList[t].is_bargain=!this.goodsList[t].is_bargain,this.goodsAll[a]=this.goodsList},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})},cidToCindex:function(t){return t=parseInt(t),this.cids.indexOf(t)},onSubmit:function(){var t=[];this.util.length(this.bargainGoods)>0&&(t=this.bargainGoods);var i=[];for(var s in this.goodsAll)if((i=this.goodsAll[s]).length>0)for(var a in i)i[a].is_bargain?t[i[a].id]=i[a]:t.hasOwnProperty(i[a].id)&&delete t[i[a].id];this.util.length(t)>0?(this.setBargainGoods(t),this.$router.go(-1)):this.util.$toast("请选择参与活动的商品")}}),mounted:function(){var t=this.util.parseQuery(this.$route.query);t.bargain_id>0&&(this.bargain_id=t.bargain_id),this.onGetData(!0)}},g={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"activity-bargainGoods"}},[s("public-header",{attrs:{title:"创建商品活动"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"fix-search van-hairline--bottom"},[s("router-link",{staticClass:"search-input",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/activity/bargainGoodsSearch"})}},[t._v("搜索商品名称")])],1),t._v(" "),s("van-row",{staticClass:"content-inner"},[s("van-col",{staticClass:"wh-100 tag-list",attrs:{span:"5"}},t._l(t.categorys,function(i,a){return s("div",{key:i.id,staticClass:"tag-item van-hairline--bottom",class:{active:t.cIndexActive==a},on:{click:function(i){t.onChangeCategory(a)}}},[s("div",{staticClass:"tag-inner"},[t._v(t._s(i.title))]),t._v(" "),i.total>0?s("div",{staticClass:"badge"},[t._v(t._s(i.total))]):t._e()])})),t._v(" "),s("van-col",{staticClass:"wh-100 goods-wrap",attrs:{span:"19"}},[s("div",{staticClass:"goods-top van-hairline--bottom"},[s("div",{staticClass:"category-title"},[t._v(t._s(t.cTitleActive))])]),t._v(" "),s("div",{staticClass:"padding-15-lr bg-default hide"},[s("div",{staticClass:"rank van-hairline--bottom"},[s("div",{staticClass:"rank-item",class:{active:"sailed desc"==t.orderby}},[t._v("销量最高")]),t._v(" "),s("div",{staticClass:"rank-item"},[t._v("好评优先")]),t._v(" "),s("div",{staticClass:"rank-item flex",class:{active:"price desc"==t.orderby}},[t._v("\n\t\t\t\t\t\t\t价格\n\t\t\t\t\t\t\t"),s("div",{staticClass:"triangle"},[s("div",{staticClass:"triangle-top selected"}),t._v(" "),s("div",{staticClass:"triangle-bottom "})])])])]),t._v(" "),s("div",{staticClass:"goods-list padding-15-lr bg-default"},[t.goodsList.length>0?s("van-cell-group",{staticClass:"border-0px"},t._l(t.goodsList,function(i,a){return s("div",{key:i.id,staticClass:"goods-item van-hairline--bottom"},[s("div",{on:{click:function(s){t.onToggleCheckBox(a,i.cid)}}},[s("van-row",[s("van-col",{attrs:{span:"6"}},[s("img",{staticClass:"goods-thumb",attrs:{src:i.thumb,alt:""}})]),t._v(" "),s("van-col",{attrs:{span:"15"}},[s("div",{staticClass:"w-100 ellipsis font-bold"},[t._v(t._s(i.title)+t._s(i.id))]),t._v(" "),s("div",{staticClass:"margin-5-t c-gray font-12"},[s("span",{staticClass:"padding-10-r"},[t._v("月售"+t._s(i.sailed))]),t._v(" "),s("span",[t._v("好评"+t._s(i.per_comment_good)+"%")])]),t._v(" "),i.is_bargain?s("div",{staticClass:"discount flex margin-5-t hide"},[s("span",{staticClass:"mark flex "},[s("span",[t._v("¥"+t._s(i.discount_price))]),t._v(" "),s("span",[t._v("折扣")])]),t._v(" "),s("span",{staticClass:"c-gray font-12 margin-5-l"},[t._v("351天后到期")])]):t._e(),t._v(" "),s("div",{staticClass:"margin-5-t"},[s("span",[t._v("¥"+t._s(i.price))]),t._v(" "),s("span",{staticClass:"padding-10-l c-gray font-12 hide"},[t._v("已参与其他活动")])])]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"3"}},[s("div",{staticClass:"radio-box icon",class:{"icon-check":i.is_bargain}})])],1)],1),t._v(" "),i.is_bargain?s("div",{staticClass:"goods-set"},[s("div",{staticClass:"flex-lr font-12 margin-5-b"},[s("span",[t._v("活动价")]),t._v(" "),s("div",{staticClass:"input-unit"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:i.discount_price,expression:"item.discount_price",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:i.discount_price},on:{input:function(s){s.target.composing||t.$set(i,"discount_price",t._n(s.target.value))},blur:function(i){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"font-12 bg-default"},[t._v("元")])])]),t._v(" "),s("div",{staticClass:"flex-lr font-12 margin-5-b"},[s("span",[t._v("每单限购")]),t._v(" "),s("div",{staticClass:"input-unit"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:i.max_buy_limit,expression:"item.max_buy_limit",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:i.max_buy_limit},on:{input:function(s){s.target.composing||t.$set(i,"max_buy_limit",t._n(s.target.value))},blur:function(i){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"font-12 bg-default"},[t._v("元")])])]),t._v(" "),s("div",{staticClass:"flex-lr font-12 margin-5-b"},[s("span",[t._v("每日库存")]),t._v(" "),s("div",{staticClass:"input-unit"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:i.discount_total,expression:"item.discount_total",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:i.discount_total},on:{input:function(s){s.target.composing||t.$set(i,"discount_total",t._n(s.target.value))},blur:function(i){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"font-12 bg-default"},[t._v("份")])])]),t._v(" "),s("div",{staticClass:"flex-lr font-12 margin-5-b"},[s("span",[t._v("当日剩余库存")]),t._v(" "),s("div",{staticClass:"input-unit"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:i.discount_available_total,expression:"item.discount_available_total",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:i.discount_available_total},on:{input:function(s){s.target.composing||t.$set(i,"discount_available_total",t._n(s.target.value))},blur:function(i){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"font-12 bg-default"},[t._v("份")])])]),t._v(" "),s("div",{staticClass:"flex-lr font-12"},[s("span",[t._v("新用户专享")]),t._v(" "),s("iswitch",{attrs:{value:i.poi_user_type,"text-open":"ON","text-close":"OFF","condition-open":"new","condition-close":"all",keys:"goodsList."+a+".poi_user_type"},on:{change:t.jsToggleSwitch}})],1)]):t._e()])})):s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),s("p",[t._v("该分类下暂无商品")])])],1)])],1),t._v(" "),s("div",{staticClass:"fix-bottom"},[s("van-button",{staticClass:"bg-info",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("选好了, 立即创建")])],1)],1),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var u=s("VU/8")(v,g,!1,function(t){s("8bY+")},null,null);i.default=u.exports}});
//# sourceMappingURL=5.ab78e6a2db54c2b57d3d.js.map