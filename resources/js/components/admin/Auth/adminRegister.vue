<template>
 <div>

    <div id="contact">
    <div class="right_box"></div>
    <div class="left_box"></div>
    <div class="middle_box shadow rounded">
      <form @submit.prevent="register" id="form">
        <legend class="text-center mb-5">Register admin <i class="fas fa-user-lock    "></i> </legend>

         <div class="form-group">
          <label for="name">Name</label>
          <input type="text" required
            class="form-control" name="name" id="name" aria-describedby="helpId" v-model="data.name" placeholder="">
         
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" required
            class="form-control" name="email" id="email" aria-describedby="helpId" v-model="data.email" placeholder="">
         
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" required autocomplete="false" v-model="data.password"
            class="form-control" name="password" id="passowrd" minlength="6" aria-describedby="helpId" placeholder="">
         
        </div>

        <div class="form-group">
            <button type="submit" class="button"> Register <div v-show="active" class="spinner-border spinner-border-sm text-light"></div></button>
        </div>
    </form>
    </div>
  </div>
 </div>
</template>
<script>

export default {
   data() {
       return {
         active:false,
         data:{
             name:'',
             email:'',
             password:'',
         } 
       }
   },
   methods: {
       register(){
           this.active = true
            let data = {
               
            }
            axios.post('/api/register',this.data).then(res=>{
                if (res.status == 201) {
                    this.active == false
                 
                   if (this.$route.query.redirect) {
                    this.$router.push(this.$route.query.redirect)
                }else{
                     this.$toasted.info("Redirecting to dashboard..");
                     this.$router.push("/admin/dashboard");
                }
                }
            }).catch(err=>{
                 this.active = false
            })
        },

   },
};
</script>
<style scoped lang="scss">
#contact {
  height: 100vh;
  position: relative;
}
#contact .left_box {
  background: #669f66;
  width: 50%;

  height: 100%;
  float: left;
}
#contact .right_box {
  background: #f7f8fa;
  width: 50%;

  height: 100%;
  float: right;
}
.middle_box {
  position: absolute;
  width: 40%;
  height: 70%;
  background: #ffffff;
  margin: auto;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  
}
#form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height:100%;
}
.button {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #669f66;
  text-decoration: none;
  color: white;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: initial;
  position: relative;
  transition: background-color 0.6s ease;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(white, 0.1);
    border-radius: 100%;
    transition: width 0.3s ease, height 0.3s ease;
  }
  &:focus,
  &:hover {
    background: darken(#669f66, 7%);
    outline: unset;
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

@media(max-width:425px){
.middle_box{
    width:90%;
}
}

</style>