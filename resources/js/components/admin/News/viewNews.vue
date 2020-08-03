<template>
  <div class="main">
    <div class="top_nav">
      <div class="side_">
        
          <i class="fas fa-edit text-blue mr-4" @click="edit">Edit</i>
      
        <i @click="del" class="fa fa-trash text-red" aria-hidden="true">Delete</i>
      </div>
      <div class="left_side">
      <b-button v-if="item.status == 'inactive'" @click="verify"> <span > Verify <i
          class="fa fa-check text-green"
          aria-hidden="true"
          
          
        ></i></span></b-button>
     <b-button  v-else @click="unverify"> <span>  Unverify</span></b-button>
      </div>
    </div>
    <div class="main_body">
      <h3>{{item.subject}}</h3>
      <p>{{item.category}}</p>
       <div class="my-3"><img :src="item.cover_image" height="100" alt=""></div>
      <div class="body" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
      edit(){
           if (this.$route.params.type == "news") {
                this.$router.push({
                 name:'EditNews',
                params:{
                  type:'news',
                  id:this.item.id
                }
              })
           }else{
                this.$router.push({
                 name:'EditNews',
                params:{
                  type:'announcement',
                  id:this.item.id
                }
              })
           }
         
      },
    verify() {
      let data = {
        status: "active"
      };
      if (this.$route.params.type == "news") {
        axios.put(`/api/verify/${this.$route.params.id}`, data).then(res => {
          if (res.status == 200) {
            this.getNews();
          }
        });
      } else {
        axios.put(`/api/verify-a/${this.$route.params.id}`, data).then(res => {
          if (res.status == 200) {
            this.getNews();
          }
        });
      }
    },
    unverify() {
      let data = {
        status: "inactive"
      };
      if (this.$route.params.type == "news") {
        axios.put(`/api/unverify/${this.$route.params.id}`, data).then(res => {
          if (res.status == 200) {
            this.getNews();
          }
        });
      } else {
        axios.put(`/api/unverify-a/${this.$route.params.id}`, data).then(res => {
          if (res.status == 200) {
            this.getNews();
          }
        });
      }
    },
    getNews() {
      if (this.$route.params.type == "news") {
        axios.get(`/api/get-new/${this.$route.params.id}`).then(res => {
          if (res.status == 200) {
            this.item = res.data;
          }
        });
      } else {
        axios
          .get(`/api/get-announcement/${this.$route.params.id}`)
          .then(res => {
            if (res.status == 200) {
              this.item = res.data;
            }
          });
      }
    },
    del() {
      let d = confirm("Are you sure?");
      if (d) {
        if (this.$route.params.type == "news") {
          axios
            .delete(`/api/delete-news/${this.$route.params.id}`)
            .then(res => {
              if (res.status == 200) {
                this.$router.push("/admin/news");
              }
            });
        } else {
          axios
            .delete(`/api/delete-announcement/${this.$route.params.id}`)
            .then(res => {
              if (res.status == 200) {
                  this.$toasted.info('Deleted')
                this.$router.push("/admin/news");
              }
            });
        }
      }
    }
  }
};
</script>

<style scoped>
.main {
  padding: 40px 20px;
}
.main_body {
  background: white;
  padding: 20px;
}
.top_nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.text-blue {
  color: blue;
}
</style>