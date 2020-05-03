<template>
  <div id="announcement">
    <h2>ANNOUNCEMENT !!!</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nesciunt atque amet ullam hic tenetur omnis adipisci ab, vel, et doloribus magnam quia saepe tempora mollitia, delectus voluptatem similique perferendis.</p>
    <div> <router-link to="/checkout"><button type="button" class="btn btn-success w-auto text-white">Make payment</button></router-link></div>
  </div>
</template>
<script>
export default {
     name:'announcement-component'
};
</script>
<style scoped>
#announcement {
  min-height: 150px;
  height: auto;
  margin:0 auto;
  padding: 10px;
  border-bottom: 6px solid #7f0000;
  border-top: 6px solid #7f0000;
  text-align: center;
}
#announcement p{
    padding: 0px 50px ;
}
@media(max-width: 1024px){

}
@media(max-width: 768px){
  #announcement p{
    padding: 0px 15px ;
}
h2{
  font-size: 24px;
}
}
@media(max-width: 425px){
  h2{
  font-size: 18px;
}
p{
  font-size: 15px;
}
}
</style>