webpackJsonp([63],{ROgv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"spread-poster"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.respon,alt:""}})]),t._v(" "),i("div",{staticClass:"tips-group bg-default margin-15-lr"},[t._m(0),t._v(" "),i("ul",{staticClass:"padding-15-lr padding-10-tb"},[i("li",{},[t._v("\n\t\t\t\t\t1.长按图片下载海报到相册,转发此海报给微信好友或分享到朋友圈。\n\t\t\t\t")]),t._v(" "),i("li",[t._v("\n\t\t\t\t\t2.好友扫描您分享海报上的二维码,并且下单。\n\t\t\t\t")]),t._v(" "),i("li",[1==t.settle.balance_condition?[t._v("3.确认收货之后,您就可以获得佣金。")]:[t._v("3.好友下单后,确认收货并评价之后,您就可以获得佣金。")]],2)]),t._v(" "),t._m(1),t._v(" "),i("ul",{staticClass:"padding-15-lr padding-10-tb margin-15-b"},[i("li",[t._v("\n\t\t\t\t\t分享后会带有独特的推荐码,您的好友访问之后,\n\t\t\t\t\t"),1==t.relate.become_child_limit?[t._v("\n\t\t\t\t\t\t如果好友没有被其他人推广，并且首次成功下单,\n\t\t\t\t\t")]:2==t.relate.become_child_limit?[t._v("\n\t\t\t\t\t\t首次成功下单\n\t\t\t\t\t")]:3==t.relate.become_child_limit?[t._v("\n\t\t\t\t\t\t如果好友没有被其他人推广，并且成功下单,\n\t\t\t\t\t")]:4==t.relate.become_child_limit?[t._v("\n\t\t\t\t\t\t成功下单,\n\t\t\t\t\t")]:t._e(),t._v(" "),"once"==t.relate.valid_period?[t._v("\n\t\t\t\t\t\t您将在"+t._s(1==t.settle.balance_condition?"好友确认收货":"好友确认收货并进行评价")+"后结算佣金，佣金仅限本次推广有效。\n\t\t\t\t\t")]:"alltime"==t.relate.valid_period?[t._v("\n\t\t\t\t\t\t您将在"+t._s(1==t.settle.balance_condition?"好友确认收货":"好友确认收货并进行评价")+"后结算佣金，他将成为您的下线直至其推广上线发生变化。\n\t\t\t\t\t")]:t._e()],2)])])]),t._v(" "),i("transition",{attrs:{name:"loading"}},[t.preLoading?i("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-15-lr"},[e("div",{staticClass:"padding-15-tb van-hairline--bottom c-gray"},[this._v("如何赚钱")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-15-lr"},[e("div",{staticClass:"padding-15-tb van-hairline--bottom c-gray"},[this._v("说明")])])}]};var a=i("VU/8")({data:function(){return{preLoading:!0,relate:{},settle:{},respon:""}},methods:{onLoad:function(){var t=this;this.util.request({url:"spread/poster/vue_index"}).then(function(e){t.preLoading=!1;var i=e.data.message;if(i.errno)return t.util.$toast(i.message),!1;t.relate=i.message.group_relate,t.settle=i.message.settle,t.respon=i.message.respon})}},mounted:function(){this.onLoad()}},n,!1,function(t){i("y0/y")},null,null);e.default=a.exports},"y0/y":function(t,e){}});