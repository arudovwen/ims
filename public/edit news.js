(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+vf1":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n#form[data-v-2e22dcd6] {\n  padding: 20px;\n}\n.custom-control-input[data-v-2e22dcd6] {\n  opacity: 1;\n  z-index: 0;\n}\n.progress[data-v-2e22dcd6] {\n  height: 20px;\n}\n",""])},"9Sya":function(t,e,a){"use strict";a.r(e);var o={data:function(){return{type:this.$route.params.type,program:{subject:"",coverImage:"",content:""},placeholder:"/images/placeholder.png",filesSelectedLength:null,progress:null,uploadedFileUrl:"",cloudinary:{uploadPreset:"knkccgjv",apiKey:"634813511968181",cloudName:"bizguruh-com"}}},components:{"app-editor":a("ynI1").a},mounted:function(){this.getprogram()},methods:{update:function(){var t=this;axios.put("/api/update-program/".concat(this.$route.params.id),this.program).then((function(e){200==e.status&&(t.$toasted.info("Updated successfully"),t.$router.go(-1))}))},getprogram:function(){var t=this;axios.get("/api/get-program/".concat(this.$route.params.id)).then((function(e){200==e.status&&(t.program=e.data,t.placeholder=e.data.cover_image)}))},handleFileChange:function(t){var e=t.target.files[0];this.loadCoverFile(e)},loadCoverFile:function(t){var e=this,a=new FileReader;a.onload=function(t){e.placeholder=t.target.result},a.readAsDataURL(t),this.processUpload(t)},processUpload:function(t){var e=this,a=this;this.start=!0;var o=new FormData,r=new XMLHttpRequest,s=this.cloudinary.cloudName,i=this.cloudinary.uploadPreset;o.append("file",t),o.append("resource_type","auto"),o.append("upload_preset",i),r.open("POST","https://api.cloudinary.com/v1_1/"+s+"/upload"),r.upload.onprogress=function(t){t.lengthComputable&&(a.progress=Math.round(t.loaded/t.total*100)+"%")},r.upload.onloadstart=function(t){this.progress="Starting..."},r.upload.onloadend=function(t){this.progress="Completing.."},r.onload=function(t){if(200===r.status){e.progress="Completed",setTimeout((function(){e.start=!1}),1e3);var a=JSON.parse(r.response);e.uploadedFileUrl=a.secure_url,e.post.coverImage=a.secure_url}else e.start=!1,alert("Upload failed. Please try again.")},r.send(o)},upload_handler:function(t,e,a){var o,r;(o=new XMLHttpRequest).withCredentials=!1,o.open("POST","/api/image-upload"),o.onload=function(){var t;200==o.status?(t=JSON.parse(o.responseText))&&"string"==typeof t.location?e(t.location):a("Invalid JSON: "+o.responseText):a("HTTP Error: "+o.status)},(r=new FormData).append("file",t.blob()),o.send(r)},loadFile:function(t,e,a){var o=document.createElement("input");o.setAttribute("type","file"),o.setAttribute("accept","image/*"),o.onchange=function(){var e=this.files[0],a=new FileReader;a.readAsDataURL(e),a.onload=function(){var o="blobid"+(new Date).getTime(),r=tinymce.activeEditor.editorUpload.blobCache,s=a.result.split(",")[1],i=r.create(o,e,s);r.add(i),t(i.blobUri(),{title:e.name})}},o.click()}}},r=(a("dK51"),a("KHd+")),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"form"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("legend",[t._v("Create new "+t._s(t.type))]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Program name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.program.name,expression:"program.name"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title","aria-describedby":"helpId",placeholder:"Enter title"},domProps:{value:t.program.name},on:{input:function(e){e.target.composing||t.$set(t.program,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("About")]),t._v(" "),a("app-editor",{staticClass:"form-control",attrs:{apiKey:"b2xt6tkzh0bcxra613xpq9319rtgc3nfwqbzh8tn6tckbgv3",init:{selector:"textarea",toolbar_mode:"floating",plugins:"advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount a11ychecker advcode  formatpainter linkchecker autolink lists media mediaembed   table  tinymcespellchecker",toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table",image_title:!0,height:300,file_picker_types:"image",automatic_uploads:!1,relative_urls:!1,convert_urls:!1,images_upload_handler:function(e,a,o){t.upload_handler(e,a,o)},file_picker_callback:function(e,a,o){t.loadFile(e,a,o)},images_dataimg_filter:function(t){return t.hasAttribute("internal-blob")}}},model:{value:t.program.about,callback:function(e){t.$set(t.program,"about",e)},expression:"program.about"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cover"}},[t._v("Cover Image")]),t._v(" "),a("label",{staticClass:"custom-file"},[a("img",{attrs:{src:t.placeholder,height:"100",alt:""}}),t._v(" "),a("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"cover",id:"cover","aria-describedby":"fileHelpId"},on:{change:function(e){return t.handleFileChange(e)}}}),t._v(" "),a("div",{staticClass:"progress-bar progress-bar-striped active",style:{width:t.progress},attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.progress))])])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"button-green",attrs:{type:"submit"}},[this._v("Update")])])}],!1,null,"51d90b3a",null);e.default=s.exports},B4uN:function(t,e,a){"use strict";var o=a("B5uM");a.n(o).a},B5uM:function(t,e,a){var o=a("+vf1");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)},"IH+3":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n#form[data-v-51d90b3a] {\n  padding: 20px;\n}\n.custom-control-input[data-v-51d90b3a] {\n  opacity: 1;\n  z-index: 0;\n}\n.progress[data-v-51d90b3a] {\n  height: 20px;\n}\n",""])},"OAG+":function(t,e,a){var o=a("SDTh");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)},OCEn:function(t,e,a){"use strict";a.r(e);var o={data:function(){return{type:this.$route.params.type,post:{subject:"",author:"",category:"selected",featured:!1,coverImage:"",content:""},categories:[],placeholder:"/images/placeholder.png",filesSelectedLength:null,progress:null,uploadedFileUrl:"",cloudinary:{uploadPreset:"knkccgjv",apiKey:"634813511968181",cloudName:"bizguruh-com"}}},components:{"app-editor":a("ynI1").a},mounted:function(){this.getCategories(),this.getNews()},methods:{getNews:function(){var t=this;"news"==this.type?axios.get("/api/get-new/".concat(this.$route.params.id)).then((function(e){200==e.status&&(t.post=e.data,console.log("getNews -> res.data",e.data),t.placeholder=e.data.cover_image)})):"draft"==this.type?axios.get("/api/get-draft/".concat(this.$route.params.id)).then((function(e){200==e.status&&200==e.status&&(t.post=e.data,t.placeholder=e.data.cover_image)})):axios.get("/api/get-announcement/".concat(this.$route.params.id)).then((function(e){200==e.status&&(t.post=e.data,t.placeholder=e.data.cover_image)}))},getCategories:function(){var t=this;axios.get("/api/news-categories").then((function(e){t.categories=e.data}))},update:function(){var t=this;"news"==this.type?axios.put("/api/update-news/".concat(this.$route.params.id),this.post).then((function(e){200==e.status&&(t.$toasted.info("Updated"),t.$router.go(-1))})):axios.put("/api/update-announcement/".concat(this.$route.params.id),this.post).then((function(e){200==e.status&&(t.$toasted.info("Updated"),t.$router.go(-1))}))},handleFileChange:function(t){var e=t.target.files[0];this.loadCoverFile(e)},loadCoverFile:function(t){var e=this,a=new FileReader;a.onload=function(t){e.placeholder=t.target.result},a.readAsDataURL(t),this.processUpload(t)},draft:function(){var t=this;"news"==this.type&&axios.post("/api/save-draft",this.post).then((function(e){200==e.status&&t.$toasted.info("Saved to draft")}))},processUpload:function(t){var e=this,a=this;this.start=!0;var o=new FormData,r=new XMLHttpRequest,s=this.cloudinary.cloudName,i=this.cloudinary.uploadPreset;o.append("file",t),o.append("resource_type","auto"),o.append("upload_preset",i),r.open("POST","https://api.cloudinary.com/v1_1/"+s+"/upload"),r.upload.onprogress=function(t){t.lengthComputable&&(a.progress=Math.round(t.loaded/t.total*100)+"%")},r.upload.onloadstart=function(t){this.progress="Starting..."},r.upload.onloadend=function(t){this.progress="Completing.."},r.onload=function(t){if(200===r.status){e.progress="Completed",setTimeout((function(){e.start=!1}),1e3);var a=JSON.parse(r.response);e.uploadedFileUrl=a.secure_url,e.post.coverImage=a.secure_url}else e.start=!1,alert("Upload failed. Please try again.")},r.send(o)},upload_handler:function(t,e,a){var o,r;(o=new XMLHttpRequest).withCredentials=!1,o.open("POST","/api/image-upload"),o.onload=function(){var t;200==o.status?(t=JSON.parse(o.responseText))&&"string"==typeof t.location?e(t.location):a("Invalid JSON: "+o.responseText):a("HTTP Error: "+o.status)},(r=new FormData).append("file",t.blob()),o.send(r)},loadFile:function(t,e,a){var o=document.createElement("input");o.setAttribute("type","file"),o.setAttribute("accept","image/*"),o.onchange=function(){var e=this.files[0],a=new FileReader;a.readAsDataURL(e),a.onload=function(){var o="blobid"+(new Date).getTime(),r=tinymce.activeEditor.editorUpload.blobCache,s=a.result.split(",")[1],i=r.create(o,e,s);r.add(i),t(i.blobUri(),{title:e.name})}},o.click()}}},r=(a("B4uN"),a("KHd+")),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"form"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("legend",[t._v("Update  "+t._s(t.type))]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Subject")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.subject,expression:"post.subject"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title","aria-describedby":"helpId",placeholder:"Enter title"},domProps:{value:t.post.subject},on:{input:function(e){e.target.composing||t.$set(t.post,"subject",e.target.value)}}})]),t._v(" "),"news"==t.type?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Author")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.author,expression:"post.author"}],staticClass:"form-control",attrs:{type:"text",name:"author",id:"author","aria-describedby":"helpId",placeholder:"Enter author name"},domProps:{value:t.post.author},on:{input:function(e){e.target.composing||t.$set(t.post,"author",e.target.value)}}})]):t._e(),t._v(" "),"news"==t.type?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.post.category,expression:"post.category"}],staticClass:"custom-select",attrs:{name:"category",id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.post,"category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"selected",disabled:""}},[t._v("Select category")]),t._v(" "),t._l(t.categories,(function(e,o){return a("option",{key:o,domProps:{value:e.category}},[t._v(t._s(e.category))])}))],2)]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Content")]),t._v(" "),a("app-editor",{staticClass:"form-control",attrs:{apiKey:"b2xt6tkzh0bcxra613xpq9319rtgc3nfwqbzh8tn6tckbgv3",init:{selector:"textarea",toolbar_mode:"floating",plugins:"advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount lists  table  ",toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table",image_title:!0,height:300,file_picker_types:"image",automatic_uploads:!1,relative_urls:!1,convert_urls:!1,images_upload_handler:function(e,a,o){t.upload_handler(e,a,o)},file_picker_callback:function(e,a,o){t.loadFile(e,a,o)},images_dataimg_filter:function(t){return t.hasAttribute("internal-blob")}}},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),t._v(" "),"news"==t.type?a("div",{staticClass:"form-group"},[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.featured,expression:"post.featured"}],staticClass:"custom-control-input",attrs:{type:"checkbox",name:"feautured",id:"featured"},domProps:{checked:Array.isArray(t.post.featured)?t._i(t.post.featured,null)>-1:t.post.featured},on:{change:function(e){var a=t.post.featured,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=t._i(a,null);o.checked?s<0&&t.$set(t.post,"featured",a.concat([null])):s>-1&&t.$set(t.post,"featured",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.post,"featured",r)}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"},[t._v("Featured")])])]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cover"}},[t._v("Cover Image")]),t._v(" "),a("label",{staticClass:"custom-file"},[a("img",{attrs:{src:t.placeholder,height:"100",alt:""}}),t._v(" "),a("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"cover",id:"cover","aria-describedby":"fileHelpId"},on:{change:function(e){return t.handleFileChange(e)}}}),t._v(" "),a("div",{staticClass:"progress-bar progress-bar-striped active w-25",style:{width:t.progress},attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.progress))])])]),t._v(" "),a("div",{staticClass:"form-group"},["news"==t.type?a("button",{staticClass:"button-dark mr-4",attrs:{type:"button"},on:{click:t.draft}},[t._v("Save to Draft")]):t._e(),t._v(" "),a("button",{staticClass:"button-green",attrs:{type:"submit"}},[t._v("Update")])])])])}),[],!1,null,"2e22dcd6",null);e.default=s.exports},QonK:function(t,e,a){"use strict";var o=a("OAG+");a.n(o).a},SDTh:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n#form[data-v-a84ad5a6] {\n  padding: 20px;\n}\n.custom-control-input[data-v-a84ad5a6] {\n  opacity: 1;\n  z-index: 0;\n}\n.progress[data-v-a84ad5a6] {\n  height: 20px;\n}\n",""])},dK51:function(t,e,a){"use strict";var o=a("usUD");a.n(o).a},"hkY+":function(t,e,a){"use strict";a.r(e);var o={data:function(){return{type:this.$route.params.type,project:{subject:"",coverImage:"",content:""},placeholder:"/images/placeholder.png",filesSelectedLength:null,progress:null,uploadedFileUrl:"",cloudinary:{uploadPreset:"knkccgjv",apiKey:"634813511968181",cloudName:"bizguruh-com"}}},components:{"app-editor":a("ynI1").a},mounted:function(){this.getProject()},methods:{update:function(){var t=this;axios.put("/api/update-project/".concat(this.$route.params.id),this.project).then((function(e){200==e.status&&(t.$toasted.info("Updated successfully"),t.$router.go(-1))}))},getProject:function(){var t=this;axios.get("/api/get-project/".concat(this.$route.params.id)).then((function(e){200==e.status&&(t.project=e.data,t.placeholder=e.data.cover_image)}))},handleFileChange:function(t){var e=t.target.files[0];this.loadCoverFile(e)},loadCoverFile:function(t){var e=this,a=new FileReader;a.onload=function(t){e.placeholder=t.target.result},a.readAsDataURL(t),this.processUpload(t)},processUpload:function(t){var e=this,a=this;this.start=!0;var o=new FormData,r=new XMLHttpRequest,s=this.cloudinary.cloudName,i=this.cloudinary.uploadPreset;o.append("file",t),o.append("resource_type","auto"),o.append("upload_preset",i),r.open("POST","https://api.cloudinary.com/v1_1/"+s+"/upload"),r.upload.onprogress=function(t){t.lengthComputable&&(a.progress=Math.round(t.loaded/t.total*100)+"%")},r.upload.onloadstart=function(t){this.progress="Starting..."},r.upload.onloadend=function(t){this.progress="Completing.."},r.onload=function(t){if(200===r.status){e.progress="Completed",setTimeout((function(){e.start=!1}),1e3);var a=JSON.parse(r.response);e.uploadedFileUrl=a.secure_url,e.post.coverImage=a.secure_url}else e.start=!1,alert("Upload failed. Please try again.")},r.send(o)},upload_handler:function(t,e,a){var o,r;(o=new XMLHttpRequest).withCredentials=!1,o.open("POST","/api/image-upload"),o.onload=function(){var t;200==o.status?(t=JSON.parse(o.responseText))&&"string"==typeof t.location?e(t.location):a("Invalid JSON: "+o.responseText):a("HTTP Error: "+o.status)},(r=new FormData).append("file",t.blob()),o.send(r)},loadFile:function(t,e,a){var o=document.createElement("input");o.setAttribute("type","file"),o.setAttribute("accept","image/*"),o.onchange=function(){var e=this.files[0],a=new FileReader;a.readAsDataURL(e),a.onload=function(){var o="blobid"+(new Date).getTime(),r=tinymce.activeEditor.editorUpload.blobCache,s=a.result.split(",")[1],i=r.create(o,e,s);r.add(i),t(i.blobUri(),{title:e.name})}},o.click()}}},r=(a("QonK"),a("KHd+")),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"form"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("legend",[t._v("Create new "+t._s(t.type))]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Project name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title","aria-describedby":"helpId",placeholder:"Enter title"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("About")]),t._v(" "),a("app-editor",{staticClass:"form-control",attrs:{apiKey:"b2xt6tkzh0bcxra613xpq9319rtgc3nfwqbzh8tn6tckbgv3",init:{selector:"textarea",toolbar_mode:"floating",plugins:"advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount a11ychecker advcode  formatpainter linkchecker autolink lists media mediaembed   table  tinymcespellchecker",toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table",image_title:!0,height:300,file_picker_types:"image",automatic_uploads:!1,relative_urls:!1,convert_urls:!1,images_upload_handler:function(e,a,o){t.upload_handler(e,a,o)},file_picker_callback:function(e,a,o){t.loadFile(e,a,o)},images_dataimg_filter:function(t){return t.hasAttribute("internal-blob")}}},model:{value:t.project.about,callback:function(e){t.$set(t.project,"about",e)},expression:"project.about"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cover"}},[t._v("Cover Image")]),t._v(" "),a("label",{staticClass:"custom-file"},[a("img",{attrs:{src:t.placeholder,height:"100",alt:""}}),t._v(" "),a("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"cover",id:"cover","aria-describedby":"fileHelpId"},on:{change:function(e){return t.handleFileChange(e)}}}),t._v(" "),a("div",{staticClass:"progress-bar progress-bar-striped active",style:{width:t.progress},attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.progress))])])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"button-green",attrs:{type:"submit"}},[this._v("Update")])])}],!1,null,"a84ad5a6",null);e.default=s.exports},usUD:function(t,e,a){var o=a("IH+3");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)}}]);