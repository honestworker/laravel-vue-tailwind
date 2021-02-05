<template>
  <footer class="block py-4">
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-gray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div
            class="text-sm text-gray-600 font-semibold py-1 text-center md:text-left"
          >
            Copyright © Enrol {{ date }}
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <router-link to="/funding" class="text-gray-800 hover:text-red-500 text-sm font-semibold block py-1 px-3">
                <span class="inline-block">About Us</span>
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-gray-800 hover:text-red-500 text-sm font-semibold block py-1 px-3">
                <span class="inline-block">Blog</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
