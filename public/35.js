(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"0zx5":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.container-fluid[data-v-1f8f7f30] {\n  padding: 40px 30px;\n}\nh5[data-v-1f8f7f30] {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n.wit[data-v-1f8f7f30] {\n    min-width: 150px;\n}\n.container-fluid[data-v-1f8f7f30] {\n    padding: 40px 0;\n}\n.fs14[data-v-1f8f7f30] {\n    font-size: 14px;\n}\n.p0[data-v-1f8f7f30] {\n    padding: 0 !important;\n    margin: 0 !important;\n    text-align: center;\n}\n.t-header[data-v-1f8f7f30] {\n    min-width: 150px;\n}\n}\n@media (max-width: 425px) {\n.wit[data-v-1f8f7f30] {\n    min-width: 150px;\n}\n.container-fluid[data-v-1f8f7f30] {\n    padding: 40px 10px;\n}\n.fs14[data-v-1f8f7f30] {\n    font-size: 12px;\n}\n  /* .mb-1 {\n    margin-bottom: 0 !important;\n  } */\n}\n",""])},Gk6D:function(t,a,e){var n=e("0zx5");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,s);n.locals&&(t.exports=n.locals)},hdBD:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{all:!1,search:"",filter:"name",row_number:1,last_page:"",first_page:"",next_page:"",prev_page:"",current_page:1,total:0,items:[],fields:["sn",{key:"name",sortable:!0},{key:"present_posting",sortable:!0},"sect","lga",{key:"zone",sortable:!0},"phone_no","remarks"]}},computed:{filtered:function(){var t=this;return this.items.filter((function(a){return"name"==t.filter?a.name.toLowerCase().includes(t.search.toLowerCase()):a.present_posting.toLowerCase().includes(t.search.toLowerCase())}))}},watch:{all:"getAllData"},mounted:function(){this.getData()},methods:{getAllData:function(){var t=this;this.all?axios.get("/api/all-waec-candidate").then((function(a){200==a.status&&(t.items=a.data,t.next_page="",t.prev_page="",t.row_number=t.items.length)})).catch():this.getData()},getData:function(){var t=this;axios.get("/api/waec-candidate").then((function(a){200==a.status&&(t.items=a.data.data,t.total=a.data.total,t.row_number=a.data.per_page,t.last_page=a.data.last_page_url,t.first_page=a.data.first_page_url,t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page)})).catch()},firstPage:function(){var t=this;axios.get(this.first_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))},lastPage:function(){var t=this;axios.get(this.last_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))},next:function(){var t=this;this.next_page&&axios.get(this.next_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))},prev:function(){var t=this;this.prev_page&&axios.get(this.prev_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))}}},s=(e("pGEl"),e("KHd+")),r=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("h5",{staticClass:"mb-5 text-center"},[t._v("List of Principals and Schools that have WAEC Candidates for 2020 Academic Year")]),t._v(" "),e("b-row",{staticClass:"justify-content-center align-items-end mb-4"},[e("b-col",{staticClass:"p0",attrs:{cols:"12",sm:"6"}},[e("span",{staticClass:"mr-2 fs14"},[t._v("Page no: "+t._s(t.current_page))]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.firstPage}},[e("i",{staticClass:"fa fa-angle-double-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.prev}},[e("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.next}},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.lastPage}},[e("i",{staticClass:"fa fa-angle-double-right",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14"},[t._v("Page: "+t._s(t.current_page))]),t._v(" "),e("span",{staticClass:"mr-2 fs14"},[t._v("Per page: "+t._s(t.row_number))]),t._v(" "),e("span",{staticClass:"fs14"},[t._v("Total: "+t._s(t.total))])]),t._v(" "),e("b-col",[e("b-form-row",{staticClass:"align-items-center w-100"},[e("div",{staticClass:"d-flex justify-content-center align-items-center mb-3 w-100"},[e("b-form-checkbox",{staticClass:"pr-3 fs14",model:{value:t.all,callback:function(a){t.all=a},expression:"all"}},[t._v("Show all")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center align-items-center "},[e("label",{staticClass:"mr-2 fs14 mb-1"},[t._v("Search by:")]),t._v(" "),e("b-form-radio",{staticClass:"mr-2 fs14",attrs:{value:"name",name:"name",label:"Name"},model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}},[t._v("Name")]),t._v(" "),e("b-form-radio",{staticClass:"mr-3 fs14",attrs:{value:"present posting",name:"present posting",label:"Present Possting"},model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}},[t._v("Present Posting")])],1)],1),t._v(" "),e("b-form-input",{staticClass:"fs14",attrs:{placeholder:"Search by "+t.filter},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1),t._v(" "),e("b-row",[e("b-table",{attrs:{fields:t.fields,items:t.filtered,responsive:""},scopedSlots:t._u([{key:"cell(sn)",fn:function(a){return[t._v(t._s(a.item.id))]}},{key:"cell(remarks)",fn:function(a){return[t._v(t._s(""==a.item.remarks?"-":a.item.remarks))]}},{key:"cell(name)",fn:function(a){return[e("div",{staticClass:"t-header"},[t._v(t._s(a.item.name))])]}},{key:"cell(present_posting)",fn:function(a){return[e("div",{staticClass:"t-header"},[t._v(t._s(a.item.present_posting))])]}}])})],1),t._v(" "),e("b-row",[e("b-col",[e("div",{staticClass:"navigation"},[t.prev_page?e("b-button",{staticClass:"prev_button mr-3",attrs:{type:"button"},on:{click:t.prev}},[t._v("Prev")]):t._e(),t._v(" "),t.next_page?e("b-button",{staticClass:"next_button",on:{click:t.next}},[t._v("Next")]):t._e()],1)])],1)],1)}),[],!1,null,"1f8f7f30",null);a.default=r.exports},pGEl:function(t,a,e){"use strict";var n=e("Gk6D");e.n(n).a}}]);