// views without layouts
import Landing from "../views/Landing.vue";
import Profile from "../views/Profile.vue";
import Index from "../views/Index.vue";

export default [
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "*", redirect: "/" },
]