<template>
  <div id="commissioner">
    <h3 class="josefin mb-4 main_header">Stakeholders</h3>
   <div class="commiss">
      <div class="commissioner box shadow-sm">
      <h5 class="josefin top_header">Commissioner of Education, Imo state</h5>
      <div class="img">
        <img src="/images/comm.webp" alt="Commissioner of Education, Imo state">
      </div>
    </div>
    <div class="governor box shadow-sm">
      <h5 class="josefin top_header">Governor, Imo state</h5>
      <div class="img">
        <img src="/images/govt.png" alt="Governor, imo state">
      </div>
    </div>
    <div class="perm_sec box shadow-sm">
      <h5 class="josefin top_header">Permanent Secretary, Imo state</h5>
      <div class="img"></div>
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
.commiss{
 display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-evenly;
}
.box {
  width: 30%;
  height: 400px;
  background: #f7f8fa;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.box img {
  width: 100%;
  height: 100%;
}
.top_header {
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 15px 0;
  background:  rgba(0, 0, 0, .7);
  color: #fff;
  width: 100%;
  margin: 0;
}
.img img{
  width:100%;
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
    padding:15px 25px;
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
  .box{
    width: 70%;
    margin: 30px auto;
  }
}
@media (max-width: 425px) {
  .img_text p {
    font-size: 12.5px;
  }
  .box{
    width: 100%;
  }
}
</style>