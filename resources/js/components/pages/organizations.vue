<template>
  <div class="view">
    <Navigation/>
    <div class="container-fluid">
      <h2 class="center_header text-center josefin_bold">Departments</h2>
      <div class="main-content mb-5">
        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/edc">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>

          <div class="box_1">
            <img src="/images/exam.svg" alt />
          </div>
          <div class="box_2 p-2">Exam Development Centre (EDC)</div>
        </div>
        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to>
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/checkup.svg" alt />
          </div>
          <div class="box_2 p-2">
            Adult/Non Formal Education
            (ANFE)
          </div>
        </div>
        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/scholarship">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/scholarship.svg" alt />
          </div>
          <div class="box_2 p-2">Tertiary Unit/Scholarship Board</div>
        </div>

        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/qa">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/qa.svg" alt />
          </div>
          <div class="box_2 p-2">
            Quality Assurance
            <br />(QA)
          </div>
        </div>
        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/science">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/clock.svg" alt />
          </div>
          <div class="box_2 p-2">
            Science Technical Tertiary Education
            (STTE)
          </div>
        </div>
        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/support">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/technical-support.svg" alt />
          </div>
          <div class="box_2 p-2">
            Education Support Services Department
            (ESSD)
          </div>
        </div>
        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/statistics">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/university.svg" alt />
          </div>
          <div class="box_2 p-2">Department of Planning Research and Statistics</div>
        </div>

        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/finance">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/presentation.svg" alt />
          </div>
          <div class="box_2 p-2">
            Administration and
            <br />
Finances
          </div>
        </div>
        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="/department/secondary">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/book.svg" alt />
          </div>
          <div class="box_2 p-2">
            Secondary Education Management Board
            (SEMB)
          </div>
        </div>

        <div class="holder_1 shadow flex-xs-column">
          <div class="overlay-blue">
            <router-link to="">
              <b-button variant="success">Visit Department</b-button>
            </router-link>
          </div>
          <div class="box_1">
            <img src="/images/education.svg" alt />
          </div>
          <div class="box_2 p-2">
            Imo State Basic Education Board
            (IMSUBEB)
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Navigation from "../navigation/navigation.vue";
import Footer from '../footer/footer'
import scrollTop from "../scrollTopComponent";
export default {
  components: {
    Navigation,
    scrollTop,
    Footer
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
  grid-row-gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 50px 15px;
}
.holder_1 {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  text-align: center;
  border:1px solid  #ecee53;
}
.overlay-blue {
  top: 100%;
  right: 100%;
  position: absolute;
  transition: all 0.4s ease-out;
  background: rgba(15, 79, 89, 0.95);
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
.holder_1:hover .overlay-blue {
  top: 0;
  right: 0;
}
img {
  object-fit: contain !important;
}
.box_1 {
  height: 50%;
  padding: 30px;
}
.box_2 {
  color: #ecee53;
  height: 50%;
  font-size: 20px;
  font-family: "Josefin Sans";
  text-align: center;
  background: rgb(15, 79, 89);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box_1 img {
  width: 100px;
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
  .container-fluid {
    width: 100%;
  }
  .main-content {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .box_2 {
    font-size: 17px;
  }
}
@media (max-width: 425px) {
  .container-fluid {
    width: 100%;
  }
  .main-content {
    padding: 50px 0;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
  }
  .box_2 {
    font-size: 15px;
  }

  .overlay-blue {
    font-size: 12px;
    padding: 10px;
  }
  h5 {
    font-size: 15px;
  }
}
</style> 