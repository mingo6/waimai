webpackJsonp([138],{Crb6:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Gu7T"),i=a.n(e),n=a("mzkE"),c=a("Cz8s"),d=a("KgXo"),r={data:function(){return{redpackets:{loading:!1,finished:!1,status:1,data:[]},showLoading:!0}},components:{PublicHeader:c.a,PublicFooter:n.a,loading:d.a},watch:{$route:function(t,s){this.showLoading=!0,this.redpackets={loading:!1,finished:!1,status:1,data:[]},this.$route.query.status&&(this.redpackets.status=this.$route.query.status),this.onLoad()}},methods:{onLoad:function(){var t=this;if(this.redpackets.finished)return!1;this.util.request({url:"wmall/member/redPacket",data:{min:this.redpackets.min,status:this.redpackets.status}}).then(function(s){var a=s.data.message;t.redpackets.data=[].concat(i()(t.redpackets.data),i()(a.message)),t.hideLoading(),t.redpackets.data.length<6&&(t.redpackets.finished=!0),t.redpackets.loading=!1,t.redpackets.min=a.min,a.min||(t.redpackets.finished=!0)})},hideLoading:function(){this.showLoading=!1}},mounted:function(){this.$route.query.status&&(this.redpackets.status=this.$route.query.status),this.onLoad()}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"red-packet"}},[a("public-header",{attrs:{title:"我的红包"}}),t._v(" "),a("div",{staticClass:"content"},[t.showLoading?t._e():[t.redpackets.data.length>0?a("van-list",{attrs:{finished:t.redpackets.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.redpackets.loading,callback:function(s){t.$set(t.redpackets,"loading",s)},expression:"redpackets.loading"}},[a("div",{staticClass:"redPacket-list content-padded"},t._l(t.redpackets.data,function(s,e){return a("div",{staticClass:"redPacket-list-item",class:{invalid:s.status>1}},[a("div",{staticClass:"redPacket-list-item-container"},[a("div",{staticClass:"redPacket-info row"},[a("div",{staticClass:"col-50"},[a("span",{staticClass:"redPacket-title"},[t._v(t._s(s.title))])]),t._v(" "),a("div",{staticClass:"col-50 text-right"},[a("div",{staticClass:"price"},[t._v("￥"),a("span",{staticClass:"price-num"},[t._v(t._s(s.discount))])])])]),t._v(" "),a("div",{staticClass:"redPacket-use-limit"},[a("div",{staticClass:"superRedpacket-time"},[s.channel_cn?a("span",{staticClass:"superRedpacket-meal"},[t._v(t._s(s.channel_cn))]):t._e(),t._v("\n\t\t\t\t\t\t\t\t\t有效期："+t._s(s.starttime)+"~"+t._s(s.endtime)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"superRedpacket-condition"},[a("p",{staticClass:"use-condition"},[t._v("满"+t._s(s.condition)+"元")])])]),t._v(" "),s.category_cn||s.time_cn?a("div",{staticClass:"other-limit"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.category_cn)+" "+t._s(s.time_cn)+"\n\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),a("span",{staticClass:"border-1px-r circle circle-left"}),t._v(" "),a("span",{staticClass:"border-1px-l circle circle-right"}),t._v(" "),3==s.status?a("span",{staticClass:"overdue"}):t._e(),t._v(" "),2==s.status?a("span",{staticClass:"use"}):t._e()])}),0),t._v(" "),a("div",{staticClass:"no-more"},[t.redpackets.finished?a("span",{staticClass:"no-more-a"},[t._v("没有更多红包了")]):t._e(),t._v(" "),"1"==t.redpackets.status?[t.redpackets.finished?a("span",[t._v("|")]):t._e(),t._v(" "),a("router-link",{staticClass:"no-more-a",attrs:{to:t.util.getUrl({path:"/pages/member/redPacket/index?status=2"})}},[t._v("查看无效券")])]:t._e()],2)]):a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/coupon_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("您没有红包记录")])]),t._v(" "),a("div",{staticStyle:{width:"100%",height:"50px"}})]],2),t._v(" "),a("transition",{attrs:{name:"loading"}},[a("iloading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,o,!1,function(t){a("VhZ2")},"data-v-3bf6af04",null);s.default=l.exports},VhZ2:function(t,s){}});
//# sourceMappingURL=138.bf0c0bf3dd5126125682.js.map