import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/Home.vue";
import IslandContainer from "/src/components/IslandContainer.vue";
import Microlessons from "/src/components/Microlessons.vue";
import Islands from "/src/components/Islands.vue";
import Volunteer from "/src/components/Volunteer.vue";
import Hackathon from "/src/components/Hackathon.vue";
import AboutUs from "/src/components/AboutUs.vue";

const routes = [
   {
      path: "/",
      component: Home,
      children: [
         { path: "", component: IslandContainer },
      ],
   },
   { path: "/microlessons", component: Microlessons },
   { path: "/islands", component: Islands },
   { path: "/volunteer", component: Volunteer },
   { path: "/hackathon", component: Hackathon },
   { path: "/about-us", component: AboutUs },
];

const router = createRouter({
   history: createWebHistory("/aspan_web"),
   routes,
});

export default router;
