<template>
  <div>
    <Navigation />
    <b-container>
      <b-row class>
        <b-col cols="12">
          <b-list-group>
            <b-list-group-item>
              <router-link
                to="/forms/revalidation"
              >Enumeration, Revalidation/Recertification of Schools in Imo State</router-link>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>
<style scoped>
.container {
  min-height: 70vh;
  padding: 50px 15px;
  width: 60%;
  margin:0 auto;
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
  color:#0f7a8a;
  cursor: pointer;
}
a:hover{
  font-weight: bold;
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
</style>