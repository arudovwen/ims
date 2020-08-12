(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-toasted */ "./node_modules/vue-toasted/dist/vue-toasted.min.js");
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_toasted__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _growthbunker_vuesocial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @growthbunker/vuesocial */ "./node_modules/@growthbunker/vuesocial/dist/vuesocial.esm.js");
/* harmony import */ var vue_marquee_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-marquee-text-component */ "./node_modules/vue-marquee-text-component/dist/MarqueeText.common.js");
/* harmony import */ var vue_marquee_text_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_marquee_text_component__WEBPACK_IMPORTED_MODULE_9__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");










Vue.component("marquee-text", vue_marquee_text_component__WEBPACK_IMPORTED_MODULE_9___default.a);
Vue.use(_growthbunker_vuesocial__WEBPACK_IMPORTED_MODULE_8__["default"], {
  iconPath: "/images/icons"
});
Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]);
Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BootstrapVue"]);
Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["IconsPlugin"]);
Vue.use(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default.a
/* { default options with global component } */
);
Vue.use(__webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js"));
Vue.use(vue_toasted__WEBPACK_IMPORTED_MODULE_7___default.a, {
  duration: 2500,
  icon: null // after: true

});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: "history",
  routes: _routes__WEBPACK_IMPORTED_MODULE_1__["routes"],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    document.getElementById("app").scrollIntoView();
    return null;
  }
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var admin = localStorage.getItem("adminUser");

    if (admin == null) {
      next({
        path: '/admin/auth/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
var app = new Vue({
  el: "#app",
  router: router
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var Index = function Index() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/index.vue */ "./resources/js/components/index.vue"));
};

var Home = function Home() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/pages/homeComponent.vue */ "./resources/js/components/pages/homeComponent.vue"));
};

var Checkout = function Checkout() {
  return Promise.all(/*! import() | checkout_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("checkout_routes")]).then(__webpack_require__.bind(null, /*! ./components/checkout.vue */ "./resources/js/components/checkout.vue"));
};

var OrderSummary = function OrderSummary() {
  return Promise.all(/*! import() | paystack */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("paystack")]).then(__webpack_require__.bind(null, /*! ./components/orderSummary.vue */ "./resources/js/components/orderSummary.vue"));
};

var Blog = function Blog() {
  return Promise.all(/*! import() | blog_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("blog_routes")]).then(__webpack_require__.bind(null, /*! ./components/pages/blog.vue */ "./resources/js/components/pages/blog.vue"));
};

var NewsBlog = function NewsBlog() {
  return Promise.all(/*! import() | blog_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("blog_routes")]).then(__webpack_require__.bind(null, /*! ./components/pages/readBlog.vue */ "./resources/js/components/pages/readBlog.vue"));
};

var ReadAnnouncement = function ReadAnnouncement() {
  return Promise.all(/*! import() | blog_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("blog_routes")]).then(__webpack_require__.bind(null, /*! ./components/user/readAnnouncement.vue */ "./resources/js/components/user/readAnnouncement.vue"));
};

var Contact = function Contact() {
  return Promise.all(/*! import() | contact_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("contact_routes")]).then(__webpack_require__.bind(null, /*! ./components/pages/contact.vue */ "./resources/js/components/pages/contact.vue"));
};

var About = function About() {
  return Promise.all(/*! import() | about_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("about_routes")]).then(__webpack_require__.bind(null, /*! ./components/pages/about.vue */ "./resources/js/components/pages/about.vue"));
};

var Organizations = function Organizations() {
  return Promise.all(/*! import() | organizations */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("organizations")]).then(__webpack_require__.bind(null, /*! ./components/pages/organizations.vue */ "./resources/js/components/pages/organizations.vue"));
};

var Stakeholders = function Stakeholders() {
  return Promise.all(/*! import() | stakeholders */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("stakeholders")]).then(__webpack_require__.bind(null, /*! ./components/pages/stakeholders.vue */ "./resources/js/components/pages/stakeholders.vue"));
};

var Initiatives = function Initiatives() {
  return Promise.all(/*! import() | initiatives */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("initiatives")]).then(__webpack_require__.bind(null, /*! ./components/pages/initiatives.vue */ "./resources/js/components/pages/initiatives.vue"));
};

var Administrative = function Administrative() {
  return Promise.all(/*! import() | administrative */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("administrative")]).then(__webpack_require__.bind(null, /*! ./components/pages/administratives.vue */ "./resources/js/components/pages/administratives.vue"));
};

var UserDirectory = function UserDirectory() {
  return Promise.all(/*! import() | administrative */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("administrative")]).then(__webpack_require__.bind(null, /*! ./components/pages/userdir.vue */ "./resources/js/components/pages/userdir.vue"));
};

var Directory = function Directory() {
  return Promise.all(/*! import() | directory */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("directory")]).then(__webpack_require__.bind(null, /*! ./components/user/directory.vue */ "./resources/js/components/user/directory.vue"));
};

var SchoolDirectory = function SchoolDirectory() {
  return Promise.all(/*! import() | SchoolDirectory */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("SchoolDirectory")]).then(__webpack_require__.bind(null, /*! ./components/user/school/viewSchool.vue */ "./resources/js/components/user/school/viewSchool.vue"));
};

var AdminHome = function AdminHome() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/adminHome.vue */ "./resources/js/components/admin/adminHome.vue"));
};

var AdminDirectory = function AdminDirectory() {
  return Promise.all(/*! import() | AdminDirectory */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("AdminDirectory")]).then(__webpack_require__.bind(null, /*! ./components/admin/directory/dashboard.vue */ "./resources/js/components/admin/directory/dashboard.vue"));
};

var AdminDashboard = function AdminDashboard() {
  return Promise.all(/*! import() | AdminDashboard */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("AdminDashboard")]).then(__webpack_require__.bind(null, /*! ./components/admin/adminDashboard.vue */ "./resources/js/components/admin/adminDashboard.vue"));
};

var AdminStaffs = function AdminStaffs() {
  return Promise.all(/*! import() | AdminDashboard */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("AdminDashboard")]).then(__webpack_require__.bind(null, /*! ./components/admin/staffs/staffs.vue */ "./resources/js/components/admin/staffs/staffs.vue"));
};

var AddStaffs = function AddStaffs() {
  return Promise.all(/*! import() | AdminDashboard */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("AdminDashboard")]).then(__webpack_require__.bind(null, /*! ./components/admin/staffs/add.vue */ "./resources/js/components/admin/staffs/add.vue"));
};

var EditStaffs = function EditStaffs() {
  return Promise.all(/*! import() | AdminDashboard */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("AdminDashboard")]).then(__webpack_require__.bind(null, /*! ./components/admin/staffs/edit.vue */ "./resources/js/components/admin/staffs/edit.vue"));
};

var ViewStaffs = function ViewStaffs() {
  return Promise.all(/*! import() | AdminDashboard */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("AdminDashboard")]).then(__webpack_require__.bind(null, /*! ./components/admin/staffs/view.vue */ "./resources/js/components/admin/staffs/view.vue"));
};

var AdminUsers = function AdminUsers() {
  return Promise.all(/*! import() | AdminDashboard */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("AdminDashboard")]).then(__webpack_require__.bind(null, /*! ./components/admin/users/users.vue */ "./resources/js/components/admin/users/users.vue"));
};

var AdminAuth = function AdminAuth() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/Auth/adminAuth.vue */ "./resources/js/components/admin/Auth/adminAuth.vue"));
};

var AdminSchool = function AdminSchool() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/schools/adminSchool.vue */ "./resources/js/components/admin/schools/adminSchool.vue"));
};

var NewsDashboard = function NewsDashboard() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/News/newsDashboard.vue */ "./resources/js/components/admin/News/newsDashboard.vue"));
};

var AddNews = function AddNews() {
  return Promise.all(/*! import() | add news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("add news")]).then(__webpack_require__.bind(null, /*! ./components/admin/News/addNews.vue */ "./resources/js/components/admin/News/addNews.vue"));
};

var EditNews = function EditNews() {
  return Promise.all(/*! import() | edit news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("edit news")]).then(__webpack_require__.bind(null, /*! ./components/admin/News/editNews.vue */ "./resources/js/components/admin/News/editNews.vue"));
};

var ViewNews = function ViewNews() {
  return Promise.all(/*! import() | view news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("view news")]).then(__webpack_require__.bind(null, /*! ./components/admin/News/viewNews.vue */ "./resources/js/components/admin/News/viewNews.vue"));
};

var AddProject = function AddProject() {
  return Promise.all(/*! import() | add news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("add news")]).then(__webpack_require__.bind(null, /*! ./components/admin/Projects/addProject.vue */ "./resources/js/components/admin/Projects/addProject.vue"));
};

var EditProject = function EditProject() {
  return Promise.all(/*! import() | edit news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("edit news")]).then(__webpack_require__.bind(null, /*! ./components/admin/Projects/editProject.vue */ "./resources/js/components/admin/Projects/editProject.vue"));
};

var ViewProject = function ViewProject() {
  return Promise.all(/*! import() | view news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("view news")]).then(__webpack_require__.bind(null, /*! ./components/admin/Projects/viewProject.vue */ "./resources/js/components/admin/Projects/viewProject.vue"));
};

var AddProgram = function AddProgram() {
  return Promise.all(/*! import() | add news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("add news")]).then(__webpack_require__.bind(null, /*! ./components/admin/Programs/addProgram.vue */ "./resources/js/components/admin/Programs/addProgram.vue"));
};

var EditProgram = function EditProgram() {
  return Promise.all(/*! import() | edit news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("edit news")]).then(__webpack_require__.bind(null, /*! ./components/admin/Programs/editProgram.vue */ "./resources/js/components/admin/Programs/editProgram.vue"));
};

var ViewProgram = function ViewProgram() {
  return Promise.all(/*! import() | view news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("view news")]).then(__webpack_require__.bind(null, /*! ./components/admin/Programs/viewProgram.vue */ "./resources/js/components/admin/Programs/viewProgram.vue"));
};

var AdminAppointment = function AdminAppointment() {
  return Promise.all(/*! import() | view news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("view news")]).then(__webpack_require__.bind(null, /*! ./components/admin/appointment/appointment.vue */ "./resources/js/components/admin/appointment/appointment.vue"));
};

var DraftNews = function DraftNews() {
  return Promise.all(/*! import() | view news */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("view news")]).then(__webpack_require__.bind(null, /*! ./components/admin/News/draftNews.vue */ "./resources/js/components/admin/News/draftNews.vue"));
};

var ProgramsDashboard = function ProgramsDashboard() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/Programs/dashboard.vue */ "./resources/js/components/admin/Programs/dashboard.vue"));
};

var ProjectsDashboard = function ProjectsDashboard() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/Projects/dashboard.vue */ "./resources/js/components/admin/Projects/dashboard.vue"));
};

var PaymentDashboard = function PaymentDashboard() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/Payments/dashboard.vue */ "./resources/js/components/admin/Payments/dashboard.vue"));
};

var ApplicationDashboard = function ApplicationDashboard() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/Applications/dashboard.vue */ "./resources/js/components/admin/Applications/dashboard.vue"));
};

var Lga = function Lga() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/lga/lga.vue */ "./resources/js/components/admin/lga/lga.vue"));
};

var SchoolsDirectory = function SchoolsDirectory() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/admin/directory/schoolDirectory.vue */ "./resources/js/components/admin/directory/schoolDirectory.vue"));
};

var InitiativeProjects = function InitiativeProjects() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/user/initiatives/projects.vue */ "./resources/js/components/user/initiatives/projects.vue"));
};

var InitiativePrograms = function InitiativePrograms() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/user/initiatives/programs.vue */ "./resources/js/components/user/initiatives/programs.vue"));
};

var Listings = function Listings() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/user/directory/listings.vue */ "./resources/js/components/user/directory/listings.vue"));
};

var Department = function Department() {
  return Promise.all(/*! import() | admin_home */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("admin_home")]).then(__webpack_require__.bind(null, /*! ./components/user/department/view.vue */ "./resources/js/components/user/department/view.vue"));
};

var Appointment = function Appointment() {
  return Promise.all(/*! import() | appointment */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("appointment")]).then(__webpack_require__.bind(null, /*! ./components/user/appointment.vue */ "./resources/js/components/user/appointment.vue"));
};

var StaffDir = function StaffDir() {
  return Promise.all(/*! import() | Staff */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("Staff")]).then(__webpack_require__.bind(null, /*! ./components/user/staff/home.vue */ "./resources/js/components/user/staff/home.vue"));
};

var FormList = function FormList() {
  return Promise.all(/*! import() | Form list */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("Form list")]).then(__webpack_require__.bind(null, /*! ./components/user/appForms/formList.vue */ "./resources/js/components/user/appForms/formList.vue"));
};

var SingleForm = function SingleForm() {
  return Promise.all(/*! import() | Single forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("Single forms")]).then(__webpack_require__.bind(null, /*! ./components/user/appForms/single.vue */ "./resources/js/components/user/appForms/single.vue"));
};

var Forms = function Forms() {
  return Promise.all(/*! import() | forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("forms")]).then(__webpack_require__.bind(null, /*! ./components/forms/index.vue */ "./resources/js/components/forms/index.vue"));
};

var FormOptions = function FormOptions() {
  return Promise.all(/*! import() | forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("forms")]).then(__webpack_require__.bind(null, /*! ./components/forms/options.vue */ "./resources/js/components/forms/options.vue"));
};

var FormTemplate = function FormTemplate() {
  return Promise.all(/*! import() | forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("forms")]).then(__webpack_require__.bind(null, /*! ./components/forms/template.vue */ "./resources/js/components/forms/template.vue"));
};

var AppForms = function AppForms() {
  return Promise.all(/*! import() | forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("forms")]).then(__webpack_require__.bind(null, /*! ./components/admin/Applications/index.vue */ "./resources/js/components/admin/Applications/index.vue"));
};

var AppFormOptions = function AppFormOptions() {
  return Promise.all(/*! import() | forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("forms")]).then(__webpack_require__.bind(null, /*! ./components/admin/Applications/options.vue */ "./resources/js/components/admin/Applications/options.vue"));
};

var AppFormTemplate = function AppFormTemplate() {
  return Promise.all(/*! import() | forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("forms")]).then(__webpack_require__.bind(null, /*! ./components/admin/Applications/template.vue */ "./resources/js/components/admin/Applications/template.vue"));
};

var AppList = function AppList() {
  return Promise.all(/*! import() | forms */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("forms")]).then(__webpack_require__.bind(null, /*! ./components/admin/Applications/applist.vue */ "./resources/js/components/admin/Applications/applist.vue"));
};

var routes = [{
  path: "*",
  redirect: "/"
}, {
  path: "/",
  component: Home,
  children: []
}, {
  path: "/checkout",
  component: Checkout
}, {
  path: "/summary",
  component: OrderSummary,
  name: "OrderSummary"
}, {
  path: "/blog",
  component: Blog
}, {
  path: "/all-forms",
  component: Forms
}, {
  path: "/form-create",
  component: FormOptions
}, {
  path: "/form/:id",
  component: FormTemplate,
  name: 'FormTemplate'
}, {
  path: "/news/read/:id/:title",
  component: NewsBlog,
  name: "NewsBlog"
}, {
  path: "/announcement/read/:id",
  component: ReadAnnouncement,
  name: "ReadAnnouncement"
}, {
  path: "/about",
  component: About
}, {
  path: "/contact",
  component: Contact
}, {
  path: "/organizations",
  component: Organizations
}, {
  path: "/stakeholders",
  component: Stakeholders
}, {
  path: "/department/:type",
  component: Department
}, {
  path: "/staffs",
  component: StaffDir
}, {
  path: "/forms",
  component: FormList
}, {
  path: "/forms/:name",
  component: SingleForm
}, {
  path: "/schedule-appointment",
  component: Appointment
}, {
  path: "/directory",
  component: Initiatives,
  children: [{
    path: "",
    component: UserDirectory,
    name: "UserDirectory"
  },, {
    path: "listings/:type",
    component: Listings,
    name: "Listings"
  }, {
    path: "schools",
    component: Directory,
    name: "Directory"
  }, {
    path: "schools/:id",
    component: SchoolDirectory,
    name: "SchoolDirectory"
  }]
}, {
  path: "/administrative",
  component: Administrative,
  children: []
}, {
  path: "",
  component: AdminHome,
  name: "AdminHome",
  children: [{
    path: "/admin/directory",
    component: AdminDirectory,
    name: "AdminDirectory",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/school/:action",
    component: AdminSchool,
    name: "AdminSchool",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin",
    component: AdminDashboard,
    name: "AdminDashboard",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/news",
    component: NewsDashboard,
    name: "NewsDashboard",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/forms",
    component: AppForms,
    name: "AppForms",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/form",
    component: AppFormOptions,
    name: "AppFormOptions",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/app/list",
    component: AppList,
    name: "AppList",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/form/template/:id",
    component: AppFormTemplate,
    name: "AppFormTemplate",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/payments",
    component: PaymentDashboard,
    name: "PaymentDashboard",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/programs",
    component: ProgramsDashboard,
    name: "ProgramsDashboard",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/users",
    component: AdminUsers,
    name: "AdminUsers",
    meta: {
      requiresAuth: true
    },
    beforeEnter: function beforeEnter(to, from, next) {
      var admin = JSON.parse(localStorage.getItem("adminUser"));

      if (admin.role == "administrator") {
        next();
      } else {
        next({
          name: "AdminDashboard"
        });
      }
    }
  }, {
    path: "/admin/projects",
    component: ProjectsDashboard,
    name: "ProjectsDashboard",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/staffs",
    component: AdminStaffs,
    name: "AdminStaffs",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/staffs/add",
    component: AddStaffs,
    name: "AddStaffs",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/staffs/view/:id",
    component: ViewStaffs,
    name: "ViewStaffs",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/appointment",
    component: AdminAppointment,
    name: "AdminAppointment"
  }, {
    path: "/admin/staffs/edit/:id",
    component: EditStaffs,
    name: "EditStaffs",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/applications",
    component: ApplicationDashboard,
    name: "ApplicationDashboard",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/lga",
    component: Lga,
    name: "Lga",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/directory/school",
    component: SchoolsDirectory,
    name: "SchoolsDirectory",
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/create/:type",
    component: AddNews,
    name: "AddNews"
  }, {
    path: "/admin/edit/:type/:id",
    component: EditNews,
    name: "EditNews"
  }, {
    path: "/admin/view/:type/:id",
    component: ViewNews,
    name: "ViewNews"
  }, {
    path: "/admin/news/draft",
    component: DraftNews,
    name: "DraftNews"
  }, {
    path: "/admin/project/add",
    component: AddProject,
    name: "AddProject"
  }, {
    path: "/admin/project/edit/:id",
    component: EditProject,
    name: "EditProject"
  }, {
    path: "/admin/project/view/:id",
    component: ViewProject,
    name: "ViewProject"
  }, {
    path: "/admin/program/add",
    component: AddProgram,
    name: "AddProgram"
  }, {
    path: "/admin/program/edit/:id",
    component: EditProgram,
    name: "EditProgram"
  }, {
    path: "/admin/program/view/:id",
    component: ViewProgram,
    name: "ViewProgram"
  }]
}, {
  path: "/admin/auth/:auth",
  component: AdminAuth,
  name: "AdminAuth",
  beforeEnter: function beforeEnter(to, from, next) {
    var admin = JSON.parse(localStorage.getItem("adminUser"));

    if (admin == null) {
      next();
    } else {
      next({
        name: "AdminDashboard"
      });
    }
  }
}];

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ARUDOVWEN/Desktop/ims/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/ARUDOVWEN/Desktop/ims/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);