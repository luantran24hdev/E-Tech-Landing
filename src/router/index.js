import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import OurGames from "../views/OurGames.vue";
import OurPartners from "../views/OurPartners.vue";
import Root from "./Root";
import i18n, { loadLocaleMessagesAsync } from "@/i18n";

import {
  // setDocumentDirectionPerLocale,
  setDocumentLang,
  setDocumentTitle,
} from "@/util/i18n/document";

Vue.use(VueRouter);

const { locale } = i18n;

const routes = [
  {
    path: "/",
    redirect: locale,
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "/about-us",
        name: "about",
        component: AboutUs,
      },
      {
        path: "/our-games",
        name: "our-games",
        component: OurGames,
      },
      {
        path: "/our-partners",
        name: "our-partners",
        component: OurPartners,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  
});

router.beforeEach((to, from, next) => {
  if (to.params.locale === from.params.locale) {
    next();
    return;
  }

  const { locale } = to.params;

  loadLocaleMessagesAsync(locale).then(() => {
    setDocumentLang(locale);

    // setDocumentDirectionPerLocale(locale);

    setDocumentTitle(i18n.t("app.title"));
  });

  next();
});

export default router;
