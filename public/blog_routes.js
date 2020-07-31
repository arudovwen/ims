(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog_routes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/blog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/navigation.vue */ "./resources/js/components/navigation/navigation.vue");
/* harmony import */ var _scrollTopComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scrollTopComponent */ "./resources/js/components/scrollTopComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      show: true,
      category: "",
      feature: [],
      news: [],
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      total_news: 0
    };
  },
  components: {
    Navigation: _navigation_navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    scrollTop: _scrollTopComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getFeaturedNews();
    this.getNews();
  },
  methods: {
    getNews: function getNews() {
      var _this = this;

      axios.get("/api/get-normal-news").then(function (res) {
        if (res.status == 200) {
          _this.news = res.data.data.filter(function (item) {
            return item.status == "active";
          });
          _this.show = false;
        }
      });
    },
    getFeaturedNews: function getFeaturedNews() {
      var _this2 = this;

      axios.get("/api/get-featured-news").then(function (res) {
        if (res.status == 200) {
          _this2.feature = res.data;
          _this2.show = false;
        }
      });
    },
    next: function next() {
      var _this3 = this;

      if (this.next_page) {
        axios.get(this.next_page).then(function (res) {
          _this3.next_page = res.data.next_page_url;
          _this3.prev_page = res.data.prev_page_url;
          _this3.current_page = res.data.current_page;
          _this3.news = res.data.data.filter(function (item) {
            return item.status == "active";
          });
        });
      }
    },
    prev: function prev() {
      var _this4 = this;

      if (this.prev_page) {
        axios.get(this.prev_page).then(function (res) {
          _this4.next_page = res.data.next_page_url;
          _this4.prev_page = res.data.prev_page_url;
          _this4.current_page = res.data.current_page;
          _this4.news = res.data.data.filter(function (item) {
            return item.status == "active";
          });
        });
      }
    }
  },
  computed: {
    basic: function basic() {
      var _this5 = this;

      return this.news.filter(function (item) {
        if (_this5.category.toLowerCase() == item.category.toLowerCase()) {
          return item;
        }

        if (_this5.category.toLowerCase() == "") {
          return item;
        }
      });
    },
    featured: function featured() {
      var _this6 = this;

      return this.news.filter(function (item) {
        if (_this6.category.toLowerCase() == item.category.toLowerCase()) {
          return item;
        }

        if (_this6.category.toLowerCase() == "") {
          return item;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/readBlog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: {},
      show: true
    };
  },
  mounted: function mounted() {
    this.getNews();
  },
  methods: {
    getNews: function getNews() {
      var _this = this;

      axios.get("/api/get-new/".concat(this.$route.params.id)).then(function (res) {
        if (res.status == 200) {
          _this.content = res.data;
          _this.show = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/readAnnouncement.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: {},
      show: true
    };
  },
  mounted: function mounted() {
    this.getAnnouncement();
  },
  methods: {
    getAnnouncement: function getAnnouncement() {
      var _this = this;

      axios.get("/api/current-a").then(function (res) {
        if (res.status == 200) {
          _this.content = res.data[0];
          _this.show = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#main-content[data-v-c64745d0] {\n  font-size: 16px;\n  margin-top: 30px;\n}\n.bg-dark-50[data-v-c64745d0] {\n  background: rgba(0, 0, 0, 0.6);\n}\n.jumbotron[data-v-c64745d0] {\n  background-size: cover;\n}\n.bd-placeholder-img[data-v-c64745d0] {\n  width: 100%;\n}\n.feat[data-v-c64745d0] {\n  height: 500px;\n  overflow: hidden;\n}\n.lead[data-v-c64745d0] {\n  height: 35px;\n  overflow: hidden;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  line-clamp: 3;\n  -webkit-line-clamp: 3;\n  -o-line-clamp: 3;\n  -ms-line-clamp: 3;\n  -moz-line-clamp: 3;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n.news_content[data-v-c64745d0] {\n  max-height: 200px;\n  overflow: hidden;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  line-clamp: 15;\n  -webkit-line-clamp: 15;\n  -o-line-clamp: 15;\n  -ms-line-clamp: 15;\n  -moz-line-clamp: 15;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n.blog-post[data-v-c64745d0] {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-fluid[data-v-414f05ce] {\n  background: #f7f8fa;\n}\n.header__[data-v-414f05ce] {\n  width: 80%;\n  margin: 0 auto;\n  background: #ffffff;\n  padding: 50px 20px 0;\n}\n.main[data-v-414f05ce] {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  background: #ffffff;\n  padding: 20px;\n  overflow: hidden;\n}\n.cover[data-v-414f05ce],\n.content[data-v-414f05ce],\n.about[data-v-414f05ce] {\n  width: 100%;\n  text-align: left;\n}\n.cover[data-v-414f05ce] {\n  background-size: cover;\n  height: 400px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media (max-width: 768px) {\n.main[data-v-414f05ce] {\n    width: 100%;\n}\n.header__[data-v-414f05ce] {\n    width: 100%;\n}\n}\n@media (max-width: 425px) {\n.container-fluid[data-v-414f05ce]{\n    padding: 0;\n}\n.cover[data-v-414f05ce]{\n    height: 200px;\n    background-size: contain;\n    margin-bottom: 20px;\n}\nh2[data-v-414f05ce]{\n  font-size: 22px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-fluid[data-v-34d86606] {\n  background: #f7f8fa;\n}\n.header__[data-v-34d86606] {\n  width: 80%;\n  margin: 0 auto;\n  background: #ffffff;\n  padding: 50px 20px 0;\n}\n.main[data-v-34d86606] {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  background: #ffffff;\n  padding: 20px;\n  overflow: hidden;\n}\n.cover[data-v-34d86606],\n.content[data-v-34d86606],\n.about[data-v-34d86606] {\n  width: 100%;\n  text-align: left;\n}\n.cover[data-v-34d86606] {\n  background-size: cover;\n  height: 400px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media (max-width: 768px) {\n.main[data-v-34d86606] {\n    width: 100%;\n}\n.header__[data-v-34d86606] {\n    width: 100%;\n}\n}\n@media (max-width: 425px) {\n.container-fluid[data-v-34d86606]{\n    padding: 0;\n}\n.cover[data-v-34d86606]{\n    height: 200px;\n    background-size: contain;\n    margin-bottom: 20px;\n}\nh2[data-v-34d86606]{\n  font-size: 22px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=template&id=c64745d0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/blog.vue?vue&type=template&id=c64745d0&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("scrollTop"),
      _vm._v(" "),
      _c("Navigation"),
      _vm._v(" "),
      _c(
        "b-overlay",
        {
          attrs: { show: _vm.show, rounded: "sm" },
          scopedSlots: _vm._u([
            {
              key: "overlay",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("b-icon", {
                        attrs: {
                          icon: "stopwatch",
                          "font-scale": "3",
                          animation: "cylon"
                        }
                      }),
                      _vm._v(" "),
                      _c("p", { attrs: { id: "cancel-label" } }, [
                        _vm._v("Please wait...")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          ref: "cancel",
                          attrs: {
                            variant: "outline-danger",
                            size: "sm",
                            "aria-describedby": "cancel-label"
                          },
                          on: {
                            click: function($event) {
                              _vm.show = false
                            }
                          }
                        },
                        [_vm._v("Loading")]
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c("div", { attrs: { id: "main-content" } }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "nav-scroller py-1 mb-2" }, [
                _c(
                  "nav",
                  { staticClass: "nav d-flex justify-content-between" },
                  [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "" },
                          domProps: { checked: _vm._q(_vm.category, "") },
                          on: {
                            change: function($event) {
                              _vm.category = ""
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("All")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "World" },
                          domProps: { checked: _vm._q(_vm.category, "World") },
                          on: {
                            change: function($event) {
                              _vm.category = "World"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("World")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Nigeria" },
                          domProps: {
                            checked: _vm._q(_vm.category, "Nigeria")
                          },
                          on: {
                            change: function($event) {
                              _vm.category = "Nigeria"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Nigeria")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Imo" },
                          domProps: { checked: _vm._q(_vm.category, "Imo") },
                          on: {
                            change: function($event) {
                              _vm.category = "Imo"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Imo")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Technology" },
                          domProps: {
                            checked: _vm._q(_vm.category, "Technology")
                          },
                          on: {
                            change: function($event) {
                              _vm.category = "Technology"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Technology")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Design" },
                          domProps: { checked: _vm._q(_vm.category, "Design") },
                          on: {
                            change: function($event) {
                              _vm.category = "Design"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Design")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Culture" },
                          domProps: {
                            checked: _vm._q(_vm.category, "Culture")
                          },
                          on: {
                            change: function($event) {
                              _vm.category = "Culture"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Culture")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Business" },
                          domProps: {
                            checked: _vm._q(_vm.category, "Business")
                          },
                          on: {
                            change: function($event) {
                              _vm.category = "Business"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Business")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Politics" },
                          domProps: {
                            checked: _vm._q(_vm.category, "Politics")
                          },
                          on: {
                            change: function($event) {
                              _vm.category = "Politics"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Politics")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Opinion" },
                          domProps: {
                            checked: _vm._q(_vm.category, "Opinion")
                          },
                          on: {
                            change: function($event) {
                              _vm.category = "Opinion"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Opinion")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Science" },
                          domProps: {
                            checked: _vm._q(_vm.category, "Science")
                          },
                          on: {
                            change: function($event) {
                              _vm.category = "Science"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Science")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Health" },
                          domProps: { checked: _vm._q(_vm.category, "Health") },
                          on: {
                            change: function($event) {
                              _vm.category = "Health"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Health")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Travel" },
                          domProps: { checked: _vm._q(_vm.category, "Travel") },
                          on: {
                            change: function($event) {
                              _vm.category = "Travel"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "custom-control-indicator text-muted cpointer"
                          },
                          [_vm._v("Travel")]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.featured.length
                ? _c(
                    "div",
                    {
                      staticClass:
                        "jumbotron p-4 p-md-5 text-white rounded bg-dark",
                      style: {
                        "background-image":
                          "url(" + _vm.featured[0].cover_image + ")"
                      }
                    },
                    [
                      _c("div", { staticClass: "col-md-8 p-2 bg-dark-50" }, [
                        _c("h2", { staticClass: "josefin_bold" }, [
                          _vm._v(_vm._s(_vm.featured[0].subject))
                        ]),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "lead my-3",
                          domProps: {
                            innerHTML: _vm._s(_vm.featured[0].content)
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "lead mb-0" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "text-white font-weight-bold",
                                attrs: {
                                  to: {
                                    name: "NewsBlog",
                                    params: {
                                      id: _vm.featured[0].id
                                    }
                                  }
                                }
                              },
                              [_vm._v("Continue reading...")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.featured.length
                ? _c("div", { staticClass: "row mb-2" }, [
                    _vm.featured.length > 1
                      ? _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col p-4 d-flex flex-column position-static"
                                },
                                [
                                  _c(
                                    "strong",
                                    {
                                      staticClass:
                                        "d-inline-block mb-2 text-primary"
                                    },
                                    [_vm._v(_vm._s(_vm.featured[1].category))]
                                  ),
                                  _vm._v(" "),
                                  _c("h4", { staticClass: "mb-0" }, [
                                    _vm._v(_vm._s(_vm.featured[1].subject))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 text-muted" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("moment")(
                                            _vm.featured[1].created_at,
                                            "DD MMMM"
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", {
                                    staticClass: "card-text mb-auto feat",
                                    domProps: {
                                      innerHTML: _vm._s(_vm.featured[1].content)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "stretched-link",
                                      attrs: {
                                        to: {
                                          name: "NewsBlog",
                                          params: {
                                            id: _vm.featured[1].id
                                          }
                                        }
                                      }
                                    },
                                    [_vm._v("Continue reading")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.featured.length > 2
                      ? _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col p-4 d-flex flex-column position-static"
                                },
                                [
                                  _c(
                                    "strong",
                                    {
                                      staticClass:
                                        "d-inline-block mb-2 text-primary"
                                    },
                                    [_vm._v(_vm._s(_vm.featured[2].category))]
                                  ),
                                  _vm._v(" "),
                                  _c("h4", { staticClass: "mb-0" }, [
                                    _vm._v(_vm._s(_vm.featured[2].subject))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 text-muted" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("moment")(
                                            _vm.featured[2].created_at,
                                            "DD MMMM"
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", {
                                    staticClass: "card-text mb-auto feat",
                                    domProps: {
                                      innerHTML: _vm._s(_vm.featured[2].content)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "stretched-link",
                                      attrs: {
                                        to: {
                                          name: "NewsBlog",
                                          params: {
                                            id: _vm.featured[2].id
                                          }
                                        }
                                      }
                                    },
                                    [_vm._v("Continue reading")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("main", { staticClass: "container", attrs: { role: "main" } }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-8 blog-main" },
                  [
                    _c(
                      "h3",
                      { staticClass: "pb-4 mb-4 font-italic border-bottom" },
                      [_vm._v("From the Media")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.basic, function(item, idx) {
                      return _c(
                        "div",
                        { key: idx, staticClass: "blog-post" },
                        [
                          _c("h2", { staticClass: "blog-post-title" }, [
                            _vm._v(_vm._s(item.subject))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "blog-post-meta" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(
                                  _vm._f("moment")(item.created_at, "DD MMMM")
                                ) +
                                ", by\n                "
                            ),
                            _c("small", [_vm._v(_vm._s(item.author))])
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "news_content",
                            domProps: { innerHTML: _vm._s(item.content) }
                          }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "stretched-link",
                              attrs: {
                                to: {
                                  name: "NewsBlog",
                                  params: {
                                    id: item.id
                                  }
                                }
                              }
                            },
                            [_vm._v("Continue reading")]
                          )
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _vm.basic.length > 15
                      ? _c("nav", { staticClass: "blog-pagination mb-3" }, [
                          _c(
                            "div",
                            {
                              staticClass: "btn btn-outline-primary",
                              on: { click: _vm.prev }
                            },
                            [_vm._v("Older")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "btn btn-outline-secondary disabled",
                              on: { click: _vm.next }
                            },
                            [_vm._v("Newer")]
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c("aside", { staticClass: "col-md-4 blog-sidebar" }, [
                  _c("div", { staticClass: "p-4 mb-3 bg-light rounded" }, [
                    _c("h4", { staticClass: "font-italic" }, [_vm._v("About")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Get the latest news, information, gist from all around the world, Nigeria , Imo state, get information about culture, technology, design, business and so much more today."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-4" }, [
                    _c("h4", { staticClass: "font-italic" }, [
                      _vm._v("Archives")
                    ]),
                    _vm._v(" "),
                    _c("ol", { staticClass: "list-unstyled mb-0" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("March 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("February 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("January 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("December 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("November 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("October 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("September 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("August 2020")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("July 2020")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("June 2020")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("May 2020")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("April 2020")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-4" }, [
                    _c("h4", { staticClass: "font-italic" }, [
                      _vm._v("Elsewhere")
                    ]),
                    _vm._v(" "),
                    _c("ol", { staticClass: "list-unstyled" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("GitHub")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Twitter")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Facebook")])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=template&id=414f05ce&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/readBlog.vue?vue&type=template&id=414f05ce&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "b-overlay",
    {
      attrs: { show: _vm.show, rounded: "sm" },
      scopedSlots: _vm._u([
        {
          key: "overlay",
          fn: function() {
            return [
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c("b-icon", {
                    attrs: {
                      icon: "stopwatch",
                      "font-scale": "3",
                      animation: "cylon"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", { attrs: { id: "cancel-label" } }, [
                    _vm._v("Please wait...")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      ref: "cancel",
                      attrs: {
                        variant: "outline-danger",
                        size: "sm",
                        "aria-describedby": "cancel-label"
                      },
                      on: {
                        click: function($event) {
                          _vm.show = false
                        }
                      }
                    },
                    [_vm._v("Loading")]
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c("div", { staticClass: "container-fluid" }, [
        _c("h2", { staticClass: "header__ text-center" }, [
          _vm._v(_vm._s(_vm.content.subject))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main" }, [
          _c("div", {
            staticClass: "cover",
            style: {
              "background-image": "url(" + _vm.content.cover_image + ")"
            }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "content",
            domProps: { innerHTML: _vm._s(_vm.content.content) }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "about" }, [
            _c("div", [
              _c("p", { staticClass: "blog-post-meta" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(
                      _vm._f("moment")(_vm.content.created_at, "DD MMMM")
                    ) +
                    ", by\n          "
                ),
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v(_vm._s(_vm.content.author))
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true& ***!
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
  return _c(
    "b-overlay",
    {
      attrs: { show: _vm.show, rounded: "sm" },
      scopedSlots: _vm._u([
        {
          key: "overlay",
          fn: function() {
            return [
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c("b-icon", {
                    attrs: {
                      icon: "stopwatch",
                      "font-scale": "3",
                      animation: "cylon"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", { attrs: { id: "cancel-label" } }, [
                    _vm._v("Please wait...")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      ref: "cancel",
                      attrs: {
                        variant: "outline-danger",
                        size: "sm",
                        "aria-describedby": "cancel-label"
                      },
                      on: {
                        click: function($event) {
                          _vm.show = false
                        }
                      }
                    },
                    [_vm._v("Loading")]
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c("div", { staticClass: "container-fluid" }, [
        _c("h2", { staticClass: "header__ text-center" }, [
          _vm._v(_vm._s(_vm.content.subject))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main" }, [
          _c("div", {
            staticClass: "cover",
            style: {
              "background-image": "url(" + _vm.content.cover_image + ")"
            }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "content",
            domProps: { innerHTML: _vm._s(_vm.content.content) }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "about" })
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/blog.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/blog.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_vue_vue_type_template_id_c64745d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.vue?vue&type=template&id=c64745d0&scoped=true& */ "./resources/js/components/pages/blog.vue?vue&type=template&id=c64745d0&scoped=true&");
/* harmony import */ var _blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _blog_vue_vue_type_style_index_0_id_c64745d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css& */ "./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _blog_vue_vue_type_template_id_c64745d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _blog_vue_vue_type_template_id_c64745d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c64745d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/blog.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/blog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_c64745d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=style&index=0&id=c64745d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_c64745d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_c64745d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_c64745d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_c64745d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_c64745d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/blog.vue?vue&type=template&id=c64745d0&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/blog.vue?vue&type=template&id=c64745d0&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_c64745d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./blog.vue?vue&type=template&id=c64745d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/blog.vue?vue&type=template&id=c64745d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_c64745d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_c64745d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/readBlog.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/readBlog.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _readBlog_vue_vue_type_template_id_414f05ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./readBlog.vue?vue&type=template&id=414f05ce&scoped=true& */ "./resources/js/components/pages/readBlog.vue?vue&type=template&id=414f05ce&scoped=true&");
/* harmony import */ var _readBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readBlog.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/readBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _readBlog_vue_vue_type_style_index_0_id_414f05ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css& */ "./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _readBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _readBlog_vue_vue_type_template_id_414f05ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _readBlog_vue_vue_type_template_id_414f05ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "414f05ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/readBlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/readBlog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/readBlog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./readBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_style_index_0_id_414f05ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=style&index=0&id=414f05ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_style_index_0_id_414f05ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_style_index_0_id_414f05ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_style_index_0_id_414f05ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_style_index_0_id_414f05ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_style_index_0_id_414f05ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/readBlog.vue?vue&type=template&id=414f05ce&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/readBlog.vue?vue&type=template&id=414f05ce&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_template_id_414f05ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./readBlog.vue?vue&type=template&id=414f05ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/readBlog.vue?vue&type=template&id=414f05ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_template_id_414f05ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_readBlog_vue_vue_type_template_id_414f05ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/readAnnouncement.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/user/readAnnouncement.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _readAnnouncement_vue_vue_type_template_id_34d86606_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true& */ "./resources/js/components/user/readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true&");
/* harmony import */ var _readAnnouncement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readAnnouncement.vue?vue&type=script&lang=js& */ "./resources/js/components/user/readAnnouncement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _readAnnouncement_vue_vue_type_style_index_0_id_34d86606_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css& */ "./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _readAnnouncement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _readAnnouncement_vue_vue_type_template_id_34d86606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _readAnnouncement_vue_vue_type_template_id_34d86606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34d86606",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/readAnnouncement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/readAnnouncement.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/user/readAnnouncement.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./readAnnouncement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_style_index_0_id_34d86606_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=style&index=0&id=34d86606&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_style_index_0_id_34d86606_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_style_index_0_id_34d86606_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_style_index_0_id_34d86606_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_style_index_0_id_34d86606_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_style_index_0_id_34d86606_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/user/readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_template_id_34d86606_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/readAnnouncement.vue?vue&type=template&id=34d86606&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_template_id_34d86606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_readAnnouncement_vue_vue_type_template_id_34d86606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);