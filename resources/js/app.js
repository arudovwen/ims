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

import VueSocial from "@growthbunker/vuesocial";
import MarqueeText from "vue-marquee-text-component";
Vue.component("marquee-text", MarqueeText);

Vue.use(VueSocial, { iconPath: "/images/icons" });

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(require("vue-moment"));
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

const app = new Vue({
    el: "#app",
    router
});
