<template>
  <div class="initiatives">
    <h3 class="josefin ini_head main_header mb-5">Directories</h3>
    <b-container>
      <b-row class="">
        <b-col cols="12" sm="4" class="mb-4">
          <b-card tag="article" style="max-width: 20rem;" class="mb-2 shadow-sm">
            <div class="mb-2">
              <b-avatar src="/images/waec.jpg" class="ava" size="8rem"></b-avatar>
            </div>
            <template v-slot:footer>
              <router-link to="/directory/listings/waec-candidates">
                <strong>WAEC Candidates</strong>
                <br />

                <small
                  class="text-center"
                >List of principals & schools with WAEC candidates for 2020 Academic Year</small>
              </router-link>
            </template>
          </b-card>
        </b-col>

        <b-col cols="12" sm="4" class="mb-4">
          <b-card tag="article" style="max-width: 20rem;" class="mb-4 shadow-sm">
            <div class="mb-2">
              <b-avatar src="/images/wassce.jpg" class="ava" size="8rem"></b-avatar>
            </div>
            <template v-slot:footer>
              <router-link to="/directory/listings/wassce-schools">
                <strong>WASSCE School candidates</strong>
                <br />

                <small>List of Schools in Imo State that are registered for WASSCE 2020</small>
              </router-link>
            </template>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4" class="mb-1">
          <b-card tag="article" style="max-width: 20rem;" class="mb-4 shadow-sm">
            <div class="mb-2">
              <b-avatar src="/images/approved.jpg" class="ava" size="8rem"></b-avatar>
            </div>
            <template v-slot:footer>
              <router-link to="/directory/listings/approved">
                <strong>Approved Private Schools</strong>
                <br />

                <small>Approved List Of Private Schools From UBSE Department</small>
              </router-link>
            </template>
          </b-card>
        </b-col>
      </b-row>

      <div class="text-center"><router-link to="/directory"> <p class="mc1 view-more">View more</p></router-link></div>

      <b-row class="mobile-view">
        <b-col cols="12" sm="4" class="mb-4">
          <b-card tag="article" style="max-width: 20rem;" class="mb-2 shadow-sm">
            <div class="mb-2">
              <b-avatar src="/images/principal1.jpg" class="ava" size="8rem"></b-avatar>
            </div>
            <template v-slot:footer>
              <router-link to="/directory/listings/principals">
                <strong>Principal Information</strong>
                <br />

                <small>List of Principals and Phone Numbers</small>
              </router-link>
            </template>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4" class="mb-4">
          <b-card tag="article" style="max-width: 20rem;" class="mb-2 shadow-sm">
            <div class="mb-2">
              <b-avatar src="/images/transfer.jpg" class="ava" size="8rem"></b-avatar>
            </div>
            <template v-slot:footer>
              <router-link to="/directory/listings/transfers">
                <strong>Transfer LIST</strong>
                <br />

                <small>Proposed list of Transferred Principals</small>
              </router-link>
            </template>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4" class="mb-4"> 
          <b-card tag="article" style="max-width: 20rem;" class="mb-2 shadow-sm">
            <div class="mb-2">
              <b-avatar src="/images/schooll.jpg" class="ava" size="8rem"></b-avatar>
            </div>
            <template v-slot:footer>
              <router-link to="/directory/schools">
                <strong>Schools LIST</strong>
                <br />

                <small>General list of Schools</small>
              </router-link>
            </template>
          </b-card>
        </b-col>
      </b-row>
      <b-row class=" justify-content-center">
           <router-link to="/directory" class="mc1">View all</router-link>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.initiatives {
  padding: 40px 0;
}
.container {
  background: transparent;
}
.ini_head {
  margin-left: 15px;
}
.card {
  margin: 0 auto;
  text-align: center;
}
a small {
  font-size: 15px;
  color: #0f7a8a;
}
a:hover {
  color: #0f7a8a;
}
.card-footer {
  text-align: center;
}
strong {
  font-size: 17px;
  color: rgba(0, 0, 0, 0.84);
  text-transform: uppercase;
}
/* .card{
  border:2px solid rgba(15, 79, 89, 0.95);
 
} */
.card:hover .card-body div .ava {
  transition: all 1s ease-in-out;
  transform: scale(1.1);
  /* transform: rotateX(360deg); */
}
.view-more{
  display: none;
}
@media(max-width:425px){
  .mobile-view{
    display: none !important;
  }
  .view-more{
    display: block;
  }
}
</style>