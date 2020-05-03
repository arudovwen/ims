<template>
  <div class="container">
     <scrollTop/>
    <Navigation />
    <section>
      <Announcement />
      <News />
      <Commissioner />
      <Services />

      <Projects />
      <Polls />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../navigation/navigation.vue";
import Polls from "../user/polls.vue";
import Footer from "../footer/footer";
import Announcement from "../user/announcement";
import News from "../user/news";
import Services from "../user/services";
import Commissioner from "../user/commissioner";
import Projects from "../user/projects";
import scrollTop from '../scrollTopComponent'

export default {
  components: {
    Polls,
    Announcement,
    News,
    Services,
    Commissioner,
    Projects,
    Navigation,
    Footer,
    scrollTop
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
</style>
