<template>
  <div id="news">
    <h3 class="josefin main_header mb-4">News</h3>
    <div class="news">
      <div class="left_box">
        <div>
          <swiper class="news_update" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide">
              <div class="img_container">
                <img src="/images/imo6.jpg" alt />
                <h4 class="img_text1">Lorem, ipsum.</h4>
                <div
                  class="img_text2"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolor fugiat sint dignissimos est impedit?</div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="img_container">
                <img src="/images/imo2.jpg" alt />
                <h4 class="img_text1">Lorem, ipsum.</h4>
                <div
                  class="img_text2"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolor fugiat sint dignissimos est impedit?</div>
              </div>
            </swiper-slide>

            <swiper-slide class="slide">
              <div class="img_container">
                <img src="/images/imo3.png" alt />
                <h4 class="img_text1">Lorem, ipsum.</h4>
                <div
                  class="img_text2"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolor fugiat sint dignissimos est impedit?</div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="img_container">
                <img src="/images/imo4.jpg" alt />
                <h4 class="img_text1">Lorem, ipsum.</h4>
                <div
                  class="img_text2"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolor fugiat sint dignissimos est impedit?</div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="right_box">
        <!-- <div class="left_header">
        <div class="fa-stack">
          <i class="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
          <i class="fab fa-intercom fa-stack-1x text-white"></i>
        </div>
        <h3 class="josefin">Latest News</h3>
        </div>-->

        <p>
          <router-link to>
            <span class="text-dark">{{new Date() | moment("dddd, MMMM D YYYY")}} :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam ab nesciunt consequuntur quidem facilis quis, quisquam aut!
          </router-link>
        </p>
        <p>
          <router-link to>
            <span class="text-dark">{{new Date() | moment("dddd, MMMM D YYYY")}} :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam ab nesciunt consequuntur quidem facilis quis, quisquam aut!
          </router-link>
        </p>
        <p>
          <router-link to>
            <span class="text-dark">{{new Date() | moment("dddd, MMMM D YYYY")}} :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam ab nesciunt consequuntur quidem facilis quis, quisquam aut!
          </router-link>
        </p>

        <small>
          <router-link to class="d-flex align-items-center">
            <span>
              View all news
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </span>
          </router-link>
        </small>

        <div class="sub_news">
          <div class="news_container">
            <div class="news_img">
              <img src="/images/imo2.jpg" alt class="rounded" />
            </div>
            <div
              class="news_title"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, enim?</div>
          </div>
          <div class="news_container">
            <div class="news_img">
              <img src="/images/imo4.jpeg" alt class="rounded" />
            </div>
            <div
              class="news_title"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, enim?</div>
          </div>
          <div class="news_container">
            <div class="news_img">
              <img src="/images/imo4.jpeg" alt class="rounded" />
            </div>
            <div
              class="news_title"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, enim?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news-component",
  data() {
    return {
      swiperOptions: {
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
#news {
  padding: 25px 15px;
  background-color: #e6f1f3;
  border-bottom: 3px solid rgb(15, 122, 138, 0.85);
}
.news {
  min-height: 300px;
  display: flex;

  padding-bottom: 45px;
}
.left_box {
  width: 50%;
  height: 100%;
  padding: 10px;
}
.right_box {
  width: 50%;
  height: 100%;
  padding: 10px;
  padding-right: 50px;
}
.right_box p a {
  font-size: 14px;
  color: #001e00;
}
.news_container {
  width: 150px;
  height: auto;
  text-align: center;
}
.news_img {
  width: 100%;
  height: 100px;
}
.news_img img {
  width: 100%;
  height: 100%;
}
.news_title {
  font-size: 12px;
  text-align: left;
}
.news_update {
  height: 400px;
}
a {
  color: rgb(15, 122, 138, 0.85);
}
.sub_news {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.left_header div,
.left_header h3 {
  display: inline-block;
  vertical-align: baseline;
}
.slide {
  background: #f7f8fa;
}
.img_container {
  position: relative;
  width: 100%;
  height: 100%;
}
.img_text1 {
  position: absolute;
  bottom: 125px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 2;
  width: auto;
  padding: 10px;
  text-align: center;
}
.img_text2 {
  position: absolute;
  bottom: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 2;
  width: 100%;
  padding: 10px;
  text-align: center;
  text-align: left;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .news_update {
    height: 300px;
  }
  .left_box,
  .right_box {
    width: 100%;
  }
  .news {
    flex-direction: column;
  }
  .right_box {
    padding: 10px;
  }
  .news_container {
    width: 31.5%;
  }
}
@media (max-width: 425px) {
  .news_title {
    font-size: 11.5px;
  }
}
</style>