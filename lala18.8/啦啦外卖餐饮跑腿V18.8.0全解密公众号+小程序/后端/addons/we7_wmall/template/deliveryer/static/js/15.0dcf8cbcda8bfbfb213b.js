webpackJsonp([15],{QqXs:function(t,n){},R2Oa:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=o("Cz8s"),a=(o("deIj"),{components:{publicHeader:i.a},data:function(){return{locationInfoArr:[]}},methods:{onLoad:function(){var t=this.util.getStorage("locationInfoArr");this.locationInfoArr=t,console.log(this.locationInfoArr)}},mounted:function(){this.onLoad()}}),s={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"statcenter-location"}},[o("public-header",{attrs:{title:"定位信息"}}),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"location-list"},t._l(t.locationInfoArr,function(n,i){return o("div",{key:n.id,staticClass:"location-item"},[o("div",{staticClass:"font-14 c-gray"},[t._v("添加时间: "+t._s(n.addtime_cn))]),t._v(" "),o("div",{staticClass:"font-14 c-gray padding-5-t"},[t._v("经度: "+t._s(n.location_x))]),t._v(" "),o("div",{staticClass:"font-14 c-gray padding-5-t"},[t._v("纬度: "+t._s(n.location_y))])])}))])],1)},staticRenderFns:[]};var e=o("VU/8")(a,s,!1,function(t){o("QqXs")},null,null);n.default=e.exports}});