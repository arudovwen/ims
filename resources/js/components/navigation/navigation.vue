<template>
    <div id="navs">
        <topNav :show_nav_bar='show_nav_bar' @showNav='showNav' @closeNav='closeNav'/>
        <bottomNav :show_nav_bar='show_nav_bar' @showNav='showNav' @closeNav='closeNav'/>
        
    </div>
</template>
<script>
 import topNav from './topNavigation' ;
 import bottomNav from './mainNavigation' ;
export default {
   data() {
       return {
            show_nav_bar: true
       }
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
  },
   components:{
       topNav,
       bottomNav
   },
    created() {
    if (window.innerWidth < 768) {
      this.show_nav_bar = false;
    }
  },
    
}
</script>
<style scoped>
#navs{
 width:100%;
background: #f7f8fa;
}
</style>