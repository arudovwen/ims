<template>
  <div class="container my_body">
    <scrollTop  class="scroll"/>
    <Navigation />
    <Banner />
    <Announcement />
    <section class="">
      <Commissioner />
      <ourInitiatives />
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
    Banner
  },
  mounted() {}
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
 background-image: url('/images/curve.jpg');
 background-size:cover;
}

</style>
