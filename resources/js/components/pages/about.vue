<template>
  <div>
    <scrollTop />
    <Navigation />

    <section class="about">
      <div class="who_we_are">
        <h2>Who We Are</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolores quibusdam enim cupiditate nobis aliquam molestiae mollitia? Iure nihil iusto nostrum aspernatur ipsa repellendus expedita veniam quasi omnis suscipit voluptatibus, consequatur sint a asperiores magni architecto culpa ducimus optio mollitia?</p>
      </div>
    </section>
    <section>
      <div class="dd">
        <div class="d1">
          <div class="d1-header">
            <div>
              <span class="fa-stack fa-2x mr-4">
                <i class="fa fa-circle fa-stack-2x text-dark" aria-hidden="true"></i>
                <i class="fa fa-bullhorn fa-stack-1x text-white" aria-hidden="true"></i>
              </span>
            </div>
            <div>
              <p class="d1_sub">Our Mission</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores necessitatibus similique fuga magnam illo est iste atque sed iure sequi?</p>
            </div>
          </div>

          <div class="d1-header">
            <div>
              <span class="fa-stack fa-2x mr-4">
                <i class="fa fa-circle fa-stack-2x text-dark" aria-hidden="true"></i>
                <i class="fa fa-eye fa-stack-1x text-white" aria-hidden="true"></i>
              </span>
            </div>
            <div>
              <p class="d1_sub">Our Vision</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores necessitatibus similique fuga magnam illo est iste atque sed iure sequi?</p>
            </div>
          </div>
        </div>
        <div class="d2">
          <div class="d2_1 mb-4">
            <div class="text-center">
              <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x text-dark" aria-hidden="true"></i>
                <i class="fa fa-thumbs-o-up fa-stack-1x text-white" aria-hidden="true"></i>
              </span>
              <h4>Experience</h4>
            </div>

            <div class="text-center">
              <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x text-dark" aria-hidden="true"></i>
                <i class="fas fa-tools fa-stack-1x text-white"></i>
              </span>
              <h4>Capabilities</h4>
            </div>
          </div>
          <div class="d2_2">
            <div class="text-center">
              <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x text-dark" aria-hidden="true"></i>
                <i class="fa fas fa-satellite-dish fa-stack-1x text-white" aria-hidden="true"></i>
              </span>
              <h4>Technology</h4>
            </div>

            <div class="text-center">
              <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x text-dark" aria-hidden="true"></i>
                <i class="fa fa-handshake-o fa-stack-1x text-white" aria-hidden="true"></i>
              </span>
              <h4>Partnerships</h4>
            </div>
            <div>
              <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x text-dark" aria-hidden="true"></i>
                <i class="fa fa-lightbulb-o text-white fa-stack-1x" aria-hidden="true"></i>
              </span>
              <h4>Innovation</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center core">
      <h3 class="mb-4">Our Core Values</h3>
      <div class="d3">
        <div>
          <img src="/images/integrity.png" class="mb-3" alt />
          <h4>Integrity</h4>
        </div>
        <div>
          <img src="/images/partner.png" class="mb-3" alt />
          <h4>Partnership</h4>
        </div>
        <div>
          <img src="/images/value.png" class="mb-3" alt />
          <h4>Value creation</h4>
        </div>
        <div>
          <img src="/images/excellence.png" class="mb-3" alt />
          <h4>Excellence</h4>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>
<script>
import Navigation from "../navigation/navigation.vue";
import scrollTop from "../scrollTopComponent";
import Footer from '../footer/footer'
export default {
  components: {
    Navigation,
    scrollTop,
     Footer,
  }
};
</script>
<style scoped>
.about {
  padding: 65px 0px;
}
.who_we_are {
  padding: 0 150px;
}
.dd {
  display: flex;
  background: #f7f8fa;
  padding: 40px 150px;
}
.d1 {
  width: 50%;
}
.d2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.d1-header {
  display: flex;
  align-items: center;
}
.d1_sub {
  font-size: 28px;
  font-weight: bold;
}
.d2_1 {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.d2_2 {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.d3 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.core {
  padding: 40px 150px;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .dd {
    padding: 30px 20px;
  }

  .who_we_are {
    padding: 30px 20px;
  }
  .core {
    padding: 30px 20px;
  }
}
@media (max-width: 425px) {
  .about {
    padding: 35px 0;
  }
  .dd {
    padding: 30px 15px;
    flex-direction: column;
  }
  .d1,
  .d2 {
    width: 100%;
    margin-bottom: 24px;
  }
  .who_we_are {
    padding: 30px 15px;
  }
  .core {
    padding: 30px 15px;
  }
  img.mb-3 {
    width: 80px;
    height: 80px;
  }
  p.d1_sub {
    font-size: 22px;
    margin-bottom: 0.8rem;
  }
  h4 {
    font-size: 14px !important;
  }
}
</style>