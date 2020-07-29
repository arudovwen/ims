<template>
  <div id="news">
    <h3 class="josefin main_header mb-4">News</h3>
    <div class="news">
      <div class="left_box">
        <div>
          <swiper class="news_update" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide" v-if="news.length >0">
              <div class="img_container cpointer" @click="gotoNews(news[0].id)">
                <img :src="news[0].cover_image" alt />             
                <h4 class="img_text2" >{{news[0].subject}}</h4>
              </div>
            </swiper-slide>
            <swiper-slide class="slide" v-if="news.length >1">
              <div class="img_container cpointer" @click="gotoNews(news[1].id)">
                <img :src="news[1].cover_image" alt />
                <h4 class="img_text2">{{news[1].subject}}</h4>
              
              </div>
            </swiper-slide>
            <swiper-slide class="slide" v-if="news.length >2">
              <div class="img_container cpointer" @click="gotoNews(news[2].id)">
                <img :src="news[2].cover_image" alt />
                <h4 class="img_text2">{{news[2].subject}}</h4>
              
              </div>
            </swiper-slide>
             <swiper-slide class="slide" v-if="news.length >10">
              <div class="img_container cpointer" @click="gotoNews(news[10].id)">
                <img :src="news[10].cover_image" alt />
                <h4 class="img_text2">{{news[10].subject}}</h4>
              
              </div>
            </swiper-slide>
             <swiper-slide class="slide" v-if="news.length >11">
              <div class="img_container cpointer" @click="gotoNews(news[11].id)">
                <img :src="news[11].cover_image" alt />
                <h4 class="img_text2">{{news[11].subject}}</h4>
              
              </div>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="right_box">
        <p v-if="news.length >3" @click="gotoNews(news[3].id)">
          <router-link to>
            <span class="text-dark cpointer">{{new Date() | moment("dddd, MMMM D YYYY")}} :</span>
            <span>{{news[3].subject}}</span>
          </router-link>
        </p>
        <p v-if="news.length >4" @click="gotoNews(news[4].id)">
          <router-link to>
            <span class="text-dark cpointer">{{new Date() | moment("dddd, MMMM D YYYY")}} :</span>
            <span>{{news[4].subject}}</span>
          </router-link>
        </p>
        <p v-if="news.length >5" @click="gotoNews(news[5].id)">
          <router-link to>
            <span class="text-dark cpointer">{{new Date() | moment("dddd, MMMM D YYYY")}} :</span>
            <span>{{news[5].subject}}</span>
          </router-link>
        </p>
        <p v-if="news.length >6" @click="gotoNews(news[6].id)">
          <router-link to>
            <span class="text-dark cpointer">{{new Date() | moment("dddd, MMMM D YYYY")}} :</span>
            <span>{{news[6].subject}}</span>
          </router-link>
        </p>

        <small v-if="news.length >7">
          <router-link to="/blog" class="d-flex align-items-center">
            <span>
              View all news
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </span>
          </router-link>
        </small>

        <div class="sub_news">
          <div class="news_container cpointer" v-if="news.length >7" @click="gotoNews(news[7].id)">
            <div class="news_img">
              <img :src="news[7].cover_image" alt class="rounded" />
            </div>
            <div class="news_title">{{news[7].subject}}</div>
          </div>
          <div class="news_container cpointer" v-if="news.length >8" @click="gotoNews(news[8].id)">
            <div class="news_img">
              <img :src="news[8].cover_image" alt class="rounded" />
            </div>
            <div class="news_title">{{news[8].subject}}</div>
          </div>

          <div class="news_container cpointer" v-if="news.length >9" @click="gotoNews(news[9].id)">
            <div class="news_img">
              <img :src="news[9].cover_image" alt class="rounded" />
            </div>
            <div class="news_title">{{news[9].subject}}</div>
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
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 6000,
        },
      },
      news: [],
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    gotoNews(id) {
      console.log("gotoNews -> id", id);
      this.$router.push({
        name: "NewsBlog",
        params: {
          id: id,
        },
      });
    },
    getNews() {
      axios.get(`/api/all-news`).then((res) => {
        if (res.status == 200) {
          this.news = res.data;
        }
      });
    },
  },
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
  padding: 10px 30px;
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
.img_container img{
  width: 100%;
  height: 100%;
  object-fit: cover;
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
   cursor: pointer;
}
.img_text2 {
  position: absolute;
  bottom: 0px;
  background: linear-gradient(to right, #0f7a8a, #0e6d7b, #0c616d, #0b555f, #094952);
  color: white;
  z-index: 2;
  width: 100%;
  padding: 10px;
  text-align: center;
  text-align: left;
  cursor: pointer;
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