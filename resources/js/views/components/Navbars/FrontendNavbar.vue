<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/" class="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-2 py-2 whitespace-no-wrap uppercase">
          <img alt="..." class="w-auto mr-1" :src="logo" />
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="main-navbar"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <router-link to="/how-it-works" class="hover:no-underline hover:text-red-500 text-gray-800 px-3 py-2 flex items-center text-sm">
              <span class="inline-block">How it works</span>
            </router-link>
          </li>
          
          <li class="flex items-center">
            <router-link to="/funding" class="hover:no-underline hover:text-red-500 text-gray-800 px-3 py-2 flex items-center text-sm">
              <span class="inline-block">Funding</span>
            </router-link>
          </li>
          
          <li class="flex items-center">
            <router-link to="/contact" class="hover:no-underline hover:text-red-500 text-gray-800 px-3 py-2 flex items-center text-sm">
              <span class="inline-block">Contact us</span>
            </router-link>
          </li>
          
          <li class="flex items-center">
            <router-link to="/blog" class="hover:no-underline hover:text-red-500 text-gray-800 px-3 py-2 flex items-center text-sm">
              <span class="inline-block">Blog</span>
            </router-link>
          </li>

          <li class="flex items-center">
            <button
              class="bg-transparent border-red-300 text-red-500 focus:bg-green-400 focus:border-green-400 hover:bg-green-400 hover:border-green-400 active:bg-green-400 active:border-green-400 text-sm px-4 py-2 rounded-3xl border shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 ml-3 ease-linear transition-all duration-150"
              type="button"
            >
              <router-link to="/register" class="hover:no-underline focus:text-white active:text-white hover:text-white px-3 py-2 flex items-center text-sm">
                <span class="inline-block">Sign up</span>
              </router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import FrontendDropdown from "../Dropdowns/FrontendDropdown.vue";

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
    FrontendDropdown,
  },
};
</script>