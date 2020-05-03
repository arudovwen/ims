<template>
    <div>
          <scrollTop/>
          <Navigation/>
          <!-- <router-view></router-view> -->
        
          
        
    </div>
</template>
<script>
import Navigation from './navigation/navigation'
import scrollTop from './user/scrollTopComponent'

export default {
    components:{
        Navigation,
        scrollTop
    }
}
</script>