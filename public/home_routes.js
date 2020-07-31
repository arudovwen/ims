(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home_routes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation */ "./resources/js/components/navigation/navigation.vue");
//
//
//
//
//
//
//
//
//
//
 // import scrollTop from '../user/scrollTopComponent'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Navigation: _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__["default"] // scrollTop

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/banner */ "./resources/js/components/user/banner.vue");
/* harmony import */ var _navigation_navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.vue */ "./resources/js/components/navigation/navigation.vue");
/* harmony import */ var _user_polls_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/polls.vue */ "./resources/js/components/user/polls.vue");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer */ "./resources/js/components/footer/footer.vue");
/* harmony import */ var _user_announcement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/announcement */ "./resources/js/components/user/announcement.vue");
/* harmony import */ var _user_news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/news */ "./resources/js/components/user/news.vue");
/* harmony import */ var _user_commissioner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/commissioner */ "./resources/js/components/user/commissioner.vue");
/* harmony import */ var _user_ourInitiatives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/ourInitiatives */ "./resources/js/components/user/ourInitiatives.vue");
/* harmony import */ var _user_ourOrganizations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/ourOrganizations */ "./resources/js/components/user/ourOrganizations.vue");
/* harmony import */ var _scrollTopComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scrollTopComponent */ "./resources/js/components/scrollTopComponent.vue");
/* harmony import */ var _user_departments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user/departments */ "./resources/js/components/user/departments.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Polls: _user_polls_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Announcement: _user_announcement__WEBPACK_IMPORTED_MODULE_4__["default"],
    News: _user_news__WEBPACK_IMPORTED_MODULE_5__["default"],
    ourInitiatives: _user_ourInitiatives__WEBPACK_IMPORTED_MODULE_7__["default"],
    ourOrganizations: _user_ourOrganizations__WEBPACK_IMPORTED_MODULE_8__["default"],
    Commissioner: _user_commissioner__WEBPACK_IMPORTED_MODULE_6__["default"],
    Navigation: _navigation_navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"],
    scrollTop: _scrollTopComponent__WEBPACK_IMPORTED_MODULE_9__["default"],
    Banner: _user_banner__WEBPACK_IMPORTED_MODULE_0__["default"],
    Department: _user_departments__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/announcement.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "announcement-component",
  data: function data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        spaceBetween: 30,
        slidesPerView: 3,
        direction: "vertical",
        autoplay: {
          delay: 5000
        }
      },
      announcement: {},
      news: []
    };
  },
  mounted: function mounted() {
    this.getAnnouncement();
    this.getNews();
  },
  methods: {
    getAnnouncement: function getAnnouncement() {
      var _this = this;

      axios.get("/api/current-a").then(function (res) {
        if (res.status == 200) {
          _this.announcement = res.data[0];
        }
      });
    },
    gotoNews: function gotoNews(id) {
      console.log("gotoNews -> id", id);
      this.$router.push({
        name: "NewsBlog",
        params: {
          id: id
        }
      });
    },
    getNews: function getNews() {
      var _this2 = this;

      axios.get("/api/get-featured-news").then(function (res) {
        if (res.status == 200) {
          _this2.news = res.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/banner.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 1,
        effect: 'cube',
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 5000
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/commissioner.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "commisioner-component",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/departments.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/news.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "news-component",
  data: function data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 6000
        }
      },
      news: []
    };
  },
  mounted: function mounted() {
    this.getNews();
  },
  methods: {
    gotoNews: function gotoNews(id) {
      console.log("gotoNews -> id", id);
      this.$router.push({
        name: "NewsBlog",
        params: {
          id: id
        }
      });
    },
    getNews: function getNews() {
      var _this = this;

      axios.get("/api/all-news").then(function (res) {
        if (res.status == 200) {
          _this.news = res.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ourInitiatives.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/polls.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      swiperOptions: {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 6000
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main[data-v-bdcf5660] {\n  background-image: url(\"/images/texture.png\");\n  padding: 45px 0 75px;\n}\n#announcement[data-v-bdcf5660] {\n  display: flex;\n  justify-content: space-between;\n  height: 90%;\n  width: 80%;\n  margin: 0 auto;\n}\n.button-green[data-v-bdcf5660] {\n  padding: 8px 32px;\n  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);\n  line-height: 1.25;\n  border-radius: 3px;\n  background: #0f7a8a;\n  text-decoration: none;\n  color: white;\n  font-size: 13px;\n  letter-spacing: 0.08em;\n  text-transform: initial;\n  position: relative;\n  transition: background-color 0.6s ease;\n  overflow: hidden;\n}\n.button-green[data-v-bdcf5660]:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 50%;\n  left: 50%;\n  transform-style: flat;\n  transform: translate3d(-50%, -50%, 0);\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  transition: width 0.3s ease, height 0.3s ease;\n}\n.button-green[data-v-bdcf5660]:focus, .button-green[data-v-bdcf5660]:hover {\n  background: #0c5e6a;\n}\n.button-green[data-v-bdcf5660]:active:after {\n  width: 200px;\n  height: 200px;\n}\n.pin[data-v-bdcf5660] {\n  width: 50px;\n}\n.left_box[data-v-bdcf5660] {\n  width: 50%;\n  height: 500px;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.right_box[data-v-bdcf5660] {\n  width: 30%;\n  height: 500px;\n  background-image: linear-gradient(to right, #0f7a8a, #0e6d7b, #0c616d, #0b555f, #094952);\n  padding: 10px;\n  border-radius: 10px;\n}\n.comm_body[data-v-bdcf5660] {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  background: white;\n  padding: 20px;\n  box-shadow: inset 0 0 6px 1px #ccc;\n}\n.comm_body p[data-v-bdcf5660] {\n  color: rgba(0, 0, 0, 0.64);\n}\n.comm_header[data-v-bdcf5660] {\n  font-weight: 300;\n  text-align: center;\n}\n.comm_image[data-v-bdcf5660] {\n  width: 100%;\n  height: 200px;\n  margin-bottom: 20px;\n}\n.comm_image img[data-v-bdcf5660] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.comm_about[data-v-bdcf5660] {\n  width: 50%;\n  padding: 0 25px;\n  text-align: left;\n  border-left: 5px solid #f7f8fa;\n  height: 50%;\n}\n.latest_update[data-v-bdcf5660] {\n  width: 100%;\n  height: 400px;\n}\n.slide[data-v-bdcf5660] {\n  background: #f7f8fa;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 4px;\n}\n.img_contain[data-v-bdcf5660] {\n  width: 30%;\n  height: 100%;\n}\n.img_contain img[data-v-bdcf5660] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.img_text[data-v-bdcf5660] {\n  width: 70%;\n  padding: 10px;\n  text-align: left;\n  font-size: 13px;\n}\n.top_header[data-v-bdcf5660] {\n  color: #e6f1f3;\n  font-weight: bold !important;\n}\n.news-info[data-v-bdcf5660] {\n  cursor: pointer;\n  height: 70px;\n  font-size: 15px;\n  overflow: hidden;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 3;\n  -moz-line-clamp: 3;\n  -ms-line-clamp: 3;\n  -o-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ann[data-v-bdcf5660] {\n  cursor: pointer;\n  height: 85px;\n  font-size: 18px;\n  overflow: hidden;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 3;\n  -moz-line-clamp: 3;\n  -ms-line-clamp: 3;\n  -o-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 768px) {\n.main[data-v-bdcf5660] {\n    background-image: url(\"/images/texture.png\");\n    padding: 45px 15px 75px;\n}\n.left_box[data-v-bdcf5660] {\n    height: auto;\n    margin-bottom: 30px;\n}\n.comm_body[data-v-bdcf5660] {\n    flex-direction: column;\n}\n.comm_about[data-v-bdcf5660] {\n    width: 100%;\n    padding: 0 10px 15px;\n}\n.comm_image[data-v-bdcf5660] {\n    margin: 0 auto 20px;\n    width: 70%;\n}\n#announcement[data-v-bdcf5660] {\n    flex-direction: column;\n    height: auto;\n    padding-top: 10px;\n    padding-bottom: 45px;\n    width: 100%;\n}\n.left_box[data-v-bdcf5660],\n.right_box[data-v-bdcf5660] {\n    width: 100%;\n}\n.comm_image[data-v-bdcf5660] {\n    height: auto;\n}\n}\n@media (max-width: 425px) {\n.img_text p[data-v-bdcf5660] {\n    font-size: 12.5px;\n}\n.button[data-v-bdcf5660] {\n    width: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-fd967750] {\n  padding: 0;\n  width: 100%;\n  max-width: 100%;\n  min-height: 100vh;\n}\n.my_body[data-v-fd967750] {\n  background-image: url(\"/images/curve.jpg\");\n  background-size: contain;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#banner[data-v-4d3d74f5] {\n  width: 100%;\n  height: 560px;\n  overflow: hidden;\n  background: url(\"/images/imobanner.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.enroll[data-v-4d3d74f5]{\n  text-align: end;\n}\n.enroll p[data-v-4d3d74f5]{\n  color: white;\n  font-size: 16px;\n  text-decoration: none;\n}\n.text-blue[data-v-4d3d74f5]{\n  color: #000066;\n}\n.site[data-v-4d3d74f5]{\n  padding: 8px 15px;\n border:1px solid white;\n     width: -webkit-fit-content;\n     width: -moz-fit-content;\n     width: fit-content;\n    margin-left: auto;\n}\n.form-control[data-v-4d3d74f5]{\n  width: 50%;\n  margin-left: auto;\n}\n.banner_1[data-v-4d3d74f5] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.banner_2[data-v-4d3d74f5] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background: url(\"/images/imobanner.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n.banner_overlay[data-v-4d3d74f5] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background:rgb(15, 79, 89,.9);\n}\n.circle_1[data-v-4d3d74f5] {\n  width: 600px;\n  height: 600px;\n  background: #f7f8fa;\n  position: absolute;\n  bottom: -47%;\n  left: 1px;\n  border-radius: 50%;\n  z-index: 3;\n  overflow: hidden;\n}\n.circle_1 img[data-v-4d3d74f5] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: top;\n     object-position: top;\n}\n.text[data-v-4d3d74f5] {\n  position: absolute;\n  bottom: 18%;\n  right: 18%;\n}\n.new[data-v-4d3d74f5] {\n  color: #fff;\n  font-size: 52px;\n  font-weight: bold;\n}\n.education[data-v-4d3d74f5] {\n  color: #fff;\n  font-size: 52px;\n  font-weight: bold;\n}\n.face[data-v-4d3d74f5] {\n  color: #fff;\n  font-size: 52px;\n  font-weight: bold;\n}\n.circle_3[data-v-4d3d74f5] {\n  width: 600px;\n  height: 600px;\n  background: #f7f8fa;\n  position: absolute;\n  right: -55px;\n  bottom: -40%;\n  border-radius: 50%;\n  z-index: 1;\n  overflow: hidden;\n}\n.circle_3 img[data-v-4d3d74f5] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: top;\n     object-position: top;\n}\n.circle_2[data-v-4d3d74f5] {\n  width: 600px;\n  height: 600px;\n  background: linear-gradient(90deg, #000428 0%, #004e92 100%);\n  position: absolute;\n  right: 49%;\n  bottom: 40%;\n  margin-right: -300px;\n  margin-bottom: -150px;\n  border-radius: 50%;\n  z-index: 2;\n  overflow: hidden;\n}\n.square_1[data-v-4d3d74f5] {\n  border: 10px solid #ECEE53;\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -60px;\n  height: 120px;\n  width: 120px;\n  left: -60px;\n  transform: rotate(45deg);\n}\n.square_2[data-v-4d3d74f5] {\n  border: 10px solid white;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n.square_3[data-v-4d3d74f5] {\n  background: #ECEE53;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n.square_4[data-v-4d3d74f5] {\n  border: 10px solid #ECEE53;\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -60px;\n  height: 120px;\n  width: 120px;\n  right: -60px;\n  transform: rotate(45deg);\n}\n.square_5[data-v-4d3d74f5] {\n  border: 10px solid white;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n.square_6[data-v-4d3d74f5] {\n  background: #ECEE53;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n.banner_2_text[data-v-4d3d74f5] {\n  width: 70%;\n  margin: auto;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.banner_2_imo[data-v-4d3d74f5] {\n  font-size: 52px;\n  font-weight: bold;\n  border-bottom: 5px solid #ECEE53;\n  margin-bottom: 16px;\n  color: #ECEE53;\n}\n.banner_2_lor[data-v-4d3d74f5] {\n  font-size: 22px;\n  color: hsl(188, 71%, 85%);\n}\n@media (max-width: 1024px) {\n.circle_1[data-v-4d3d74f5] {\n    width: 500px;\n    height: 500px;\n\n    bottom: -47%;\n    left: 15px;\n}\n.text[data-v-4d3d74f5] {\n    bottom: 18%;\n    right: 18%;\n}\n.new[data-v-4d3d74f5] {\n    font-size: 42px;\n}\n.education[data-v-4d3d74f5] {\n    font-size: 42px;\n}\n.face[data-v-4d3d74f5] {\n    color: #fff;\n    font-size: 42px;\n    font-weight: bold;\n}\n.circle_3[data-v-4d3d74f5] {\n    width: 500px;\n    height: 500px;\n\n    right: -125px;\n    bottom: -40%;\n}\n.circle_2[data-v-4d3d74f5] {\n    width: 500px;\n    height: 500px;\n    right: 45%;\n    bottom: 45%;\n    margin-right: -250px;\n    margin-bottom: -125px;\n}\n}\n@media (max-width: 768px) {\n.form-control[data-v-4d3d74f5]{\n  width: 90%;\n  margin-left: auto;\n}\n.square_1[data-v-4d3d74f5] {\n    border: 7px solid #ECEE53;\n    padding: 5px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -30px;\n    height: 60px;\n    width: 60px;\n    left: -30px;\n    transform: rotate(45deg);\n}\n.square_2[data-v-4d3d74f5] {\n    border: 7px solid white;\n    padding: 7px;\n    width: 100%;\n    height: 100%;\n}\n.square_3[data-v-4d3d74f5] {\n    background: #ECEE53;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n.square_4[data-v-4d3d74f5] {\n    border: 7px solid #ECEE53;\n    padding: 5px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -30px;\n    height: 60px;\n    width: 60px;\n    right: -30px;\n    transform: rotate(45deg);\n}\n.square_5[data-v-4d3d74f5] {\n    border: 7px solid white;\n    padding: 7px;\n    width: 100%;\n    height: 100%;\n}\n.square_6[data-v-4d3d74f5] {\n    background: #ECEE53;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n.banner_2[data-v-4d3d74f5] {\n    width: 78%;\n}\n.banner_2_imo[data-v-4d3d74f5] {\n    font-size: 44px;\n    text-align: left;\n}\n.banner_2_lor[data-v-4d3d74f5] {\n    font-size: 20px;\n    text-align: left;\n}\n.circle_1[data-v-4d3d74f5] {\n    width: 400px;\n    height: 400px;\n\n    bottom: -32%;\n    left: 15px;\n}\n.text[data-v-4d3d74f5] {\n    bottom:18%;\n    right: 18%;\n}\n.new[data-v-4d3d74f5] {\n    font-size: 32px;\n}\n.education[data-v-4d3d74f5] {\n    font-size: 32px;\n}\n.face[data-v-4d3d74f5] {\n    color: #fff;\n    font-size: 32px;\n    font-weight: bold;\n}\n.circle_3[data-v-4d3d74f5] {\n    width: 400px;\n    height: 400px;\n\n    right: -88px;\n    bottom: -27%;\n}\n.circle_2[data-v-4d3d74f5] {\n    width: 400px;\n    height: 400px;\n    right: 50%;\n    bottom: 46%;\n    margin-right: -200px;\n    margin-bottom: -100px;\n}\n.text[data-v-4d3d74f5]{\n}\n#banner[data-v-4d3d74f5] {\n\n  background: url(\"/images/curve3.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.banner_2[data-v-4d3d74f5]{\n    background: url(\"/images/curve3.jpg\");\n}\n.banner_overlay[data-v-4d3d74f5] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background:  rgb(15, 122, 138, 0.65);\n}\n}\n@media (max-width: 425px) {\n.form-control[data-v-4d3d74f5]{\n  width: 100%;\n  margin-left: auto;\n}\n.square_1[data-v-4d3d74f5] {\n    border: 5px solid #ECEE53;\n    padding: 3px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -20px;\n    height: 40px;\n    width: 40px;\n    left: -20px;\n    transform: rotate(45deg);\n}\n.square_2[data-v-4d3d74f5] {\n    border: 5px solid white;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n.square_3[data-v-4d3d74f5] {\n    background: #ECEE53;\n    padding: 2.5px;\n    width: 100%;\n    height: 100%;\n}\n.square_4[data-v-4d3d74f5] {\n    border: 5px solid #ECEE53;\n    padding: 4px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -20px;\n    height: 40px;\n    width: 40px;\n    right: -20px;\n    transform: rotate(45deg);\n}\n.square_5[data-v-4d3d74f5] {\n    border: 5px solid white;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n.square_6[data-v-4d3d74f5] {\n    background: #ECEE53;\n    padding: 2.3px;\n    width: 100%;\n    height: 100%;\n}\n.banner_2[data-v-4d3d74f5] {\n    width: 78%;\n}\n.banner_2_imo[data-v-4d3d74f5] {\n    font-size: 40px;\n}\n.banner_2_lor[data-v-4d3d74f5] {\n    font-size: 20px;\n}\n.circle_1[data-v-4d3d74f5] {\n   width: 400px;\n    height: 400px;\n    bottom: -32%;\n    left: -90px;\n}\n.text[data-v-4d3d74f5] {\n    bottom: 18%;\n    right: 25%;\n}\n.enroll p[data-v-4d3d74f5]{\n    color: white;\n    font-size: 14px;\n    text-decoration: none;\n}\n.new[data-v-4d3d74f5] {\n    font-size: 22px;\n}\n.education[data-v-4d3d74f5] {\n    font-size: 22px;\n}\n.face[data-v-4d3d74f5] {\n    color: #fff;\n    font-size: 24px;\n    font-weight: bold;\n}\n.circle_3[data-v-4d3d74f5] {\n      width: 300px;\n    height: 300px;\n    right: -89px;\n    bottom: 13%;\n}\n.circle_3 img[data-v-4d3d74f5]{\n    -o-object-position: bottom;\n       object-position: bottom;\n}\n.circle_2[data-v-4d3d74f5] {\n  width: 350px;\n    height: 350px;\n    position: absolute;\n       right: 23%;\n    bottom: 60%;\n    margin-right: -150px;\n    margin-bottom: -75px;\n}\n#banner[data-v-4d3d74f5]{\n    height: 530px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#commissioner[data-v-853a5c3e] {\n  position: relative;\n padding: 100px 0 65px;\n  width: 100%;\n  background-image: linear-gradient(\n    to right,\n    #0f7a8a,\n    #0e6d7b,\n    #0c616d,\n    #0b555f,\n    #094952\n  );\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.main_header[data-v-853a5c3e] {\n  position: absolute;\n  top: 20px;\n  left: 15px;\n}\n.commiss[data-v-853a5c3e] {\n  display: flex;\n  width: 80%;\n  margin: 0 auto;\n  justify-content: space-between;\n}\n.box[data-v-853a5c3e] {\n  width: 25%;\n  height: 350px;\n  background: #f7f8fa;\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n}\n.mc1[data-v-853a5c3e] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.box img[data-v-853a5c3e] {\n  width: 100%;\n  height: 100%;\n}\np[data-v-853a5c3e] {\n  margin: 0;\n  font-size: 15px;\n}\nh4[data-v-853a5c3e] {\n  font-size: 1.25rem;\n}\n.top_header[data-v-853a5c3e] {\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  padding: 15px 10px;\n  background: rgba(255, 255, 255, 0.95);\n  color: #333;\n  width: 100%;\n  margin: 0;\n}\n.img img[data-v-853a5c3e] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_header[data-v-853a5c3e]::after {\n  border-bottom: 2px solid #e6f1f3;\n}\n.main_header[data-v-853a5c3e] {\n  color: #e6f1f3;\n}\n.square_1[data-v-853a5c3e] {\n  border: 10px solid #ecee53;\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -60px;\n  height: 120px;\n  width: 120px;\n  left: -60px;\n  transform: rotate(45deg);\n}\n.square_2[data-v-853a5c3e] {\n  border: 10px solid white;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n.square_3[data-v-853a5c3e] {\n  background: #ecee53;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n.square_4[data-v-853a5c3e] {\n  border: 10px solid #ecee53;\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -60px;\n  height: 120px;\n  width: 120px;\n  right: -60px;\n  transform: rotate(45deg);\n}\n.square_5[data-v-853a5c3e] {\n  border: 10px solid white;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n.square_6[data-v-853a5c3e] {\n  background: #ecee53;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 1024px) {\n.square_1[data-v-853a5c3e] {\n    border: 7px solid #ecee53;\n    padding: 5px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -30px;\n    height: 60px;\n    width: 60px;\n    left: -30px;\n    transform: rotate(45deg);\n}\n.square_2[data-v-853a5c3e] {\n    border: 7px solid white;\n    padding: 7px;\n    width: 100%;\n    height: 100%;\n}\n.square_3[data-v-853a5c3e] {\n    background: #ecee53;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n.square_4[data-v-853a5c3e] {\n    border: 7px solid #ecee53;\n    padding: 5px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -30px;\n    height: 60px;\n    width: 60px;\n    right: -30px;\n    transform: rotate(45deg);\n}\n.square_5[data-v-853a5c3e] {\n    border: 7px solid white;\n    padding: 7px;\n    width: 100%;\n    height: 100%;\n}\n.square_6[data-v-853a5c3e] {\n    background: #ecee53;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n}\n@media (max-width: 768px) {\n.governor[data-v-853a5c3e] {\n    margin-top: 0;\n}\n#commissioner[data-v-853a5c3e] {\n    padding: 30px 15px 30px;\n    height: auto;\n}\n.commiss[data-v-853a5c3e] {\n    flex-direction: column;\n    height: auto;\n    padding: 15px 25px;\n    width: 80%;\n}\n.square_1[data-v-853a5c3e] {\n    border: 5px solid #ecee53;\n    padding: 3px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -20px;\n    height: 40px;\n    width: 40px;\n    left: -20px;\n    transform: rotate(45deg);\n}\n.square_2[data-v-853a5c3e] {\n    border: 5px solid white;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n.square_3[data-v-853a5c3e] {\n    background: #ecee53;\n    padding: 2.5px;\n    width: 100%;\n    height: 100%;\n}\n.square_4[data-v-853a5c3e] {\n    border: 5px solid #ecee53;\n    padding: 4px;\n    position: absolute;\n    bottom: 50%;\n    margin-bottom: -20px;\n    height: 40px;\n    width: 40px;\n    right: -20px;\n    transform: rotate(45deg);\n}\n.square_5[data-v-853a5c3e] {\n    border: 5px solid white;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n}\n.square_6[data-v-853a5c3e] {\n    background: #ecee53;\n    padding: 2.3px;\n    width: 100%;\n    height: 100%;\n}\n.left_box[data-v-853a5c3e],\n  .right_box[data-v-853a5c3e] {\n    width: 100%;\n}\n.top_head[data-v-853a5c3e] {\n    margin: 0 !important;\n}\n.comm_image[data-v-853a5c3e] {\n    height: auto;\n}\n.box[data-v-853a5c3e] {\n    width: 70%;\n    margin: 30px auto;\n    height: 300px;\n}\n.main_header[data-v-853a5c3e]{\n    position: relative;\n}\n}\n@media (max-width: 425px) {\n.img_text p[data-v-853a5c3e] {\n    font-size: 12.5px;\n}\n.box[data-v-853a5c3e] {\n    width: 100%;\n}\nh4[data-v-853a5c3e] {\n    font-size: 16px !important;\n}\nh5[data-v-853a5c3e] {\n    font-size: 15px !important;\n}\n.commiss[data-v-853a5c3e] {\n    padding: 15px 0;\n}\n.top_header[data-v-853a5c3e] {\n    padding: 5px 10px;\n}\n.comm_body[data-v-853a5c3e] {\n    margin-bottom: 30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.view[data-v-76189ee8]{\n  background: #f7f8fa;\n}\n.container-fluid[data-v-76189ee8] {\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n.main-content[data-v-76189ee8] {\n  display: grid;\n  width: 100%;\n  height: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-column-gap: 30px;\n  grid-row-gap: 40px;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 15px;\n}\n.holder_1[data-v-76189ee8] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.4s;\n  text-align: center;\n   border:1px solid  #ecee53;\n}\n.overlay-blue[data-v-76189ee8] {\n  top: 100%;\n  right: 100%;\n  position: absolute;\n  transition: all 0.4s ease-out;\n  background: rgba(15, 79, 89, 0.95);\n  color: white;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  flex-direction: column;\n  text-align: center;\n}\n.holder_1:hover .overlay-blue[data-v-76189ee8] {\n  top: 0;\n  right: 0;\n}\nimg[data-v-76189ee8] {\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n}\n.box_1[data-v-76189ee8] {\n  height: 50%;\n  padding: 30px;\n  background: white;\n}\n.box_2[data-v-76189ee8] {\n  color: #ecee53;\n  height: 50%;\n  font-size: 20px;\n  font-family: \"Josefin Sans\";\n  text-align: center;\n  background: rgb(15, 79, 89);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.box_1 img[data-v-76189ee8] {\n  width: 100px;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nh5[data-v-76189ee8] {\n  color: #ecee53;\n}\n.bg-green[data-v-76189ee8] {\n  background: rgb(15, 79, 89);\n  color: white;\n}\n@media (max-width: 768px) {\n.container-fluid[data-v-76189ee8] {\n    width: 100%;\n}\n.main-content[data-v-76189ee8] {\n    grid-template-columns: 1fr 1fr 1fr;\n}\n.box_2[data-v-76189ee8] {\n    font-size: 17px;\n}\n}\n@media (max-width: 425px) {\n.container-fluid[data-v-76189ee8] {\n    width: 100%;\n}\n.main-content[data-v-76189ee8] {\n    padding: 50px 0;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 15px;\n}\n.box_2[data-v-76189ee8] {\n    font-size: 15px;\n}\n.overlay-blue[data-v-76189ee8] {\n    font-size: 12px;\n    padding: 10px;\n}\nh5[data-v-76189ee8] {\n    font-size: 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#news[data-v-f1242548] {\n  padding: 25px 15px;\n  background-color: #e6f1f3;\n  border-bottom: 3px solid rgb(15, 122, 138, 0.85);\n}\n.news[data-v-f1242548] {\n  min-height: 300px;\n  display: flex;\n\n  padding-bottom: 45px;\n}\n.left_box[data-v-f1242548] {\n  width: 50%;\n  height: 100%;\n  padding: 10px;\n}\n.right_box[data-v-f1242548] {\n  width: 50%;\n  height: 100%;\n  padding: 10px 30px;\n  padding-right: 50px;\n}\n.right_box p a[data-v-f1242548] {\n  font-size: 16px;\n  color: #001e00;\n}\n.news_container[data-v-f1242548] {\n  width: 150px;\n  height: auto;\n  text-align: center;\n}\n.news_img[data-v-f1242548] {\n  width: 100%;\n  height: 100px;\n}\n.news_img img[data-v-f1242548] {\n  width: 100%;\n  height: 100%;\n}\n.news_title[data-v-f1242548] {\n  font-size: 15px;\n  text-align: left;\n}\n.news_update[data-v-f1242548] {\n  height: 400px;\n}\na[data-v-f1242548] {\n  color: rgb(15, 122, 138, 0.85);\n}\n.sub_news[data-v-f1242548] {\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between;\n}\n.left_header div[data-v-f1242548],\n.left_header h3[data-v-f1242548] {\n  display: inline-block;\n  vertical-align: baseline;\n}\n.slide[data-v-f1242548] {\n  background: #f7f8fa;\n}\n.img_container[data-v-f1242548] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.img_container img[data-v-f1242548]{\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.img_text1[data-v-f1242548] {\n  position: absolute;\n  bottom: 125px;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  z-index: 2;\n  width: auto;\n  padding: 10px;\n  text-align: center;\n   cursor: pointer;\n}\n.img_text2[data-v-f1242548] {\n  position: absolute;\n  bottom: 0px;\n  background: linear-gradient(to right, #0f7a8a, #0e6d7b, #0c616d, #0b555f, #094952);\n  color: white;\n  z-index: 2;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  text-align: left;\n  cursor: pointer;\n}\n@media (max-width: 1024px) {\n}\n@media (max-width: 768px) {\n.news_update[data-v-f1242548] {\n    height: 300px;\n}\n.left_box[data-v-f1242548],\n  .right_box[data-v-f1242548] {\n    width: 100%;\n}\n.news[data-v-f1242548] {\n    flex-direction: column;\n}\n.right_box[data-v-f1242548] {\n    padding: 10px;\n}\n.news_container[data-v-f1242548] {\n    width: 31.5%;\n}\n}\n@media (max-width: 425px) {\n.news_title[data-v-f1242548] {\n    font-size: 11.5px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.initiatives[data-v-441a8b78] {\n \n  padding: 40px 0;\n}\n.container[data-v-441a8b78] {\n  background: transparent;\n}\n.ini_head[data-v-441a8b78] {\n  margin-left: 15px;\n}\n.card[data-v-441a8b78] {\n  margin: 0 auto;\n  text-align: center;\n}\na small[data-v-441a8b78] {\n  font-size: 15px;\n  color: #0f7a8a;\n}\na[data-v-441a8b78]:hover{\n  color: #0f7a8a;\n}\n.card-footer[data-v-441a8b78] {\n  text-align: center;\n}\nstrong[data-v-441a8b78]{\n  font-size: 17px;\n  color: rgba(0, 0, 0, .84);\n  text-transform: uppercase;\n}\n/* .card{\n  border:2px solid rgba(15, 79, 89, 0.95);\n \n} */\n.card:hover .card-body div .ava[data-v-441a8b78]{\n     transition: all 1s ease-in-out;\n  transform: scale(1.1);\n  /* transform: rotateX(360deg); */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#organizations[data-v-1e824386] {\n  padding: 30px 15px;\n  background:rgb(255, 255, 255);\n}\n.organizations[data-v-1e824386] {\n    width: 100%;\n  padding:0 30px;\n}\n.info p[data-v-1e824386]{\n  text-align: center;\n  font-size: 15px;\n}\n.org2[data-v-1e824386]{\n    width: 33.3vw;\n}\n.org1[data-v-1e824386] {\n  width: 150px;\n  height: 150px;\n  margin: 0 auto;\n}\n.org1 img[data-v-1e824386] {\n  width: 100%;\n  height: 100%;\n}\n@media(max-width:425px){\n.org1[data-v-1e824386] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto;\n}\n.info p[data-v-1e824386]{\n  font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#polls[data-v-4f7985db] {\n  padding: 30px 0px 65px;\n  height: auto;\n   background:rgba(255, 255, 255, .95);\n  position: relative;\n}\n.z[data-v-4f7985db]{\n  position:relative;\n  z-index: 2;\n}\n.my-poll[data-v-4f7985db] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n  margin:0 auto;\n}\n.tab[data-v-4f7985db] {\nbackground-image: linear-gradient(to right, #0f7a8a, #0e6d7b, #0c616d, #0b555f, #094952);\n  height: auto;\n  width: 32%;\n  padding: 15px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.tab:hover .icon[data-v-4f7985db] {\n  transform: scale(1.04);\n  transition: all 0.4s;\n}\n.mc1[data-v-4f7985db]{\n  color:transparent;\n}\n.icon[data-v-4f7985db] {\n  font-size: 65px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1024px) {\n}\n@media (max-width: 768px) {\n.my-poll[data-v-4f7985db] {\n    flex-direction: column-reverse;\n    padding: 25px;\n}\n.tab[data-v-4f7985db] {\n    height: auto;\n    width: 100%;\n    margin-bottom: 30px;\n}\n}\n@media (max-width: 425px) {\n.icon[data-v-4f7985db]{\n    font-size: 55px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=template&id=2ac2c897&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index.vue?vue&type=template&id=2ac2c897& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("Navigation")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=template&id=fd967750&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeComponent.vue?vue&type=template&id=fd967750&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: " " },
    [
      _c("scrollTop", { staticClass: "scroll" }),
      _vm._v(" "),
      _c("Navigation"),
      _vm._v(" "),
      _c("Banner"),
      _vm._v(" "),
      _c("Announcement"),
      _vm._v(" "),
      _c(
        "section",
        {},
        [
          _c("Commissioner"),
          _vm._v(" "),
          _c("ourInitiatives"),
          _vm._v(" "),
          _c("Department"),
          _vm._v(" "),
          _c("Polls"),
          _vm._v(" "),
          _c("ourOrganizations"),
          _vm._v(" "),
          _c("News")
        ],
        1
      ),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=template&id=bdcf5660&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/announcement.vue?vue&type=template&id=bdcf5660&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c(
      "h3",
      { staticClass: "josefin center_header mb-4 w-100 text-center bold" },
      [_vm._v("Announcement Board")]
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "announcement" } }, [
      _c("div", { staticClass: "left_box" }, [
        _c("div", { staticClass: "comm_body" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "h5",
            { staticClass: "josefin_bold mb-3 top_head text-center mc1 " },
            [_vm._v(_vm._s(_vm.announcement.subject))]
          ),
          _vm._v(" "),
          _vm.announcement.cover_image
            ? _c("div", { staticClass: "comm_image" }, [
                _c("img", {
                  attrs: {
                    src: _vm.announcement.cover_image,
                    alt: "announcement"
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("p", {
                staticClass: "ann text-center mb-2",
                domProps: { innerHTML: _vm._s(_vm.announcement.content) }
              }),
              _vm._v(" "),
              _c("router-link", { attrs: { to: "/announcement/read" } }, [
                _c("small", [_vm._v("Read more")])
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right_box" }, [
        _c("div", { staticClass: "latest_post text-center" }, [
          _c("h4", { staticClass: "josefin top_header py-3" }, [
            _vm._v("Latest updates")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "swiper",
                {
                  ref: "mySwiper",
                  staticClass: "latest_update",
                  attrs: { options: _vm.swiperOptions }
                },
                [
                  _vm._l(_vm.news, function(ne, idx) {
                    return _c(
                      "swiper-slide",
                      { key: idx, staticClass: "slide" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "img_contain cpointer",
                            on: {
                              click: function($event) {
                                return _vm.gotoNews(ne.id)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: { src: ne.cover_image, alt: "" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "img_text cpointer",
                            on: {
                              click: function($event) {
                                return _vm.gotoNews(ne.id)
                              }
                            }
                          },
                          [
                            _c("p", { staticClass: "news-inof" }, [
                              _vm._v(_vm._s(ne.subject))
                            ])
                          ]
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-pagination",
                    attrs: { slot: "pagination" },
                    slot: "pagination"
                  })
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-100 text-center mb-3" }, [
      _c("img", {
        staticClass: "pin",
        attrs: { src: "/images/pin.png", alt: "pin" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=template&id=4d3d74f5&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/banner.vue?vue&type=template&id=4d3d74f5&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "swiper",
        {
          ref: "mySwiper",
          attrs: { id: "banner", options: _vm.swiperOptions }
        },
        [
          _c("swiper-slide", { staticClass: "banner_2" }, [
            _c("div", { staticClass: "banner_overlay" }),
            _vm._v(" "),
            _c("div", { staticClass: "square_1" }, [
              _c("div", { staticClass: "square_2" }, [
                _c("div", { staticClass: "square_3" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "square_4" }, [
              _c("div", { staticClass: "square_5" }, [
                _c("div", { staticClass: "square_6" })
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "banner_2_text text-center animated fadeIn slow" },
              [
                _c("div", { staticClass: "banner_2_imo josefin" }, [
                  _vm._v("Imo State Ministry of Education")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "banner_2_lor" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rem."
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("swiper-slide", { staticClass: "banner_1" }, [
            _c("div", { staticClass: "banner_overlay" }),
            _vm._v(" "),
            _c("div", { staticClass: "circle_1 animated slideInLeft slow" }, [
              _c("img", {
                attrs: { src: "/images/banner1.jpg", alt: "banner" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "circle_2 animated slideInDown slow" }, [
              _c("span", { staticClass: "text" }, [
                _c("span", { staticClass: "education josefin" }, [
                  _vm._v("Education In Imo")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("span", { staticClass: "new josefin" }, [
                  _vm._v("has a New")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("span", { staticClass: "face josefin" }, [_vm._v("Face")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "enroll" },
                  [
                    _c("p", { staticClass: "site rounded-pill" }, [
                      _vm._v("www.imolearncentre.org")
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { staticClass: "mt-4 ", attrs: { to: "/checkout" } },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn bg-white text-blue border-0",
                            attrs: { type: "button" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fa fa-long-arrow-right text-blue pr-2",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(" Enroll Now  ")
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "circle_3 animated slideInRight slow" }, [
              _c("img", {
                attrs: { src: "/images/banner2.jpg", alt: "banner" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-pagination",
            attrs: { slot: "pagination" },
            slot: "pagination"
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=template&id=853a5c3e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/commissioner.vue?vue&type=template&id=853a5c3e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "commissioner" } }, [
      _c("div", { staticClass: "square_1" }, [
        _c("div", { staticClass: "square_2" }, [
          _c("div", { staticClass: "square_3" })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "square_4" }, [
        _c("div", { staticClass: "square_5" }, [
          _c("div", { staticClass: "square_6" })
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("h3", { staticClass: "josefin mb-4 main_header" }, [
          _vm._v("Administration")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "commiss" }, [
          _c("div", { staticClass: "governor box shadow-sm" }, [
            _c("div", { staticClass: "top_header" }, [
              _c("small", [_vm._v("His Excellency")]),
              _vm._v(" "),
              _c("h4", { staticClass: "josefin" }, [
                _vm._v("SEN. HOPE UZODIMMA")
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "josefin " }, [
                _vm._v("Governor, Imo state")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "img" }, [
              _c("img", {
                attrs: { src: "/images/govt.jpeg", alt: "Governor, imo state" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "commissioner box shadow-sm" }, [
            _c("div", { staticClass: "top_header" }, [
              _c("h4", { staticClass: "josefin" }, [
                _vm._v("PROF.B.T.O . IKEGWUOHA")
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "josefin" }, [
                _vm._v("Honorable Commissioner For Education, Imo state")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "img" }, [
              _c("img", {
                attrs: {
                  src: "/images/comm.jpeg",
                  alt: "Commissioner of Education, Imo state"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "perm_sec box shadow-sm" }, [
            _c("div", { staticClass: "top_header" }, [
              _c("h4", { staticClass: "josefin" }, [
                _vm._v("Mrs B.I. Uwandu-Uzoma, Ph.D")
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "josefin" }, [
                _vm._v("Permanent Secretary, Imo state Ministry of Education")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "img" }, [
              _c("img", {
                attrs: {
                  src: "/images/perm.png",
                  alt: "Permanent Secretary, Imo state"
                }
              })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=template&id=76189ee8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/departments.vue?vue&type=template&id=76189ee8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "view" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("h2", { staticClass: "center_header text-center josefin_bold" }, [
        _vm._v("List of Departments")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "main-content mb-5" }, [
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/edc" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "box_2 p-2" }, [
            _vm._v("Exam Development Centre (EDC)")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/Scholarship" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "box_2 p-2" }, [
            _vm._v("Tertiary Unit/Scholarship Board")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/qa" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/science" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "box_2 p-2" }, [
            _vm._v(
              "\n          Science Technical Tertiary Education\n         (STTE)\n        "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/support" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "box_2 p-2" }, [
            _vm._v(
              "\n          Education Support Services Department\n         (ESSD)\n        "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/statistics" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "box_2 p-2" }, [
            _vm._v(
              "\n         Deprtment of Planning Research and Statistics\n        \n        "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/finance" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _vm._m(8)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "holder_1 shadow flex-xs-column" }, [
          _c(
            "div",
            { staticClass: "overlay-blue" },
            [
              _c(
                "router-link",
                { attrs: { to: "/department/edc" } },
                [
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Visit Department")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(9),
          _vm._v(" "),
          _c("div", { staticClass: "box_2 p-2" }, [
            _vm._v(
              "\n          Imo State Basic Education Board\n         (IMSUBEB)\n        "
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/exam.svg", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/scholarship.svg", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/qa.svg", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_2 p-2" }, [
      _vm._v("\n          Quality Assurance "),
      _c("br"),
      _vm._v("\n         (QA)\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/clock.svg", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/technical-support.svg", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/university.svg", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/presentation.svg", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_2 p-2" }, [
      _vm._v("\n          Administration and "),
      _c("br"),
      _vm._v(" Finances\n         \n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box_1" }, [
      _c("img", { attrs: { src: "/images/education.svg", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=template&id=f1242548&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/news.vue?vue&type=template&id=f1242548&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "news" } }, [
    _c("h3", { staticClass: "josefin main_header mb-4" }, [_vm._v("News")]),
    _vm._v(" "),
    _c("div", { staticClass: "news" }, [
      _c("div", { staticClass: "left_box" }, [
        _c(
          "div",
          [
            _c(
              "swiper",
              {
                ref: "mySwiper",
                staticClass: "news_update",
                attrs: { options: _vm.swiperOptions }
              },
              [
                _vm.news.length > 0
                  ? _c("swiper-slide", { staticClass: "slide" }, [
                      _c(
                        "div",
                        {
                          staticClass: "img_container cpointer",
                          on: {
                            click: function($event) {
                              return _vm.gotoNews(_vm.news[0].id)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: _vm.news[0].cover_image, alt: "" }
                          }),
                          _vm._v(" "),
                          _c("h4", { staticClass: "img_text2" }, [
                            _vm._v(_vm._s(_vm.news[0].subject))
                          ])
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.news.length > 1
                  ? _c("swiper-slide", { staticClass: "slide" }, [
                      _c(
                        "div",
                        {
                          staticClass: "img_container cpointer",
                          on: {
                            click: function($event) {
                              return _vm.gotoNews(_vm.news[1].id)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: _vm.news[1].cover_image, alt: "" }
                          }),
                          _vm._v(" "),
                          _c("h4", { staticClass: "img_text2" }, [
                            _vm._v(_vm._s(_vm.news[1].subject))
                          ])
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.news.length > 2
                  ? _c("swiper-slide", { staticClass: "slide" }, [
                      _c(
                        "div",
                        {
                          staticClass: "img_container cpointer",
                          on: {
                            click: function($event) {
                              return _vm.gotoNews(_vm.news[2].id)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: _vm.news[2].cover_image, alt: "" }
                          }),
                          _vm._v(" "),
                          _c("h4", { staticClass: "img_text2" }, [
                            _vm._v(_vm._s(_vm.news[2].subject))
                          ])
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.news.length > 10
                  ? _c("swiper-slide", { staticClass: "slide" }, [
                      _c(
                        "div",
                        {
                          staticClass: "img_container cpointer",
                          on: {
                            click: function($event) {
                              return _vm.gotoNews(_vm.news[10].id)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: _vm.news[10].cover_image, alt: "" }
                          }),
                          _vm._v(" "),
                          _c("h4", { staticClass: "img_text2" }, [
                            _vm._v(_vm._s(_vm.news[10].subject))
                          ])
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.news.length > 11
                  ? _c("swiper-slide", { staticClass: "slide" }, [
                      _c(
                        "div",
                        {
                          staticClass: "img_container cpointer",
                          on: {
                            click: function($event) {
                              return _vm.gotoNews(_vm.news[11].id)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: _vm.news[11].cover_image, alt: "" }
                          }),
                          _vm._v(" "),
                          _c("h4", { staticClass: "img_text2" }, [
                            _vm._v(_vm._s(_vm.news[11].subject))
                          ])
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", {
                  staticClass: "swiper-pagination",
                  attrs: { slot: "pagination" },
                  slot: "pagination"
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right_box" }, [
        _vm.news.length > 3
          ? _c(
              "p",
              {
                on: {
                  click: function($event) {
                    return _vm.gotoNews(_vm.news[3].id)
                  }
                }
              },
              [
                _c("router-link", { attrs: { to: "" } }, [
                  _c("span", [_vm._v(_vm._s(_vm.news[3].subject))]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted cpointer" }, [
                    _vm._v(
                      " -" +
                        _vm._s(
                          _vm._f("moment")(new Date(), "ddd, MMM D YYYY")
                        ) +
                        " "
                    )
                  ])
                ])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.news.length > 4
          ? _c(
              "p",
              {
                on: {
                  click: function($event) {
                    return _vm.gotoNews(_vm.news[4].id)
                  }
                }
              },
              [
                _c("router-link", { attrs: { to: "" } }, [
                  _c("span", [_vm._v(_vm._s(_vm.news[4].subject))]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted cpointer" }, [
                    _vm._v(
                      " - " +
                        _vm._s(
                          _vm._f("moment")(new Date(), "ddd, MMM D YYYY")
                        ) +
                        " "
                    )
                  ])
                ])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.news.length > 5
          ? _c(
              "p",
              {
                on: {
                  click: function($event) {
                    return _vm.gotoNews(_vm.news[5].id)
                  }
                }
              },
              [
                _c("router-link", { attrs: { to: "" } }, [
                  _c("span", [_vm._v(_vm._s(_vm.news[5].subject))]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted cpointer" }, [
                    _vm._v(
                      " -" +
                        _vm._s(
                          _vm._f("moment")(new Date(), "ddd, MMM D YYYY")
                        ) +
                        " "
                    )
                  ])
                ])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.news.length > 6
          ? _c(
              "p",
              {
                on: {
                  click: function($event) {
                    return _vm.gotoNews(_vm.news[6].id)
                  }
                }
              },
              [
                _c("router-link", { attrs: { to: "" } }, [
                  _c("span", [_vm._v(_vm._s(_vm.news[6].subject))]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted cpointer" }, [
                    _vm._v(
                      "- " +
                        _vm._s(
                          _vm._f("moment")(new Date(), "ddd, MMM D YYYY")
                        ) +
                        " "
                    )
                  ])
                ])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.news.length > 7
          ? _c(
              "small",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "d-flex align-items-center",
                    attrs: { to: "/blog" }
                  },
                  [
                    _c("span", [
                      _vm._v("\n            View all news\n            "),
                      _c("i", {
                        staticClass: "fa fa-angle-double-right",
                        attrs: { "aria-hidden": "true" }
                      })
                    ])
                  ]
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "sub_news" }, [
          _vm.news.length > 7
            ? _c(
                "div",
                {
                  staticClass: "news_container cpointer",
                  on: {
                    click: function($event) {
                      return _vm.gotoNews(_vm.news[7].id)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "news_img" }, [
                    _c("img", {
                      staticClass: "rounded",
                      attrs: { src: _vm.news[7].cover_image, alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "news_title" }, [
                    _vm._v(_vm._s(_vm.news[7].subject))
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.news.length > 8
            ? _c(
                "div",
                {
                  staticClass: "news_container cpointer",
                  on: {
                    click: function($event) {
                      return _vm.gotoNews(_vm.news[8].id)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "news_img" }, [
                    _c("img", {
                      staticClass: "rounded",
                      attrs: { src: _vm.news[8].cover_image, alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "news_title" }, [
                    _vm._v(_vm._s(_vm.news[8].subject))
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.news.length > 9
            ? _c(
                "div",
                {
                  staticClass: "news_container cpointer",
                  on: {
                    click: function($event) {
                      return _vm.gotoNews(_vm.news[9].id)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "news_img" }, [
                    _c("img", {
                      staticClass: "rounded",
                      attrs: { src: _vm.news[9].cover_image, alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "news_title" }, [
                    _vm._v(_vm._s(_vm.news[9].subject))
                  ])
                ]
              )
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "initiatives" },
    [
      _c("h3", { staticClass: "josefin ini_head main_header mb-5" }, [
        _vm._v("Directories")
      ]),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _c(
            "b-row",
            { staticClass: "mb-5" },
            [
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "mb-2 shadow-sm",
                      staticStyle: { "max-width": "20rem" },
                      attrs: { tag: "article" },
                      scopedSlots: _vm._u([
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/directory/listings/waec-candidates"
                                  }
                                },
                                [
                                  _c("strong", [_vm._v("WAEC Candidates")]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("small", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "List of principals & schools with WAEC candidates for 2020 Academic Year"
                                    )
                                  ])
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mb-2" },
                        [
                          _c("b-avatar", {
                            staticClass: "ava",
                            attrs: { src: "/images/waec.jpg", size: "8rem" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "mb-2  shadow-sm",
                      staticStyle: { "max-width": "20rem" },
                      attrs: { tag: "article" },
                      scopedSlots: _vm._u([
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/directory/listings/wassce-schools"
                                  }
                                },
                                [
                                  _c("strong", [
                                    _vm._v("WASSCE School candidates")
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v(
                                      "WASSCE of School candidates, 2020; List of Private Schools in Imo State"
                                    )
                                  ])
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mb-2" },
                        [
                          _c("b-avatar", {
                            staticClass: "ava",
                            attrs: { src: "/images/wassce.jpg", size: "8rem" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "mb-2  shadow-sm",
                      staticStyle: { "max-width": "20rem" },
                      attrs: { tag: "article" },
                      scopedSlots: _vm._u([
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c(
                                "router-link",
                                {
                                  attrs: { to: "/directory/listings/approved" }
                                },
                                [
                                  _c("strong", [
                                    _vm._v("Approved Private Schools")
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v(
                                      "Approved List Of Private Schools From UBSE Department"
                                    )
                                  ])
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mb-2" },
                        [
                          _c("b-avatar", {
                            staticClass: "ava",
                            attrs: { src: "/images/approved.jpg", size: "8rem" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "mb-2  shadow-sm",
                      staticStyle: { "max-width": "20rem" },
                      attrs: { tag: "article" },
                      scopedSlots: _vm._u([
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/directory/listings/principals"
                                  }
                                },
                                [
                                  _c("strong", [
                                    _vm._v("Principal Informations")
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v(
                                      "List of Principals and Phone Numbers"
                                    )
                                  ])
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mb-2" },
                        [
                          _c("b-avatar", {
                            staticClass: "ava",
                            attrs: {
                              src: "/images/principal1.jpg",
                              size: "8rem"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "mb-2  shadow-sm",
                      staticStyle: { "max-width": "20rem" },
                      attrs: { tag: "article" },
                      scopedSlots: _vm._u([
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c(
                                "router-link",
                                {
                                  attrs: { to: "/directory/listings/transfers" }
                                },
                                [
                                  _c("strong", [_vm._v("Transfer Lists")]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v(
                                      "Proposed list of Transferred Principals"
                                    )
                                  ])
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mb-2" },
                        [
                          _c("b-avatar", {
                            staticClass: "ava",
                            attrs: { src: "/images/transfer.jpg", size: "8rem" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "mb-2  shadow-sm",
                      staticStyle: { "max-width": "20rem" },
                      attrs: { tag: "article" },
                      scopedSlots: _vm._u([
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c(
                                "router-link",
                                { attrs: { to: "/directory/schools" } },
                                [
                                  _c("strong", [_vm._v("Schools Lists")]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v("General list of  Schools")
                                  ])
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mb-2" },
                        [
                          _c("b-avatar", {
                            staticClass: "ava",
                            attrs: { src: "/images/schooll.jpg", size: "8rem" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "organizations" } }, [
    _c("h3", { staticClass: "josefin ini_head main_header mb-4" }, [
      _vm._v("Our Organizations")
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "marquee-text",
          { staticClass: "organizations", attrs: { repeat: 3 } },
          [
            _c("div", { staticClass: "org2" }, [
              _c("div", { staticClass: "org1" }, [
                _c("img", { attrs: { src: "/images/imsu.jpg", alt: "" } }),
                _vm._v(" "),
                _c("div", { staticClass: "info" }, [
                  _c("p", [_vm._v("IMSUBEB")])
                ])
              ])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=template&id=4f7985db&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/polls.vue?vue&type=template&id=4f7985db&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "polls" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "my-poll z" }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "affiliates shadow-sm tab" },
        [
          _c("router-link", { attrs: { to: "/directory" } }, [
            _c("div", { staticClass: "fa-stack icon" }, [
              _c("i", {
                staticClass: "fa fa-circle fa-stack-2x mc1",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("i", {
                staticClass: "fas fa-folder-open fa-stack-1x text-white",
                attrs: { "aria-hidden": "true" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: "/directory" } }, [
            _c("h4", { staticClass: "josefin text-white" }, [
              _vm._v("Directory")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "z ", staticStyle: { "padding-left": "15px" } },
      [
        _c("h3", { staticClass: "josefin mb-4 main_header" }, [
          _vm._v("Administrative")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "newsletter shadow-sm tab" }, [
      _c("div", { staticClass: "fa-stack icon" }, [
        _c("i", {
          staticClass: "fa fa-circle fa-stack-2x mc1 ",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "fas fa-list-alt fa-stack-1x  text-white",
          attrs: { "aria-hidden": "true" }
        })
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "josefin text-white" }, [_vm._v("Applications")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "opinions shadow-sm tab" }, [
      _c("div", { staticClass: "fa-stack icon" }, [
        _c("i", {
          staticClass: "fa fa-circle fa-stack-2x mc1",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "fas fa-credit-card fa-stack-1x  text-white",
          attrs: { "aria-hidden": "true" }
        })
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "josefin text-white" }, [_vm._v("Payments")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2ac2c897___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2ac2c897& */ "./resources/js/components/index.vue?vue&type=template&id=2ac2c897&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2ac2c897___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2ac2c897___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/index.vue?vue&type=template&id=2ac2c897&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/index.vue?vue&type=template&id=2ac2c897& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ac2c897___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2ac2c897& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=template&id=2ac2c897&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ac2c897___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ac2c897___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/homeComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/homeComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeComponent_vue_vue_type_template_id_fd967750_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeComponent.vue?vue&type=template&id=fd967750&scoped=true& */ "./resources/js/components/pages/homeComponent.vue?vue&type=template&id=fd967750&scoped=true&");
/* harmony import */ var _homeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/homeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _homeComponent_vue_vue_type_style_index_0_id_fd967750_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css& */ "./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _homeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeComponent_vue_vue_type_template_id_fd967750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeComponent_vue_vue_type_template_id_fd967750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fd967750",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/homeComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/homeComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/homeComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_style_index_0_id_fd967750_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=style&index=0&id=fd967750&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_style_index_0_id_fd967750_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_style_index_0_id_fd967750_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_style_index_0_id_fd967750_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_style_index_0_id_fd967750_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_style_index_0_id_fd967750_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/homeComponent.vue?vue&type=template&id=fd967750&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/homeComponent.vue?vue&type=template&id=fd967750&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_template_id_fd967750_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeComponent.vue?vue&type=template&id=fd967750&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeComponent.vue?vue&type=template&id=fd967750&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_template_id_fd967750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeComponent_vue_vue_type_template_id_fd967750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/announcement.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/user/announcement.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _announcement_vue_vue_type_template_id_bdcf5660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement.vue?vue&type=template&id=bdcf5660&scoped=true& */ "./resources/js/components/user/announcement.vue?vue&type=template&id=bdcf5660&scoped=true&");
/* harmony import */ var _announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement.vue?vue&type=script&lang=js& */ "./resources/js/components/user/announcement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _announcement_vue_vue_type_style_index_0_id_bdcf5660_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss& */ "./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _announcement_vue_vue_type_template_id_bdcf5660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _announcement_vue_vue_type_template_id_bdcf5660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bdcf5660",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/announcement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/announcement.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user/announcement.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_style_index_0_id_bdcf5660_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=style&index=0&id=bdcf5660&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_style_index_0_id_bdcf5660_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_style_index_0_id_bdcf5660_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_style_index_0_id_bdcf5660_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_style_index_0_id_bdcf5660_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_style_index_0_id_bdcf5660_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/announcement.vue?vue&type=template&id=bdcf5660&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/user/announcement.vue?vue&type=template&id=bdcf5660&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_template_id_bdcf5660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcement.vue?vue&type=template&id=bdcf5660&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/announcement.vue?vue&type=template&id=bdcf5660&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_template_id_bdcf5660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcement_vue_vue_type_template_id_bdcf5660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/banner.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user/banner.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner_vue_vue_type_template_id_4d3d74f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.vue?vue&type=template&id=4d3d74f5&scoped=true& */ "./resources/js/components/user/banner.vue?vue&type=template&id=4d3d74f5&scoped=true&");
/* harmony import */ var _banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.vue?vue&type=script&lang=js& */ "./resources/js/components/user/banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _banner_vue_vue_type_style_index_0_id_4d3d74f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css& */ "./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _banner_vue_vue_type_template_id_4d3d74f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _banner_vue_vue_type_template_id_4d3d74f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d3d74f5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/banner.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user/banner.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_4d3d74f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=style&index=0&id=4d3d74f5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_4d3d74f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_4d3d74f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_4d3d74f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_4d3d74f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_4d3d74f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/banner.vue?vue&type=template&id=4d3d74f5&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user/banner.vue?vue&type=template&id=4d3d74f5&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_template_id_4d3d74f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=template&id=4d3d74f5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/banner.vue?vue&type=template&id=4d3d74f5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_template_id_4d3d74f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_template_id_4d3d74f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/commissioner.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/user/commissioner.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commissioner_vue_vue_type_template_id_853a5c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commissioner.vue?vue&type=template&id=853a5c3e&scoped=true& */ "./resources/js/components/user/commissioner.vue?vue&type=template&id=853a5c3e&scoped=true&");
/* harmony import */ var _commissioner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commissioner.vue?vue&type=script&lang=js& */ "./resources/js/components/user/commissioner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _commissioner_vue_vue_type_style_index_0_id_853a5c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css& */ "./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _commissioner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _commissioner_vue_vue_type_template_id_853a5c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _commissioner_vue_vue_type_template_id_853a5c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "853a5c3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/commissioner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/commissioner.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user/commissioner.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./commissioner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_style_index_0_id_853a5c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=style&index=0&id=853a5c3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_style_index_0_id_853a5c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_style_index_0_id_853a5c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_style_index_0_id_853a5c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_style_index_0_id_853a5c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_style_index_0_id_853a5c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/commissioner.vue?vue&type=template&id=853a5c3e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/user/commissioner.vue?vue&type=template&id=853a5c3e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_template_id_853a5c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./commissioner.vue?vue&type=template&id=853a5c3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/commissioner.vue?vue&type=template&id=853a5c3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_template_id_853a5c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commissioner_vue_vue_type_template_id_853a5c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/departments.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/user/departments.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _departments_vue_vue_type_template_id_76189ee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departments.vue?vue&type=template&id=76189ee8&scoped=true& */ "./resources/js/components/user/departments.vue?vue&type=template&id=76189ee8&scoped=true&");
/* harmony import */ var _departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departments.vue?vue&type=script&lang=js& */ "./resources/js/components/user/departments.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _departments_vue_vue_type_style_index_0_id_76189ee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css& */ "./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _departments_vue_vue_type_template_id_76189ee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _departments_vue_vue_type_template_id_76189ee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "76189ee8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/departments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/departments.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/user/departments.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./departments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_style_index_0_id_76189ee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=style&index=0&id=76189ee8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_style_index_0_id_76189ee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_style_index_0_id_76189ee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_style_index_0_id_76189ee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_style_index_0_id_76189ee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_style_index_0_id_76189ee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/departments.vue?vue&type=template&id=76189ee8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/user/departments.vue?vue&type=template&id=76189ee8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_template_id_76189ee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./departments.vue?vue&type=template&id=76189ee8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/departments.vue?vue&type=template&id=76189ee8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_template_id_76189ee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_template_id_76189ee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/news.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/user/news.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_vue_vue_type_template_id_f1242548_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue?vue&type=template&id=f1242548&scoped=true& */ "./resources/js/components/user/news.vue?vue&type=template&id=f1242548&scoped=true&");
/* harmony import */ var _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.vue?vue&type=script&lang=js& */ "./resources/js/components/user/news.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _news_vue_vue_type_style_index_0_id_f1242548_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css& */ "./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_vue_vue_type_template_id_f1242548_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _news_vue_vue_type_template_id_f1242548_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f1242548",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/news.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/news.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/user/news.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./news.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_f1242548_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=style&index=0&id=f1242548&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_f1242548_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_f1242548_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_f1242548_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_f1242548_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_f1242548_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/news.vue?vue&type=template&id=f1242548&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/user/news.vue?vue&type=template&id=f1242548&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_template_id_f1242548_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./news.vue?vue&type=template&id=f1242548&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/news.vue?vue&type=template&id=f1242548&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_template_id_f1242548_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_template_id_f1242548_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/ourInitiatives.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/user/ourInitiatives.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ourInitiatives_vue_vue_type_template_id_441a8b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true& */ "./resources/js/components/user/ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true&");
/* harmony import */ var _ourInitiatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourInitiatives.vue?vue&type=script&lang=js& */ "./resources/js/components/user/ourInitiatives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ourInitiatives_vue_vue_type_style_index_0_id_441a8b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css& */ "./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ourInitiatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ourInitiatives_vue_vue_type_template_id_441a8b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ourInitiatives_vue_vue_type_template_id_441a8b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "441a8b78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/ourInitiatives.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/ourInitiatives.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/user/ourInitiatives.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ourInitiatives.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_style_index_0_id_441a8b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=style&index=0&id=441a8b78&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_style_index_0_id_441a8b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_style_index_0_id_441a8b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_style_index_0_id_441a8b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_style_index_0_id_441a8b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_style_index_0_id_441a8b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/user/ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_template_id_441a8b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourInitiatives.vue?vue&type=template&id=441a8b78&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_template_id_441a8b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ourInitiatives_vue_vue_type_template_id_441a8b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/ourOrganizations.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/user/ourOrganizations.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ourOrganizations_vue_vue_type_template_id_1e824386_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true& */ "./resources/js/components/user/ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true&");
/* harmony import */ var _ourOrganizations_vue_vue_type_style_index_0_id_1e824386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css& */ "./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _ourOrganizations_vue_vue_type_template_id_1e824386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ourOrganizations_vue_vue_type_template_id_1e824386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e824386",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/ourOrganizations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_style_index_0_id_1e824386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourOrganizations.vue?vue&type=style&index=0&id=1e824386&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_style_index_0_id_1e824386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_style_index_0_id_1e824386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_style_index_0_id_1e824386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_style_index_0_id_1e824386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_style_index_0_id_1e824386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/user/ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_template_id_1e824386_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ourOrganizations.vue?vue&type=template&id=1e824386&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_template_id_1e824386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ourOrganizations_vue_vue_type_template_id_1e824386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/polls.vue":
/*!************************************************!*\
  !*** ./resources/js/components/user/polls.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polls_vue_vue_type_template_id_4f7985db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polls.vue?vue&type=template&id=4f7985db&scoped=true& */ "./resources/js/components/user/polls.vue?vue&type=template&id=4f7985db&scoped=true&");
/* harmony import */ var _polls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polls.vue?vue&type=script&lang=js& */ "./resources/js/components/user/polls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _polls_vue_vue_type_style_index_0_id_4f7985db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css& */ "./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _polls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _polls_vue_vue_type_template_id_4f7985db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _polls_vue_vue_type_template_id_4f7985db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f7985db",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/polls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/polls.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/user/polls.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./polls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_style_index_0_id_4f7985db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=style&index=0&id=4f7985db&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_style_index_0_id_4f7985db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_style_index_0_id_4f7985db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_style_index_0_id_4f7985db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_style_index_0_id_4f7985db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_style_index_0_id_4f7985db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/polls.vue?vue&type=template&id=4f7985db&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/polls.vue?vue&type=template&id=4f7985db&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_template_id_4f7985db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./polls.vue?vue&type=template&id=4f7985db&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/polls.vue?vue&type=template&id=4f7985db&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_template_id_4f7985db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_polls_vue_vue_type_template_id_4f7985db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);