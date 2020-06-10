/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
import { routes } from "./routes";
import { BootstrapVue } from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";


import "swiper/css/swiper.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Toasted from 'vue-toasted';
import VueSocial from "@growthbunker/vuesocial";
import MarqueeText from "vue-marquee-text-component";
Vue.component("marquee-text", MarqueeText);

Vue.use(VueSocial, { iconPath: "/images/icons" });

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(require("vue-moment"));

Vue.use(Toasted, {
    duration: 2500,
    icon: null
    // after: true
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        document.getElementById("app").scrollIntoView();
        return null;
    }
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      var admin = localStorage.getItem("adminUser");
      if (admin == null) {
        next({
          path: '/admin/auth/login',
          query: { redirect: to.fullPath }
         
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })

const app = new Vue({
    el: "#app",
    router
});
