<template>
  <div>
    <scrollTop />
    <Navigation />
    <div class="container-fluid">
      <div class="main-content">
        <div class="holder_1">
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-green P-2">
            <small>His Excellency</small>
            <h5>SEN. HOPE UZODIMMA</h5>
            <h6>Governor, Imo state</h6>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio officiis eaque deserunt repellendus accusantium error, laboriosam, autem optio eum, molestias necessitatibus.</P>
          </div>
        </div>
        <div class="holder_1">
          <div class="box_2 bg-green P-2">
            <h5>PROF.B.T.O . IKEGWUOHA</h5>
            <h6 class="text-center">Honorable Commissioner For Education, Imo state</h6>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio officiis eaque deserunt repellendus accusantium error, laboriosam, autem optio eum, molestias necessitatibus.</P>
          </div>
          <div class="box_1 bg-white">
            <img src="/images/comm.jpeg" alt />
          </div>
        </div>
        <div class="holder_1">
          <div class="box_1 bg-white">
            <img src="/images/profile.png" alt />
          </div>
          <div class="box_2 bg-green P-2">
            <h5>Permanent Secretary</h5>
            <h6> Imo state Ministry of Education</h6>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio officiis eaque deserunt repellendus accusantium error, laboriosam, autem optio eum, molestias necessitatibus.</P>
          </div>
        </div>
        <div class="holder_1">
          <div class="box_2 bg-green P-2">
            <h5>Lorem, ipsum.</h5>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio officiis eaque deserunt repellendus accusantium error, laboriosam, autem optio eum, molestias necessitatibus.</P>
          </div>
          <div class="box_1 bg-white">
            <img src="/images/profile.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "../navigation/navigation.vue";
import scrollTop from "../scrollTopComponent";
export default {
  components: {
    Navigation,
    scrollTop
  }
};
</script>
<style scoped>
.container-fluid {
  width: 90%;
  margin: 0 auto;
}
.main-content {
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}
.holder_1 {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;
}
.box_1 {
  height: 50%;
}
.box_2 {
  height: 50%;
}
.box_1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h5 {
  color: #ecee53;
}
.bg-green {
  background: rgb(15, 79, 89);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.bg-white {
  background-color: #f7f8fa !important;
}
@media(max-width:768px){
    .main-content{
        height: auto;
        flex-direction: column;
    }
    .holder_1{
        width: 100%;
        margin-bottom: 20px;
    }
}
</style>