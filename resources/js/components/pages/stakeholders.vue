<template>
  <div>
    <scrollTop />
    <Navigation />
    <div class="container-fluid">
        <h2 class="center_header text-center">Stakeholders</h2>
      <div class="main-content">
        <div class="holder_1 flex-xs-column">
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-green p-5">
            <small>His Excellency</small>
            <h4>SEN. HOPE UZODIMMA</h4>
            <h5>Governor, Imo state</h5>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio officiis eaque deserunt repellendus accusantium error, laboriosam, autem optio eum, molestias necessitatibus.</P>
          </div>
        </div>
        <div class="holder_1 flex-xs-column-reverse">
          <div class="box_2 bg-green p-5">
            <h4>PROF.B.T.O . IKEGWUOHA</h4>
            <h5 class="text-center">Honorable Commissioner For Education, Imo state</h5>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio officiis eaque deserunt repellendus accusantium error, laboriosam, autem optio eum, molestias necessitatibus.</P>
          </div>
          <div class="box_1 bg-white">
            <img src="/images/comm.jpeg" alt />
          </div>
        </div>
        <div class="holder_1 flex-xs-column">
          <div class="box_1 bg-white">
            <img src="/images/profile.png" alt />
          </div>
          <div class="box_2 bg-green p-5">
            <h5>Permanent Secretary</h5>
            <h6> Imo state Ministry of Education</h6>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio officiis eaque deserunt repellendus accusantium error, laboriosam, autem optio eum, molestias necessitatibus.</P>
          </div>
        </div>
        <div class="holder_1 flex-xs-column-reverse">
          <div class="box_2 bg-green p-5">
            <h4>Lorem, ipsum.</h4>
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
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
}
.main-content {
  width: 100%;
  height: 100%;
  padding: 30px 15px;
}
.holder_1 {
  display: flex;
  height: 100%;
  width: 100%;
}
.box_1 {
  width: 50%;
  height:500px;
}
.box_2 {
  width: 50%;
    height:500px;
  
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
    .container-fluid {
  width: 100%;
  }
    .main-content{
        height: auto;
        flex-direction: column;
    }
    .holder_1{
        width: 100%;
        margin-bottom: 20px;
    }
    .box_1 {
  width: 50%;
  height:300px;
}
.box_2 {
  width: 50%;
    height:300px;
  
}
.box_2.p-5{
padding: 15px !important;
}
.box_1.p-5{
  padding: 15px !important;
}
h5{
font-size: 16px !important;
}
h4{
  font-size: 18px !important;
}
}
@media(max-width:425px){


.main-content{
  padding: 25px 0;
}

    .box_1 {
  width: 100%;
  height:300px;
}
.box_2 {
  width: 100%;
    height:300px;
  
}
}
</style>