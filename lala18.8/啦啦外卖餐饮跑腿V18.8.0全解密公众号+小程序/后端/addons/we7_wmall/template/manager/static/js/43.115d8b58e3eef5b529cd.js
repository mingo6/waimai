webpackJsonp([43],{Gw1t:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Cz8s"),l=e("+CBI"),n=e("deIj"),r={data:function(){return{id:0,showPreLoading:!0,printerPicker:!1,print_labels:[],qrcodePicker:!1,data:{status:0,name:"",type:"feie",print_no:"",key:"",api_key:"",feie_user:"",feie_ukey:"",member_code:"",userid:"",print_nums:"1",print_header:"",print_footer:"",print_label_type:0,print_label:[],is_print_all:"",qrcode_type:"delivery_assign",qrcode_link:""}}},components:{publicHeader:i.a,iswitch:l.a},methods:{onLoad:function(){var t=this,a=this;Object(n.a)({vue:this,url:"manage/shop/printer/post",data:{id:a.id},success:function(e){t.print_labels=a.util.extend(t.print_labels,e.print_labels),e.data&&(t.data=e.data)}})},onPrinterPicker:function(){this.printerPicker=!this.printerPicker},onQrcodePicker:function(){this.qrcodePicker=!this.qrcodePicker},onCloseQrcode:function(){this.data.qrcode_link="",this.onQrcodePicker()},onLabelsPicker:function(){this.data.print_labels="",this.onPrinterPicker()},onToggleLabels:function(t){this.$refs.checkboxes[t].toggle()},onSubmit:function(){return this.data.name?this.data.print_no?void Object(n.c)({vue:this,url:"manage/shop/printer/post",data:{id:this.id,data:this.data},message:"编辑打印机成功",redirect:this.util.getUrl({path:"/pages/printer/list"})}):(this.util.$toast("机器号不能为空","",1e3),!1):(this.util.$toast("名称不能为空","",1e3),!1)},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.keys,value:t.value})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"printer-post"}},[e("public-header",{attrs:{title:"编辑打印机"}}),t._v(" "),e("div",{staticClass:"content"},[e("van-cell-group",[e("van-cell",[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("是否启用打印机")]),t._v(" "),e("iswitch",{attrs:{slot:"right-icon",value:t.data.status,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"data.status"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),e("van-field",{attrs:{label:"打印机名称",placeholder:"请填写打印机名称","input-align":"right"},model:{value:t.data.name,callback:function(a){t.$set(t.data,"name",a)},expression:"data.name"}})],1),t._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:t.data.type,callback:function(a){t.$set(t.data,"type",a)},expression:"data.type"}},[e("van-cell",{attrs:{title:"打印机类型"}}),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"飞鹅定制打印机",clickable:"",label:"不支持打印后自动接单"},on:{click:function(a){t.data.type="feie"}}},[e("van-radio",{attrs:{name:"feie"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"飞鹅新版定制打印机",clickable:"",label:"支持打印后自动接单"},on:{click:function(a){t.data.type="feie_new"}}},[e("van-radio",{attrs:{name:"feie_new"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"365 S1定制打印机",clickable:"",label:"机器号以kdt1开头的"},on:{click:function(a){t.data.type="365"}}},[e("van-radio",{attrs:{name:"365"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"365 S2定制打印机",clickable:"",label:"机器号以kdt2开头的"},on:{click:function(a){t.data.type="365_s2"}}},[e("van-radio",{attrs:{name:"365_s2"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"喜讯定制打印机",clickable:"",label:"支持打印后自动接单"},on:{click:function(a){t.data.type="xixun"}}},[e("van-radio",{attrs:{name:"xixun"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"易联云定制打印机",clickable:"",label:"不推荐"},on:{click:function(a){t.data.type="yilianyun"}}},[e("van-radio",{attrs:{name:"yilianyun"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"飞印打印机",clickable:"",label:"不推荐,后期将停止更新"},on:{click:function(a){t.data.type="feiyin"}}},[e("van-radio",{attrs:{name:"feiyin"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"AiPrint打印机",clickable:"",label:"不推荐,后期将停止更新"},on:{click:function(a){t.data.type="AiPrint"}}},[e("van-radio",{attrs:{name:"AiPrint"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"启云定制打印机",clickable:"",label:"不推荐,后期将停止更新"},on:{click:function(a){t.data.type="qiyun"}}},[e("van-radio",{attrs:{name:"qiyun"}})],1)],1),t._v(" "),e("van-cell-group",{staticClass:"margin-10-t"},["feie_new"==t.data.type?[e("van-field",{attrs:{label:"USER",placeholder:"请填写飞鹅USER","input-align":"right"},model:{value:t.data.member_code,callback:function(a){t.$set(t.data,"member_code",a)},expression:"data.member_code"}}),t._v(" "),e("van-field",{attrs:{label:"UKEY",placeholder:"请填写飞鹅UKEY","input-align":"right"},model:{value:t.data.api_key,callback:function(a){t.$set(t.data,"api_key",a)},expression:"data.api_key"}})]:t._e(),t._v(" "),e("van-field",{attrs:{label:"机器号",placeholder:"请填写机器号","input-align":"right"},model:{value:t.data.print_no,callback:function(a){t.$set(t.data,"print_no",a)},expression:"data.print_no"}}),t._v(" "),"xixun"!==t.data.type?[e("van-field",{attrs:{label:"打印机key",placeholder:"请填写打印机key","input-align":"right"},model:{value:t.data.key,callback:function(a){t.$set(t.data,"key",a)},expression:"data.key"}})]:t._e(),t._v(" "),"feiyin"==t.data.type||"AiPrint"==t.data.type?[e("van-field",{attrs:{label:"商户编号",placeholder:"请填写商户编号","input-align":"right"},model:{value:t.data.member_code,callback:function(a){t.$set(t.data,"member_code",a)},expression:"data.member_code"}})]:t._e(),t._v(" "),"yilianyun"==t.data.type||"qiyun"==t.data.type?[e("van-field",{attrs:{label:"用户ID",placeholder:"请填写用户ID","input-align":"right"},model:{value:t.data.userid,callback:function(a){t.$set(t.data,"userid",a)},expression:"data.userid"}}),t._v(" "),e("van-field",{attrs:{label:"apikey",placeholder:"请填写apikey","input-align":"right"},model:{value:t.data.api_key,callback:function(a){t.$set(t.data,"api_key",a)},expression:"data.api_key"}})]:t._e(),t._v(" "),e("van-field",{attrs:{label:"打印联数",placeholder:"默认为1","input-align":"right"},model:{value:t.data.print_nums,callback:function(a){t.$set(t.data,"print_nums",a)},expression:"data.print_nums"}}),t._v(" "),e("van-field",{attrs:{label:"头部自定义信息",placeholder:"建议少于20个字","input-align":"right"},model:{value:t.data.print_header,callback:function(a){t.$set(t.data,"print_header",a)},expression:"data.print_header"}}),t._v(" "),e("van-field",{attrs:{label:"尾部自定义信息",placeholder:"建议少于20个字","input-align":"right"},model:{value:t.data.print_footer,callback:function(a){t.$set(t.data,"print_footer",a)},expression:"data.print_footer"}})],2),t._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:t.data.print_label_type,callback:function(a){t.$set(t.data,"print_label_type",a)},expression:"data.print_label_type"}},[e("van-cell",{attrs:{title:"打印指定标签"}}),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"打印所有的商品",clickable:""},on:{click:function(a){t.data.print_label_type=0}}},[e("van-radio",{attrs:{name:0}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"打印指定标签",clickable:""},on:{click:function(a){t.data.print_label_type=1,t.onPrinterPicker()}}},[e("van-radio",{attrs:{name:1}})],1)],1),t._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:t.data.is_print_all,callback:function(a){t.$set(t.data,"is_print_all",a)},expression:"data.is_print_all"}},[e("van-cell",{attrs:{title:"打印类型"}}),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"整单打印",clickable:"",label:"打印订单的全部商品条目信息"},on:{click:function(a){t.data.is_print_all="1"}}},[e("van-radio",{attrs:{name:"1"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"分单打印",clickable:"",label:"订单里的全部商品每个打印一次"},on:{click:function(a){t.data.is_print_all="0"}}},[e("van-radio",{attrs:{name:"0"}})],1)],1),t._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:t.data.qrcode_type,callback:function(a){t.$set(t.data,"qrcode_type",a)},expression:"data.qrcode_type"}},[e("van-cell",{attrs:{title:"二维码类型"}}),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"配送员接单二维码",clickable:""},on:{click:function(a){t.data.qrcode_type="delivery_assign"}}},[e("van-radio",{attrs:{name:"delivery_assign"}})],1),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"自定义二维码链接",clickable:""},on:{click:function(a){t.data.qrcode_type="custom",t.onQrcodePicker()}}},[e("van-radio",{attrs:{name:"custom"}})],1)],1),t._v(" "),e("div",{staticClass:"padding-15"},[e("van-button",{staticClass:"bg-info",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e(),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.printerPicker,callback:function(a){t.printerPicker=a},expression:"printerPicker"}},[e("div",{staticClass:"popup-title"},[e("span",{staticClass:"c-info",on:{click:t.onLabelsPicker}},[t._v("取消")]),t._v(" "),e("span",[t._v("打印指定标签")]),t._v(" "),e("span",{staticClass:"c-info",on:{click:t.onPrinterPicker}},[t._v("确定")])]),t._v(" "),e("div",{staticClass:"popup-content"},[e("van-checkbox-group",{model:{value:t.data.print_label,callback:function(a){t.$set(t.data,"print_label",a)},expression:"data.print_label"}},[e("van-cell-group",t._l(t.print_labels,function(a,i){return e("van-cell",{key:a.id,attrs:{clickable:"",title:a.title},on:{click:function(a){t.onToggleLabels(i)}}},[e("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:a.id}})],1)}))],1)],1)]),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.qrcodePicker,callback:function(a){t.qrcodePicker=a},expression:"qrcodePicker"}},[e("div",{staticClass:"popup-title"},[e("span",{staticClass:"c-info",on:{click:t.onCloseQrcode}},[t._v("取消")]),t._v(" "),e("span",[t._v("自定义二维码链接")]),t._v(" "),e("span",{staticClass:"c-info",on:{click:t.onQrcodePicker}},[t._v("确定")])]),t._v(" "),e("div",{staticClass:"popup-content"},[e("van-cell-group",{staticClass:"margin-10-t"},[e("van-field",{attrs:{label:"自定义二维码链接","input-align":"right"},model:{value:t.data.qrcode_link,callback:function(a){t.$set(t.data,"qrcode_link",a)},expression:"data.qrcode_link"}})],1)],1)])],1)},staticRenderFns:[]};var s=e("VU/8")(r,c,!1,function(t){e("I5FI")},null,null);a.default=s.exports},I5FI:function(t,a){}});
//# sourceMappingURL=43.115d8b58e3eef5b529cd.js.map