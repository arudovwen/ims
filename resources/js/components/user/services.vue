<template>
  <div id="programs">
    <div>
      <h4 class="josefin mb-4 header">Programs</h4>
    </div>
    <div>
      <swiper class="my-programs" :options="swiperOptions">
        <swiper-slide class="slide shadow-sm">
          <div class="img_contain">
            <img src="/images/banner1.jpg" alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide shadow-sm">
          <div class="img_contain">
              <img src="/images/imo2.jpg" alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide shadow-sm">
          <div class="img_contain">
              <img src="/images/banner2.jpg" alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide shadow-sm">
          <div class="img_contain">
               <img src="/images/imo4.jpeg" alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
       </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </div>
    <div class="view py-2 text-right">
      <small>
        <router-link to class="ml-auto">
          View all
          <i class="fa fa-angle-double-right w-0" aria-hidden="true"></i>
        </router-link>
      </small>
    </div>
  </div>
</template>
<script>
export default {
  name: "programs-component",
  data() {
    return {
      swiperOptions: {
        spaceBetween: 15,
        slidesPerView: 3,
         breakpoints: {
            320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
           1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 10000
        },
       
      }
    };
  }
};
</script>
<style scoped>
#programs {
  padding: 40px 0px;
  height: auto;
  width: 80%;
  margin: 0 auto;
}
.my-programs {
  height: 250px;
  
}
a{
  color: #0F7A8A;
}
.slide {
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.img_contain {
  width: 100%;
  height: 75%;
}
.img_contain img{
  width: 100%;
  height: 100%;
}
.img_text {
  width: 100%;
  padding: 10px;
  text-align: left;
  font-size: 15px;
  height: 25%;
  text-align: center;
  background-image: linear-gradient(to right, #0f7a8a, #0e6d7b, #0c616d, #0b555f, #094952);
  color: white;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -5px;
    left: 0;
    width: 100%;
}
p{
  margin: 0;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  #programs{
    width: 100%;
    padding: 10px 25px;
  }
  p {
    font-size: 13.5px;
  }
  .img_text {
    height: auto;
  }
  /* .my-programs {
    height: 280px;
  } */
  .img_contain {
    height: 180px;
  }
}
@media (max-width: 425px) {
  #programs{
    padding:40px 15px;
  }
  p {
    font-size: 11px;
  }
  .my-programs {
    height: auto;
  }
  .img_contain{
    height: 120px;
  }
  .img_text{
    padding:10px 2px;
  }
}
</style>