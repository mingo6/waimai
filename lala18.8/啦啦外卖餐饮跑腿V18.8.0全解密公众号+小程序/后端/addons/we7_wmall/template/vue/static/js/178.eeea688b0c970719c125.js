webpackJsonp([178],{"7LCE":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("Gu7T"),i=t.n(a),r=t("woOf"),d=t.n(r),n=t("Dd8w"),l=t.n(n),o=t("NYxO"),c=t("Cz8s"),u=t("+TmT"),m={data:function(){return{query:{},address:{address:"",store:{}},sexName:"先生",submiting:0,value:[],address_type:0,areas:[],columns:[{values:[],className:"column1",defaultIndex:0},{values:[],className:"column2",defaultIndex:0}],addressPopupStatus:!1,showPreLoading:!0,tag:"0"}},components:{PublicHeader:c.a,Uploader:u.a},computed:l()({},Object(o.c)(["editAddress","erranderExtra"]),{orderCreateQuery:function(){var e=this.query;if(e){var s={};for(var t in e){["sid","is_pindan","pindan_id","is_buysvip"].indexOf(t)>=0&&(s[t]=e[t])}return s}return{}}}),methods:l()({},Object(o.b)(["replaceAddress","setOrderExtra","setState"]),{onToggleAddressPopupStatus:function(){this.addressPopupStatus=!this.addressPopupStatus},onChangePicker:function(e,s,t){0==t&&(s[0].child&&s[0].child.length>0?e.setColumnValues(1,s[0].child):e.setColumnValues(1,[]))},onConfirmAddress:function(e,s){var t=this;if(0!=e[1].status)this.address.address=e[0].title+e[1].title,this.address.location_x=e[1].location_x,this.address.location_y=e[1].location_y,this.address.area_id=e[1].id,this.address.area_parentid=e[0].id,this.onToggleAddressPopupStatus();else{var a="亲，您的地址【"+e[1].title+"】已超出【"+this.address.store.title+"】的配送范围了，请更换其他商家下单";this.$dialog.confirm({title:"温馨提示",message:a,confirmButtonText:"更换商家",cancelButtonText:"调整地址"}).then(function(){t.$router.replace(t.util.getUrl({path:"/pages/home/index"}))}).catch(function(){})}},onLoad:function(){var e=this,s=this;this.util.request({url:"wmall/member/address/post",data:{sid:this.sid,id:this.id}}).then(function(t){e.showPreLoading=!1;var a=t.data.message;if(a.errno&&e.util.$toast(a.message),e.address=a.message,"location"==e.from&&e.editAddress.address&&e.editAddress.lat&&e.editAddress.lng&&(e.address=d()(e.address,e.editAddress)),e.sexName=e.address.sex?e.address.sex:e.sexName,e.address_type=a.message.address_type,1==e.address_type&&a.message.areas&&a.message.areas.length>0){e.areas=[].concat(i()(a.message.areas)),e.columns[0].values=[].concat(i()(e.areas));var r=a.message.area_parent_index;e.columns[0].defaultIndex=r,e.areas[r].child&&e.areas[r].child.length>0&&(e.columns[1].values=[].concat(i()(e.areas[r].child)),e.columns[1].defaultIndex=a.message.area_index)}e.id||e.editAddress.address||1==e.address_type||e.util.getLocation({successLocation:function(e){},successAddress:function(e){s.address.address=e.address,s.address.location_x=e.location_x,s.address.location_y=e.location_y,s.address=d()({},s.address)},fail:function(e){}}),"location"==e.from&&e.replaceAddress({}),e.tag=a.message.tag})},onChangeAdderssTags:function(e){this.tag!=e&&(this.tag=e)},onSubmit:function(){var e=this;if(1==this.submiting)return!1;if(!this.address.address)return this.$toast("收货地址不能为空"),!1;if(1==this.address_type&&!this.util.isNumber(this.address.number))return this.$toast("门牌号不能为空且只能是数字"),!1;if(!this.address.realname)return this.$toast("联系人不能为空"),!1;if(!this.address.mobile)return this.$toast("手机号不能为空"),!1;if(!this.util.isValidMobile(this.address.mobile))return this.$toast("手机号格式错误"),!1;this.submiting=1;var s={id:this.id,sid:this.sid,order_id:this.orderId,channel:this.channel,flag:1,sex:this.sexName,number:this.address.number,realname:this.address.realname,mobile:this.address.mobile,address:this.address.address,location_x:this.address.location_x||this.address.lat,location_y:this.address.location_y||this.address.lng,area_id:this.address.area_id,area_parentid:this.address.area_parentid,tag:this.tag};this.erranderExtra&&this.erranderExtra.agentid&&(s.agentid=this.erranderExtra.agentid),this.util.request({url:"wmall/member/address/post",data:s,method:"POST"}).then(function(t){e.submiting=0;var a=t.data.message;if(!e.channel||""==e.channel||"undefined"==e.channel)return a.errno?(e.$toast(a.message),!1):(e.replaceAddress({}),void e.util.$toast("保存地址成功",e.util.getUrl({path:"/pages/member/address"}),1500,"replace"));if("takeout"==e.channel)if(-1e3==a.errno)1==e.address_type?e.$dialog.confirm({title:"温馨提示",message:"亲，您的地址已超出商家的配送范围了，请更换商家下单",confirmButtonText:"更换商家",cancelButtonText:"调整地址"}).then(function(){e.$router.replace(e.util.getUrl({path:"/pages/home/index"}))}).catch(function(){}):e.$dialog.confirm({title:"温馨提示",message:a.message,confirmButtonText:"调整地址",cancelButtonText:"仍然保存"}).then(function(){}).catch(function(){s.force=1,e.util.request({method:"POST",url:"wmall/member/address/post",data:s}).then(function(s){e.orderId&&e.orderId>0?e.$router.replace(e.util.getUrl({path:"/pages/order/address",query:{id:e.orderId}})):(e.replaceAddress({}),e.setOrderExtra({key:"address_id",val:0}),e.$router.replace(e.util.getUrl({path:"/pages/order/create",query:e.orderCreateQuery})))})});else{if(a.errno)return e.$toast(a.message),!1;e.orderId&&e.orderId>0?e.$router.replace(e.util.getUrl({path:"/pages/order/address",query:{id:e.orderId}})):(e.setOrderExtra({key:"address_id",val:a.message}),e.$router.replace(e.util.getUrl({path:"/pages/order/create",query:e.orderCreateQuery})))}else if("errander"==e.channel){if(-1e3!=a.errno)return a.errno?(e.$toast(a.message),!1):("accept"==e.input?e.setState({type:"erranderExtra",key:"acceptaddress_id",val:a.message}):"buy"==e.input&&e.setState({type:"erranderExtra",key:"buyaddress_id",val:a.message}),e.$router.replace(e.util.getUrl({path:"/pages/paotui/diy",query:{id:e.erranderId}})),!1);e.$dialog.confirm({title:"温馨提示",message:"亲,您的地址已超出跑腿的服务范围了!",confirmButtonText:"调整地址",cancelButtonText:"仍然保存"}).then(function(){}).catch(function(){s.force=1,e.util.request({method:"POST",url:"wmall/member/address/post",data:s}).then(function(s){e.replaceAddress({}),"accept"==e.input?e.setState({type:"erranderExtra",key:"acceptaddress_id",val:0}):"buy"==e.input&&e.setState({type:"erranderExtra",key:"buyaddress_id",val:0}),e.$router.replace(e.util.getUrl({path:"/pages/paotui/diy",query:{id:e.erranderId}}))})})}})},onSelectSex:function(e){this.sexName=e},onDel:function(){var e=this;this.$dialog.confirm({title:"温馨提示",message:"删除后将不可恢复,确定删除吗?"}).then(function(){e.util.request({url:"wmall/member/address/del",data:{id:e.id}}).then(function(s){if(!s.data.message.errno){var t={};e.sid>0&&(t={sid:e.sid}),e.$router.replace(e.util.getUrl({path:"/pages/member/address",query:t}))}})})}}),created:function(){this.query=this.util.parseQuery(this.$route.query),this.query&&(this.id=this.query.id,this.sid=this.query.sid,this.channel=this.query.channel,this.input=this.query.input,this.erranderId=this.query.erranderId,this.from=this.query.from,this.orderId=this.query.orderId,this.sid>0&&(this.channel="takeout",this.query.channel="takeout"))},mounted:function(){this.onLoad()}},h={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"address-post"}},[t("public-header",{attrs:{title:"编辑地址"}}),e._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"list"},[e.address.store&&1==e.address.store.auto_get_address?[e.address_type?1==e.address_type?t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("选择地址")]),e._v(" "),t("div",{staticClass:"item-input flex-lr"},[t("div",{staticClass:"w-100 font-15"},[t("div",{staticClass:"flex-lr",on:{click:e.onToggleAddressPopupStatus}},[e.address.address?t("div",{staticStyle:{color:"#333"}},[e._v(e._s(e.address.address))]):t("span",{staticClass:"c-gray"},[e._v("点击选择地址(必填)")]),e._v(" "),t("i",{staticClass:"icon icon-right c-gray"})])])])]):e._e():t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("小区/大厦/学校")]),e._v(" "),t("div",{staticClass:"item-input flex-lr"},[t("i",{staticClass:"icon icon-location"}),e._v(" "),t("div",{staticClass:"location"},[t("div",{staticClass:"flex-lr",on:{click:function(s){return e.util.jsUrl("/pages/member/addressLocation",e.query,"replace")}}},[e.address.address?t("div",{staticStyle:{color:"#333"}},[e._v(e._s(e.address.address))]):t("span",[e._v("点击添加地址(必填)")]),e._v(" "),t("i",{staticClass:"icon icon-right"})])])])])]:[t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("收货地址")]),e._v(" "),t("div",{staticClass:"item-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.address,expression:"address.address"}],attrs:{name:"address",type:"text",placeholder:"请输入收货地址"},domProps:{value:e.address.address},on:{input:function(s){s.target.composing||e.$set(e.address,"address",s.target.value)}}})])])],e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("楼号-门牌号")]),e._v(" "),t("div",{staticClass:"item-input "},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.number,expression:"address.number"}],attrs:{name:"number",type:"text",placeholder:"例:16号楼427室"},domProps:{value:e.address.number},on:{input:function(s){s.target.composing||e.$set(e.address,"number",s.target.value)}}})])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis "},[e._v("联系人")]),e._v(" "),t("div",{staticClass:"item-input"},[t("div",{staticClass:"username van-hairline--bottom"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.realname,expression:"address.realname"}],attrs:{type:"text",name:"realname",placeholder:"您的姓名"},domProps:{value:e.address.realname},on:{input:function(s){s.target.composing||e.$set(e.address,"realname",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"sex flex"},[t("div",{staticClass:"sex-item flex",on:{click:function(s){return e.onSelectSex("先生")}}},[t("i",{staticClass:"icon",class:{"icon-check":"先生"==e.sexName}}),e._v("先生\n\t\t\t\t\t\t")]),e._v(" "),t("div",{staticClass:"sex-item flex",on:{click:function(s){return e.onSelectSex("女士")}}},[t("i",{staticClass:"icon",class:{"icon-check":"女士"==e.sexName}}),e._v("女士\n\t\t\t\t\t\t")])])])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("手机号")]),e._v(" "),t("div",{staticClass:"item-input "},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.mobile,expression:"address.mobile"}],attrs:{type:"number",name:"mobile",placeholder:"请填写收货手机号码"},domProps:{value:e.address.mobile},on:{input:function(s){s.target.composing||e.$set(e.address,"mobile",s.target.value)}}})])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("标签")]),e._v(" "),t("div",{staticClass:"tags-list"},[t("div",{staticClass:"tags-item",class:{active:"1"==e.tag},on:{click:function(s){return e.onChangeAdderssTags("1")}}},[e._v("家")]),e._v(" "),t("div",{staticClass:"tags-item",class:{active:"2"==e.tag},on:{click:function(s){return e.onChangeAdderssTags("2")}}},[e._v("公司")]),e._v(" "),t("div",{staticClass:"tags-item",class:{active:"3"==e.tag},on:{click:function(s){return e.onChangeAdderssTags("3")}}},[e._v("学校")])])])],2),e._v(" "),t("div",{staticClass:"save-btn",on:{click:e.onSubmit}},[t("van-button",{attrs:{type:"danger",size:"normal",block:!0}},[e._v("保存")])],1),e._v(" "),e.address&&e.address.id>0?t("div",{staticClass:"save-btn",on:{click:e.onDel}},[t("van-button",{attrs:{type:"default",size:"normal",block:!0}},[e._v("删除")])],1):e._e()]),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.addressPopupStatus,callback:function(s){e.addressPopupStatus=s},expression:"addressPopupStatus"}},[t("van-picker",{attrs:{"show-toolbar":"",title:"选择地址","value-key":"title",columns:e.columns},on:{cancel:e.onToggleAddressPopupStatus,confirm:e.onConfirmAddress,change:e.onChangePicker}})],1),e._v(" "),e.showPreLoading?t("iloading"):e._e()],1)},staticRenderFns:[]};var p=t("VU/8")(m,h,!1,function(e){t("QzbG")},null,null);s.default=p.exports},QzbG:function(e,s){}});
//# sourceMappingURL=178.eeea688b0c970719c125.js.map