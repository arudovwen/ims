(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{GVS0:function(e,t,o){"use strict";o.r(t);var a={data:function(){return{school:{}}},components:{},mounted:function(){this.editSchool()},methods:{editSchool:function(){var e=this;axios.get("/api/get-school/".concat(this.$route.query.id)).then((function(t){200==t.status&&(e.school=t.data)})).catch((function(e){console.log("edit -> err",e)}))},update:function(){axios.put("/api/update/".concat(this.$route.query.id),this.school).then((function(e){e.status})).catch((function(e){}))}}},n=(o("woRu"),o("KHd+")),s=Object(n.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("form",{attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.update(t)}}},[o("legend",{staticClass:"mb-5"},[e._v("Add new school ")]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("School name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.school.name,expression:"school.name"}],staticClass:"form-control",attrs:{required:"",type:"text","aria-describedby":"helpId",placeholder:"school name"},domProps:{value:e.school.name},on:{input:function(t){t.target.composing||e.$set(e.school,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("School email")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.school.email,expression:"school.email"}],staticClass:"form-control",attrs:{required:"",type:"email","aria-describedby":"helpId",placeholder:"example@email.com"},domProps:{value:e.school.email},on:{input:function(t){t.target.composing||e.$set(e.school,"email",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("School address ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.school.address,expression:"school.address"}],staticClass:"form-control",attrs:{required:"",type:"text","aria-describedby":"helpId",placeholder:"Address"},domProps:{value:e.school.address},on:{input:function(t){t.target.composing||e.$set(e.school,"address",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("Phone number")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.school.phone_no,expression:"school.phone_no"}],staticClass:"form-control",attrs:{required:"",type:"text","aria-describedby":"helpId",placeholder:"08xxxxxxxxx"},domProps:{value:e.school.phone_no},on:{input:function(t){t.target.composing||e.$set(e.school,"phone_no",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("School Level")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.school.level,expression:"school.level"}],staticClass:"custom-select",attrs:{required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.school,"level",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"selected"}},[e._v("Select one")]),e._v(" "),o("option",[e._v("Nursery")]),e._v(" "),o("option",[e._v("Primary")]),e._v(" "),o("option",[e._v("Secondary")]),e._v(" "),o("option",[e._v("Tertiary")])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("Type")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.school.type,expression:"school.type"}],staticClass:"custom-select",attrs:{required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.school,"type",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"selected"}},[e._v("Select one")]),e._v(" "),o("option",[e._v("Boarding")]),e._v(" "),o("option",[e._v("Day")])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("Accreditation")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.school.accreditation,expression:"school.accreditation"}],staticClass:"custom-select",attrs:{required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.school,"accreditation",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"selected"}},[e._v("Select one")]),e._v(" "),o("option",[e._v("Accredited")]),e._v(" "),o("option",[e._v("Non-accredited")])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("LGA")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.school.lga,expression:"school.lga"}],staticClass:"custom-select",attrs:{required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.school,"lga",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"selected"}},[e._v("Select one")])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("School Type")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.school.sector,expression:"school.sector"}],staticClass:"custom-select",attrs:{required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.school,"sector",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"selected"}},[e._v("Select one")]),e._v(" "),o("option",[e._v("Private")]),e._v(" "),o("option",[e._v("Public")])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("Ownership")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.school.ownership,expression:"school.ownership"}],staticClass:"custom-select",attrs:{required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.school,"ownership",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"selected"}},[e._v("Select one")]),e._v(" "),o("option",[e._v("Individual ")]),e._v(" "),o("option",[e._v("Faith Based")])])]),e._v(" "),e._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"button",attrs:{type:""}},[this._v("Create")])])}],!1,null,"6f7b3af7",null);t.default=s.exports},J2U4:function(e,t,o){var a=o("bzPG");"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(a,n);a.locals&&(e.exports=a.locals)},bzPG:function(e,t,o){(e.exports=o("I1BE")(!1)).push([e.i,'.container[data-v-6f7b3af7] {\n  background: #f7f8fa;\n  min-height: 100vh;\n  padding: 30px 15px;\n}\n#form[data-v-6f7b3af7] {\n  width: 80%;\n  margin: 0 auto;\n  font-size: 15px;\n}\n.button[data-v-6f7b3af7] {\n  padding: 8px 32px;\n  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);\n  line-height: 1.25;\n  background: #006600;\n  text-decoration: none;\n  color: white;\n  font-size: 13px;\n  letter-spacing: 0.08em;\n  text-transform: initial;\n  position: relative;\n  transition: background-color 0.6s ease;\n  overflow: hidden;\n}\n.button[data-v-6f7b3af7]:after {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 50%;\n  left: 50%;\n  transform-style: flat;\n  transform: translate3d(-50%, -50%, 0);\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  transition: width 0.3s ease, height 0.3s ease;\n}\n.button[data-v-6f7b3af7]:focus, .button[data-v-6f7b3af7]:hover {\n  background: #004200;\n}\n.button[data-v-6f7b3af7]:active:after {\n  width: 200px;\n  height: 200px;\n}',""])},woRu:function(e,t,o){"use strict";var a=o("J2U4");o.n(a).a}}]);