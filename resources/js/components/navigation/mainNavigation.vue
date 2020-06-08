<template>
  <div id="bottom_nav">
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
      <strong>Menu</strong>
    </span>
    <ul class="nav_bar animated slideInRight" v-if="show_nav_bar">
      <li>
        <div>
          <router-link to="/">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fa fa-home nav fa-stack-1x icon" aria-hidden="true"></i>
            </div>
            <div class="nav_text">Home</div>
          </router-link>
        </div>
      </li>
         <li>
        <div>
          <router-link to="/about">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fa fa-info-circle nav fa-stack-1x" aria-hidden="true"></i>
            </div>
            <div class="nav_text">About us</div>
          </router-link>
        </div>
      
      </li>
       <li>
        <div>
          <router-link to="/stakeholders">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fa fa-users nav fa-stack-1x" aria-hidden="true"></i>
            </div>
            <div class="nav_text">Stakeholders</div>
          </router-link>
        </div>
      
      </li>
     

      <li>
        <div>
          <router-link to="initiatives">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fas fa-lightbulb nav fa-stack-1x"></i>
            </div>
            <div class="nav_text">Our Initiatives</div>
          </router-link>
        </div>
        <ul class="sub_nav">
          <li  class="mini_nav_text">Programs</li>
          <li  class="mini_nav_text">Projects</li>
        </ul>
      </li>
      <li>
        <div>
          <router-link to="/organizations">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fa fa-building-o nav fa-stack-1x icon" aria-hidden="true"></i>
            </div>
            <div class="nav_text">Our Organizations</div>
          </router-link>
        </div>
      </li>
      <li>
        <div>
          <router-link to="/administratives">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fas fa-user-tie nav fa-stack-1x"></i>
            </div>
            <div class="nav_text">Administrative</div>
          </router-link>
        </div>
        <ul class="sub_nav">
          <li  class="mini_nav_text">Applications</li>
          <router-link to="/directory">
            <li class="mini_nav_text">Directory</li>
          </router-link>
        
         
        </ul>
      </li>
     
      <li>
        <div>
          <router-link to="/blog">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fas fa-blog nav fa-stack-1x"></i>
            </div>
            <div class="nav_text">News</div>
          </router-link>
        </div>
      </li>
      <li>
        <div>
          <router-link to="/contact">
            <div class="fa-stack icon">
              <i class="fa fa-circl fa-stack-2x" aria-hidden="true"></i>
              <i class="fas fa-mail-bulk nav fa-stack-1x"></i>
            </div>
            <div class="nav_text">Contact</div>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "main-nav-component",
  data() {
    return {
      show_nav_bar: true
    };
  },
  created() {
    if (window.innerWidth < 768) {
      this.show_nav_bar = false;
    }
  },
  watch: {
    $route: "closeNav"
  },
  methods: {
    showNav() {
      this.show_nav_bar = !this.show_nav_bar;
    },
    closeNav() {
      if (window.innerWidth < 768) {
        this.show_nav_bar = false;
      }
    }
  }
};
</script>
<style scoped>
#bottom_nav {
  width: 100%;
  position: relative;
  background-color: #006600;
  border-top: 3px solid #ffff75;
  z-index: 99;
}
.mobile {
  display: none !important;
}
.mini_nav_text{
  font-size: 12px !important;
  text-transform: uppercase;
}
.slideInRight {
    -webkit-animation-name: none;
    animation-name: none;
}
strong {
  color: hsl(120, 100%, 95%);
}
.nav_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  margin: 0;
}
.nav_bar li {
  text-align: center;
  color: #fff;
  font-weight: normal;
  font-size: 15px;
  border-bottom: 5px solid transparent;
  padding: 10px;
  position: relative;
}
.nav_bar li:hover {
  transition: border 0.6s;
  border-color: yellow;
}
.nav_bar li a {
  color: white;
  height: 5.2em;
  text-decoration: none;
  text-transform: uppercase;
}
.nav_bar li:hover a {
  color: yellow;
}
.nav_bar li a .nav_text {
  transition: all 0.6s;
}
.nav_bar li:hover a .nav_text {
  transform: translateY(10px);
}
.icon {
  margin-left: auto;
  margin-right: auto;
  display: block;
  box-shadow: 0 0 0 20px transparent;
  background: rgba(255, 255, 255, 0.1);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: box-shadow 0.6s ease-in-out;
  -moz-transition: box-shadow 0.6s ease-in-out;
  -o-transition: box-shadow 0.6s ease-in-out;
  -ms-transition: box-shadow 0.6s ease-in-out;
  transition: box-shadow 0.6s ease-in-out;
  border-radius: 50%;
}
.nav_bar li a div {
  margin-top: 0.2em;
}
.icon .fa-circl {
  color: rgb(255, 255, 255, 0.1);
}
.nav_bar_icon::before {
  padding: 4px;
  border-radius: 50%;
  font-size: 1em;
}
.nav_bar li:hover a .icon {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.4s ease-in-out;
  -moz-transition: box-shadow 0.4s ease-in-out;
  -o-transition: box-shadow 0.4s ease-in-out;
  -ms-transition: box-shadow 0.4s ease-in-out;
  transition: box-shadow 0.4s ease-in-out;
}

.sub_nav {
  display: none;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  box-shadow: 0 0 4px 1px #f7f8fa;
  top: 85px;
  width: 140px;
}
.sub_nav::before {
  content: "";
  background: #fff;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(-45deg);
  position: absolute;
  top: -6px;
  width: 20px;
  height: 20px;
}
.sub_nav li {
  border-bottom: 1px solid #f7f8fa;
  padding: 10px 5px;
  color: #777777;
}
.nav_bar li:hover .sub_nav {
  transition: display ease-in-out;
  display: block;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .nav_bar {
    flex-direction: column;
  }
  .mobile {
    display: block !important;
  }
  .nav_bar li {
    width: 100%;
  }
  .nav_bar li a {
    display: flex;
    height: auto;
    align-items: center;
  }
  .icon {
    margin: 0;
    margin-right: 30px;
  }
  .sub_nav {
    display: none;
  }
  .slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
}
}
@media (max-width: 425px) {
}
</style>