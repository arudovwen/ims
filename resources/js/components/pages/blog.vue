<template>
  <div>
    <scrollTop />
    <Navigation />
    <b-overlay :show="show" rounded="sm">
      <div id="main-content">
        <div class="container">
          <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
              <label class="custom-control custom-radio">
                <input type="radio" value v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">All</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="World" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">World</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="Nigeria" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Nigeria</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="Imo" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Imo</span>
              </label>
              <label class="custom-control custom-radio">
                <input
                  type="radio"
                  value="Technology"
                  v-model="category"
                  class="custom-control-input"
                />
                <span class="custom-control-indicator text-muted">Technology</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="Design" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Design</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="Culture" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Culture</span>
              </label>
              <label class="custom-control custom-radio">
                <input
                  type="radio"
                  value="Business"
                  v-model="category"
                  class="custom-control-input"
                />
                <span class="custom-control-indicator text-muted">Business</span>
              </label>
              <label class="custom-control custom-radio">
                <input
                  type="radio"
                  value="Politics"
                  v-model="category"
                  class="custom-control-input"
                />
                <span class="custom-control-indicator text-muted">Politics</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="Opinion" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Opinion</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="Science" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Science</span>
              </label>
              <label class="custom-control custom-radio">
                <input type="radio" value="Health" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Health</span>
              </label>

              <label class="custom-control custom-radio">
                <input type="radio" value="Travel" v-model="category" class="custom-control-input" />
                <span class="custom-control-indicator text-muted">Travel</span>
              </label>
            </nav>
          </div>

          <div
            v-if="featured.length"
            class="jumbotron p-4 p-md-5 text-white rounded bg-dark"
            :style="{'background-image':'url('+featured[0].cover_image+')'}"
          >
            <div class="col-md-8 p-2 bg-dark-50">
              <h2 class="josefin_bold">{{featured[0].subject}}</h2>
              <p class="lead my-3" v-html="featured[0].content"></p>
              <p class="lead mb-0">
                <router-link
                  :to="{
                name:'NewsBlog',
                params:{
                  id:featured[0].id
                }
                }"
                  class="text-white font-weight-bold"
                >Continue reading...</router-link>
              </p>
            </div>
          </div>

          <div class="row mb-2" v-if="featured.length">
            <div class="col-md-6" v-if="featured.length>1">
              <div
                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
              >
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">{{featured[1].category}}</strong>
                  <h4 class="mb-0">{{featured[1].subject}}</h4>
                  <div class="mb-1 text-muted">{{featured[1].created_at | moment('DD MMMM')}}</div>
                  <p class="card-text mb-auto feat" v-html="featured[1].content"></p>
                  <router-link
                    :to="{
                name:'NewsBlog',
                params:{
                  id:featured[1].id
                }
                }"
                    class="stretched-link"
                  >Continue reading</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-6" v-if="featured.length>2">
              <div
                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
              >
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">{{featured[2].category}}</strong>
                  <h4 class="mb-0">{{featured[2].subject}}</h4>
                  <div class="mb-1 text-muted">{{featured[2].created_at | moment('DD MMMM')}}</div>
                  <p class="card-text mb-auto feat" v-html="featured[2].content"></p>
                  <router-link
                    :to="{
                name:'NewsBlog',
                params:{
                  id:featured[2].id
                }
                }"
                    class="stretched-link"
                  >Continue reading</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main role="main" class="container">
          <div class="row">
            <div class="col-md-8 blog-main">
              <h3 class="pb-4 mb-4 font-italic border-bottom">From the Media</h3>

              <div v-for="(item,idx) in basic" :key="idx" class="blog-post">
                <h2 class="blog-post-title">{{item.subject}}</h2>
                <p class="blog-post-meta">
                  {{item.created_at | moment('DD MMMM')}}, by
                  <small >{{item.author}}</small>
                </p>

                <div class="news_content" v-html="item.content"></div>
                <router-link
                  :to="{
                name:'NewsBlog',
                params:{
                  id:item.id
                }
                }"
                  class="stretched-link"
                >Continue reading</router-link>
              </div>
              <!-- /.blog-post -->

              <nav class="blog-pagination mb-3" v-if="basic.length >15">
                <div class="btn btn-outline-primary" @click="prev">Older</div>
                <div class="btn btn-outline-secondary disabled" @click="next">Newer</div>
              </nav>
            </div>
            <!-- /.blog-main -->

            <aside class="col-md-4 blog-sidebar">
              <div class="p-4 mb-3 bg-light rounded">
                <h4 class="font-italic">About</h4>
                <p
                  class="mb-0"
                >Get the latest news, information, gist from all around the world, Nigeria , Imo state, get information about culture, technology, design, business and so much more today.</p>
              </div>

              <div class="p-4">
                <h4 class="font-italic">Archives</h4>
                <ol class="list-unstyled mb-0">
                  <li>
                    <a href="#">March 2020</a>
                  </li>
                  <li>
                    <a href="#">February 2020</a>
                  </li>
                  <li>
                    <a href="#">January 2020</a>
                  </li>
                  <li>
                    <a href="#">December 2020</a>
                  </li>
                  <li>
                    <a href="#">November 2020</a>
                  </li>
                  <li>
                    <a href="#">October 2020</a>
                  </li>
                  <li>
                    <a href="#">September 2020</a>
                  </li>
                  <li>
                    <a href="#">August 2020</a>
                  </li>
                  <li>
                    <a href="#">July 2020</a>
                  </li>
                  <li>
                    <a href="#">June 2020</a>
                  </li>
                  <li>
                    <a href="#">May 2020</a>
                  </li>
                  <li>
                    <a href="#">April 2020</a>
                  </li>
                </ol>
              </div>

              <div class="p-4">
                <h4 class="font-italic">Elsewhere</h4>
                <ol class="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </aside>
            <!-- /.blog-sidebar -->
          </div>
          <!-- /.row -->
        </main>
      </div>
      <template v-slot:overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>
          <b-button
            ref="cancel"
            variant="outline-danger"
            size="sm"
            aria-describedby="cancel-label"
            @click="show = false"
          >Loading</b-button>
        </div>
      </template>
    </b-overlay>
  </div>
</template>

<script>
import Navigation from "../navigation/navigation.vue";
import scrollTop from "../scrollTopComponent";
export default {
  data() {
    return {
      show: true,
      category: "",
      featured:[],
      news: [],
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      total_news: 0,
    };
  },
  components: {
    Navigation,
    scrollTop,
  },
  mounted() {
    this.getFeaturedNews();
    this.getNews()
  },
  methods: {
    getNews() {
      axios.get("/api/get-normal-news").then((res) => {
        if (res.status == 200) {
          this.news = res.data.data.filter((item) => {
            return item.status == "active";
          });
          this.show = false;
        }
      });
    },

      getFeaturedNews() {
      axios.get("/api/get-featured-news").then((res) => {
        if (res.status == 200) {
          this.featured = res.data
          this.show = false;
        }
      });
    },
    next() {
      if (this.next_page) {
        axios.get(this.next_page).then((res) => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.news = res.data.data.filter((item) => {
            return item.status == "active";
          });
        });
      }
    },
    prev() {
      if (this.prev_page) {
        axios.get(this.prev_page).then((res) => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.news = res.data.data.filter((item) => {
            return item.status == "active";
          });
        });
      }
    },
  },
  computed: {
    basic() {
      return this.news.filter((item) => {
        if (this.category.toLowerCase() == item.category.toLowerCase()) {
          return item;
        }
        if (this.category.toLowerCase() == "") {
          return item;
        }
      });
    },
  

  },
};
</script>
<style scoped>
#main-content {
  font-size: 16px;
  margin-top: 30px;
}
.bg-dark-50 {
  background: rgba(0, 0, 0, 0.6);
}
.jumbotron {
  background-size: cover;
}
.bd-placeholder-img {
  width: 100%;
}
.feat {
  height: 500px;
  overflow: hidden;
}
.lead {
  height: 35px;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  -o-box-orient: vertical;
  box-orient: vertical;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -o-line-clamp: 3;
  -ms-line-clamp: 3;
  -moz-line-clamp: 3;
  text-overflow: ellipsis;
  white-space: normal;
}

.news_content {
  max-height: 200px;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  -o-box-orient: vertical;
  box-orient: vertical;
  line-clamp: 15;
  -webkit-line-clamp: 15;
  -o-line-clamp: 15;
  -ms-line-clamp: 15;
  -moz-line-clamp: 15;
  text-overflow: ellipsis;
  white-space: normal;
}
.blog-post {
  margin-bottom: 20px;
}
</style>