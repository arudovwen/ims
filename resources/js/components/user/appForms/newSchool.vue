<template>
  <div>
    <b-container>
      <b-row class>
        <b-col>
          <b-form @submit.prevent="submit">
            <h3 class="text-center mb-5">REGISTRATION OF NEW SCHOOLS IN IMO STATE</h3>
            <b-form-row class="justify-content-center" v-if="one">
              <b-row class="py-4 w-100" >
          <b-col cols="12" sm="4">
            <b-form-group>
              <label for>Full name</label>
              <b-form-input v-model="data.full_name" type="text" placeholder="Enter name"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="5">
            <b-form-group>
              <label for>Email</label>
              <b-form-input v-model="data.email" type="email" placeholder="Enter email address"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="3">
            <b-form-group>
              <label for>Phone number</label>
              <b-form-input v-model="data.phone" type="number" max="11" placeholder="Enter phone number"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
              <!-- section one  -->
              <b-form-group class="text-center">
                <p>Thank you for working with us to make education in Imo State better, this is the first part of a multi-phase application process.</p>
                <p>Before you begin your application, please take the time to review the table below, which captures all applicable fees.</p>

                <b-table :fields="appFields" :items="appItems" responsive hover></b-table>

                <b-button @click="handleSwitch('two')">Begin Application</b-button>
              </b-form-group>
            </b-form-row>
            <!-- section two  -->
            <b-form-row v-if="two">
              <b-col cols="12">
                <h5>GENERAL INFORMATION</h5>
                <b-form-group>
                  <label for>Proposed Name of School</label>
                  <b-form-input
                    type="text"
                    v-model="data.school"
                    placeholder="Harolds Nursery and primary school"
                  ></b-form-input>
                </b-form-group>

                <b-form-group>
                  <label for>Full Address</label>
                  <b-form-input type="text" v-model="data.full_address" placeholder="No 1, Orlu"></b-form-input>
                </b-form-group>

                <b-form-group>
                  <label for>Lga</label>
                  <b-form-select v-model="data.lga">
                    <b-form-select-option value>Select Lga</b-form-select-option>
                    <b-form-select-option
                      v-for="(item,idx) in lgas"
                      :key="idx"
                      :value="item.name"
                    >{{item.name}}</b-form-select-option>
                  </b-form-select>
                </b-form-group>

                <b-form-group>
                  <label for>School Category</label>

                  <b-form-checkbox value="nursery" v-model="data.category">Nursery</b-form-checkbox>
                  <b-form-checkbox value="primary" v-model="data.category">Primary</b-form-checkbox>
                  <b-form-checkbox value="secondary" v-model="data.category">Secondary</b-form-checkbox>
                  <!-- <b-form-checkbox value="tertiary" v-model="data.category">Tertiary</b-form-checkbox>
                  <b-form-checkbox value="all of the above" v-model="data.category">All of the above</b-form-checkbox> -->
                </b-form-group>

                <b-form-group>
                  <label for>School Ownership</label>

                  <b-form-radio value="private" v-model="data.ownership">Private</b-form-radio>
                  <b-form-radio
                    value="faith_based_mission_schools"
                    v-model="data.ownership"
                  >Faith-based/Mission Schools</b-form-radio>
                  <b-form-radio
                    value="corporate"
                    v-model="data.ownership"
                  >Corporate (Military, Police, Paramilitary etc.)</b-form-radio>
                </b-form-group>
              </b-col>
              <b-form-row class="justify-content-between w-100 my-3">
                <b-button @click="handleSwitch('one')">Previous</b-button>
                <b-button @click="handleSwitch('three')">Next</b-button>
              </b-form-row>
            </b-form-row>
            <!-- section 3  -->
            <b-form-row v-if="three">
              <b-col cols="12">
                <h5>CONTACT PERSON</h5>
                <label for>Name of Proprietor</label>
                <b-form-row class="mb-3">
                  <b-col>
                    <b-form-input
                      type="text"
                      v-model="data.contact_person.first_name"
                      placeholder="First name"
                    >First Name/Last Name</b-form-input>
                  </b-col>
                  <b-col>
                    <b-form-input
                      type="text"
                      v-model="data.contact_person.last_name"
                      placeholder="Last name"
                    >Name of Proprietor— First Name/Last Name</b-form-input>
                  </b-col>
                </b-form-row>
                <b-form-row class="mb-3">
                  <b-col>
                    <label for>Principal/Proprietor’s Educational Qualification</label>
                    <b-form-input
                      type="text"
                      v-model="data.contact_person.qualification"
                      placeholder="PhD,Msc ..."
                    ></b-form-input>
                  </b-col>
                </b-form-row>
                <b-form-row class="mb-3">
                  <b-col>
                    <label for>Address</label>
                    <b-form-input
                      type="text"
                      v-model="data.contact_person.address"
                      placeholder="address"
                    ></b-form-input>
                  </b-col>
                </b-form-row>
                <b-form-row class="mb-3">
                  <b-col>
                    <label for>Phone Number</label>
                    <b-form-input
                      type="tel"
                      v-model="data.contact_person.phone_no"
                      placeholder="0810XXXXXXX"
                    >Phone Number</b-form-input>
                  </b-col>
                </b-form-row>
                <b-form-row class="mb-4">
                  <b-col>
                    <label for>Email</label>
                    <b-form-input
                      type="email"
                      v-model="data.contact_person.email"
                      placeholder="example@email.com"
                    >Email</b-form-input>
                  </b-col>
                </b-form-row>
              </b-col>
              <b-form-row class="justify-content-between w-100 my-3">
                <b-button @click="handleSwitch('two')">Previous</b-button>
                <b-button @click="handleSwitch('four')">Next</b-button>
              </b-form-row>
            </b-form-row>
            <!-- section4   -->

            <!-- section 55 -->
            <b-form-row v-if="four">
              <b-col cols="12">
                <h5>SUPPORTING DOCUMENTS</h5>
                <p>Please attach scanned copies of the following supporting documents (jpg, pdf, png)</p>
                <ul class="p-2 px-3">
                  <li>CAC Certificate & Memorandum of Association</li>
                  <li>Tax Clearance Certificate for 3 years</li>
                  <li>Certificate of Occupancy of Land/Evidence of Ownership</li>
                  <li>Survey Plan of Proposed Site</li>
                </ul>

                <div class="my-2">
                  <b-button @click="addDoc" class="mr-3"><i class="fa fa-plus-circle" aria-hidden="true"></i></b-button>
                  <b-button @click="removeDoc" v-if="data.documents.length > 1"><i class="fa fa-times-circle" aria-hidden="true"></i></b-button>
                </div>
                <b-form-row>
                  <b-col cols="6" sm="3" class="border p-2" v-for="(doc,idx) in data.documents" :key="idx">
                    <div>
                      <b-form-input v-model="doc.name" type="text" placeholder="Document name"></b-form-input>
                      <Upload :index="idx" :id="doc.name" @getUploadDetails="getUploadDetails" />

                      <div class="form-control" v-if="doc.name !== ''">Document Name: {{doc.name}}</div>
                    </div>
                  </b-col>
                </b-form-row>
              </b-col>

              <b-form-row class="justify-content-between w-100 my-3">
                <b-button @click="handleSwitch('three')">Previous</b-button>
                <b-button @click="handleSwitch('five')">Next</b-button>
              </b-form-row>
            </b-form-row>
            <!-- section 6  -->

            <!-- section 7 -->

            <b-form-row v-if="five">
               <b-col cols="12">
                <h5>SIGNATURE</h5>
                <p>
               
                     <b-form-checkbox  v-model="data.signature_1" required>I certify that the information submitted in this application is true and correct to the best of my knowledge.</b-form-checkbox>
                </p>

                <p> <b-form-checkbox  v-model="data.signature_2" required>I further understand that any false statements may result in denial or revocation of the approval.</b-form-checkbox></p>
              

                <p>Full Name : {{data.full_name}}</p>
                <p>Date : {{new Date() | moment("ddd, MMM D YYYY")}}</p>
              </b-col>

             
              <b-form-row class="justify-content-between w-100 my-3">
                <b-button @click="handleSwitch('four')">Previous</b-button>
                <b-button @click="handleSwitch('six')" :disabled="!data.signature_2" >Next</b-button>
              </b-form-row>
            </b-form-row>
            <!-- section 6 -->
            <b-form-row v-if="six">
              <b-col cols="12">
                <b-col cols="12">
                <h5>REVIEW APPLICATION</h5>
                <b-col cols="12">
              
                <p>Before you proceed, kindly note the applicable fees:</p>
                <p>
                  Nursery Schools—
                  <strong>{{nursery | currency}}</strong>
                </p>
                <p>
                  Primary School —
                  <strong>{{primary | currency}}</strong>
                </p>
                <p>
                  Secondary Schools —
                  <strong>{{secondary | currency}}</strong>
                </p>
             
              </b-col>
                <p>Note that total to be paid will be calculated based on categories selected</p>
               
              </b-col>
                <b-form-row class="justify-content-between w-100 my-3">
                  <b-button @click="handleSwitch('five')">Previous</b-button>
                  <b-button type="submit">Continue to payment</b-button>
                </b-form-row>
              </b-col>
            </b-form-row>
            <!-- section 9 -->
              <b-form-row v-if="seven">
              <b-col class="text-center">
                <div v-if="!unpaid">
                  <h5>FEEDBACK</h5>
                  <p>Thank you for working with us to make education in Imo State better. Your application has been received. Kindly check your email for confirmation and allow up to Fifteen (15) working days for us to verify the information provided by you. Our representatives will be in touch shortly.</p>
                </div>
                <div class="mb-3">
                  <Payment
                    v-if="unpaid"
                    :amount="sortAmount()"
                    :email="data.email"
                    @getResponse="getResponse"
                  />
                </div>
                <div>
                  <b-button variant="outline-secondary" @click="handleSwitch('six')">Cancel</b-button>
                </div>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Upload from "../../upload";
import Payment from "../../paystack";
export default {
  data() {
    return {
      nursery:40000,
      primary:70000,
      secondary:100000,
      unpaid: true,
      years: [],
      appFields: ["description", "nursery", "primary", "secondary"],
      appItems: [
        {
          description: "Establishment/Site Inspection",
          nursery: "N40,000",
          primary: "N70,000",
          secondary: "N100,000",
        },
        {
          description: "Approval Inspection",
          nursery: "N45,000",
          primary: "N70,000",
          secondary: "N80,000",
        },
        {
          description: "Addition of primary six class",
          nursery: "-",
          primary: "N50,000",
          secondary: "-",
        },
        {
          description: "Upgrading to senior secondary school status",
          nursery: "-",
          primary: "-",
          secondary: "N50,000",
        },

        {
          description: "Registration",
          nursery: "N80,000",
          primary: "N100,000",
          secondary: "N120,000",
        },
        {
          description: "Annual Renewal",
          nursery: "N30,000",
          primary: "N40,000",
          secondary: "N50,000",
        },
        {
          description: "Re-Inspection",
          nursery: "N10,000",
          primary: "N20,000",
          secondary: "N30,000",
        },
        {
          description: "Departmental handling Fees",
          nursery: "N30,000",
          primary: "N30,000",
          secondary: "N30,000",
        },
        {
          description: "Enumeration, Revalidation, Recertification",
          nursery: "N10,000",
          primary: "N10,000",
          secondary: "N20,000",
        },
      ],
      fields: [
        "sn",
        "name",
        "qualifications",
        "subjects_teaching",
        "phone_number",
        "email",
      ],
      data: {
        full_name:'',
        email:'',
        phone:'',
        school: "",
        signature_1:false,
        signature_2:false,
        full_address: "",
        lga: "",
        category: [],
        ownership: "",
        contact_person: {
          first_name: "",
          last_name: "",
          qualification: "",
          address: "",
          email: "",
          phone_no: "",
        },

        documents: [
          {
            name: "",
            file: "",
          },
        ],

        items: [],
      },
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,

      lgas: [],
      id: null,
    };
  },
  components: {
    Payment,
    Upload,
  },
  mounted() {
    this.getLga();
    this.getYears();
  },
  methods: {
    addRenew() {
      this.data.status.renewal.push({
        annual_renewal_year: "",
        annual_renewal_amount: "",
      });
    },
    removeRenew() {
      this.data.status.renewal.pop();
    },
    addDoc() {
      this.data.documents.push({
        name: "",
        file: "",
      });
    },
    removeDoc() {
      this.data.documents.pop();
    },
    getResponse(res) {
      if (res.status == "success") {
       
        let data = {
          ref: res.trxref,
          status: res.status,
          

        };
        this.unpaid = false;
        axios.put(`/api/application/${this.id}`, data).then((res) => {});
      }
    },
    addTab() {
      this.data.staff_info.push({
        establishment: "",
        approved: "",
        inspection: "",
        jsce: "",
        sss: "",
        ssce_neco: "",
        last_ssce: "",
        physics: "",
        chemistry: "",
        biology: "",
        annual_renewal_year: "",
        annual_renewal_amount: "",
      });
    },
    removeTab() {
      this.data.staff_info.pop();
    },
    handleSwitch(key) {
      switch (key) {
        case "one":
          this.one = "true";
          this.two = this.three = this.four = this.five = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "two":
          if (this.data.full_name !=='' && this.data.email !=='' && this.phone !== '') {
            this.two = "true";
          this.one = this.three = this.four = this.five = this.six = this.seven = false;
          window.scrollTo(0, 0);
         }else{
           this.$toasted.info('Fill all fields')
         }
          break;

        case "three":
          this.three = "true";
          this.two = this.one = this.four = this.five = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "four":
          this.four = "true";
          this.two = this.three = this.one = this.five = this.six =  this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "five":
          this.five = "true";
          this.two = this.three = this.four = this.one = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "six":
          this.six = "true";
          this.two = this.three = this.four = this.five = this.one = this.seven = false;
          window.scrollTo(0, 0);
          break;
           case "seven":
          this.seven = "true";
          this.two = this.three = this.four = this.five = this.one = this.six = false;
          window.scrollTo(0, 0);
          break;

        default:
          break;
      }
    },
    getLga() {
      axios.get("/api/show-lgas").then((res) => {
        if (res.status == 200) {
          this.lgas = res.data;
        }
      });
    },
    getUploadDetails(id, res) {
      this.data.documents[id].file = res.secure_url;
    },
    sortAmount() {
      let amount = 0;

     
        if ( this.data.category.includes('nursery')) {
          amount = this.nursery;
        }
        if ( this.data.category.includes('nursery') && this.data.category.includes('primary')) {
          amount = this.primary;
        }
        if ( this.data.category.includes('nursery') && this.data.category.includes('primary') && this.data.category.includes('secondary')) {
          amount = this.secondary;
        }
          if ( this.data.category.includes('nursery') && this.data.category.includes('secondary')) {
          amount = this.secondary;
        }
          if ( this.data.category.includes('primary') && this.data.category.includes('secondary')) {
          amount = this.secondary;
        }
        
     
      return amount;
    },
    submit() {
       let data = {
          ref: "pending",
          payment: 0,
          price: this.sortAmount(),
          response: this.data,
          payment_status: "pending",
          phase:'1',
          name: this.data.school,
          group: 'Registration of new school',
          full_name: this.data.full_name,
          email: this.data.email,
          phone: this.data.phone,
        };
      axios.post("/api/application", data).then((res) => {
        if (res.status == 201) {
          this.id = res.data.id;
          this.handleSwitch("seven");
        }
         if (res.status == 200) {
          this.id = res.data.id;
          this.handleSwitch("seven");
        }
      }).catch(err=>{
        this.$toasted.error('Something went wrong, verify all fields')
      });;
    },
    getYears() {
      var today = new Date().getFullYear();
      var min = today - 100;
      for (let i = min; i < today + 1; i++) {
        this.years.push(i);
      }
      this.years.reverse();
    },
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
@media (max-width: 425px) {
  form {
    padding: 40px 15px;
  }
}
</style>