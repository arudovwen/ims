<template>
  <div id="polls">
     <div>
      <h3 class="josefin mb-4 header">Featured</h3>
    </div>
    <div class="my-poll">
      <div class="newsletter shadow-sm tab">
        <h4 class="josefin">Newsletter</h4>
        <!-- Default form subscription -->
        <img src="/images/contact.png" class="news_img" alt="">
        <form class="text-center border border-light p-3 py-2" action="#!">
          <p>Join our mailing list. We write rarely, but only the best content.</p>

    
          <!-- Email -->
          <input
            type="email"
            id="defaultSubscriptionFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />

          <!-- Sign in button -->
          <button class="btn btn-info btn-block" type="submit">Subscribe</button>
        </form>
        <!-- Default form subscription -->
      </div>
      <div class="affiliates shadow-sm tab">
        <h4 class="josefin">Affiliates</h4>
        <div>
          <swiper class="my_affiliates" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide">Slide 1</swiper-slide>
            <swiper-slide class="slide">Slide 2</swiper-slide>
            <swiper-slide class="slide">Slide 3</swiper-slide>
            <swiper-slide class="slide">Slide 4</swiper-slide>
            <swiper-slide class="slide">Slide 5</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="opinions shadow-sm tab">
        <div class="op_poll">
           <h4 class="josefin">Opinion polls</h4>
        </div>
        <div class="payment">
          <button type="button" name="" id="" class="btn btn-primary btn-md m-auto">Check Payments</button>
        </div>
         
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 20,
        slidesPerView: 1,
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
#polls {
  padding:30px 15px 65px;
  height: auto;
  background: #cbe0cc;
  border-bottom: 6px solid #006600;
}
.my-poll {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.tab {
  background: #f7f8fa;
height: 400px;
  width: 32%;
  padding: 15px;
  border-radius: 10px;
 
}
.newsletter{
     display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
p {
  font-size: 14px;
}
.my_affiliates {
  height: 300px;
}
.slide {
  background: white;
}
.op_poll{
  height: 60%;
}
.payment{
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.news_img{
  width: 80px;
  height: auto;
}

@media(max-width: 1024px){

}
@media(max-width: 768px){
  .my-poll{
    flex-direction: column-reverse;
  }
  .tab{
    height: auto;
    width: 100%;
    margin-bottom: 30px;
  }
}
@media(max-width: 425px){
  
}
</style>