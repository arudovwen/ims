<template>
  <div class="main">
    <h3 class="josefin center_header mb-4 w-100 text-center bold">Announcement Board</h3>
    <div id="announcement">
      <div class="left_box">
        <div class="comm_body">
          <div class="w-100 text-center mb-3">
            <img src="/images/pin.png" class="pin" alt="pin" />
          </div>
        <h5 class="josefin_bold mb-3 top_head text-center mc1 ">{{announcement.subject}}</h5>
          <div class="comm_image" v-if="announcement.cover_image">
            <img :src="announcement.cover_image" alt="announcement" />
          </div>
             <div class="text-center">
               
          <p v-html="announcement.content" class="ann text-center mb-2"></p>
          <router-link to="/announcement/read"><small>Read more</small></router-link>
             </div>
          <!-- <router-link to="/checkout">
            <button type="button" class="button-green">
              <i class="fa fa-long-arrow-right text-white pr-2" aria-hidden="true"></i> Pay now
            </button>
          </router-link> -->
        </div>
      </div>
      <div class="right_box">
        <div class="latest_post text-center">
          <h4 class="josefin top_header py-3">Latest updates</h4>
          <div>
            <swiper class="latest_update" ref="mySwiper" :options="swiperOptions">
              <swiper-slide class="slide"  v-for="(ne,idx) in news" :key="idx">
                <div class="img_contain cpointer" @click="gotoNews(ne.id)">
                  <img :src="ne.cover_image" alt />
                </div>
                <div class="img_text cpointer" @click="gotoNews(ne.id)">
                  <p class="news-inof">{{ne.subject}}</p>
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
          el: ".swiper-pagination",
        },
        spaceBetween: 30,
        slidesPerView: 3,
        direction: "vertical",
        autoplay: {
          delay: 5000,
        },
      },
      announcement: {},
      news: [],
    };
  },
  mounted() {
    this.getAnnouncement();
    this.getNews();
  },
  methods: {
    getAnnouncement() {
      axios.get(`/api/current-a`).then((res) => {
        if (res.status == 200) {
          this.announcement = res.data[0];
        }
      });
    },
    gotoNews(id) {
      console.log("gotoNews -> id", id)
      this.$router.push({
        name: "NewsBlog",
        params: {
          id: id,
        },
      });
    },
    getNews() {
      axios.get(`/api/get-featured-news`).then((res) => {
        if (res.status == 200) {
          this.news = res.data;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.main {
  background-image: url("/images/texture.png");
  padding: 45px 0 75px;
}
#announcement {
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 80%;
  margin: 0 auto;
}
.button-green {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  border-radius: 3px;
  background: #0f7a8a;
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
    background: darken(#0f7a8a, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

.pin {
  width: 50px;
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
  background-image: linear-gradient(
    to right,
    #0f7a8a,
    #0e6d7b,
    #0c616d,
    #0b555f,
    #094952
  );
  padding: 10px;
  border-radius: 10px;
}
.comm_body {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: white;
  padding: 20px;
  box-shadow: inset 0 0 6px 1px #ccc;
}
.comm_body p {
  color: rgba(0, 0, 0, 0.64);
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
  border-radius: 4px;
}
.img_contain {
  width: 30%;
  height: 100%;
}
.img_contain img {
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
.top_header {
  color: #e6f1f3;
  font-weight: bold !important;
}
.news-info {
  cursor: pointer;
  height: 70px;
  font-size: 15px;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  -ms-line-clamp: 3;
  -o-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  -o-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ann{
 cursor: pointer;
  height: 85px;
  font-size: 18px;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  -ms-line-clamp: 3;
  -o-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  -o-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .main {
    background-image: url("/images/texture.png");
    padding: 45px 15px 75px;
  }
  .left_box {
    height: auto;
    margin-bottom: 30px;
  }
  .comm_body {
    flex-direction: column;
  }
  .comm_about {
    width: 100%;
    padding: 0 10px 15px;
  }
  .comm_image {
    margin: 0 auto 20px;
    width: 70%;
  }
  #announcement {
    flex-direction: column;
    height: auto;
    padding-top: 10px;
    padding-bottom: 45px;
    width: 100%;
  }

  .left_box,
  .right_box {
    width: 100%;
  }
 
  .comm_image {
    height: auto;
  }
}
@media (max-width: 425px) {
  .img_text p {
    font-size: 12.5px;
  }
  .button {
    width: 100%;
  }
}
</style>