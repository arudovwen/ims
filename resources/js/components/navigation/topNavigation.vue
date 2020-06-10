<template>
  <div>
    <div class="info">
      <marquee-text>
        <span class="px-4 text-white marq">Total no of pupils : 23,400</span>
        <span class="px-4 text-white marq">Total no of Secondary schools : 1,450</span>
        <span class="px-4 text-white marq">Total no of Primary schools : 2,450</span>
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
      <div class="side_info ml-auto">
        <div class="form-group rel_pos ml-auto search_bar">
          <input
            type="text"
            class="form-control rounded-pill"
            name
            id
            aria-describedby="helpId"
            placeholder="Search"
          />
          <button class="search_icon abs_pos top-0 rounded-pill">
            <i class="fa fa-search fa-1x text-white" aria-hidden="true"></i>
          </button>
          <!-- <span class="fa-stack search_icon abs_pos top-0">
          <i class="fa fa-circle mc1 fa-stack-2x" aria-hidden="true"></i>
          <i class="fa fa-search fa-stack-1x text-white" aria-hidden="true"></i>
          </span>-->
        </div>
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
  padding: 10px 100px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.logo {
  margin-left: 30px;
}
 .text {
    padding: 0 0 0 10px;
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
  background: #006600;
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
  background-color: #006600;
  border-bottom: 3px solid #ffff75;
  font-size: 14px;
  padding: 5px 10px;
}
.marq {
  border-right: 1px solid white;
}
.rel_pos{
  width:350px;
}
@media (max-width: 1024px) {
  .logo {
    font-size: 24px;
  }
  .updates {
    width: 200px;
    margin: 0 0 10px 0;
  }
  .rel_pos{
  width:300px;
}
}
@media (max-width: 768px) {
  .rel_pos{
  width:auto;
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
}
@media (max-width: 425px) {
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
  .search_bar{
    width: 80%;
  }
  .form-control {
    height: calc(1em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: .8rem;
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