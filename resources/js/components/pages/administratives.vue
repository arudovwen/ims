<template>
    <div>
         <scrollTop/>
        <Navigation />
     
         <transition name="fade">
                    <router-view></router-view>
            </transition>
        
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