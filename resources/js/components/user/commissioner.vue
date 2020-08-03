<template>
  <div id="commissioner">
    <div class="square_1">
      <div class="square_2">
        <div class="square_3"></div>
      </div>
    </div>
    <div class="square_4">
      <div class="square_5">
        <div class="square_6"></div>
      </div>
    </div>
    <div>
      <h3 class="josefin mb-4 main_header">Administration</h3>
      <div class="commiss">
          <div class="governor box shadow-sm">
        <div class="top_header">
          <small>His Excellency</small>
          <h4 class="josefin">SEN. HOPE UZODINMA</h4>
            <h5 class="josefin ">Governor, Imo state</h5>
          <!-- <p>Lorem ipsum dolor, sit amet  itaque... <span class="mc1">read more</span></p> -->
        </div>
      
        <div class="img">
          <img src="/images/govt.jpeg" alt="Governor, imo state" />
        </div>
      </div>
        <div class="commissioner box shadow-sm">
          <div class="top_header">
            <h4 class="josefin">PROF.B.T.O . IKEGWUOHA</h4>
            <h5 class="josefin">Honorable Commissioner For Education, Imo state</h5>
            <!-- <p>Lorem ipsum dolor, sit amet  itaque... <span class="mc1">read more</span></p> -->
          </div>

          <div class="img">
            <img src="/images/comm.jpeg" alt="Commissioner of Education, Imo state" />
          </div>
        </div>

        <div class="perm_sec box shadow-sm">
          <div class="top_header">
            <h4 class="josefin">Mrs B.I. Uwandu-Uzoma, Ph.D</h4>
            <!-- <small>BA(Hons), MSc, MA, Ph.D</small> -->
            <h4 class="josefin">Permanent Secretary, Imo state Ministry of Education</h4>
            <!-- <p>Lorem ipsum dolor, sit amet  itaque... <span class="mc1">read more</span></p> -->
          </div>

          <div class="img">
            <img src="/images/perm.png" alt="Permanent Secretary, Imo state" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commisioner-component",
  data() {
    return {};
  }
};
</script>
<style scoped>
#commissioner {
  position: relative;
 padding: 100px 0 65px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #0f7a8a,
    #0e6d7b,
    #0c616d,
    #0b555f,
    #094952
  );
  overflow: hidden;
  display: flex;
  align-items: center;
}
.main_header {
  position: absolute;
  top: 20px;
  left: 15px;
}
.commiss {
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
}

.box {
  width: 25%;
  height: 350px;
  background: #f7f8fa;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.mc1 {
  cursor: pointer;
  text-decoration: underline;
}
.box img {
  width: 100%;
  height: 100%;
}
p {
  margin: 0;
  font-size: 15px;
}
h4 {
  font-size: 1.25rem;
}
.top_header {
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 15px 10px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  width: 100%;
  margin: 0;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main_header::after {
  border-bottom: 2px solid #e6f1f3;
}
.main_header {
  color: #e6f1f3;
}
.square_1 {
  border: 10px solid #ecee53;
  padding: 10px;
  position: absolute;
  bottom: 50%;
  margin-bottom: -60px;
  height: 120px;
  width: 120px;
  left: -60px;
  transform: rotate(45deg);
}
.square_2 {
  border: 10px solid white;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.square_3 {
  background: #ecee53;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.square_4 {
  border: 10px solid #ecee53;
  padding: 10px;
  position: absolute;
  bottom: 50%;
  margin-bottom: -60px;
  height: 120px;
  width: 120px;
  right: -60px;
  transform: rotate(45deg);
}
.square_5 {
  border: 10px solid white;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.square_6 {
  background: #ecee53;
  padding: 10px;
  width: 100%;
  height: 100%;
}
@media (max-width: 1024px) {
  .square_1 {
    border: 7px solid #ecee53;
    padding: 5px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -30px;
    height: 60px;
    width: 60px;
    left: -30px;
    transform: rotate(45deg);
  }
  .square_2 {
    border: 7px solid white;
    padding: 7px;
    width: 100%;
    height: 100%;
  }
  .square_3 {
    background: #ecee53;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .square_4 {
    border: 7px solid #ecee53;
    padding: 5px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -30px;
    height: 60px;
    width: 60px;
    right: -30px;
    transform: rotate(45deg);
  }
  .square_5 {
    border: 7px solid white;
    padding: 7px;
    width: 100%;
    height: 100%;
  }
  .square_6 {
    background: #ecee53;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 768px) {
  .governor {
    margin-top: 0;
  }
  #commissioner {
    padding: 30px 15px 30px;
    height: auto;
  }
  .commiss {
    flex-direction: column;
    height: auto;
    padding: 15px 25px;
    width: 80%;
  }
  .square_1 {
    border: 5px solid #ecee53;
    padding: 3px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -20px;
    height: 40px;
    width: 40px;
    left: -20px;
    transform: rotate(45deg);
  }
  .square_2 {
    border: 5px solid white;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .square_3 {
    background: #ecee53;
    padding: 2.5px;
    width: 100%;
    height: 100%;
  }
  .square_4 {
    border: 5px solid #ecee53;
    padding: 4px;
    position: absolute;
    bottom: 50%;
    margin-bottom: -20px;
    height: 40px;
    width: 40px;
    right: -20px;
    transform: rotate(45deg);
  }
  .square_5 {
    border: 5px solid white;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .square_6 {
    background: #ecee53;
    padding: 2.3px;
    width: 100%;
    height: 100%;
  }
  .left_box,
  .right_box {
    width: 100%;
  }
  .top_head {
    margin: 0 !important;
  }
  .comm_image {
    height: auto;
  }
  .box {
    width: 70%;
    margin: 30px auto;
    height: 300px;
  }
  .main_header{
    position: relative;
  }
}
@media (max-width: 425px) {
  .img_text p {
    font-size: 12.5px;
  }
  .box {
    width: 100%;
  }
  h4 {
    font-size: 16px !important;
  }
  h5 {
    font-size: 15px !important;
  }
  .commiss {
    padding: 15px 0;
  }
  .top_header {
    padding: 5px 10px;
  }
  .comm_body {
    margin-bottom: 30px;
  }
}
</style>