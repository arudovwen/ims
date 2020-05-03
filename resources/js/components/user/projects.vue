<template>
  <div id="projects">
    <div>
      <h3 class="josefin mb-4 header">Projects</h3>
    </div>
    <div>
      <swiper class="my-projects" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="slide">
          <div class="img_contain">
            <img src alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="img_contain">
            <img src alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="img_contain">
            <img src alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="img_contain">
            <img src alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="img_contain">
            <img src alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="img_contain">
            <img src alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
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
        spaceBetween: 20,
        slidesPerView: 3,
         breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 10
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
  padding: 40px 20px;
  height: auto;
}
.my-projects {
  height: 350px;
}
.slide {
  background: #f7f8fa;
}
.img_contain {
  width: 100%;
  height: 80%;
}
.img_text {
  width: 100%;
  padding: 10px;
  text-align: left;
  font-size: 15px;
  height: 20%;
  text-align: center;
}

@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  p {
    font-size: 13.5px;
  }
  .img_text {
    height: auto;
  }
  .my-projects {
    height: 250px;
  }
  .img_contain {
    height: auto;
  }
}
@media (max-width: 425px) {
  p {
    font-size: 11px;
  }
  .my-projects {
    height: 150px;
  }
}
</style>