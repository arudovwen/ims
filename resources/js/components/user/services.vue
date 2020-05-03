<template>
  <div id="services">
    <h3 class="josefin mb-4 header">Programs</h3>
    <div class="services">
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
      <div class="service">
        <div class="service_img">
          <img src alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "services-component"
};
</script>
<style scoped>
#services {
  padding: 15px;
}
.services {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 30px;
  justify-content: center;
  align-items: center;
}
.service {
  width: 300px;
  height: 300px;
}
.service_img {
  width: 100%;
  height: 150px;
  background: #f7f8fa;
}
.service_title {
  background: #b7dc57;
  text-align: center;
  font-size: 18px;
  padding: 15px;
  font-weight: 300;
}

@media(max-width: 1024px){
 .service{
   width: auto;
   height: auto;
 }
 .services{
   width: 100%;
 }
}
@media(max-width: 768px){
  .service_title{
    font-size: 13px;
    padding: 10px;
  }
  .service_img{
    height: 100px;
  }
}
@media(max-width: 425px){
   .service_title{
    font-size: 11px;
    padding: 10px;
  }
}
</style>