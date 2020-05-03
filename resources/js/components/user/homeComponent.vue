<template>
  <div class="container">
  
  

    <section>
      <Announcement />
      <News />
         <Commissioner />
      <Services />
   
      <Projects />
      <Polls/>
    </section>
    <Footer />
  </div>
</template>

<script>
import Polls from './polls'
import Footer from "../footer/footer";
import Announcement from "./announcement";
import News from "./news";
import Services from "./services";
import Commissioner from "./commissioner";
import Projects from "./projects";

export default {
  components: {
 Polls,
    Announcement,
    News,
    Services,
    Commissioner,
    Projects,

    Footer
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
