<template>
  <div>
    <div class="item" v-for="(search,idx) in info" :key="idx"><router-link :to="search.link">
        {{search.value}}
        </router-link></div>
  </div>
</template>

<script>
export default {
  props: ["search"],
  data() {
    return {
      index: [
        {
          key: "",
          value:
            "List of principals & schools with WAEC candidates for 2020 Academic Year",
          link: "/directory/listings/waec-candidates",
        },
        {
          key: "",
          value:
            "List of Schools in Imo State that are registered for WASSCE 2020",
          link: "/directory/listings/wassce-schools",
        },
        {
          key: "",
          value: "Approved List Of Private Schools From UBSE Department",
          link: "/directory/listings/approved",
        },
        {
          key: "",
          value: "List of Principals and Phone Numbers",
          link: "/directory/listings/principals",
        },
        {
          key: "",
          value: "Proposed list of Transferred Principals",
          link: "/directory/listings/transfers",
        },
        {
          key: "",
          value: "List for Appointment of Principals",
          link: "/directory/listings/appointment",
        },
         {
          key: "",
          value: "Proposed list of Schools ",
          link: "/directory/schools",
        },
        { key: "", value: "Exam Development center" ,link:'/department/edc'},
        { key: "", value: "Adult/non formal education" ,link:'/department'},
        { key: "", value: "Tertiary unit/scholarship board" ,link:'/department/scholarship'},
        { key: "", value: "Quality assurance" ,link:'/department/qa'},
        { key: "", value: "Science technical tertiary education",link:'/department/science' },
        { key: "", value: "Education support service department",link:'/department/support' },
        { key: "", value: "Department of planning ,research and statistics",link:'/department/statistics' },
        { key: "", value: "Administration and finances" ,link:'/department/finance'},
        { key: "", value: "Secondary education and management board" ,link:'/department/secondary'},
        { key: "", value: "Imo state basic education board" ,link:'/department'},
         { key: "", value: "Enumeration, Revalidation/Recertification of Schools in Imo State" ,link:'/forms'},
      ],
    };
  },
  computed: {
    info() {
      if (this.$props.search) {
        return this.index.filter((item) => {
          return item.value
            .toLowerCase()
            .includes(this.$props.search.toLowerCase());
        });
      }
    },
  },
  methods: {
    searchData() {},
  },
};
</script>

<style scoped>
.item {
  padding: 5px 0;
  border-bottom: 1px solid #ccc;

}
a{
  color:rgba(0, 0, 0, .64);
  text-decoration: none;
}
a:hover{
     color:rgba(0, 0, 0, .84);
}
.item:hover {
  cursor: pointer;
  

}
</style>