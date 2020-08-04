<template>
 <div>
   <Nav />
    <b-overlay :show="show" rounded="sm">
       <div class="container-fluid">
    <h2 class="header__ text-center">{{content.subject}}</h2>
    <div class="main">
      <div class="cover" :style="{'background-image':'url('+content.cover_image+')'}"></div>

      <div class="content" v-html="content.content"></div>
      <div class="about">
        <div>
          <p class="blog-post-meta">
            {{content.created_at | moment('DD MMMM')}}, by
            <a href="#">{{content.author}}</a>
          </p>
        </div>
      </div>
    </div>
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
    <Footer/>
 </div>

</template>

<script>
import Nav from '../navigation/navigation'
import Footer from '../footer/footer'
export default {
  data() {
    return {
      content: {},
      show:true,
    };
  },
  components:{
    Nav,
    Footer
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      axios.get(`/api/get-new/${this.$route.params.id}`).then(res => {
        if (res.status == 200) {
          this.content = res.data;
          this.show = false
        }
      });
    }
  }
};
</script>

<style scoped>
.container-fluid {
  background: #f7f8fa;
}
.header__ {
  width: 80%;
  margin: 0 auto;
  background: #ffffff;
  padding: 50px 20px 0;
}
.main {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  background: #ffffff;
  padding: 20px;
  overflow: hidden;
}
.cover,
.content,
.about {
  width: 100%;
  text-align: left;
}
.cover {
  background-size: cover;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
}
@media (max-width: 768px) {
  .main {
    width: 100%;
  }
  .header__ {
    width: 100%;
  }
}
@media (max-width: 425px) {
  .container-fluid{
    padding: 0;
  }
  .cover{
    height: 200px;
    background-size: contain;
    margin-bottom: 20px;
  }
  h2{
  font-size: 22px;
  }
}
</style>