<template>
  <div>
    <frontend-navbar />

    <footer />
  </div>
</template>

<script>
import FrontendNavbar from "../components/Navbars/FrontendNavbar.vue";
import Footer from "../components/Footers/Footer.vue";

import patternVue from "../../assets/img/pattern_vue.png";
import componentBtn from "../../assets/img/component-btn.png";
import componentProfileCard from "../../assets/img/component-profile-card.png";
import componentInfoCard from "../../assets/img/component-info-card.png";
import componentInfo2 from "../../assets/img/component-info-2.png";
import componentMenu from "../../assets/img/component-menu.png";
import componentBtnPink from "../../assets/img/component-btn-pink.png";
import documentation from "../../assets/img/documentation.png";
import login from "../../assets/img/login.jpg";
import profile from "../../assets/img/profile.jpg";
import landing from "../../assets/img/landing.jpg";

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
    };
  },
  components: {
    FrontendNavbar,
    Footer,
  },
};
</script>
