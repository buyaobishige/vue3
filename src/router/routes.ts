import { ComponentOptions } from "vue";
import { RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue";
import Page404 from "@/views/Page404.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    /*
     * 路由级别的代码分割
     * this generates a separate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     */
    component: (): ComponentOptions =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    meta: { title: "未找到界面" },
    component: Page404,
  },
];

export default routes;
