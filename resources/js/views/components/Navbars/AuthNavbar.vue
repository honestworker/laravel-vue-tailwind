<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-sm font-bold leading-relaxed inline-block mr-2 py-2 whitespace-no-wrap uppercase"
          to="/"
        >
          <img alt="..." class="w-auto mr-1" :src="logo" />
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import PagesDropdown from "../Dropdowns/PagesDropdown.vue";

import logo from "../../../../images/logo.png";

export default {
  data() {
    return {
      logo,
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    PagesDropdown,
  },
};
</script>
