<template>
  <div id="polls">
    <div>
      <h3 class="josefin mb-4 main_header">Administrative</h3>
    </div>
    <div class="my-poll">
      <div class="newsletter shadow-sm tab">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x mc1 " aria-hidden="true"></i>
          <i class="fas fa-list-alt fa-stack-1x  text-white" aria-hidden="true"></i>
        </div>
        <h4 class="josefin text-white">Applications</h4>
      </div>
      <div class="affiliates shadow-sm tab">
       <router-link to="/directory">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
          <i class="fas fa-folder-open fa-stack-1x text-white" aria-hidden="true"></i>
        </div>
          </router-link>
      <router-link to="/directory">
        <h4 class="josefin text-white">Directory</h4>
         </router-link>
      
      </div>
      <div class="opinions shadow-sm tab">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
          <i class="fas fa-credit-card fa-stack-1x  text-white" aria-hidden="true"></i>
        </div>

        <h4 class="josefin text-white">Payments</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination"
        },

        autoplay: {
          delay: 6000
        }
      }
    };
  }
};
</script>

<style scoped>
#polls {
  padding: 30px 15px 65px;
  height: auto;
 
}
.my-poll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tab {
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.85) 100%
  );
  height: auto;
  width: 32%;
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
.mc1{
  color:transparent;
}
.icon {
  font-size: 65px;
  margin-bottom: 20px;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .my-poll {
    flex-direction: column-reverse;
    padding: 25px;
  }
  .tab {
    height: auto;
    width: 100%;
    margin-bottom: 30px;
  }
}
@media (max-width: 425px) {
  .icon{
    font-size: 55px;
  }
}
</style>