(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"83Bq":function(n,t,a){"use strict";var e=a("axoT");a.n(e).a},Rx5R:function(n,t,a){"use strict";a.r(t);var e=a("nZrq"),i=a("i4C1"),o={data:function(){return{items:[]}},components:{Navigation:e.a,Footer:i.a},mounted:function(){this.getItems()},methods:{getItems:function(){var n=this;axios.get("/api/form-template").then((function(t){200==t.status&&(n.items=t.data)}))}}},r=(a("83Bq"),a("KHd+")),s=Object(r.a)(o,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("Navigation"),n._v(" "),a("b-container",[a("b-row",{},[a("b-col",{attrs:{cols:"12"}},[a("h5",{staticClass:"text-center mb-4"},[n._v("Application List")]),n._v(" "),a("b-list-group",[a("b-list-group-item",[a("router-link",{attrs:{to:"/forms/revalidation"}},[n._v("Enumeration, Revalidation/Recertification of Schools in Imo State")])],1),n._v(" "),a("b-list-group-item",[a("router-link",{attrs:{to:"/forms/school-registration"}},[n._v("Registration of New Schools in Imo State")])],1),n._v(" "),n._l(n.items,(function(t,e){return a("b-list-group-item",{key:e},[a("router-link",{attrs:{to:{name:"FormTemplate",params:{id:t.id}}}},[n._v(" "+n._s(t.title))])],1)}))],2)],1)],1)],1),n._v(" "),a("Footer")],1)}),[],!1,null,"e19cd208",null);t.default=s.exports},axoT:function(n,t,a){var e=a("iWcI");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(n.exports=e.locals)},iWcI:function(n,t,a){(n.exports=a("I1BE")(!1)).push([n.i,"\n.container[data-v-e19cd208] {\n  min-height: 70vh;\n  padding: 50px 15px;\n  width: 60%;\n  margin:0 auto;\n}\n.coll[data-v-e19cd208] {\n  width: 100%;\n  height: 200px;\n  background: green;\n  margin: 10px;\n}\n.icon[data-v-e19cd208] {\n  font-size: 65px;\n  margin-bottom: 20px;\n}\na[data-v-e19cd208] {\n  text-align: center;\n  text-decoration: none;\n  color:#0f7a8a;\n  cursor: pointer;\n  text-transform:uppercase;\n}\na[data-v-e19cd208]:hover{\n  font-weight: bold;\n}\n.tab[data-v-e19cd208] {\n  background-image: linear-gradient(\n    to right,\n    #0f7a8a,\n    #0e6d7b,\n    #0c616d,\n    #0b555f,\n    #094952\n  );\n  height: auto;\n  width: 24%;\n  padding: 15px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.tab:hover .icon[data-v-e19cd208] {\n  transform: scale(1.04);\n  transition: all 0.4s;\n}\n.mc1[data-v-e19cd208] {\n  color: transparent;\n}\n@media(max-width:425px){\n.container[data-v-e19cd208]{\n    width:100%;\n}\na[data-v-e19cd208]{\n    text-transform: capitalize;\n}\n}\n",""])}}]);