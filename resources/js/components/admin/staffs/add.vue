<template>
    <div class="form">
          <div class="back"><router-link to="/admin/staffs">Go back</router-link></div>
        <form @submit.prevent="create">
                <legend class="text-center">New Staff</legend>
                <div class="form-group">
                  <label for="">First name</label>
                  <input type="text"
                    class="form-control" v-model="staff.first_name" aria-describedby="helpId" placeholder="John ">
                
                </div>
                 <div class="form-group">
                  <label for="">Middle name</label>
                  <input type="text"
                    class="form-control" v-model="staff.middle_name" aria-describedby="helpId" placeholder="James ">
                
                </div>
                 <div class="form-group">
                  <label for="">Surname</label>
                  <input type="text"
                    class="form-control" v-model="staff.surname" aria-describedby="helpId" placeholder=" doe">
                
                </div>

                 <div class="form-group">
                  <label for="">IMSSBN</label>
                  <input type="text"
                    class="form-control" v-model="staff.imssbn" aria-describedby="helpId" placeholder="">
                
                </div>
                 <div class="form-group">
                  <label for="">DOB</label>
                  <input type="date"
                    class="form-control" v-model="staff.dob" aria-describedby="helpId" placeholder="">
                
                </div>
                  <div class="form-group">
                  <label for="">DOE</label>
                  <input type="date"
                    class="form-control" v-model="staff.doe" aria-describedby="helpId" placeholder="">
                
                </div>
                  <div class="form-group">
                  <label for="">Current rank</label>
                  <input type="text"
                    class="form-control" v-model="staff.current_rank" aria-describedby="helpId" placeholder="Exec">
                
                </div>

                  <div class="form-group">
                  <label for="">CGL</label>
                  <input type="number"
                    class="form-control" v-model="staff.cgl" aria-describedby="helpId" placeholder="2">
                
                </div>
                  <div class="form-group">
                  <label for="">Department</label>
                  <input type="text"
                    class="form-control" v-model="staff.department" aria-describedby="helpId" placeholder="Exec">
                
                </div>
                  <div class="form-group">
                  <label for="">Bank nmae</label>
                  <input type="text"
                    class="form-control" v-model="staff.bank_name" aria-describedby="helpId" placeholder="Access">
                
                </div>
                  <div class="form-group">
                  <label for="">Bank Acc</label>
                  <input type="number"
                    class="form-control" v-model="staff.bank_acc" aria-describedby="helpId" placeholder="0035790356">
                
                </div>
                  <div class="form-group">
                  <label for="">BVN</label>
                  <input type="number"
                    class="form-control" v-model="staff.bvn" aria-describedby="helpId" placeholder="2218073820">
                
                </div>

               <div class="my-5 text-center">
                    <button class="button-green mx-auto" type="submit">Submit</button>
               </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            staff:{
                first_name:'',
                middle_name:'',
                surname:'',
                doe:'',
                dob:'',
                cgl:0,
                department:'',
                imssbn:'',
                current_rank:'',
                bank_name:'',
                bank_acc:null,
                bvn:null

            },
            admin:{}
        }
    },
    mounted() {
          this.admin = JSON.parse(localStorage.getItem("adminUser"));
    },
    methods: {
        create(){
             axios.post(`/api/staff`, this.staff, {
              headers: {
                Authorization: `Bearer ${this.admin.access_token}`
              }
            })
            .then(res => {
              if (res.status == 201) {
              
                this.$toasted.info('Created successfully')
              }
            });
        }
    },
}
</script>

<style scoped>
.form {
  padding: 50px 20px;
  position: relative;
}
form {
  width: 80%;
  margin: 0 auto;
  font-size: 15px;
}
.back{
    position: absolute;
    top: 20px;
    left: 20px;
}
</style>