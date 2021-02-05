<template>
  <div>
    <frontend-navbar />
    <main>
      <section class="relative w-full h-full pt-5 min-h-for-screen">
        <router-view />
      </section>
    </main>
    <footer-component />
  </div>
</template>

<script>
import FrontendNavbar from "../components/Navbars/FrontendNavbar.vue";
import FooterComponent from "../components/Footers/Footer.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    FrontendNavbar,
    FooterComponent,
  },
};
</script>