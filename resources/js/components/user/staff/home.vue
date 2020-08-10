<template>
  <div>
      <Navigation/>
    <b-container>
      <b-row class="h-100 justify-content-around align-items-center">
        <b-col class="coll shadow-sm tab" cols="5" >
         <a target="_blank" href="https://www.ministryofeducation.im.gov.ng:2096/">
          <div class="fa-stack icon">
            <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
            <i class="fa fa-envelope fa-stack-1x text-white" aria-hidden="true"></i>
          </div>
        </a>
        <a target="_blank" href="https://www.ministryofeducation.im.gov.ng:2096/">
          <h4 class="josefin text-white">Staff Mail</h4>
        </a>
        </b-col>
        <b-col class="coll shadow-sm tab" cols="5" >
         <a target="_blank" href="https://www.ministryofeducation.im.gov.ng:2096/">
          <div class="fa-stack icon">
            <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
            <i class="fa fa-edit fa-stack-1x text-white" aria-hidden="true"></i>
          </div>
        </a>
        <a target="_blank" href="https://www.ministryofeducation.im.gov.ng:2096/">
          <h4 class="josefin text-white">Staff Update</h4>
        </a>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navigation from '../../navigation/navigation'
import Footer from '../../footer/footer'
export default {
    components:{
        Navigation,
        Footer
    }
};
</script>
<style scoped>
.container {
  height: 70vh;
}
.coll {
  width: 100%;
  height: 200px;
  background: green;
  margin: 10px;
}
.icon {
  font-size: 65px;
  margin-bottom: 20px;
}
a{
  text-align: center;
  text-decoration: none;
}
.tab {
  background-image: linear-gradient(
    to right,
    #0f7a8a,
    #0e6d7b,
    #0c616d,
    #0b555f,
    #094952
  );
  height: auto;
  width: 24%;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.tab:hover .icon {
  transform: scale(1.04);
  transition: all 0.4s;
}
.mc1 {
  color: transparent;
}
@media (max-width:425px) {
.icon{
  font-size: 28px;
}
h4.josefin{
font-size: 16px;
}
}
</style>