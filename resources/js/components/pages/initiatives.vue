<template>
    <div>
         <scrollTop/>
         <Navigation />
         <router-view></router-view>
         <Footer/>
        
    </div>
</template>
<script>
import Navigation from "../navigation/navigation.vue";
import scrollTop from '../scrollTopComponent'
import Footer from '../footer/footer'
export default {
   components:{
        Navigation,
        scrollTop,
        Footer
    }  
}
</script>
<style scoped>

</style>