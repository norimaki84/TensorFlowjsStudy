import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top";
import BodyPix from "../views/BodyPix/BodyPix";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top
  },
  {
    path: "/bodyPix",
    name: "BodyPix",
    component: BodyPix
  }
];

const router = new VueRouter({
  routes
});

export default router;
