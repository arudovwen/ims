<template>
    <div id="school">
        <addSchool  v-if="action=='add'"/>
        <editSchool v-if ="action=='edit'"/>
        <viewSchool v-if="action=='view'"/>
     
    </div>
</template>
<script>
let addSchool = () => import  ("./addSchool");
let editSchool = () => import ('./editSchool');
let viewSchool = () => import ('./viewSchool');
export default {
    data() {
        return {
            action:''
        }
    },
   components:{
     addSchool,
     editSchool,
     viewSchool
   } ,
   created() {
       this.action= this.$route.params.action
   },
}
</script>
<style scoped>
#school{
    height:100vh;
    overflow: auto;
}
</style>