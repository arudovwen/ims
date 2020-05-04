<template>
  <div id="projects">
    <div>
      <h4 class="josefin mb-4 header">Projects</h4>
    </div>
    <div>
      <swiper class="my-projects" :options="swiperOptions">
        <swiper-slide class="slide shadow-sm">
          <div class="img_contain">
            <img src="/images/imo4.jpeg" alt />
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
              <img src="/images/imo1.jpg" alt />
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
  name: "projects-component",
  data() {
    return {
      swiperOptions: {
        spaceBetween: 15,
        slidesPerView: 3,
         breakpoints: {
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
#projects {
  padding: 40px 0px;
  height: auto;
  width: 80%;
  margin: 0 auto;
}
.my-projects {
  height: 350px;
  
}
.slide {
  background: #f7f8fa;
  border-radius: 5px;
  overflow: hidden;
}
.img_contain {
  width: 100%;
  height: 80%;
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
  height: 20%;
  text-align: center;
  background:   rgba(0, 0, 0, .7);;
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
  #projects{
    width: 100%;
    padding: 10px 25px;
  }
  p {
    font-size: 13.5px;
  }
  .img_text {
    height: auto;
  }
  .my-projects {
    height: 280px;
  }
  .img_contain {
    height: 180px;
  }
}
@media (max-width: 425px) {
  #projects{
    padding:40px 15px;
  }
  p {
    font-size: 11px;
  }
  .my-projects {
    height: 200px;
  }
  .img_contain{
    height: 120px;
  }
  .img_text{
    padding:10px 2px;
  }
}
</style>