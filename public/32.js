(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/ta9":function(t,a,e){"use strict";var s=e("w2Ne");e.n(s).a},"JtU/":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.container-fluid[data-v-30aeabc0] {\n  padding: 40px 30px;\n}\nh5[data-v-30aeabc0] {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n.wit[data-v-30aeabc0] {\n    min-width: 150px;\n}\n.container-fluid[data-v-30aeabc0] {\n    padding: 40px 0;\n}\n.fs14[data-v-30aeabc0] {\n    font-size: 14px;\n}\n.t-header[data-v-30aeabc0]{\n    min-width:150px;\n}\n.p0[data-v-30aeabc0] {\n    padding: 0 !important;\n    margin: 0 !important;\n    text-align: center;\n}\n}\n@media (max-width: 425px) {\n.wit[data-v-30aeabc0] {\n    min-width: 150px;\n}\n.container-fluid[data-v-30aeabc0] {\n    padding: 40px 15px;\n}\n.fs14[data-v-30aeabc0] {\n    font-size: 12px;\n}\n  /* .mb-1 {\n    margin-bottom: 0 !important;\n  } */\n.t-header[data-v-30aeabc0]{\n    min-width:150px;\n}\n}\n",""])},w2Ne:function(t,a,e){var s=e("JtU/");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,n);s.locals&&(t.exports=s.locals)},xYQK:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{all:!1,search:"",filter:"",filters:"",row_number:1,last_page:"",first_page:"",next_page:"",prev_page:"",current_page:1,total:0,items:[],fields:["sn",{key:"centre_no",sortable:!0},{key:"name_of_school",sortable:!0},"entry_figures","type"]}},computed:{filtered:function(){var t=this;return this.items.filter((function(a){return"name of school"==t.filter?a.name_of_school.toLowerCase().includes(t.search.toLowerCase()):"centre no"==t.filter?a.centre_no.toLowerCase().includes(t.search.toLowerCase()):""!==t.filters?a.type.toLowerCase()==t.filters.toLowerCase():""==t.search&&""==t.filters?a:void 0}))}},mounted:function(){this.getData()},watch:{all:"getAllData"},methods:{getData:function(){var t=this;axios.get("/api/wassce-private-school").then((function(a){200==a.status&&(t.items=a.data.data,t.total=a.data.total,t.row_number=a.data.per_page,t.last_page=a.data.last_page_url,t.first_page=a.data.first_page_url,t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page)})).catch()},getAllData:function(){var t=this;this.all?axios.get("/api/all-wassce-private-school").then((function(a){200==a.status&&(t.items=a.data,t.next_page="",t.prev_page="",t.row_number=t.items.length)})).catch():this.getData()},firstPage:function(){var t=this;axios.get(this.first_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))},lastPage:function(){var t=this;axios.get(this.last_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))},next:function(){var t=this;this.next_page&&axios.get(this.next_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))},prev:function(){var t=this;this.prev_page&&axios.get(this.prev_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.items=a.data.data}))}}},n=(e("/ta9"),e("KHd+")),r=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("h5",{staticClass:"mb-5 text-center"},[t._v("WASSCE for School Candidates 2020: List of Public/Private Schools in Imo State")]),t._v(" "),e("b-row",{staticClass:"justify-content-between align-items-end mb-4"},[e("b-col",{staticClass:"p0",attrs:{cols:"12",sm:"6"}},[e("span",{staticClass:"mr-2 fs14"},[t._v("Page no: "+t._s(t.current_page))]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.firstPage}},[e("i",{staticClass:"fa fa-angle-double-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.prev}},[e("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.next}},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14",on:{click:t.lastPage}},[e("i",{staticClass:"fa fa-angle-double-right",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"mr-2 fs14"},[t._v("Page: "+t._s(t.current_page))]),t._v(" "),e("span",{staticClass:"mr-2 fs14"},[t._v("Per page: "+t._s(t.row_number))]),t._v(" "),e("span",{staticClass:"fs14"},[t._v("Total: "+t._s(t.total))])]),t._v(" "),e("b-col",{staticClass:"p0",attrs:{cols:"12",sm:"6"}},[e("b-form-group",[e("b-form-row",{staticClass:"align-items-center w-100 justify-content-center"},[e("div",{staticClass:"d-flex align-items-center justify-content-center w-100 mb-3"},[e("b-form-checkbox",{staticClass:"pr-2 fs14 mr-3",model:{value:t.all,callback:function(a){t.all=a},expression:"all"}},[t._v("Show all")]),t._v(" "),e("div",[e("label",{staticClass:" mr-2 fs14 mb-2 mb-sm-0"},[t._v("Search by:")])]),t._v(" "),e("b-form-radio",{staticClass:"mr-2  fs14",attrs:{value:"name of school",name:"name",label:"Name"},model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}},[t._v("Name of School")]),t._v(" "),e("b-form-radio",{staticClass:"  fs14",attrs:{value:"centre no",name:"present posting",label:"Centre No"},model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}},[t._v("Centre No")])],1),t._v(" "),e("div",{staticClass:"d-flex w-100"},[e("b-form-input",{staticClass:"fs14 m-0 mr-sm-2 ",attrs:{placeholder:"Search by "+t.filter},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),t._v(" "),e("b-form-select",{staticClass:"fs14",attrs:{label:"filter by"},model:{value:t.filters,callback:function(a){t.filters=a},expression:"filters"}},[e("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("Filter by")]),t._v(" "),e("b-form-select-option",{attrs:{value:""}},[t._v("All")]),t._v(" "),e("b-form-select-option",{attrs:{value:"public"}},[t._v("Public")]),t._v(" "),e("b-form-select-option",{attrs:{value:"private"}},[t._v("Private")])],1)],1)])],1)],1)],1),t._v(" "),e("b-row",[e("div",{staticClass:"table-responsive"},[e("b-table",{attrs:{fields:t.fields,items:t.filtered},scopedSlots:t._u([{key:"cell(sn)",fn:function(a){return[e("div",{},[t._v(t._s(a.item.id))])]}},{key:"cell(centre_no)",fn:function(a){return[e("div",{staticClass:"t-header"},[t._v(t._s(a.item.centre_no))])]}},{key:"cell(name_of_school)",fn:function(a){return[e("div",{staticClass:"t-header"},[t._v(t._s(a.item.name_of_school))])]}},{key:"cell(entry_figures)",fn:function(a){return[e("div",{staticClass:"t-header"},[t._v(t._s(a.item.entry_figures))])]}}])})],1)]),t._v(" "),e("b-row",[e("b-col",[e("div",{staticClass:"navigation"},[t.prev_page?e("b-button",{staticClass:"prev_button mr-3",attrs:{type:"button"},on:{click:t.prev}},[t._v("Prev")]):t._e(),t._v(" "),t.next_page?e("b-button",{staticClass:"next_button",on:{click:t.next}},[t._v("Next")]):t._e()],1)])],1)],1)}),[],!1,null,"30aeabc0",null);a.default=r.exports}}]);