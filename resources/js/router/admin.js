// layout
import Admin from "../views/layouts/Admin.vue";

// views for Admin layout
import Dashboard from "../views/admin/Dashboard.vue";
import Settings from "../views/admin/Settings.vue";
import SuperAdmins from "../views/admin/SuperAdmins.vue";
import Admins from "../views/admin/Admins.vue";
import ProviderManagers from "../views/admin/ProviderManagers.vue";
import Users from "../views/admin/Users.vue";

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
        path: "/admin/admins",
        component: Admins,
        meta: { requiresAuth: true, guardAdmin: true },
      },
      {
        path: "/admin/super-admins",
        component: SuperAdmins,
        meta: { requiresAuth: true, guardAdmin: true },
      },
      {
        path: "/admin/provider-managers",
        component: ProviderManagers,
        meta: { requiresAuth: true, guardAdmin: true },
      },
      {
        path: "/admin/users",
        component: Users,
        meta: { requiresAuth: true, guardAdmin: true },
      },
    ],
  }
]