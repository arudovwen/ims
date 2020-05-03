<template>
  <div id="bottom-footer">
    <div class="bottom_footer">
      <span>Copyright &copy; {{new Date().getFullYear()}} Imo state ministry of education</span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#bottom-footer {
  width: 100%;
  padding: 15px;
  border-top: 1px solid #ccc;
}
.bottom_footer {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
@media(max-width: 1024px){
.bottom_footer{
  width:100%;

}
}
@media(max-width: 768px){
 .bottom_footer{
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
}
@media(max-width: 425px){
  
}
</style>