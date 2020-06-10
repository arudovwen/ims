<template>
 <div>
   <Login v-if="auth == 'login'"/>
   <Register  v-if="auth=='register'"/>
 </div>
</template>
<script>
let Login = () => import('./adminLogin')
let Register = () => import('./adminRegister')
export default {
    data() {
        return {
            auth:''
        }
    },
   components:{
       Login,
       Register
   },
   mounted() {
       this.auth = this.$route.params.auth
   },
};
</script>


</style>