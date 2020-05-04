<template>
  <div class="container">
    <scrollTop />
    <Navigation />
    <Banner />
    <Announcement />
    <section class="my_body">
      <Commissioner />
      <ourInitiatives />
      <Polls />
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
import scrollTop from "../scrollTopComponent";

export default {
  components: {
    Polls,
    Announcement,
    News,
    ourInitiatives,
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

}
</style>
