<template>
  <div class="main-content">
    <div class="container">
      <h3 >{{school.name}}</h3>
      <p class="mb-5">{{school.sector}} School</p>

      <div class="info">
        <div class="info_1">
          <h4 class="mb-3 text-muted">School Information</h4>
          <ul>
            <li>Level : {{school.level}}</li>
            <li>LGA : {{school.lga}}</li>
            <li>Accreditation : {{school.accreditation}}</li>
            <li>Type : {{school.type}}</li>
            <li>Ownership : {{school.ownership == 'individual'?'Individually Owned': 'Faith Based' }}</li>
          
            
          </ul>
        </div>
        <div class="info_2">
          <h4 class="mb-3 text-muted">Contact Information</h4>
          <ul>
            <li>Email : {{school.email}}</li>
            <li>Phone number : {{school.phone_no}}</li>
            <li>Address : {{school.address}}</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      school: {}
    };
  },
  components: {},
  mounted() {
    this.viewSchool();
  },
  methods: {
    viewSchool(id) {
      axios
        .get(`/api/get-school/${this.$route.params.id}`)
        .then(res => {
          if (res.status == 200) {
            this.school = res.data;
          }
        })
        .catch(err => {
          console.log("edit -> err", err);
        });
    }
  }
};
</script>
<style scoped>
.main-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
 
}
.container {
  padding: 30px 15px;
  height: 100%;
   background: #f7f8fa;
   margin-top: 30px;
}
.info {
  display: flex;
}
.info_1,
.info_2 {
  width: 50%;
  padding: 15px;
}
li{
    margin-bottom: 24px;
    font-size: 16px;
}
</style>