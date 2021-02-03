// layouts
import Auth from "../views/layouts/Auth.vue";

// views for Auth layout
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

export default [
  {
    path: "/login",
    redirect: "/login",
    component: Auth,
    children: [
      {
        path: "/login",
        component: Login,
        meta: { guest: true },
      },
      {
        path: "/register",
        component: Register,
        meta: { guest: true },
      },
    ],
  }
]