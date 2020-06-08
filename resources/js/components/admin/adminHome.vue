<template>
    <div class="d-flex">
      
        <div class="side_bar">
              <Header />
        </div>
        <div class="main_page">
              <router-view></router-view> 
        </div>
     
    </div>
</template>
<script>
import Header from './adminHeader'
export default {
   components:{
       Header,
   } 
}
</script>
<style scoped>
.side_bar{
    width:20%;
    min-height: 100vh;
    overflow-y: scroll;
}
.main_page{
    width:80%;
     min-height: 100vh;
     background: #f7f8fa;
    overflow-y: scroll;
}
</style>