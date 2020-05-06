<template>
  <div>
    <swiper id="banner" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="banner_2">
        <div class="banner_overlay"></div>
        <div class="square_1">
          <div class="square_2">
            <div class="square_3"></div>
          </div>
        </div>
        <div class="square_4">
          <div class="square_5">
            <div class="square_6"></div>
          </div>
        </div>

        <div class="banner_2_text text-center animated fadeIn slow">
          <div class="banner_2_imo josefin">IMO STATE MINISTRY OF EDUCATION</div>
          <div
            class="banner_2_lor"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rem.</div>
        </div>
      </swiper-slide>
      <swiper-slide class="banner_1">
        <div class="banner_overlay"></div>
        <div class="circle_1 animated slideInLeft slow">
          <img src="/images/banner1.jpg" alt="banner" />
        </div>
        <div class="circle_2 animated slideInDown slow">
          <span class="text">
            <span class="education josefin">Education In Imo</span>
            <br />
            <span class="new josefin">has a New</span>
            <br />
            <span class="face josefin">Face</span>
            <div class="enroll">
               <p class="site rounded-pill">www.imolearncentre.org</p>
               <router-link to="/checkout" class="mt-4 "> <button type="button" class="btn bg-white text-blue border-0">Enroll Now  <i class="fa fa-long-arrow-right text-blue" aria-hidden="true"></i></button></router-link>
            </div>
          </span>
        </div>
        <div class="circle_3 animated slideInRight slow">
          <img src="/images/banner2.jpg" alt="banner" />
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 6000
        }
      }
    };
  }
};
</script>
<style scoped>
#banner {
  width: 100%;
  height: 560px;
  overflow: hidden;
  background: url("/images/imobanner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.enroll{
  text-align: end;
}
.enroll p{
  color: white;
  font-size: 16px;
  text-decoration: none;
}
.text-blue{
  color: #000066;
}
.site{
  padding: 8px 15px;
 border:1px solid white;
     width: fit-content;
    margin-left: auto;
}
.form-control{
  width: 50%;
  margin-left: auto;
}
.banner_1 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.banner_2 {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background: url("/images/imobanner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.banner_overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
}
.circle_1 {
  width: 600px;
  height: 600px;
  background: #f7f8fa;
  position: absolute;
  bottom: -47%;
  left: 1px;
  border-radius: 50%;
  z-index: 3;
  overflow: hidden;
}
.circle_1 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
}
.text {
  position: absolute;
  bottom: 18%;
  right: 18%;
}
.new {
  color: #fff;
  font-size: 52px;
  font-weight: bold;
}
.education {
  color: #fff;
  font-size: 52px;
  font-weight: bold;
}
.face {
  color: #fff;
  font-size: 52px;
  font-weight: bold;
}
.circle_3 {
  width: 600px;
  height: 600px;
  background: #f7f8fa;
  position: absolute;
  right: -55px;
  bottom: -40%;
  border-radius: 50%;
  z-index: 1;
  overflow: hidden;
}
.circle_3 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
}
.circle_2 {
  width: 600px;
  height: 600px;
  background: linear-gradient(90deg, #000428 0%, #004e92 100%);
  position: absolute;
  right: 49%;
  bottom: 40%;
  margin-right: -300px;
  margin-bottom: -150px;
  border-radius: 50%;
  z-index: 2;
  overflow: hidden;
}

.square_1 {
  border: 15px solid yellow;
  padding: 10px;
  position: absolute;
  bottom: 50%;
  margin-bottom: -80px;
  height: 160px;
  width: 160px;
  left: -80px;
  transform: rotate(45deg);
}
.square_2 {
  border: 15px solid white;
  padding: 15px;
  width: 100%;
  height: 100%;
}
.square_3 {
  background: yellow;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.square_4 {
  border: 15px solid yellow;
  padding: 10px;
  position: absolute;
  bottom: 50%;
  margin-bottom: -80px;
  height: 160px;
  width: 160px;
  right: -80px;
  transform: rotate(45deg);
}
.square_5 {
  border: 15px solid white;
  padding: 15px;
  width: 100%;
  height: 100%;
}
.square_6 {
  background: yellow;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.banner_2_text {
  width: 70%;
  margin: auto;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.banner_2_imo {
  font-size: 52px;
  font-weight: bold;
  border-bottom: 5px solid yellow;
  margin-bottom: 16px;
  color: yellow;
}
.banner_2_lor {
  font-size: 22px;
  color: white;
}
@media (max-width: 1024px) {
  .circle_1 {
    width: 500px;
    height: 500px;

    bottom: -47%;
    left: 15px;
  }

  .text {
    bottom: 18%;
    right: 18%;
  }
  .new {
    font-size: 42px;
  }
  .education {
    font-size: 42px;
  }
  .face {
    color: #fff;
    font-size: 42px;
    font-weight: bold;
  }
  .circle_3 {
    width: 500px;
    height: 500px;

    right: -125px;
    bottom: -40%;
  }

  .circle_2 {
    width: 500px;
    height: 500px;
    right: 45%;
    bottom: 45%;
    margin-right: -250px;
    margin-bottom: -125px;
  }
}
@media (max-width: 768px) {
  .form-control{
  width: 90%;
  margin-left: auto;
}
  .square_1 {
    border: 7px solid yellow;
    padding: 5px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -30px;
    height: 60px;
    width: 60px;
    left: -30px;
    transform: rotate(45deg);
  }
  .square_2 {
    border: 7px solid white;
    padding: 7px;
    width: 100%;
    height: 100%;
  }
  .square_3 {
    background: yellow;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .square_4 {
    border: 7px solid yellow;
    padding: 5px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -30px;
    height: 60px;
    width: 60px;
    right: -30px;
    transform: rotate(45deg);
  }
  .square_5 {
    border: 7px solid white;
    padding: 7px;
    width: 100%;
    height: 100%;
  }
  .square_6 {
    background: yellow;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .banner_2 {
    width: 78%;
  }
  .banner_2_imo {
    font-size: 32px;
  }
  .banner_2_lor {
    font-size: 15px;
  }
  .circle_1 {
    width: 400px;
    height: 400px;

    bottom: -32%;
    left: 15px;
  }

  .text {
    bottom:18%;
    right: 18%;
  }
  .new {
    font-size: 32px;
  }
  .education {
    font-size: 32px;
  }
  .face {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
  }
  .circle_3 {
    width: 400px;
    height: 400px;

    right: -88px;
    bottom: -27%;
  }

  .circle_2 {
    width: 400px;
    height: 400px;
    right: 50%;
    bottom: 46%;
    margin-right: -200px;
    margin-bottom: -100px;
  }
  .text{

  }
}
@media (max-width: 425px) {
  .form-control{
  width: 100%;
  margin-left: auto;
}
  .square_1 {
    border: 5px solid yellow;
    padding: 3px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -20px;
    height: 40px;
    width: 40px;
    left: -20px;
    transform: rotate(45deg);
  }
  .square_2 {
    border: 5px solid white;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .square_3 {
    background: yellow;
    padding: 2.5px;
    width: 100%;
    height: 100%;
  }
  .square_4 {
    border: 5px solid yellow;
    padding: 4px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -20px;
    height: 40px;
    width: 40px;
    right: -20px;
    transform: rotate(45deg);
  }
  .square_5 {
    border: 5px solid white;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .square_6 {
    background: yellow;
    padding: 2.3px;
    width: 100%;
    height: 100%;
  }
  .banner_2 {
    width: 78%;
  }
  .banner_2_imo {
    font-size: 20px;
  }
  .banner_2_lor {
    font-size: 15px;
  }
  .circle_1 {
   width: 400px;
    height: 400px;
    bottom: -32%;
    left: -69px;
  }

  .text {
    bottom: 18%;
    right: 18%;
  }
  .new {
    font-size: 26px;
  }
  .education {
    font-size: 26px;
  }
  .face {
    color: #fff;
    font-size: 28px;
    font-weight: bold;
  }
  .circle_3 {
      width: 200px;
    height: 200px;
    right: -89px;
    bottom: -50%;
    bottom: 18%;
  }
  .circle_3 img{
    object-position: bottom;
  }

  .circle_2 {
  width: 350px;
    height: 350px;
    position: absolute;
    right: 30%;
    bottom: 49%;
    margin-right: -150px;
    margin-bottom: -75px;
  }
 
}
</style>