<template>
  <div id="top_nav">
    <div class="logo mr-auto josefin"><router-link to="/" class="text-dark">IMO STATE MINISTRY OF EDUCATION</router-link></div>
    <div class="side_info ml-auto">
      <div class="info">
        <swiper class="updates" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="slide">Total no of pupils : 23,400</swiper-slide>
          <swiper-slide class="slide">Total no of Secondary schools : 1,450</swiper-slide>
          <swiper-slide class="slide">Total no of Primary schools : 2,450</swiper-slide>
        </swiper>
      </div>
      <div class="form-group rel_pos ml-auto search_bar">
        <input
          type="text"
          class="form-control rounded-pill"
          name
          id
          aria-describedby="helpId"
          placeholder="Search"
        />

        <span class="fa-stack search_icon abs_pos top-0">
          <i class="fa fa-circle mc1 fa-stack-2x" aria-hidden="true"></i>
          <i class="fa fa-search fa-stack-1x text-white" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "top-nav-component",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 8000
        }
      }
    };
  }
};
</script>
<style scoped>
#top_nav {
  width: 100%;
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.logo {
  font-size: 32px;
}
.side_info {
  display: flex;
  align-items: center;
}
.search_icon {
  font-size: 19px;
  right: -14px;
}
.updates {
  width: 400px;
  height: 100%;
}
a{
    text-decoration: none;
}
.slide{
  text-align: right;
  padding: 0 20px;
  color: rgba(0, 0,0 ,.5);
  font-size: 14px;
  font-family: 'Josefin Sans';
}
@media(max-width: 1024px){
 .logo{
   font-size: 24px;
 }
 .updates{
   width: 200px;
   margin: 0 0 10px 0;
 }
}
@media(max-width: 768px){
   .logo{
   font-size: 18px;
 }
 .side_info{
   flex-direction: column-reverse;
 }
}
@media(max-width: 425px){
   .logo{
   font-size: 16px;
 }
}
</style>