webpackJsonp([76],{"9QYH":function(t,e){},aSDZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Cz8s"),r=i("deIj"),n={data:function(){return{plateformer:{username:""}}},components:{PublicHeader:a.a},methods:{onLoad:function(){Object(r.a)({vue:this,url:"plateform/member/mine",autoAssign:!0,variable:"plateformer"})},onLogout:function(){var t=this;this.$dialog.confirm({title:"温馨提示",message:"确定退出登录吗？"}).then(function(){t.util.removeStorage("ipuser"),t.util.removeStorage("iptoken"),t.util.removeStorage("ipjpush_relation"),t.$router.replace(t.util.getUrl({path:"/pages/auth/login"}))})}},mounted:function(){this.onLoad()}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"memberProfile"}},[e("public-header",{attrs:{title:"管理员资料"}}),this._v(" "),e("div",{staticClass:"content"},[e("van-cell-group",[e("van-cell",{attrs:{title:"账号",value:this.plateformer.username}}),this._v(" "),e("van-cell",{attrs:{title:"密码",value:"修改","is-link":"",to:this.util.getUrl({path:"/pages/member/profilePassword"})}})],1),this._v(" "),e("div",{staticClass:"padding-15"},[e("van-button",{staticClass:"font-15",attrs:{type:"primary",size:"normal",block:""},on:{click:this.onLogout}},[this._v("退出登录")])],1)],1)],1)},staticRenderFns:[]};var s=i("VU/8")(n,o,!1,function(t){i("9QYH")},null,null);e.default=s.exports}});