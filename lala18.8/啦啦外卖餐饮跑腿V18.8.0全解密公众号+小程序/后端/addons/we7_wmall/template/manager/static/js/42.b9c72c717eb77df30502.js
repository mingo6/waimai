webpackJsonp([42],{QP6w:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Cz8s"),s=n("deIj"),o={data:function(){return{id:0,content:"",showPreLoading:!0}},components:{publicHeader:i.a},methods:{onLoad:function(){var t=this;Object(s.a)({vue:this,data:{id:t.id},url:"manage/news/news/detail",success:function(e){t.content=e.news.content}})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"news-news-detail"}},[e("public-header",{attrs:{title:"资讯详情"}}),this._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"detail-info",domProps:{innerHTML:this._s(this.content)}})]),this._v(" "),this.showPreLoading?e("iloading"):this._e()],1)},staticRenderFns:[]};var r=n("VU/8")(o,a,!1,function(t){n("Rf40")},null,null);e.default=r.exports},Rf40:function(t,e){}});
//# sourceMappingURL=42.b9c72c717eb77df30502.js.map