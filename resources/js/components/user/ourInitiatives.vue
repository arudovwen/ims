<template>
    <div class="initiatives">
        <h3 class="josefin ini_head main_header">Our Initiatives</h3>
        <Projects/>
        <Programs/>
        
    </div>
</template>

<script>
import Projects from './projects'
import Programs from './services'
export default {
    components:{
        Projects,
        Programs
    }
}
</script>

<style scoped>
.initiatives{
      background: #f7f8fa;
      padding: 20px 0;
}
.ini_head{
    margin-left: 15px;
}
</style>