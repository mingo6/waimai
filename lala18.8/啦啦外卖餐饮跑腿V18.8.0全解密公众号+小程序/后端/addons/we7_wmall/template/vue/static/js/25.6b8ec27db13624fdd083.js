webpackJsonp([25],{XP9i:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Cz8s"),a=e("deIj"),s=e("5ryX"),l={components:{PublicHeader:n.a,navigator:s.a},data:function(){return{detail:{},showPreLoading:!0,commentShow:!1,comment:{title:"评论",placeholder:"说点什么...",content:"",type:"",id:0,to_uid:0},comments:[],menufooter:{}}},methods:{onLoad:function(){var t=this;Object(a.a)({vue:t,url:"tongcheng/index/detail",data:{id:t.id,trade_id:t.trade_id,menufooter:1,_navc:1},success:function(i){t.detail=i.detail,t.id=t.detail.id,t.comments=i.comments,this.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleCommentShow:function(){this.commentShow=!this.commentShow},onComment:function(t,i,e,n){this.comment.type=t,this.comment.id=i,this.comment.to_uid=e,this.comment.title="评论",this.comment.placeholder="说点什么...","reply"==t&&(this.comment.title="回复",this.comment.placeholder="回复"+n),this.onToggleCommentShow()},onCommentSubmit:function(){if(!this.comment.content)return this.util.$toast("你好像什么也没说","",1e3),!1;var t="tongcheng/index/comment";if("reply"==this.comment.type)t="tongcheng/index/reply";Object(a.c)({vue:this,url:t,data:{id:this.comment.id,tid:this.id,to_uid:this.comment.to_uid,content:this.comment.content},message:"reply"==this.comment.type?"回复成功":"评论成功"})},onLike:function(){Object(a.c)({vue:this,url:"tongcheng/index/like",data:{id:this.id},message:"点赞成功"})}},created:function(){this.$route.query&&(this.$route.query.id>0?this.id=this.$route.query.id:this.$route.query.trade_id>0&&(this.trade_id=this.$route.query.trade_id))},mounted:function(){this.onLoad()}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"tongcheng-detail"}},[e("public-header",{attrs:{title:"同城信息"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"detail"},[e("div",{staticClass:"userinfo flex-lr"},[e("div",{staticClass:"left"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"img-100",attrs:{src:t.detail.ft_avatar,alt:""}})])]),t._v(" "),e("div",{staticClass:"right flex-lr"},[e("ul",[e("li",{staticClass:"flex"},[1==t.detail.is_stick?e("span",{staticClass:"tag-top"},[t._v("置顶")]):t._e(),t._v(" "),t.detail.category?e("span",{staticClass:"tag-cate"},[t._v(t._s(t.detail.category.title))]):t._e(),t._v(" "),e("span",{staticClass:"nickname ellipsis"},[t._v(t._s(t.detail.nickname))])]),t._v(" "),e("li",{staticClass:"c-gray font-12 margin-5-t"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.detail.addtime_cn)+"发布\n\t\t\t\t\t\t")])]),t._v(" "),t.detail.mobile?e("div",{staticClass:"icon icon-phone2 c-danger font-20",on:{click:function(i){return t.util.jsTel(t.detail.mobile)}}}):t._e()])]),t._v(" "),e("li",{staticClass:"tags flex"},t._l(t.detail.keyword,function(i,n){return e("div",{key:"t"+n,staticClass:"tag-item"},[t._v(t._s(i))])}),0),t._v(" "),e("div",{staticClass:"tiezi-info"},[e("div",{staticClass:"text",domProps:{innerHTML:t._s(t.detail.content)}}),t._v(" "),e("ul",{staticClass:"thumbs"},t._l(t.detail.thumbs,function(i,n){return e("li",{key:"i"+n,staticClass:"thumb-item",on:{click:function(i){return t.util.jsPreviewImage(t.detail.thumbs,n)}}},[e("img",{attrs:{src:i,alt:""}})])}),0)]),t._v(" "),e("ul",{staticClass:"flex font-13 c-gray margin-10-t"},[e("li",{staticClass:"flex margin-10-r"},[e("i",{staticClass:"icon icon-attention font-15"}),t._v(" "),e("span",[t._v(t._s(t.detail.looknum))])]),t._v(" "),e("li",{staticClass:"flex margin-10-r",on:{click:function(i){return t.onLike()}}},[e("i",{staticClass:"icon icon-appreciate_light font-14"}),t._v(" "),e("span",[t._v(t._s(t.detail.likenum))])])]),t._v(" "),e("div",{staticClass:"zan-wrap"},[e("div",{staticClass:"zan-total"},[e("span",[t._v(t._s(t.detail.likenum))]),t._v(" "),e("span",[t._v("赞")])]),t._v(" "),t._l(t.detail.like_avatar,function(t,i){return e("div",{key:"a"+i,staticClass:"avatar"},[e("img",{staticClass:"img-100",attrs:{src:t,alt:""}})])})],2)]),t._v(" "),e("div",{staticClass:"comment bg-default margin-10-t"},[e("div",{staticClass:"comment-title flex-lr van-hairline--bottom"},[e("span",{staticClass:"c-gray"},[t._v("评论")]),t._v(" "),e("span",{staticClass:"c-danger",on:{click:function(i){return t.onComment("comment",t.id)}}},[t._v("我要评论")])]),t._v(" "),t.comments&&t.comments.length>0?e("ul",{staticClass:"comment-list"},t._l(t.comments,function(i,n){return e("li",{key:"c"+n,staticClass:"comment-item van-hairline--bottom"},[e("div",{staticClass:"userinfo flex-lr"},[e("div",{staticClass:"left"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"img-100",attrs:{src:i.avatar,alt:""}})])]),t._v(" "),e("div",{staticClass:"right flex-lr"},[e("ul",[e("li",{staticClass:"flex"},[e("span",{staticClass:"nickname ellipsis"},[t._v(t._s(i.nickname))])]),t._v(" "),e("li",{staticClass:"c-gray font-12 margin-5-t"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(i.addtime_cn)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("span",{staticClass:"c-info font-14",on:{click:function(e){return t.onComment("reply",i.id,i.uid,i.nickname)}}},[t._v("回复")])])]),t._v(" "),e("div",{staticClass:"comment-inner"},[e("div",{staticClass:"text"},[t._v(t._s(i.content))]),t._v(" "),i.reply&&i.reply.length>0?e("div",{staticClass:"reply-list"},t._l(i.reply,function(n,a){return e("div",{key:"r"+t.index,staticClass:"reply-item ",class:{"van-hairline--bottom":a<i.reply.length-1}},[e("div",{staticClass:"userinfo flex-lr"},[t._e(),t._v(" "),e("div",{staticClass:"right flex-lr"},[e("ul",[e("li",{staticClass:"flex"},[e("span",{staticClass:"nickname ellipsis",on:{click:function(e){return t.onComment("reply",i.id,n.from_uid,n.from_nickname)}}},[t._v(t._s(n.from_nickname))]),t._v(" "),e("span",{staticClass:"c-gray margin-5-l"},[t._v("回复")]),t._v(" "),e("span",{staticClass:"nickname ellipsis margin-5-l",on:{click:function(e){return t.onComment("reply",i.id,n.to_uid,n.to_nickname)}}},[t._v(t._s(n.to_nickname))])]),t._v(" "),e("li",{staticClass:"c-gray font-12 margin-5-t"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.addtime_cn)+"\n\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),t._e()])]),t._v(" "),e("div",{staticClass:"comment-inner"},[e("div",{staticClass:"text"},[t._v(t._s(n.content))])])])}),0):t._e()])])}),0):e("div",{staticClass:"padding-15-tb font-14 c-gray text-center"},[t._v("暂无任何评论~")])])]),t._v(" "),e("van-dialog",{attrs:{"show-cancel-button":"","confirm-button-text":"发表"},on:{confirm:t.onCommentSubmit,cancel:function(i){t.commentShow=!1}},model:{value:t.commentShow,callback:function(i){t.commentShow=i},expression:"commentShow"}},[e("van-field",{attrs:{placeholder:t.comment.title,"input-align":"center",readonly:""}}),t._v(" "),e("van-field",{attrs:{type:"textarea",placeholder:t.comment.placeholder,minHeight:"100px"},model:{value:t.comment.content,callback:function(i){t.$set(t.comment,"content",i)},expression:"comment.content"}})],1),t._v(" "),e("navigator",{attrs:{menu:t.menufooter}}),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"avatar"},[i("img",{staticClass:"img-100",attrs:{src:"",alt:""}})])}]};var o=e("VU/8")(l,c,!1,function(t){e("bBBS")},null,null);i.default=o.exports},bBBS:function(t,i){}});
//# sourceMappingURL=25.6b8ec27db13624fdd083.js.map