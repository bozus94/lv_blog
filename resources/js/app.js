/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

/**
 * Next, we will create a fresh Vue application instance and attach it tonpm
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component("app", require("./components/AppComponent.vue"));
Vue.component("posts", require("./components/PostsComponent.vue"));
Vue.component("InfiniteLoading", require("vue-infinite-loading"));

import router from "./routes";

const app = new Vue({
    el: "#app",
    router
});
