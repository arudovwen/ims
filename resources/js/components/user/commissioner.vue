<template>
  <div id="commissioner">
    <h3 class="josefin mb-4 main_header">Stakeholders</h3>
    <div class="commiss">
      <div class="governor box shadow-sm">
        <div class="top_header">
          <h6>His Excellency</h6>
          <h4 class="josefin">SEN. HOPE UZODIMMA</h4>
            <h5 class="josefin ">Governor, Imo state</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nostrum odio quidem dolorem sequi itaque... <span class="mc3">read more</span></p>
        </div>
      
        <div class="img">
          <img src="/images/govt.jpeg" alt="Governor, imo state" />
        </div>
      </div>
      <div class="commissioner box shadow-sm">
         <div class="top_header">
            <h4 class="josefin ">Commissioner of Education, Imo state</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nostrum odio quidem dolorem sequi itaque... <span class="mc3">read more</span></p>
        </div>
       
        <div class="img">
          <img src="/images/profile.png" alt="Commissioner of Education, Imo state" />
        </div>
       
      </div>

      <div class="perm_sec box shadow-sm">
         <div class="top_header">
             <h4 class="josefin ">Permanent Secretary, Imo state Ministry of Education</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nostrum odio quidem dolorem sequi itaque... <span class="mc3">read more</span></p>
        </div>
      
        <div class="img">
          <img src="/images/profile.png" alt="Permanent Secretary, Imo state" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commisioner-component",
  data() {
    return {};
  }
};
</script>
<style scoped>
#commissioner {
  padding: 65px 15px 65px;
  height: auto;
  width: 100%;
  background: white;
}
.commiss {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-evenly;
}
.box {
  width: 30%;
  height: 500px;
  background: #f7f8fa;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.mc3{
  cursor:pointer;
  text-decoration: underline;
}
.box img {
  width: 100%;
  height: 100%;
}
p{
  margin: 0;
  font-size: 15px;
}
.top_header {
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 15px 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 100%;
  margin: 0;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  #commissioner {
    padding: 30px 15px 30px;
  }
  .commiss {
    flex-direction: column;
    height: auto;
    padding: 15px 25px;
    width: 100%;
  }

  .left_box,
  .right_box {
    width: 100%;
  }
  .top_head {
    margin: 0 !important;
  }
  .comm_image {
    height: auto;
  }
  .box {
    width: 70%;
    margin: 30px auto;
    height:400px
  }
}
@media (max-width: 425px) {
  .img_text p {
    font-size: 12.5px;
  }
  .box {
    width: 100%;
  }
}
</style>