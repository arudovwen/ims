<template>
  <div class="main-top">
    <div class="info">
      <marquee-text>
         <span class="px-4 text-white marq">Total No of  LGAs : {{total_lgas}}</span>
         <span class="px-4 text-white marq">Total No of SEMB Staff : {{total_staffs}}</span>
        <span class="px-4 text-white marq">Total No of  Schools : {{total_schools}}</span>
        <span class="px-4 text-white marq">Total No of Secondary Schools : {{total_sec_schools}}</span>
        <span class="px-4 text-white marq">Total No of Primary/Nursery Schools : {{total_pry_schools}}</span>
      </marquee-text>
    </div>
    <div id="top_nav">
      <div class="logo mr-auto josefin">
        <router-link to="/" class="text-dark">
          <div class="img_container">
            <img src="/images/logo.jpg" alt />
          </div>
          <div class="text">
            <span class="imo josefin_bold">IMO STATE</span>
            <br />
            <span class="ministry">Ministry of Education</span>
          </div>
        </router-link>
      </div>
      
      
      <div class="ml-auto d-flex align-items-center">
        <div>
        <a href="https://www.ministryofeducation.im.gov.ng:2096/"  target="_blank" class="mr-4">  <b-button  variant="home">Staff mail <i class="fa fa-envelope pl-1" aria-hidden="true"></i></b-button></a>
        </div>
        <div class="side_info ml-auto" >
        

        <div class="form-group rel_pos ml-auto search_bar mb-0">
         <div class="search-bar">
            <input
            type="text"
            class="form-control search-border rounded-pill desktop"
            aria-describedby="helpId"
            placeholder="Search"
            v-model="search"
          />
          <button class="search_icon abs_pos top-0 rounded-pill desktop">
            <i class="fa fa-search fa-1x text-white" aria-hidden="true"></i>
          </button>
          <div class="search-box shadow"  v-if="search !==''">
            <div @click="close" class="text-right"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
            <hr>
            <searchData :search="search"/>
          </div>
         </div>

         
          <span class="d-flex justify-content-start align-items-center mobile" @click="showNav">
            <button
              class="hamburger hamburger--collapse"
              tabindex="0"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
              :class="{'is-active':show_nav_bar}"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <!-- <strong>Menu</strong> -->
          </span>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchData from '../searchComponent';
export default {
  
  props: ["show_nav_bar"],
  name: "top-nav-component",
  data() {
    return {
      search:'',
      total_schools: null,
      total_sec_schools: null,
      total_pry_schools: null,
      total_tert_schools: null,
      total_staffs: null,
      total_lgas: null,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 8000,
        },
      },
    };
  },
  mounted() {
    this.getTotals()
  },
  components:{
   searchData
  },
  methods: {
    close(){
      this.search=''
    },
    getTotals(){
    axios.get('/api/all-totals').then(res=>{
      if (res.status ==200) {
        this.total_schools =res.data.schools;
       this.total_sec_schools= res.data.secondary;
       this.total_pry_schools= res.data.primary;
       this.total_tert_schools= res.data.tertiary;
       this.total_staffs= res.data.staffs;
       this.total_lgas= res.data.lgas;
      }

    }).catch()
    },
    showNav() {
      this.$emit("showNav");
    },
    closeNav() {
      this.$emit("closeNav");
    },
  },
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
.search-border {
  border-color: #0f7a8a;
}
.search-bar{
  position: relative;
}
.search-box{
  position: absolute;
  width: 100%;
  min-height: 100px;
  max-height: 400px;
  overflow: auto;
  top: 38px;
  left: 0;
  z-index: 999;
  background: #f7f8fa;
  padding: 10px;

  
}
.close{
 text-align: right;
}
.text {
  padding: 0 0 0 10px;
}
.btn-home {
   
    color: #0f7a8a;
    border-color: #0f7a8a;
    font-size: 15px;
}
.logo a {
  display: flex;
  align-items: flex-end;
}
.imo {
  font-size: 32px;
}
.ministry {
  font-size: 20px;
}
.img_container {
  width: 80px;
  height: 80px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
}
.img_container img {
  width: 100%;
  height: 100%;
}
.side_info {
  display: flex;
  align-items: center;
}
.search_icon {
  font-size: 19px;
  right: -4px;
  height: 38px;
  width: 70px;
  background: #0f7a8a;
}
.updates {
  width: 400px;
  height: 100%;
}
a {
  text-decoration: none;
}
.slide {
  text-align: right;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-family: "Josefin Sans";
}
.info {
  background-color: #0f7a8a;
  /* border-bottom: 3px solid #ffff75; */
  font-size: 14px;
  padding: 5px 10px;
}
.marq {
  border-right: 1px solid white;
}
.rel_pos {
  width: 350px;
}
.mobile {
  display: none !important;
}
@media (max-width: 1024px) {
  .logo {
    font-size: 24px;
  }
  .updates {
    width: 200px;
    margin: 0 0 10px 0;
  }
  .rel_pos {
    width: 300px;
  }
}
@media (max-width: 768px) {
  .main-top {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .rel_pos {
    width: auto;
  }
  .desktop {
    display: none !important;
  }
  .logo {
    font-size: 18px;
    margin: 0 !important;
  }
  .side_info {
    flex-direction: column-reverse;
  }
  #top_nav {
    padding: 10px;
  }
  .img_container {
    width: 100px;
    height: 100px;
  }
  .imo {
    font-size: 18px;
  }
  .ministry {
    font-size: 14px;
  }
  .text {
    padding: 0 0 0 10px;
  }
  .mobile {
    display: block !important;
  }
  .logo {
    font-size: 16px;
  }
  .img_container {
    width: 60px;
    height: 60px;
  }
  .imo {
    font-size: 18px;
  }
  .ministry {
    font-size: 13px;
  }
  .text {
    padding: 0 0 0 10px;
  }
  .search_bar {
    width: 80%;
    margin: 0;
  }
  .form-control {
    height: calc(1em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
    margin-left: auto;
  }
  .search_icon {
    font-size: 12px;
    right: -1px;
    height: 26px;
    width: 50px;
  }
}
</style>