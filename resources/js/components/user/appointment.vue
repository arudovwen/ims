<template>
  <div>
    <Navigation />
    <div class="main" >
      <b-overlay :show="message" :class="{fixedHeight:message}">
        <b-container>
          <b-form @submit.prevent="submit">
            <legend class="text-center mb-4">Schedule an Appointment</legend>
            <b-form-row class="mb-5">
              <div class="intro text-center">
                <p>Please note that Office Appointments can only be scheduled on Tuesdays and Thursdays.</p>
                <p>Office appointments are strictly for official visits, kindly make alternative arrangements for unofficial visits.</p>
                <p>Only visit if absolutely necessary, if you have any enquiry, please use our <router-link to="/contact">Contact form</router-link> and a representative will respond within 48hrs.</p>

               <p>Appointment days: <strong> <span class="highlight">Tuesdays</span> & <span class="highlight">Thursdays</span> </strong></p>
             
               <p> General Appointment: <strong> 12noon - 3:00pm</strong></p>
               
               <p> Hon. Commissioner:<strong> 1:00pm - 3:00pm</strong></p>
              </div>
            </b-form-row>
            <b-form-row>
              <b-col cols="12" >
                <b-form-group>
                  <label for>Full Name</label>
                  <b-form-input
                    required
                    type="text"
                    v-model="schedule.name"
                    placeholder="Nkechi Amadi"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for="email">Email</label>
                  <b-form-input
                    required
                    type="email"
                    v-model="schedule.email"
                    placeholder="example@email.com"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for>Phone No</label>
                  <b-form-input
                    required
                    type="tel"
                    v-model="schedule.phone_no"
                    placeholder="0810XXXXXXX"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for>Organization (optional)</label>
                  <b-form-input
                    type="text"
                    v-model="schedule.organization"
                    placeholder="Organisation"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for>Type of visit</label>
                  <b-form-select v-model="schedule.type" required class="w-sm-25">
                    <b-form-select-option value disabled>Select</b-form-select-option>
                    <b-form-select-option value="group">Group</b-form-select-option>
                    <b-form-select-option value="personal">Personal</b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-form-row>
            <!-- <b-form-row class="border py-2 my-3">
              <b-col cols="12" sm="6">
                <b-form-radio v-model="schedule.detail" required value="general">General Appointment</b-form-radio>
              </b-col>
              <b-col cols="12" sm="6">
                <b-form-radio v-model="schedule.detail" required value="commissioner">Honorable Commissioner</b-form-radio>
              </b-col>
            </b-form-row> -->
            <b-form-row>
              <b-col>
                <b-form-group>
                  <label for>Reason for visit</label>
                  <b-form-textarea
                    required
                    v-model="schedule.reason_for_visit"
                    placeholder="Your reason..."
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for>Whom to see</label>
                  <b-form-input :disabled="schedule.detail=='commissioner'" type="text" required v-model="schedule.whom_to_see"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for>Department</label>
                  <b-form-select required v-model="schedule.department" :options="departments" :disabled="schedule.detail=='commissioner'">
                    <b-form-select-option value disabled>Select Department</b-form-select-option>
                  
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for>Choose Date</label>
                  <br />
                  <b-calendar
                    required
                    v-model="schedule.date"
                    :date-disabled-fn="dateDisabled"
                    locale="en"
                  ></b-calendar>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6">
                <b-form-group>
                  <label for>Choose Time</label>

                  <b-form-select
                    required
                    :class="{'border-red':error}"
                    v-model="schedule.time"
                    :options="timeField"
                  ></b-form-select>
                </b-form-group>
                <div class="error text-center" v-if="error">
                  <span class="error-text">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Time is already booked , try a different day or time
                  </span>
                </div>
              </b-col>
            </b-form-row>
            <b-form-row class="mt-5 justify-content-center">
              <b-col cols="6" class="text-center">
                <b-button type="submit">Schedule <b-spinner small label="Small Spinner" v-if="show"></b-spinner></b-button>
              </b-col>
            </b-form-row>
          </b-form>
        </b-container>

        <template v-slot:overlay>
          <div class="text-center p-5 message">
              <div class="close" @click="closeOverlay">Close </div>
               <i class="fa fa-check-circle fa-4x my-3" aria-hidden="true"></i>
             <p> Your appointment has been scheduled; please check your email for confirmation.</p> 
             <p>You will be notified if anything changes. </p>

             <p>Thank you. </p>


          </div>
                
            
        </template>
      </b-overlay>
    </div>
    <Footer />
  </div>
</template>


<script>
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
export default {
  data() {
    return {
      schedule: {
        name: "",
        email: "",
        time: null,
        date: "",
        phone_no: "",
        department: "",
        organization: "",
        whom_to_see: "",
        reason_for_visit: "",
        type: "",
        detail: "commissioner",
        
      },
      show:false,
      departments:[
          {value:'DEPARTMENT OF PLANNING RESEARCH AND STATISTICS',text:'DEPARTMENT OF PLANNING RESEARCH AND STATISTICS'},
          {value:"ADMINISTRATION AND FINANCES" ,text:"ADMINISTRATION AND FINANCES"},
          {value:"EXAMINATIONS DEVELOPMENT CENTRE (EDC)",text:"EXAMINATIONS DEVELOPMENT CENTRE (EDC)"},
          {value:"QUALITY ASSURANCE DEPARTMENT",text:"QUALITY ASSURANCE DEPARTMENT"},
          {value:"SCIENCE, TECHNICAL AND TERTIARY EDUCATION",text:"SCIENCE, TECHNICAL AND TERTIARY EDUCATION"},
          {value:"TERTIARY/SCHOLARSHIP DEPARTMENT",text:"TERTIARY/SCHOLARSHIP DEPARTMENT"},
          {value:"EDUCATION SUPPORT SERVICES DEPARTMENT (ESSD)",text:"EDUCATION SUPPORT SERVICES DEPARTMENT (ESSD)"},
          {value:"SECONDARY EDUCATION MANAGEMENT BOARD (SEMB)",text:"SECONDARY EDUCATION MANAGEMENT BOARD (SEMB)"},
          {value:" Imo State Basic Education Board (IMSUBEB)",text:" Imo State Basic Education Board (IMSUBEB)"},
          {value:" Adult/Non Formal Education (ANFE)",text:" Adult/Non Formal Education (ANFE)"}
      ],
     
      error: false,
      timeField: [],
      message: false,
    };
  },
  mounted() {
    this.handleTime();
  },

  watch: {
    "schedule.time": "checkTime",
    "schedule.date": "checkTime",
    'schedule.detail': "handleTime",
  },
  methods: {
      closeOverlay(){
           this.schedule= {
        name: "",
        email: "",
        time: null,
        date: "",
        phone_no: "",
        department: "",
        organization: "",
        whom_to_see: "",
        reason_for_visit: "",
        type: "",
      }
          this.message = false;
          this.$router.push('/')
      },
    handleTime() {
      this.timeField = [];
      if(this.schedule.detail=='commissioner'){
       this.schedule.whom_to_see = 'commissioner'
       this.schedule.department='commissioner'
      }else{
          this.schedule.whom_to_see = ''
       this.schedule.department=''
      }
      
      this.timeField.push(
        {
          value: null,
          text: "Select time",
          disabled: true,
        },
        {
          value: "12:00pm",
          text: "12:00pm",
          disabled: this.schedule.detail == "commissioner" ? true : false,
        },
        {
          value: "12:15pm",
          text: "12:15pm",
          disabled: this.schedule.detail == "commissioner" ? true : false,
        },
        {
          value: "12:30pm",
          text: "12:30pm",
          disabled: this.schedule.detail == "commissioner" ? true : false,
        },
        {
          value: "12:45pm",
          text: "12:45pm",
          disabled: this.schedule.detail == "commissioner" ? true : false,
        },
        { value: "1:00pm", text: "1:00pm" },
        { value: "1:15pm", text: "1:15pm" },
        { value: "1:30pm", text: "1:30pm" },
        { value: "1:45pm", text: "1:45pm" },
        { value: "2:00pm", text: "2:00pm" },
        { value: "2:15pm", text: "2:15pm" },
        { value: "2:30pm", text: "2:30pm" },
        { value: "2:45pm", text: "2:45pm" },
        { value: "3:00pm", text: "3:00pm" }
      );
    },
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay();
      const day = date.getDate();
      // Return `true` if the date should be disabled
      return (
        weekday === 0 ||
        weekday === 6 ||
        weekday === 1 ||
        weekday === 3 ||
        weekday === 5
      );
    },
    checkTime(e) {
      let data = {
        time: this.schedule.time,
        date: this.schedule.date,
        detail: this.schedule.department,
      };
      axios
        .post("/api/check-time", data)
        .then((res) => {
          console.log("checkTime -> res", res);
          if (res.status == 200) {
            if (res.data.status == "invalid") {
              this.error = true;
              setTimeout(() => {
                this.error = false;
              }, 3000);
            } else {
            
            }
          }
        })
        .catch();
    },

    submit() {
      this.show = true
      axios
        .post("/api/check-time", this.schedule)
        .then((res) => {
          if (res.status == 200) {
            if (res.data.status == "invalid") {
              this.error = true;
              setTimeout(() => {
                this.error = false;
              }, 3000);
            } else {
              axios.post("/api/appointment", this.schedule).then((res) => {
                if (res.status == 201) {
                  this.message = true;
                  this.$toasted.info("created");
                  this.show = false
                }
              });
            }
          }
        })
        .catch();
    },
  },
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style scoped>
.main {
  background: hsl(188deg 80% 95%);
}
.container {
  padding: 50px 20px;
}
.error {
  padding: 10px;
  border: 1px solid red;
  border-radius: 4px;
}
.error-text {
  color: red;
}
.border-red {
  border-color: red;
}
/* .highlight{
  border-bottom:4px solid #0f7a8a
} */
form {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background: #f7f8fa;
}
.fixedHeight{
    height:90vh;
    overflow: hidden;

}
.fa-check-circle{
  color:green;
}
.message{
    background:#fff;
    border:2px solid #0f7a8a;
    position: relative;
    min-width:300px;
}
.close{
    position: absolute;
    top:15px;
    right:15px;
}
@media(max-width:425px){
  form{
    width:100%;
    padding:15px;
  }
}
</style>