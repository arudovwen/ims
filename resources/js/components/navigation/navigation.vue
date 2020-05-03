<template>
    <div id="navs">
        <topNav/>
        <bottomNav/>
        
    </div>
</template>
<script>
 import topNav from './topNavigation';
 import bottomNav from './mainNavigation';
export default {
   
   components:{
       topNav,
       bottomNav
   }
    
}
</script>
<style scoped>
#navs{
 width:100%;
background: #f7f8fa;
}
</style>