<template>
    <div>
         <scrollTop/>
        <Navigation />
     
        <router-view></router-view>
        
    </div>
</template>
<script>
import Navigation from "../navigation/navigation.vue";
import scrollTop from '../scrollTopComponent';

export default {
     components:{
        Navigation,
        scrollTop,
       
    }
}
</script>
<style scoped>

</style>