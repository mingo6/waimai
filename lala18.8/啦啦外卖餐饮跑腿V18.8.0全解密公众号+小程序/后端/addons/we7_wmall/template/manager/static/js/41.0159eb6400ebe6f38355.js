webpackJsonp([41],{Ajj2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("woOf"),i=a.n(s),o=a("Gu7T"),r=a.n(o),l=a("Cz8s"),n=a("+CBI"),c=a("deIj"),d=a("+TmT"),u={data:function(){return{id:0,thumb:{},thumbs:[],goodsCategory:!1,category:[],datePicker:{type:"",maxDate:new Date(2050,12),currentDate:new Date,status:!1},bestsetting:"0",showPreLoading:!0,records:{name:"",total:"",unit:"",cateid:"",category_title:"",price:"",aloneprice:"",oldprice:"",detail:"",starttime_cn:"",endtime_cn:"",status:1,usetype:"1",peoplenum:"",grouptime:"",falesailed:"",falselooknum:"",falsesharenum:"",buylimit:"",thumbs:[],thumb:[]}}},components:{publicHeader:l.a,iswitch:n.a,Uploader:d.a},methods:{onLoad:function(){var t=this;Object(c.a)({vue:t,url:"manage/pintuan/goods/post",data:{id:t.id},success:function(e){if(t.records=t.util.extend(t.records,e.records),e.category&&(t.category=[].concat(r()(t.category),r()(e.category))),t.records.thumbs&&t.records.thumbs.length>0)for(var a in t.records.thumbs)t.thumbs.push({url:t.records.thumbs[a]})}})},onChangeThumbs:function(t){var e=[];if(t&&t.length>0)for(var a in t)e.push(t[a].url);this.records.thumbs=e},onTogglePopup:function(){this.goodsCategory=!this.goodsCategory},onConfirmCategory:function(t){this.records.cateid=t.id,this.records.category_title=t.title,this.onTogglePopup()},onToggleDatePicker:function(t){this.datePicker.status=!this.datePicker.status,t&&(this.datePicker.type=t)},onConfirmTime:function(t){var e=this.util.formatDate(t);"start"==this.datePicker.type?this.records.starttime_cn=e:this.records.endtime_cn=e,this.onToggleDatePicker()},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.keys,value:t.value})},onUploadImage:function(t){var e=this;e.util.image({obj:t,success:function(t,a){a.url&&a.filename&&(e.thumb={url:a.url,filename:a.filename},e.thumb=i()({},e.thumb),e.records.thumb=e.thumb.url)},options:{channel:"h5"}})},onSubmit:function(){return this.records.name?this.records.oldprice?this.records.price?void Object(c.c)({vue:this,url:"manage/pintuan/goods/post",data:{id:this.id,data:this.records},redirect:this.util.getUrl({path:"/pages/gohome/pintuan/goods/list"})}):(this.util.$toast("团购价不能为空","",1e3),!1):(this.util.$toast("市场价不能为空","",1e3),!1):(this.util.$toast("名称不能为空","",1e3),!1)}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pintuangoods-post"}},[a("public-header",{attrs:{title:"添加拼团商品"}}),t._v(" "),a("div",{staticClass:"content"},[a("van-cell-group",[a("van-cell",{staticClass:"no-fix flex "},[a("div",{staticClass:"padding-10-b flex-lr"},[a("div",[t._v("商品图片")]),t._v(" "),a("div",{staticClass:"c-gray"},[t._v("此图片为商品列表页图片")])]),t._v(" "),a("div",{staticClass:"goods-thumb-wrap"},[t.records.thumb.length>0?a("img",{staticClass:"goods-thumb ",attrs:{src:t.records.thumb,alt:""}}):a("img",{staticClass:"goods-thumb ",attrs:{src:"static/img/add_pic.png",alt:""}}),t._v(" "),a("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){t.onUploadImage(e)}}})])]),t._v(" "),a("van-cell",[a("div",{staticClass:"upload-img"},[a("div",{staticClass:"flex-lr goods-img"},[a("div",[t._v("商品图片")]),t._v(" "),a("div",{staticClass:"c-gray"},[t._v("最多显示4张，此图片为商品图集")])]),t._v(" "),a("uploader",{attrs:{max:4,value:t.thumbs},on:{onGetUrl:t.onChangeThumbs,delete:t.onChangeThumbs}})],1)]),t._v(" "),a("van-field",{attrs:{label:"商品名称",placeholder:"请填写商品名称","input-align":"right"},model:{value:t.records.name,callback:function(e){t.$set(t.records,"name",e)},expression:"records.name"}}),t._v(" "),a("van-field",{attrs:{label:"商品库存",placeholder:"请填写商品库存","input-align":"right"},model:{value:t.records.total,callback:function(e){t.$set(t.records,"total",e)},expression:"records.total"}}),t._v(" "),a("van-field",{attrs:{label:"商品单位",placeholder:"请填写商品单位","input-align":"right"},model:{value:t.records.unit,callback:function(e){t.$set(t.records,"unit",e)},expression:"records.unit"}}),t._v(" "),a("van-field",{attrs:{label:"商品详情",type:"textarea",placeholder:"请填写商品详情",rows:"1","input-align":"right",autosize:""},model:{value:t.records.detail,callback:function(e){t.$set(t.records,"detail",e)},expression:"records.detail"}})],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",{attrs:{title:"拼团分类"}},[a("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:t.onTogglePopup},slot:"right-icon"},[a("span",[t._v(t._s(t.records.category_title?t.records.category_title:"请选择"))]),t._v(" "),a("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),a("van-field",{attrs:{label:"团购价",type:"number",placeholder:"请输入团购价","input-align":"right"},model:{value:t.records.price,callback:function(e){t.$set(t.records,"price",e)},expression:"records.price"}}),t._v(" "),a("van-field",{attrs:{label:"单购价",type:"number",placeholder:"请输入团购价","input-align":"right"},model:{value:t.records.aloneprice,callback:function(e){t.$set(t.records,"aloneprice",e)},expression:"records.aloneprice"}}),t._v(" "),a("van-field",{attrs:{label:"市场价",type:"number",placeholder:"请输入市场价","input-align":"right"},model:{value:t.records.oldprice,callback:function(e){t.$set(t.records,"oldprice",e)},expression:"records.oldprice"}}),t._v(" "),a("van-cell",{attrs:{title:"活动开始时间"}},[a("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(e){t.onToggleDatePicker("start")}},slot:"right-icon"},[a("span",[t._v(t._s(this.records.starttime_cn?this.records.starttime_cn:"点击选择"))]),t._v(" "),a("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),a("van-cell",{attrs:{title:"活动结束时间"}},[a("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(e){t.onToggleDatePicker("end")}},slot:"right-icon"},[a("span",[t._v(t._s(this.records.endtime_cn?this.records.endtime_cn:"点击选择"))]),t._v(" "),a("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),a("van-cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("活动状态")]),t._v(" "),a("iswitch",{attrs:{slot:"right-icon",value:t.records.status,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"records.status"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),t._e(),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("高级设置")]),t._v(" "),a("iswitch",{attrs:{slot:"right-icon",value:t.bestsetting,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"bestsetting"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),"1"==t.bestsetting?[a("van-cell-group",{staticClass:"margin-10-t"},[a("van-field",{attrs:{label:"开团人数",placeholder:"请输入开团人数","input-align":"right"},model:{value:t.records.peoplenum,callback:function(e){t.$set(t.records,"peoplenum",e)},expression:"records.peoplenum"}}),t._v(" "),a("van-field",{attrs:{label:"组团时间",placeholder:"单位小时","input-align":"right"},model:{value:t.records.grouptime,callback:function(e){t.$set(t.records,"grouptime",e)},expression:"records.grouptime"}}),t._v(" "),a("van-field",{attrs:{label:"单次限购",placeholder:"请输入单次限购","input-align":"right"},model:{value:t.records.buylimit,callback:function(e){t.$set(t.records,"buylimit",e)},expression:"records.buylimit"}})],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-field",{attrs:{label:"虚拟销量",placeholder:"请输入虚拟销量","input-align":"right"},model:{value:t.records.falesailed,callback:function(e){t.$set(t.records,"falesailed",e)},expression:"records.falesailed"}}),t._v(" "),a("van-field",{attrs:{label:"虚拟浏览量",placeholder:"请输入虚拟浏览量","input-align":"right"},model:{value:t.records.falselooknum,callback:function(e){t.$set(t.records,"falselooknum",e)},expression:"records.falselooknum"}}),t._v(" "),a("van-field",{attrs:{label:"虚拟分享次数",placeholder:"请输入虚拟分享次数","input-align":"right"},model:{value:t.records.falsesharenum,callback:function(e){t.$set(t.records,"falsesharenum",e)},expression:"records.falsesharenum"}})],1)]:t._e(),t._v(" "),a("div",{staticClass:"padding-15"},[a("van-button",{staticClass:"bg-info",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],2),t._v(" "),t.showPreLoading?a("iloading"):t._e(),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.goodsCategory,callback:function(e){t.goodsCategory=e},expression:"goodsCategory"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"所属分类",columns:t.category,"value-key":"title"},on:{cancel:t.onTogglePopup,confirm:t.onConfirmCategory}})],1),t._v(" "),a("van-popup",{staticClass:"popup-time",attrs:{position:"bottom"},model:{value:t.datePicker.status,callback:function(e){t.$set(t.datePicker,"status",e)},expression:"datePicker.status"}},[a("van-datetime-picker",{attrs:{type:"datetime","min-data":t.datePicker.currentDate,"max-date":t.datePicker.maxDate},on:{confirm:t.onConfirmTime,cancel:t.onToggleDatePicker},model:{value:t.datePicker.currentDate,callback:function(e){t.$set(t.datePicker,"currentDate",e)},expression:"datePicker.currentDate"}})],1)],1)},staticRenderFns:[]};var g=a("VU/8")(u,p,!1,function(t){a("doUZ")},null,null);e.default=g.exports},doUZ:function(t,e){}});
//# sourceMappingURL=41.0159eb6400ebe6f38355.js.map