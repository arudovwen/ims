<template>
  <div class="home">
    <div class="w-100 mobile_head" v-show="!showHeader">
      <button
        class="hamburger hamburger--collapse"
        tabindex="0"
        aria-label="Menu"
        role="button"
        aria-controls="navigation"
        :class="{'is-active':showHeader}"
        @click="handleHeader"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div class="d-flex">
      <div class="admin_side_bar" v-show="showHeader">
        <Header @handleHeader="handleHeader" :showHeader="showHeader" />
      </div>
      <div class="main_admin_page" :class="{mainmenu:showHeader}">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./adminHeader";
export default {
  data() {
    return {
      showHeader: true
    };
  },
  components: {
    Header
  },
  methods: {
    handleHeader() {
      this.showHeader = !this.showHeader;
    }
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.showHeader = false;
    }
  }
};
</script>
<style lang='scss'>
.home {
  height: 100vh;
  overflow: hidden;
}
.cancel {
  display: none;
}
.admin_side_bar {
  width: 17%;
  min-height: 100vh;
  overflow-y: scroll;
}
.main_admin_page {
  width: 83%;
  height: 100vh;
  background: #f7f8fa;
  overflow-y: scroll;
}
.mobile_head {
  background: #0F7A8A;
}
.button-red {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #dc3545;
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
    background: darken(#dc3545, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

.button-green {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #0F7A8A;
  text-decoration: none;
  border-radius: 3px;
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
    background: darken(#0F7A8A, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

.button-blue {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #000072;
  text-decoration: none;
  color: white;
  font-size: 13px;
  letter-spacing: 0.08em;
  border-radius: 3px;
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
    background: darken(#000072, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

.button-dark {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #333333;
  border-radius: 3px;
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
    background: darken(#333333, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

.button-yellow {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #ECEE53;
  text-decoration: none;
  color: white;
  border-radius: 3px;
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
    background: darken(#ECEE53, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

@media (max-width: 768px) {
  .main_admin_page {
    width: 100%;
  }

  .admin_side_bar {
    width: 60%;
  }
  .mainmenu {
    width: 35%;
  }
  .cancel {
    position: absolute;
    right: 15px;
    top: 15px;
  }
}
</style>