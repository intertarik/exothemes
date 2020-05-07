import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import PrismicVue from "prismic-vue";
import linkResolver from "@/prismic/link-resolver";
import MailchimpSubscribe from "vue-mailchimp-subscribe";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VModal from "vue-js-modal";

Vue.use(VModal);

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
});
// Add this before the new Vue instance
Vue.use(MailchimpSubscribe, {});

//Fontawesome
// library.add(faUserSecret);
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
