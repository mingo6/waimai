webpackJsonp([58],{"09YH":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Cz8s"),n=a("deIj"),l={components:{publicHeader:i.a},data:function(){return{code:"",member:{},islegal:!1,showPreLoading:!0}},methods:{onLoad:function(){var e=this;Object(n.a)({vue:e,url:"deliveryCard/deliveryExchange/index",data:{},success:function(t){e.member=t.member,e.islegal=!0}})},onSubmit:function(){var e=this;e.islegal&&(e.code?(e.islegal=!1,Object(n.c)({vue:e,url:"deliveryCard/deliveryExchange/exchange",data:{code:e.code},success:function(t){e.util.$toast("兑换成功",e.util.getUrl({path:"/pages/deliveryCard/index"}),1500)},fail:function(t){e.util.$toast(t),e.islegal=!0}})):e.util.$toast("请输入16位兑换码"))}},mounted:function(){this.onLoad()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"deliveryCard-exchange"}},[a("public-header",{attrs:{title:"兑换配送会员卡"}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"tips"},[e._v("成功兑换后将关联到当前帐号："+e._s(e.member.nickname))]),e._v(" "),a("van-cell-group",[a("van-field",{attrs:{label:"兑换码",placeholder:"请输入16位兑换码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),a("div",{staticClass:"padding-15"},[a("van-button",{staticClass:"deliveryCard-button",attrs:{size:"normal",disabled:!e.islegal,block:""},on:{click:e.onSubmit}},[e._v("兑换配送会员卡")])],1)],1),e._v(" "),e.showPreLoading?a("iloading"):e._e()],1)},staticRenderFns:[]};var c=a("VU/8")(l,s,!1,function(e){a("M/Uk")},null,null);t.default=c.exports},"M/Uk":function(e,t){}});
//# sourceMappingURL=58.674a91b6a5f5a717c073.js.map