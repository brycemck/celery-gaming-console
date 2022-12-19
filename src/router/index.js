import { createWebHistory, createRouter } from "vue-router";
import HomeVue from "@/views/Home.vue";
import ServerConfigVue from "@/views/ServerConfig.vue";
import ServerSpecsVue from "@/views/ServerSpecs.vue";
import PlayersVue from "@/views/Players.vue";
import ConsoleVue from "@/views/Console.vue";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/serverconfig",
    name: "Server Config",
    component: ServerConfigVue,
  },
  {
    path: "/serverspecs",
    name: "Server Specs",
    component: ServerSpecsVue,
  },
  {
    path: "/players",
    name: "Players",
    component: PlayersVue,
  },
  {
    path: "/console",
    name: "Console",
    component: ConsoleVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;