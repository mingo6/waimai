webpackJsonp([62],{a7Lf:function(e,t){},dRAO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Gu7T"),a=n.n(r),i=n("mvHQ"),l=n.n(i),s=n("Cz8s"),c=n("XbGN"),u={data:function(){return{peripherals:[]}},components:{publicHeader:s.a},methods:{onConnect:function(e){alert(l()(this.peripherals[e])),alert(this.peripherals[e].uuid),this.ble.connect({peripheralUUID:this.peripherals[e].uuid},function(e,t){alert(l()(e)),e.status?alert("连接成功！"):alert(l()(t))})}},mounted:function(){var e=this;c.a.initBle(),e.ble=c.a.ble,e.ble.scan({serviceUUIDs:[]},function(t){t.status&&e.ble.getPeripheral(function(t){t&&(e.peripherals=[].concat(a()(t.peripherals)),alert(l()(e.peripherals.length)))})})}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"zj"}},[n("public-header",{attrs:{title:"蓝牙测试"}}),e._v(" "),n("div",{staticClass:"content"},[e.peripherals.length>0?n("van-cell-group",e._l(e.peripherals,function(t,r){return n("van-cell",{key:r,attrs:{title:t.name,value:"点击连接"},on:{click:function(t){e.onConnect(r)}}})})):e._e()],1)],1)},staticRenderFns:[]};var p=n("VU/8")(u,o,!1,function(e){n("a7Lf")},"data-v-21092e72",null);t.default=p.exports}});
//# sourceMappingURL=62.1e4a63efe3924616ce00.js.map