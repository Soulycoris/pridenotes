import { createRouter, createWebHistory, Router } from "vue-router";
import Home from "@/pages/index.vue";
import generateSkillIcon from "@/pages/generateSkillIcon.vue";

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/generateSkillIcon", name: "generate-skill-icon", component: generateSkillIcon },
  ],
});

export default router;