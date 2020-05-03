<template>
  <div id="services">
    <h3 class="josefin mb-4 header">Programs</h3>
    <div class="services">
      <div class="service">
        <div class="service_img">
          <img src="/images/1.jpg" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
      
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
          </ul>
        </div>
      </div>
      <div class="service">
        <div class="service_img">
            <img src="/images/2.jpeg" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
          </ul>
        </div>
      </div>
      <div class="service">
        <div class="service_img">
            <img src="/images/3.jpg" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
          
          </ul>
        </div>
      </div>
      <div class="service">
        <div class="service_img">
            <img src="/images/4.jpg" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
          </ul>
        </div>
      </div>
      <div class="service">
        <div class="service_img">
            <img src="/images/5.png" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
           
          </ul>
        </div>
      </div>
      <div class="service">
        <div class="service_img">
            <img src="/images/6.jpeg" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
            <li>
             ipsum ipesloh. orem, ipsum ip
            </li>
          </ul>
        </div>
      </div>
      <div class="service">
        <div class="service_img">
            <img src="/images/7.jpg" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
           
          </ul>
        </div>
      </div>
      <div class="service">
        <div class="service_img">
            <img src="/images/8.jpg" alt />
        </div>
        <div class="service_title">Lorem, ipsum dolor.</div>
        <div class="service_about">
            <ul>
            <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
             <li>
              Lorem, ipsum ipesloh. orem, ipsum ip
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "services-component"
};
</script>
<style scoped>
#services {
  padding:35px 15px;
  background: #e5efe5;
}
.services {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 30px;
  justify-content: center;
  align-items: center;
}
.service {
  width: 300px;
  height: auto;
}
.service_img {
  width: 100%;
  height: 150px;
  background: #f7f8fa;
}
.service_img img{
  width:100%;
  height: 100%;
}
.service_title {
  background: #b7dc57;
  text-align: center;
  font-size: 18px;
  padding: 15px;
  font-weight: 300;
}
.service_about{
   color: hsl(120, 100%, 15%);
   padding:15px 20px;
}
ul, li {
  list-style: disc;
  font-size: 14px;
  line-height: 1.5;
}
@media(max-width: 1024px){
 .service{
   width: auto;
   height: auto;
 }
 .services{
   width: 100%;
 }
}
@media(max-width: 768px){
  .service_title{
    font-size: 13px;
    padding: 10px;
  }
  .service_img{
    height: 100px;
  }
  .services {
  width: 100%;
  grid-template-columns: auto auto auto ;
 
}
}
@media(max-width: 425px){
   .service_title{
    font-size: 11px;
    padding: 10px;
  }
    .services {
  width: 100%;
  grid-template-columns: auto auto ;
 
}
ul, li {
  list-style: disc;
  font-size: 12px;
  line-height: 1.5;
}
}
</style>