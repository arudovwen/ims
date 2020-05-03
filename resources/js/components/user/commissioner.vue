<template>
  <div id="commissioner">
    <div class="left_box">
      <div class="comm_header">
        <h3 class="josefin mb-4 top_head">Commissioner of Education, Imo State</h3>
      </div>
      <div class="comm_body">
        <div class="comm_image">
          <img src="/images/comm.webp" alt />
        </div>
        <div
          class="comm_about"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae possimus veritatis quae et hic ad eos nam voluptas est molestiae! Accusamus accusantium eaque iure quasi ullam corporis modi! Enim voluptas voluptates vel atque nulla temporibus accusamus hic incidunt, reprehenderit iure provident nisi.
       <small><router-link to="">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></router-link></small>
       </div>
      </div>
    </div>
    <div class="right_box">
      <div class="latest_post text-center">
        <h4 class="josefin top_header py-3">Latest post</h4>
        <div>
          <swiper class="latest_update" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide">
              <div class="img_contain">
                <img src="/images/imo4.jpeg" alt />
              </div>
              <div class="img_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis blanditiis illum ipsa?</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="img_contain">
                <img src="/images/imo2.jpg" alt />
              </div>
              <div class="img_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis blanditiis illum ipsa?</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="img_contain">
                <img src="/images/imo1.jpg" alt />
              </div>
              <div class="img_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis blanditiis illum ipsa?</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="img_contain">
                <img src="/images/imo2.jpg" alt />
              </div>
              <div class="img_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis blanditiis illum ipsa?</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="img_contain">
                <img src="/images/imo2.jpg" alt />
              </div>
              <div class="img_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis blanditiis illum ipsa?</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="img_contain">
                <img src="/images/imo4.jpeg" alt />
              </div>
              <div class="img_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis blanditiis illum ipsa?</p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commisioner-component",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        spaceBetween: 30,
        slidesPerView: 3,
        direction: "vertical",
        autoplay: {
          delay: 5000
        }
      }
    };
  }
};
</script>
<style scoped>
#commissioner {
  display: flex;
  padding:45px 15px 65px;
  height: auto;
  width: 100%;
  margin:0 auto;
}
.left_box {
  width: 60%;
  padding: 10px;
  height: 100%;
}

.right_box {
  width: 40%;
  height: 100%;
  background: #006600;
  padding: 10px;
  border-radius:10px;
}
.comm_body {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 100%;
}
.comm_header {
  font-weight: 300;
  text-align: center;
}
.comm_image {
  width: 50%;
  height: 400px;
  padding: 0 15px;
}
.comm_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.comm_about {
  width: 50%;
  padding: 0 25px;
  text-align: left;
  border-left: 5px solid #f7f8fa;
  height: 50%;
}
.latest_update {
  width: 100%;
  height: 400px;
}
.slide {
  background: #f7f8fa;
  display: flex;
  align-items: center;
  padding: 10px;
}
.img_contain {
  width: 30%;
  height: 100%;
}
.img_contain img{
  width: 100%;
  height: 100%;
}
.img_text {
  width: 70%;
  padding: 10px;
  text-align: left;
  font-size: 13px;
}
.top_header{
  color: hsl(120, 100%, 90%);
}
@media(max-width: 1024px){

}
@media(max-width: 768px){
  .comm_body{
    flex-direction: column;
  }
  .comm_about{
    width: 100%;
    padding: 0 10px 15px;
  }
  .comm_image{
    margin: 0 auto 20px;
    width: 70%;
  }
  #commissioner{
    flex-direction: column;
    height: auto;
     padding-top:10px;
    padding-bottom: 45px;
     width: 100%;
  }
 
   .left_box,.right_box{
    width: 100%;
  }
 .top_head{
   margin: 0 !important;
 }
 .comm_image{
   height: auto;
 }
}
@media(max-width: 425px){
 .img_text p{
   font-size: 12.5px;
 }
}
</style>