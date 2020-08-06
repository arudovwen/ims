<template>
  <div id="polls">
    <div class="z" style="padding-left:15px">
      <h3 class="josefin mb-4 main_header">Administrative</h3>
    </div>
    <div class="my-poll z">
      <div class="newsletter shadow-sm tab">
       <router-link to="/forms">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
          <i class="fas fa-list-alt fa-stack-1x text-white" aria-hidden="true"></i>
        </div>
        <h4 class="josefin text-white">Forms</h4></router-link>
      </div>
      <div class="affiliates shadow-sm tab">
        <router-link to="/staffs">
          <div class="fa-stack icon">
            <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
            <i class="fa fa-envelope fa-stack-1x text-white" aria-hidden="true"></i>
          </div>
        </router-link>
       <router-link to="/staffs">
          <h4 class="josefin text-white">Staffs</h4>
      </router-link>
      </div>
      
      <div class="opinions shadow-sm tab">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
          <i class="fas fa-credit-card fa-stack-1x text-white" aria-hidden="true"></i>
        </div>

        <h4 class="josefin text-white">Epay</h4>
      </div>
       <div class="opinions shadow-sm tab">
       <router-link to="/schedule-appointment">
          <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x mc1" aria-hidden="true"></i>
          <i class="fas fa-calendar fa-stack-1x text-white" aria-hidden="true"></i>
       
        </div>

        <h4 class="josefin text-white">Schedule Appointment</h4>
       </router-link>
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
          el: ".swiper-pagination",
        },

        autoplay: {
          delay: 6000,
        },
      },
    };
  },
};
</script>

<style scoped>
#polls {
  padding: 30px 0px 65px;
  height: auto;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
}
.z {
  position: relative;
  z-index: 2;
}
.my-poll {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding:0 15px;
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
.icon {
  font-size: 65px;
  margin-bottom: 20px;
}
a{
  text-align: center;
  text-decoration: none;
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
  .icon {
    font-size: 55px;
  }
}
</style>