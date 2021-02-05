// layout
import Admin from "../views/layouts/Admin.vue";

// views for Admin layout
import Dashboard from "../views/admin/Dashboard.vue";
import Settings from "../views/admin/Settings.vue";
import Tables from "../views/admin/Tables.vue";
import Maps from "../views/admin/Maps.vue";

export default [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
        meta: { requiresAuth: true, guardAdmin: true },
      },
      {
        path: "/admin/settings",
        component: Settings,
        meta: { requiresAuth: true, guardAdmin: true },
      },
      {
        path: "/admin/tables",
        component: Tables,
        meta: { requiresAuth: true, guardAdmin: true },
      },
      {
        path: "/admin/maps",
        component: Maps,
        meta: { requiresAuth: true, guardAdmin: true },
      },
    ],
  }
]