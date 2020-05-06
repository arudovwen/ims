<template>
  <div id="organizations">
    <h3 class="josefin ini_head main_header mb-4">Our Organizations</h3>
    <div>
      <marquee-text  :repeat="3" class="organizations">
       <div class="org2">
            <div class="org1">
          <img src="/images/imsu.jpg" alt />
          <div class="info">
            <p>IMSUBEB</p>
          </div>
        </div>
       </div>
      </marquee-text>
    </div>
  </div>
</template>
<style scoped>
#organizations {
  padding: 30px 15px;
}
.organizations {
    width: 100%;
  padding: 30px;
}
.info p{
  text-align: center;
  font-size: 15px;
}
.org2{
    width: 33.3vw;
}
.org1 {
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.org1 img {
  width: 100%;
  height: 100%;
}
@media(max-width:425px){
    .org1 {
  width: 70px;
  height: 70px;
  margin: 0 auto;
}
.info p{
  font-size: 13px;
}
}
</style>