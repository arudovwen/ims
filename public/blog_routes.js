(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0Oa":function(t,a,e){"use strict";var o=e("yeNA");e.n(o).a},"7kgQ":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.container-fluid[data-v-085dec26] {\n  background: #f7f8fa;\n}\n.header__[data-v-085dec26] {\n  width: 80%;\n  margin: 0 auto;\n  background: #ffffff;\n  padding: 50px 20px 0;\n}\n.main[data-v-085dec26] {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  background: #ffffff;\n  padding: 20px;\n  overflow: hidden;\n}\n.cover[data-v-085dec26],\n.content[data-v-085dec26],\n.about[data-v-085dec26] {\n  width: 100%;\n  text-align: left;\n}\n.cover[data-v-085dec26] {\n  background-size: cover;\n  height: 400px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media (max-width: 768px) {\n.main[data-v-085dec26] {\n    width: 100%;\n}\n.header__[data-v-085dec26] {\n    width: 100%;\n}\n}\n@media (max-width: 425px) {\n.container-fluid[data-v-085dec26]{\n    padding: 0;\n}\n.cover[data-v-085dec26]{\n    height: 200px;\n    background-size: contain;\n    margin-bottom: 20px;\n}\nh2[data-v-085dec26]{\n  font-size: 22px;\n}\n}\n",""])},BXCw:function(t,a,e){"use strict";e.r(a);var o={data:function(){return{content:{},show:!0}},mounted:function(){this.getNews()},methods:{getNews:function(){var t=this;axios.get("/api/get-new/".concat(this.$route.params.id)).then((function(a){200==a.status&&(t.content=a.data,t.show=!1)}))}}},s=(e("auPY"),e("KHd+")),n=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-overlay",{attrs:{show:t.show,rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),t._v(" "),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")]),t._v(" "),e("b-button",{ref:"cancel",attrs:{variant:"outline-danger",size:"sm","aria-describedby":"cancel-label"},on:{click:function(a){t.show=!1}}},[t._v("Loading")])],1)]},proxy:!0}])},[e("div",{staticClass:"container-fluid"},[e("h2",{staticClass:"header__ text-center"},[t._v(t._s(t.content.subject))]),t._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"cover",style:{"background-image":"url("+t.content.cover_image+")"}}),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content.content)}}),t._v(" "),e("div",{staticClass:"about"},[e("div",[e("p",{staticClass:"blog-post-meta"},[t._v("\n          "+t._s(t._f("moment")(t.content.created_at,"DD MMMM"))+", by\n          "),e("a",{attrs:{href:"#"}},[t._v(t._s(t.content.author))])])])])])])])}),[],!1,null,"085dec26",null);a.default=n.exports},XDAr:function(t,a,e){"use strict";e.r(a);var o=e("nZrq"),s=e("n8D0"),n={data:function(){return{show:!0,category:"",featured:[],news:[],last_page:"",first_page:"",next_page:"",prev_page:"",current_page:1,total_news:0}},components:{Navigation:o.a,scrollTop:s.a},mounted:function(){this.getFeaturedNews(),this.getNews()},methods:{getNews:function(){var t=this;axios.get("/api/get-normal-news").then((function(a){200==a.status&&(t.news=a.data.data.filter((function(t){return"active"==t.status})),t.show=!1)}))},getFeaturedNews:function(){var t=this;axios.get("/api/get-featured-news").then((function(a){200==a.status&&(t.featured=a.data,t.show=!1)}))},next:function(){var t=this;this.next_page&&axios.get(this.next_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.news=a.data.data.filter((function(t){return"active"==t.status}))}))},prev:function(){var t=this;this.prev_page&&axios.get(this.prev_page).then((function(a){t.next_page=a.data.next_page_url,t.prev_page=a.data.prev_page_url,t.current_page=a.data.current_page,t.news=a.data.data.filter((function(t){return"active"==t.status}))}))}},computed:{basic:function(){var t=this;return this.news.filter((function(a){return t.category.toLowerCase()==a.category.toLowerCase()||""==t.category.toLowerCase()?a:void 0}))}}},i=(e("/0Oa"),e("KHd+")),r=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("scrollTop"),t._v(" "),e("Navigation"),t._v(" "),e("b-overlay",{attrs:{show:t.show,rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),t._v(" "),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")]),t._v(" "),e("b-button",{ref:"cancel",attrs:{variant:"outline-danger",size:"sm","aria-describedby":"cancel-label"},on:{click:function(a){t.show=!1}}},[t._v("Loading")])],1)]},proxy:!0}])},[e("div",{attrs:{id:"main-content"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"nav-scroller py-1 mb-2"},[e("nav",{staticClass:"nav d-flex justify-content-between"},[e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:""},domProps:{checked:t._q(t.category,"")},on:{change:function(a){t.category=""}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("All")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"World"},domProps:{checked:t._q(t.category,"World")},on:{change:function(a){t.category="World"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("World")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Nigeria"},domProps:{checked:t._q(t.category,"Nigeria")},on:{change:function(a){t.category="Nigeria"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Nigeria")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Imo"},domProps:{checked:t._q(t.category,"Imo")},on:{change:function(a){t.category="Imo"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Imo")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Technology"},domProps:{checked:t._q(t.category,"Technology")},on:{change:function(a){t.category="Technology"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Technology")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Design"},domProps:{checked:t._q(t.category,"Design")},on:{change:function(a){t.category="Design"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Design")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Culture"},domProps:{checked:t._q(t.category,"Culture")},on:{change:function(a){t.category="Culture"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Culture")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Business"},domProps:{checked:t._q(t.category,"Business")},on:{change:function(a){t.category="Business"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Business")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Politics"},domProps:{checked:t._q(t.category,"Politics")},on:{change:function(a){t.category="Politics"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Politics")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Opinion"},domProps:{checked:t._q(t.category,"Opinion")},on:{change:function(a){t.category="Opinion"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Opinion")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Science"},domProps:{checked:t._q(t.category,"Science")},on:{change:function(a){t.category="Science"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Science")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Health"},domProps:{checked:t._q(t.category,"Health")},on:{change:function(a){t.category="Health"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Health")])]),t._v(" "),e("label",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"Travel"},domProps:{checked:t._q(t.category,"Travel")},on:{change:function(a){t.category="Travel"}}}),t._v(" "),e("span",{staticClass:"custom-control-indicator text-muted"},[t._v("Travel")])])])]),t._v(" "),t.featured.length?e("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark",style:{"background-image":"url("+t.featured[0].cover_image+")"}},[e("div",{staticClass:"col-md-8 p-2 bg-dark-50"},[e("h2",{staticClass:"josefin_bold"},[t._v(t._s(t.featured[0].subject))]),t._v(" "),e("p",{staticClass:"lead my-3",domProps:{innerHTML:t._s(t.featured[0].content)}}),t._v(" "),e("p",{staticClass:"lead mb-0"},[e("router-link",{staticClass:"text-white font-weight-bold",attrs:{to:{name:"NewsBlog",params:{id:t.featured[0].id}}}},[t._v("Continue reading...")])],1)])]):t._e(),t._v(" "),t.featured.length?e("div",{staticClass:"row mb-2"},[t.featured.length>1?e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},[e("div",{staticClass:"col p-4 d-flex flex-column position-static"},[e("strong",{staticClass:"d-inline-block mb-2 text-primary"},[t._v(t._s(t.featured[1].category))]),t._v(" "),e("h4",{staticClass:"mb-0"},[t._v(t._s(t.featured[1].subject))]),t._v(" "),e("div",{staticClass:"mb-1 text-muted"},[t._v(t._s(t._f("moment")(t.featured[1].created_at,"DD MMMM")))]),t._v(" "),e("p",{staticClass:"card-text mb-auto feat",domProps:{innerHTML:t._s(t.featured[1].content)}}),t._v(" "),e("router-link",{staticClass:"stretched-link",attrs:{to:{name:"NewsBlog",params:{id:t.featured[1].id}}}},[t._v("Continue reading")])],1)])]):t._e(),t._v(" "),t.featured.length>2?e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},[e("div",{staticClass:"col p-4 d-flex flex-column position-static"},[e("strong",{staticClass:"d-inline-block mb-2 text-primary"},[t._v(t._s(t.featured[2].category))]),t._v(" "),e("h4",{staticClass:"mb-0"},[t._v(t._s(t.featured[2].subject))]),t._v(" "),e("div",{staticClass:"mb-1 text-muted"},[t._v(t._s(t._f("moment")(t.featured[2].created_at,"DD MMMM")))]),t._v(" "),e("p",{staticClass:"card-text mb-auto feat",domProps:{innerHTML:t._s(t.featured[2].content)}}),t._v(" "),e("router-link",{staticClass:"stretched-link",attrs:{to:{name:"NewsBlog",params:{id:t.featured[2].id}}}},[t._v("Continue reading")])],1)])]):t._e()]):t._e()]),t._v(" "),e("main",{staticClass:"container",attrs:{role:"main"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 blog-main"},[e("h3",{staticClass:"pb-4 mb-4 font-italic border-bottom"},[t._v("From the Media")]),t._v(" "),t._l(t.basic,(function(a,o){return e("div",{key:o,staticClass:"blog-post"},[e("h2",{staticClass:"blog-post-title"},[t._v(t._s(a.subject))]),t._v(" "),e("p",{staticClass:"blog-post-meta"},[t._v("\n                "+t._s(t._f("moment")(a.created_at,"DD MMMM"))+", by\n                "),e("small",[t._v(t._s(a.author))])]),t._v(" "),e("div",{staticClass:"news_content",domProps:{innerHTML:t._s(a.content)}}),t._v(" "),e("router-link",{staticClass:"stretched-link",attrs:{to:{name:"NewsBlog",params:{id:a.id}}}},[t._v("Continue reading")])],1)})),t._v(" "),t.basic.length>15?e("nav",{staticClass:"blog-pagination mb-3"},[e("div",{staticClass:"btn btn-outline-primary",on:{click:t.prev}},[t._v("Older")]),t._v(" "),e("div",{staticClass:"btn btn-outline-secondary disabled",on:{click:t.next}},[t._v("Newer")])]):t._e()],2),t._v(" "),e("aside",{staticClass:"col-md-4 blog-sidebar"},[e("div",{staticClass:"p-4 mb-3 bg-light rounded"},[e("h4",{staticClass:"font-italic"},[t._v("About")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Get the latest news, information, gist from all around the world, Nigeria , Imo state, get information about culture, technology, design, business and so much more today.")])]),t._v(" "),e("div",{staticClass:"p-4"},[e("h4",{staticClass:"font-italic"},[t._v("Archives")]),t._v(" "),e("ol",{staticClass:"list-unstyled mb-0"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("March 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("February 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("January 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("December 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("November 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("October 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("September 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("August 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("July 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("June 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("May 2020")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("April 2020")])])])]),t._v(" "),e("div",{staticClass:"p-4"},[e("h4",{staticClass:"font-italic"},[t._v("Elsewhere")]),t._v(" "),e("ol",{staticClass:"list-unstyled"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("GitHub")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Facebook")])])])])])])])])])],1)}),[],!1,null,"197fca36",null);a.default=r.exports},ZxVH:function(t,a,e){var o=e("7kgQ");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,s);o.locals&&(t.exports=o.locals)},auPY:function(t,a,e){"use strict";var o=e("ZxVH");e.n(o).a},mfpl:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n#main-content[data-v-197fca36] {\n  font-size: 16px;\n  margin-top: 30px;\n}\n.bg-dark-50[data-v-197fca36] {\n  background: rgba(0, 0, 0, 0.6);\n}\n.jumbotron[data-v-197fca36] {\n  background-size: cover;\n}\n.bd-placeholder-img[data-v-197fca36] {\n  width: 100%;\n}\n.feat[data-v-197fca36] {\n  height: 500px;\n  overflow: hidden;\n}\n.lead[data-v-197fca36] {\n  height: 35px;\n  overflow: hidden;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  line-clamp: 3;\n  -webkit-line-clamp: 3;\n  -o-line-clamp: 3;\n  -ms-line-clamp: 3;\n  -moz-line-clamp: 3;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n.news_content[data-v-197fca36] {\n  max-height: 200px;\n  overflow: hidden;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  line-clamp: 15;\n  -webkit-line-clamp: 15;\n  -o-line-clamp: 15;\n  -ms-line-clamp: 15;\n  -moz-line-clamp: 15;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n.blog-post[data-v-197fca36] {\n  margin-bottom: 20px;\n}\n",""])},yeNA:function(t,a,e){var o=e("mfpl");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,s);o.locals&&(t.exports=o.locals)}}]);