<template>
 
    <div
      class="d-none shadow rounded"
      v-bind:class="{scrollUp:scrollUpButton}"
      @click="scrollToTop"
    >
      <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
      <span class="up">UP</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPos: 0,
      currentHeight: 0,
      scrollUpButton: false,
      scrollPos: 0,
      currentHeight: 0
    };
  },
  watch: {
    scrollPos: "scrolling"
  },

  components: {},
  mounted() {
    window.addEventListener("scroll", e => {
      this.scrollPos = window.scrollY;
      this.currentHeight = window.innerHeight;
    });
    let user = JSON.parse(localStorage.getItem("authUser"));
    if (user !== null) {
      window.addEventListener("scroll", e => {
        this.scrollPos = window.scrollY;
        this.currentHeight = window.innerHeight;
      });
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrolling() {
      if (this.scrollPos > window.innerHeight * 0.3) {
        this.scrollUpButton = true;
      } else {
        this.scrollUpButton = false;
      }

  
    }
  }
};
</script>
<style scoped>
.scrollUp {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.74);
  opacity: 0.5;
  right: 15px;
  z-index: 99;
  bottom: 15px;
  color: white;
  font-size: 14px;
}
.up{
  transform: rotate(-90deg);
}
.scrollUp:hover {
  opacity: 1;
}
.fa-1x {
  font-size: 0.5em;
}
@media(max-width:425px){
  .scrollUp{
    display:none !important;
  }
}
</style>
