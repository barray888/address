(function(e){function t(t){for(var n,l,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)l=c[f],o[l]&&d.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=r("5c96"),a=r.n(o),l=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld",{attrs:{msg:"This is a demo for address"}})],1)}),c=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{sm:24,md:8}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("示例")])]),r("el-radio-group",{on:{change:e.onRadioChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},e._l(e.radioArr,function(t){return r("div",{staticClass:"text-sec"},[r("el-radio",{attrs:{label:t.id}},[e._v(e._s(t.text))])],1)}),0)],1)],1),r("el-col",{attrs:{sm:24,md:16}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"测试文本"}},[r("el-input",{attrs:{type:"textarea",placeholder:"把用户信息粘贴到这里来"},on:{input:e.onTextInput},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"省市"}},[r("v-distpicker",{attrs:{placeholders:e.placeholders,province:e.select.province,city:e.select.city,area:e.select.area},on:{selected:e.onSelected}})],1),r("el-form-item",{attrs:{label:"地址"}},[r("el-input",{model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),r("el-form-item",{attrs:{label:"手机号"}},[r("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{hidden:""}},[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)],1)],1)],1)},s=[],u=(r("4917"),r("ac6a"),r("a481"),r("28a5"),r("784f")),f=r.n(u),d={name:"HelloWorld",components:{VDistpicker:f.a},props:{msg:String},data:function(){return{form:{username:"",name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",detail:"",phone:null},radio:0,radioArr:[{id:1,text:"张某某 13888999001 云南省昆明市东风西路234号"},{id:2,text:"张某某 云南省昆明市五华区东风西路234号 13888999001"},{id:3,text:"18087238726 丁某某 河南省驻马店市新蔡县街道办事处"},{id:4,text:"河南省驻马店市新蔡县街道办事处 18087238726 丁某某 "}],allProvince:"北京, 天津, 河北省, 山西省, 内蒙古自治区, 辽宁省, 吉林省, 黑龙江省, 上海, 江苏省, 浙江省, 安徽省, 福建省, 江西省, 山东省, 河南省, 湖北省, 湖南省, 广东省, 广西壮族自治区, 海南省, 重庆, 四川省, 贵州省, 云南省, 西藏自治区, 陕西省, 甘肃省, 青海省, 宁夏回族自治区, 新疆维吾尔自治区, 台湾, 香港特别行政区, 澳门特别行政区, 钓鱼岛",select:{province:"",city:"",area:""},placeholders:{province:"------- 省 --------",city:"--- 市 ---",area:"--- 区 ---"}}},created:function(){var e="云南省";console.log(e.replace(/(^\s*)|(\s*$)/g,"").replace(/\s+/g," ").split(" "))},methods:{onSubmit:function(){console.log("submit!")},onSelected:function(e){console.log(e)},onRadioChange:function(e){var t=this;this.radioArr.forEach(function(r,n){n+1===e&&(t.form.desc=r.text,t.onTextInput(r.text))})},onTextInput:function(e){var t=this,r=/.+?(省|市|自治区|自治州|县|区)/g,n=e.match(/[0-9]\d{10,10}/g);n&&(t.form.phone=n[0],e=e.replace(/[0-9]\d{10,10}/g,""));var o=e.match(r);console.log(o),o?o.length>0&&o.forEach(function(r,n){if(0===n){var o=r.replace(/(^\s*)|(\s*$)/g,"").replace(/\s+/g," ").split(" ");1===o.length?t.select.province=o[0]:2===o.length&&o.forEach(function(e,r){-1!=t.allProvince.indexOf(e)?t.select.province=e:t.form.username=e})}1===n&&(t.select.city=r.replace(/\s+/g,"")),2===n&&(t.select.area=r.replace(/\s+/g,""),t.form.detail=e.substring(e.indexOf(r.replace(/\s+/g,""))+r.length))}):(t.select.province="",t.select.city="",t.select.area="",t.form.detail="",t.form.phone="",t.form.username="")}}},p=d,m=(r("6972"),r("2877")),h=Object(m["a"])(p,i,s,!1,null,"36af221b",null),v=h.exports,g={name:"app",components:{HelloWorld:v}},b=g,x=(r("034f"),Object(m["a"])(b,l,c,!1,null,null,null)),y=x.exports;n["default"].config.productionTip=!1,n["default"].use(a.a),new n["default"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,r){},6972:function(e,t,r){"use strict";var n=r("c464"),o=r.n(n);o.a},c464:function(e,t,r){}});
//# sourceMappingURL=app.66b23cc9.js.map