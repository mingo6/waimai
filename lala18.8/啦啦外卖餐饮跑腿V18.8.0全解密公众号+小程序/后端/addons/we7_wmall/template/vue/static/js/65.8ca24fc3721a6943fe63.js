webpackJsonp([65],{sK9i:function(e,t){},vKhq:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{PublicHeader:s("Cz8s").a},data:function(){return{showPreLoading:!0,store:{},queues:[],queueid_select:0}},methods:{onSelectQueue:function(e){this.queueid_select=e},onSubmit:function(){var e=this;this.util.request({url:"wmall/store/assign/index",data:{sid:this.sid,queue_id:this.queueid_select},method:"POST"}).then(function(t){var s=t.data.message;if(s.errno)return e.util.$toast(s.message,"",1e3),!1;e.util.$toast(s.message,e.util.getUrl({path:"/tangshi/pages/assign/assignDetail",query:{sid:e.sid}}),1e3,"replace")})},onLoad:function(){var e=this;this.showPreLoading=!0,this.util.request({url:"wmall/store/assign/index",data:{sid:this.sid}}).then(function(t){e.showPreLoading=!1;var s=t.data.message;0==s.errno?(e.store=s.message.store,e.queues=s.message.queues,e.queueid_select=s.message.queueid_select):-1e3==s.errno?e.util.$toast(s.message,e.util.getUrl({path:"/pages/store/index",query:{sid:e.sid}}),1e3,"replace"):1e3==s.errno?e.util.$toast(s.message,e.util.getUrl({path:"/tangshi/pages/assign/assignDetail",query:{sid:e.sid}}),1e3,"replace"):-1==s.errno&&e.util.$toast(s.message,e.util.getUrl({path:"/pages/home/index"}),1e3,"replace")})}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid)},mounted:function(){this.onLoad()}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"store-assign"}},[s("public-header",{attrs:{title:"排队取号"}}),e._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:e.store.logo,alt:""}})]),e._v(" "),s("div",{staticClass:"title ellipsis"},[e._v(e._s(e.store.title))]),e._v(" "),e._m(0),e._v(" "),s("ul",{staticClass:"operation"},[e._l(e.queues,function(t,i){return[s("li",{staticClass:"operation-item ellipsis",class:{active:e.queueid_select==i},on:{click:function(t){return e.onSelectQueue(i)}}},[e._v(e._s(t.title)+e._s(t.guest_num>0?"(推荐"+t.guest_num+"人)":"")),s("span",{staticClass:"font-12"},[e._v("(目前有"+e._s(t.wait)+"人等待)")])])]})],2),e._v(" "),s("div",{staticClass:"submit",on:{click:e.onSubmit}},[e._v("立即取号")]),e._v(" "),e._m(1),e._v(" "),s("div",{staticClass:"line"})])]),e._v(" "),s("transition",{attrs:{name:"loading"}},[e.showPreLoading?s("iloading"):e._e()],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"divide"},[t("div",{staticClass:"divide-line"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip"},[t("i",{staticClass:"icon icon-question1"}),this._v("\n\t\t\t\t过号请重新取号，谢谢配合！\n\t\t\t")])}]};var n=s("VU/8")(i,a,!1,function(e){s("sK9i")},null,null);t.default=n.exports}});
//# sourceMappingURL=65.8ca24fc3721a6943fe63.js.map