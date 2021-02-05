// layout
import Frontend from "../views/layouts/Frontend.vue";

// views for Frontend layout
import Landing from "../views/frontend/Landing.vue";
import Profile from "../views/frontend/Profile.vue";
import Index from "../views/frontend/Index.vue";

export default [
  {
    path: "/",
    redirect: "/",
    component: Frontend,
    children: [
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
    ],
  }
]