<template>
  <div>
    <admin-sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <admin-navbar />
      <div class="px-4 md:px-10 mx-auto w-full">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "../components/Navbars/AdminNavbar.vue";
import AdminSidebar from "../components/Sidebar/AdminSidebar.vue";
import FooterAdmin from "../components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    AdminSidebar,
    FooterAdmin,
  },
};
</script>
