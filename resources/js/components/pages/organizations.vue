<template>
  <div>
    <scrollTop />
    <Navigation />
    <div class="container-fluid">
      <h2 class="center_header text-center">List of Organizations</h2>
      <div class="main-content mb-5">
         <div class="holder_1 shadow flex-xs-column">
           <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
            Exam Development Centre  (EDC)
          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
             Adult/Non Formal Education <br>(ANFE)

          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
            Education Support Services Department <br> (ESSD)

          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
            Quality Assurance  <br>(QA)

          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
            Science Technical Tertiary Education <br> (STTE)


          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
          Universal Basic/Secondary Education <br> (UBSE)


          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
          Tertiary Unit/Scholarship Board 


          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-white p-2">
           Secondary Education Management Board <br>(SEMB)


          </div>
        </div>
         <div class="holder_1 shadow flex-xs-column">
            <div class="overlay-blue">
              <h5>About</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum quos eius aliquam minus? Cupiditate ad exercitationem commodi laborum vero recusandae numquam itaque </p>
           </div>
          <div class="box_1 bg-white">
            <img src="/images/govt.jpeg" alt />
          </div>
          <div class="box_2 bg-whiten p-2">
           Imo State Basic Education Board <br> (IMSUBEB)

          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>
<script>
import Navigation from "../navigation/navigation.vue";
import scrollTop from "../scrollTopComponent";
export default {
  components: {
    Navigation,
    scrollTop
  }
};
</script>
<style scoped>
.container-fluid {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
}
.main-content {
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap:40px;
  justify-content: center;
  align-items: center;
  padding: 50px 15px;
}
.holder_1  {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all .4s;
}
.overlay-blue{
  top: 100%;
  right:100%;
  position: absolute;
  transition: all .4s ease-out;
  background: rgba(15, 79, 89,.95);
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  text-align: center;
}
.holder_1:hover .overlay-blue{
  top: 0;
  right: 0;
}
.box_1 {
  height: 50%;
}
.box_2 {
  background:#f7f8fa;
  height: 50%;
  font-size: 20px;
  font-family: 'Josefin Sans';
  text-align: center;
  color:rgb(15, 79, 89);
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box_1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h5 {
  color: #ecee53;
}
.bg-green {
  background: rgb(15, 79, 89);
  color: white;

}
.bg-white {
  background-color: #f7f8fa !important;
}
@media (max-width: 768px) {
  .container-fluid{
    width:100%;
  }
  .main-content {

  grid-template-columns: 1fr 1fr 1fr;
 
}
.box_2{
  font-size: 17px;
}

}
@media (max-width: 425px) {
  .container-fluid{
    width:100%;
  }
  .main-content {
  padding: 50px 0;
  grid-template-columns: 1fr 1fr ;
 grid-column-gap: 15px;
}
.box_2{
  font-size: 15px;
}

.overlay-blue{
  font-size: 12px;
  padding:10px;
}
h5{
  font-size: 15px;
}

}
</style> 