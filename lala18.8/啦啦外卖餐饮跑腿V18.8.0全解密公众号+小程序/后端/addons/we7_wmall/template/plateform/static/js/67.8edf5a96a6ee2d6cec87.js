webpackJsonp([67],{"1lGR":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Cz8s"),i=n("deIj"),s={data:function(){return{agent:{title:"",amount:0},showPreLoading:!0}},components:{publicHeader:a.a},methods:{onLoad:function(){Object(i.a)({vue:this,url:"plateform/agent/finance",autoAssign:!0,variable:"agent"})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"agent-finance-index"}},[n("public-header",{attrs:{title:"资产"}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"account bg-primary"},[n("div",{staticClass:"font-14 margin-15-b"},[t._v(t._s(t.agent.title)+"账户可用余额(元)")]),t._v(" "),n("div",[t._v("¥"+t._s(t.agent.amount))])]),t._v(" "),n("van-cell-group",{staticClass:"margin-10-t"},[n("van-cell",{staticClass:"border-0px",attrs:{title:"提现",value:"去提现","is-link":"",to:t.util.getUrl({path:"pages/plugin/agent/finance/getCash"})}})],1)],1),t._v(" "),t.showPreLoading?n("iloading"):t._e()],1)},staticRenderFns:[]};var o=n("VU/8")(s,l,!1,function(t){n("ZCRX")},null,null);e.default=o.exports},ZCRX:function(t,e){}});