<template>
  <div class=" ">
    <scrollTop class="scroll" />
    <Navigation />
    <Banner />
    <Announcement />
    <section class>
      <Commissioner />
      <ourInitiatives />
      <Department />
      <Polls />
      <ourOrganizations />
      <News />
    </section>
    <Footer />
  </div>
</template>

<script>
import Banner from "../user/banner";
import Navigation from "../navigation/navigation.vue";
import Polls from "../user/polls.vue";
import Footer from "../footer/footer";
import Announcement from "../user/announcement";
import News from "../user/news";
import Commissioner from "../user/commissioner";
import ourInitiatives from "../user/ourInitiatives";
import ourOrganizations from "../user/ourOrganizations";
import scrollTop from "../scrollTopComponent";
import Department from "../user/departments";
export default {
  components: {
    Polls,
    Announcement,
    News,
    ourInitiatives,
    ourOrganizations,
    Commissioner,
    Navigation,
    Footer,
    scrollTop,
    Banner,
    Department,
  },
  mounted() {},
};
</script>
<style scoped>
.container {
  padding: 0;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
}
.my_body {
  background-image: url("/images/curve.jpg");
  background-size: contain;
}
</style>
