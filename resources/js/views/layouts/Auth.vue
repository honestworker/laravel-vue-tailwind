<template>
  <div>
    <frontend-navbar />
    <main>
      <section class="relative w-full h-full py-40 min-h-for-screen">
        <div class="container mx-auto items-center text-center">
          <tabs :activeIndex="activeTabIndex">
            <tab title="Login">
              <login />
            </tab>
            <tab title="Register">
              <register />
            </tab>
          </tabs>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>

<script>
import FrontendNavbar from "../components/Navbars/FrontendNavbar.vue";
import FooterComponent from "../components/Footers/Footer.vue";

import Tab from '../components/Elements/Tab.vue'
import Tabs from '../components/Elements/Tabs.vue'

import Login from '../auth/Login.vue'
import Register from '../auth/Register.vue'

const tabs = [
  'login',
  'register',
]

export default {
  data() {
    return {
    };
  },
  components: {
    FrontendNavbar,
    FooterComponent,
    Tab,
    Tabs,
    Login,
    Register
  },
  computed: {
    activeTabIndex() {
      return tabs.indexOf(this.$route.name);
    },
  },
};
</script>
