<template>
  <div id="programs">
    <div>
      <h4 class="josefin mb-4 header">Programs</h4>
    </div>
    <div>
      <div class="my-programs">
   
        <div class="slide shadow-sm">
          <div class="img_contain">
            <img src="/images/banner1.jpg" alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>
    
         <div class="slide shadow-sm">
          <div class="img_contain">
            <img src="/images/banner2.jpg" alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>
         <div class="slide shadow-sm">
          <div class="img_contain">
            <img src="/images/imo4.jpeg" alt />
          </div>
          <div class="img_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>
      </div>
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
        }
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
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 30px;
  grid-column-gap: 15px;
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
.img_contain img {
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
   background:  rgba(0, 0, 0, .7);;
  color: hsl(210, 44%, 92%);
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
  .my-programs{
    grid-template-columns: auto auto;
    height: auto;
  }
  p {
    font-size: 13.5px;
  }
  .img_text {
    height: auto;
  }
 
  .img_contain {
    height: 180px;
  }
}
@media (max-width: 425px) {
  #programs {
    padding: 40px 15px;
  }
  p {
    font-size: 11px;
    
  }
   .img_contain {
    height: 120px;
  }
  .img_text {
    padding: 10px 2px;
  }
}
</style>