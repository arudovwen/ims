<template>
  <div id="polls">
    <div>
      <h3 class="josefin mb-4 main_header">Administrative</h3>
    </div>
    <div class="my-poll">
      <div class="newsletter shadow-sm tab">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x text-white " aria-hidden="true"></i>
          <i class="fa fa-list fa-stack-1x mc1" aria-hidden="true"></i>
        </div>
        <h4 class="josefin mc1">Applications</h4>
      </div>
      <div class="affiliates shadow-sm tab">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x text-white" aria-hidden="true"></i>
          <i class="fa fa-folder-open-o fa-stack-1x mc1" aria-hidden="true"></i>
        </div>

        <h4 class="josefin mc1">Directory</h4>
      </div>
      <div class="opinions shadow-sm tab">
        <div class="fa-stack icon">
          <i class="fa fa-circle fa-stack-2x text-white" aria-hidden="true"></i>
          <i class="fa fa-credit-card fa-stack-1x mc1" aria-hidden="true"></i>
        </div>

        <h4 class="josefin mc1">Payments</h4>
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
  border-bottom: 6px solid #006600;
}
.my-poll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tab {
  background: #f7f8fa;
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
}
</style>