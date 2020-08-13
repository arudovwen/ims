<template>
  <div>
    <Navigation />
     <b-row>
      <router-link to="/forms">
        <b-button variant="outline-darkgreen" class="m-2 mx-5">Back</b-button>
      </router-link>
    </b-row>
     <Revalidation  v-if="$route.params.name == 'revalidation'"/>
     <NewSchool  v-if="$route.params.name == 'school-registration'"/>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer";

import Revalidation from './revalidation'
import NewSchool from './newSchool'
export default {

  components: {
    Navigation,
    Footer,
    Revalidation,
    NewSchool
  },
 
};
</script>
<style scoped>
.container {
  min-height: 70vh;
  padding: 50px 15px;
}
form {
  border: 1px solid #ccc;
  padding: 40px;
  border-radius: 10px;
}
.coll {
  width: 100%;
  height: 200px;
  background: green;
  margin: 10px;
}
.icon {
  font-size: 65px;
  margin-bottom: 20px;
}
a {
  text-align: center;
  text-decoration: none;
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
li {
  padding: 10px 0;
}
ol {
  list-style: lower-alpha;
}
</style>