<template>
  <div>
    <navbar />
    <main>
    </main>
    <footer-component />
  </div>
</template>

<script>
import Navbar from "../components/Navbars/AuthNavbar.vue";
import FooterComponent from "../components/Footers/Footer.vue";

import team1 from "../assets/img/team-1-800x800.jpg";
import team2 from "../assets/img/team-2-800x800.jpg";
import team3 from "../assets/img/team-3-800x800.jpg";
import team4 from "../assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>