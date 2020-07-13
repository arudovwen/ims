<template>
  <div class="main">
     <h3 class="josefin  center_header mb-4 w-100 text-center bold">Announcement Board</h3>
    <div id="announcement">
    <div class="left_box">
  
      <div class="comm_body">
       <div class="w-100 text-center mb-3"> <img src="/images/pin.png" class="pin" alt="pin"></div>
         <!-- <h3 class="josefin mb-3 top_head text-center mc1">ANNOUNCEMENT !!</h3> -->
        <div class="comm_image">
          <img src="/images/imo4.jpeg" alt="announcement">
        </div>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente alias rem reprehenderit fuga ipsum fugiat. Rem laudantium odio deserunt ullam blanditiis ut cumque at?</p>
        <p>Lorem ipsumdicta dolorem vitae nisi?</p>
        <router-link to="/checkout"> <button type="button" class="button-green"> <i class="fa fa-long-arrow-right text-white pr-2" aria-hidden="true"></i> Pay now  </button></router-link>
     </div>
    </div>
    <div class="right_box">
      <div class="latest_post text-center">
        <h4 class="josefin top_header py-3">Latest updates</h4>
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
  </div>
</template>
<script>
export default {
  name: "announcement-component",
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
<style scoped lang="scss">
.main{
 background-image: url("/images/texture.png");
 padding: 45px 0 75px;
}
#announcement {
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 80%;
  margin:0 auto;

}
.button-green {
    padding: 8px 32px;
    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
    line-height: 1.25;
    border-radius: 3px;
    background: #0F7A8A;
    text-decoration: none;
    color: white;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: initial;
    position: relative;
    transition: background-color 0.6s ease;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      transform-style: flat;
      transform: translate3d(-50%, -50%, 0);
      background: rgba(white, 0.1);
      border-radius: 100%;
      transition: width 0.3s ease, height 0.3s ease;
    }
    &:focus,
    &:hover {
      background: darken(#0F7A8A, 7%);
    }
    &:active {
      &:after {
        width: 200px;
        height: 200px;
      }
    }
  }

.pin{
  width:50px
}
.left_box {
  width: 50%;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;

}

.right_box {
  width: 30%;
  height: 500px;
  background-image: linear-gradient(to right, #0f7a8a, #0e6d7b, #0c616d, #0b555f, #094952);
  padding: 10px;
  border-radius:10px;
}
.comm_body {
  height: 100%;
  width: 100%;
    margin: 0 auto;
    background: white;
    padding: 20px;
      box-shadow:  inset 0 0 6px 1px #ccc;
}
.comm_body p{
  color: rgba(0, 0, 0, .64);
}
.comm_header {
  font-weight: 300;
  text-align: center;
}
.comm_image {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;

}
.comm_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  border-radius:4px;
}
.img_contain {
  width: 30%;
  height: 100%;
}
.img_contain img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img_text {
  width: 70%;
  padding: 10px;
  text-align: left;
  font-size: 13px;
}
.top_header{
color:#e6f1f3;
font-weight: bold;
}
@media(max-width: 1024px){

}
@media(max-width: 768px){
  .main{
 background-image: url("/images/texture.png");
 padding: 45px 15px 75px;
}
  .left_box{
    height: auto;
    margin-bottom: 30px;
  }
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
  #announcement{
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
   display: none;
 }
 
}
@media(max-width: 425px){
 .img_text p{
   font-size: 12.5px;
 }
 .button{
  width:100%
}
}
</style>