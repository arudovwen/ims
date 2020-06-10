<template>
    <div class="container">
     <form  @submit.prevent="update" id="form">
         <legend class="mb-5">Add new school </legend>

         <div class="form-group">
           <label for="">School name</label>
           <input required type="text"
             class="form-control" v-model="school.name" aria-describedby="helpId" placeholder="school name">
         
         </div>
          <div class="form-group">
           <label for="">School email</label>
           <input required type="email"
             class="form-control" v-model="school.email"  aria-describedby="helpId" placeholder="example@email.com">
         
         </div>
          <div class="form-group">
           <label for="">School address </label>
           <input required type="text"
             class="form-control" v-model="school.address"  aria-describedby="helpId" placeholder="Address">
         
         </div>
         <div class="form-group">
           <label for="">Phone number</label>
           <input required type="text"
             class="form-control" v-model="school.phone_no"  aria-describedby="helpId" placeholder="08xxxxxxxxx">
         
         </div>

         <div class="form-group">
             <label for="">School Level</label>
             <select required class="custom-select" v-model="school.level" >
                 <option value='selected'>Select one</option>
                 <option >Nursery</option>
                 <option>Primary</option>
                 <option >Secondary</option>
                 <option >Tertiary</option>
             </select>
         </div>

        
         <div class="form-group">
             <label for="">Type</label>
             <select required class="custom-select"  v-model="school.type">
                 <option value='selected'>Select one</option>
                 <option >Boarding</option>
                 <option>Day</option>
                
             </select>
         </div>
         <div class="form-group">
             <label for="">Accreditation</label>
             <select required class="custom-select"  v-model="school.accreditation">
                 <option value='selected'>Select one</option>
                 <option >Accredited</option>
                 <option>Non-accredited</option>
                
             </select>
         </div>


         <div class="form-group">
             <label for="">LGA</label>
             <select required class="custom-select"  v-model="school.lga">
                 <option value='selected'>Select one</option>
               
             </select>
         </div>


         <div class="form-group">
             <label for="">School Type</label>
             <select required class="custom-select"  v-model="school.sector">
                 <option value='selected'>Select one</option>
                 <option >Private</option>
                 <option>Public</option>
                
             </select>
         </div>
          
         <div class="form-group">
             <label for="">Ownership</label>
             <select required class="custom-select"  v-model="school.ownership">
                 <option value='selected'>Select one</option>
                 <option >Individual </option>
                 <option>Faith Based</option>
                 
             </select>
         </div>

      <div class="form-group">
           <button type="" class="button">Create</button>
      </div>
     </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            school:{

            }
        }
    },

   components:{
     
   } ,
   mounted() {
       this.editSchool()
   },
   methods: {
         editSchool() {
      axios
        .get(`/api/get-school/${this.$route.query.id}`)
        .then(res => {
          if (res.status == 200) {
              this.school = res.data
          }
        })
        .catch(err => {
          console.log("edit -> err", err);
        });
    },
       update(){
           axios.put(`/api/update/${this.$route.query.id}`,this.school).then(res=>{
               if (res.status == 200) {
                   
               }
           }).catch(err=>{

           })
       }
   },
}
</script>
<style scoped lang="scss">
.container{
    background: #f7f8fa;
    min-height: 100vh;
    padding:30px 15px;
}
#form{
    width: 80%;
    margin: 0 auto ;
    font-size: 15px;
}
.button {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #006600;
  text-decoration: none;
  color: white;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: initial;
  position: relative;
  transition: background-color 0.6s ease;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(white, 0.1);
    border-radius: 100%;
    transition: width 0.3s ease, height 0.3s ease;
  }
  &:focus,
  &:hover {
    background: darken(#006600, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

</style>