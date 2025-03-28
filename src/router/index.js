import { createRouter, createWebHashHistory } from "vue-router";
import Home from "/src/components/Home.vue";
import IslandContainer from "/src/components/IslandContainer.vue";
import Microlessons from "/src/components/Microlessons.vue";
import Islands from "/src/components/Islands.vue";
import Volunteer from "/src/components/Volunteer.vue";
import Hackathon from "/src/components/Hackathon.vue";
import AboutUs from "/src/components/AboutUs.vue";
import TermsOfUse from "/src/components/TermsofUse.vue";
import PrivacyPolicy from "/src/components/PrivacyPolicy.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [{ path: "", component: IslandContainer }],
  },
  { path: "/microlessons", component: Microlessons },
  { path: "/islands", component: Islands },
  { path: "/volunteer", component: Volunteer },
  { path: "/hackathon", component: Hackathon },
  { path: "/about-us", component: AboutUs },
  { path: "/terms-of-use", component: TermsOfUse },
  { path: "/privacy-policy", component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHashHistory("/aspan_web"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // Ensures the page scrolls to the top on navigation
  },
});

export default router;
