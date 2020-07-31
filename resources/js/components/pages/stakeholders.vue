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
            <p>His Excellency</p>
            <h3>SEN. HOPE UZODIMMA</h3>
            <h4>Governor, Imo state</h4>
           
          </div>
        </div>
        <div class="holder_1 flex-xs-column-reverse">
          <div class="box_2 bg-green p-5">
            <h3>PROF.B.T.O . IKEGWUOHA</h3>
            <h4 class="text-center">Honorable Commissioner For Education, Imo state</h4>
           
          </div>
          <div class="box_1 bg-white">
            <img src="/images/comm.jpeg" alt />
          </div>
        </div>
        <div class="holder_1 flex-xs-column">
          <div class="box_1 bg-white">
            <img src="/images/perm.png" alt />
          </div>
          <div class="box_2 bg-green p-5">
              <h3 class="">Mrs B.I. Uwandu-Uzoma, Ph.D</h3>
            <p>BA(Hons), MSc, MA, Ph.D</p>
            <h4>Permanent Secretary</h4>
            <h5> Imo state Ministry of Education</h5>
           
          </div>
        </div>
        <!-- <div class="holder_1 flex-xs-column-reverse">
          <div class="box_2 bg-green p-5">
            <h3>Lorem, ipsum.</h3>
           
          </div>
          <div class="box_1 bg-white">
            <img src="/images/profile.png" alt />
          </div>
        </div> -->
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
h4 {
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
h4{
font-size: 16px !important;
}
h3{
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