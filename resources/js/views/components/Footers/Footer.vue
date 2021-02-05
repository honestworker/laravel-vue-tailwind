<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="container mx-auto">
      <div class="flex flex-wrap text-center items-center lg:text-left">
        <div class="w-full lg:w-2/12 px-4">
          <router-link to="/" class="inline-block mr-2 py-2">
            <img alt="..." class="w-auto mr-1" :src="logo_white" />
          </router-link>
        </div>
        <div class="w-full lg:w-8/12 px-4">
          <ul class="flex flex-col lg:flex-row list-none justify-center">
            <li class="flex items-center justify-center">
              <router-link to="/courses-by-area" class="hover:no-underline hover:text-red-500 text-white px-2 py-2 flex items-center text-sm">
                <span class="inline-block">Courses by area</span>
              </router-link>
            </li>
            <li class="flex items-center justify-center">
              <router-link to="/providers" class="hover:no-underline hover:text-red-500 text-white px-2 py-2 flex items-center text-sm">
                <span class="inline-block">Providers</span>
              </router-link>
            </li>
            <li class="flex items-center justify-center">
              <router-link to="/partners" class="hover:no-underline hover:text-red-500 text-white px-2 py-2 flex items-center text-sm">
                <span class="inline-block">Partners</span>
              </router-link>
            </li>
            <li class="flex items-center justify-center">
              <router-link to="/privacy-policy" class="hover:no-underline hover:text-red-500 text-white px-2 py-2 flex items-center text-sm">
                <span class="inline-block">Privacy policy</span>
              </router-link>
            </li>
            <li class="flex items-center justify-center">
              <router-link to="/terms-conditions" class="hover:no-underline hover:text-red-500 text-white px-2 py-2 flex items-center text-sm">
                <span class="inline-block">Terms & Conditions</span>
              </router-link>
            </li>
            <li class="flex items-center justify-center">
              <router-link to="/cookies" class="hover:no-underline hover:text-red-500 text-white px-2 py-2 flex items-center text-sm">
                <span class="inline-block">Cookies</span>
              </router-link>
            </li>
            <li class="flex items-center justify-center">
              <router-link to="/contact" class="hover:no-underline hover:text-red-500 text-white px-2 py-2 flex items-center text-sm">
                <span class="inline-block">Contact</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-2/12 px-4">
          <div
            class="text-sm text-gray-600 text-center md:text-right"
          >
            Copyright© Enrol {{ date }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo_white from "../../../../images/logo-white.png";

export default {
  data() {
    return {
      logo_white,
      date: new Date().getFullYear(),
    };
  },
};
</script>
