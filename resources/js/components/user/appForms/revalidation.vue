<template>
  <div>

    <b-container>
      <b-row class>
        <b-col>
          <b-form @submit.prevent="submit">
            <h3 class="text-center mb-5">Revalidation Form</h3>
            <b-form-row class="justify-content-center" v-if="one">
              <!-- section one  -->
              <b-form-group class="text-center">
                <p>The Enumeration, Revalidation/Recertification of Schools exercise is part of the ministry’s effort to digitize the education sector in the state.</p>
                <p>The purpose of this exercise is to capture and maintain accurate and updated data of schools in Imo State.</p>

                <p>
                  <strong>Kindly note the applicable fees, below:</strong>
                </p>
                <br />
                <p>
                  Nursery Schools—
                  <strong>N10,000</strong>
                </p>
                <p>
                  Primary School —
                  <strong>N10,000</strong>
                </p>
                <p>
                  Secondary Schools —
                  <strong>N20,000</strong>
                </p>
                <br />
                <b-button @click="handleSwitch('two')">Begin Application</b-button>
              </b-form-group>
            </b-form-row>
            <!-- section two  -->
            <b-form-row v-if="two">
              <b-col cols="12">
                <h5>GENERAL INFORMATION</h5>
                <b-form-group>
                  <label for>Name of School</label>
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
                  <label for>LGA</label>
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
                  <!-- <b-form-checkbox value="all of the above" v-model="data.category">All of the above</b-form-checkbox> -->
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
              <b-form-row class="justify-content-between w-100">
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
              <b-form-row class="justify-content-between w-100">
                <b-button @click="handleSwitch('two')">Previous</b-button>
                <b-button @click="handleSwitch('four')">Next</b-button>
              </b-form-row>
            </b-form-row>
            <!-- section4   -->
            <b-form-row v-if="four">
              <b-col cols="12">
                <h5>STATUS OF SCHOOL</h5>
                <ol>
                  <li>
                    <b-form-group>
                      <label for>Date/Year of establishment</label>
                      <br />
                      <b-calendar v-model="data.status.establishment"></b-calendar>
                    </b-form-group>
                  </li>
                  <li>
                    <b-form-row>
                      <b-form-group class="mr-3">
                        <b-form-radio v-model="data.status.approval" value="approved">Approved</b-form-radio>
                      </b-form-group>

                      <b-form-group class="mr-3">
                        <b-form-radio v-model="data.status.approval" value="unapproved">Unapproved</b-form-radio>
                      </b-form-group>

                      <p>(If approved, provide date of approval)</p>
                    </b-form-row>
                  </li>

                  <li>
                    <b-form-row>
                      <b-col
                        cols="12"
                      >Site Inspection conducted (If yes, provide date of inspection)</b-col>
                      <b-col class="d-flex">
                        <b-form-radio v-model="data.status.inspection" value="yes" class="mr-3">Yes</b-form-radio>
                        <b-form-radio v-model="data.status.inspection" value="no">No</b-form-radio>
                      </b-col>
                    </b-form-row>
                  </li>

                  <li>
                    <b-form-row>
                      <b-col cols="12">
                        <label
                          for
                        >Do you have approval for JSCE? (If approved, provide date of approval)</label>
                      </b-col>
                      <b-col class="d-flex">
                        <b-form-radio v-model="data.status.jsce" value="yes" class="mr-3">Yes</b-form-radio>
                        <b-form-radio v-model="data.status.jsce" value="no" class>No</b-form-radio>
                      </b-col>
                    </b-form-row>
                  </li>
                  <li>
                    <b-form-row>
                      <b-col cols="12">
                        <label
                          for
                        >Do you have approval for upgrading to SSS? (If approved, provide date of approval)</label>
                      </b-col>
                      <b-col class="d-flex">
                        <b-form-radio v-model="data.status.sss" value="yes" class="mr-3">Yes</b-form-radio>
                        <b-form-radio v-model="data.status.sss" value="no">No</b-form-radio>
                      </b-col>
                    </b-form-row>
                  </li>

                  <li>
                    <b-form-row>
                      <b-col>
                        <label
                          for
                        >Do you have approval for SSCE/NECO? (If approved, provide date of approval)</label>
                      </b-col>
                      <b-col class="d-flex">
                        <b-form-radio v-model="data.status.ssce_neco" value="yes" class="mr-3">Yes</b-form-radio>
                        <b-form-radio v-model="data.status.ssce_neco" value="no">No</b-form-radio>
                      </b-col>
                    </b-form-row>
                  </li>

                  <li>
                    <b-form-row>
                      <b-col>
                        <b-form-group>
                          <label
                            for
                          >Kindly provide number of candidates that registered for the last SSCE Examination (2020)</label>
                          <b-form-input type="number" class="w-25" v-model="data.status.last_ssce"></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-form-row>
                  </li>
                  <li>
                    <b-form-row>
                      <b-col>
                        <b-form-group>
                          <label
                            for
                          >Kindly provide the number of candidates that registered for the following subjects:</label>
                          <b-form-row>
                            <b-col cols="2">
                              <label for>Physics</label>
                            </b-col>
                            <b-col>
                              <b-form-input
                                class="w-25"
                                type="number"
                                v-model="data.status.physics"
                              ></b-form-input>
                            </b-col>
                          </b-form-row>
                          <b-form-row>
                            <b-col cols="2">
                              <label for>Chemistry</label>
                            </b-col>
                            <b-col>
                              <b-form-input
                                class="w-25"
                                type="number"
                                v-model="data.status.chemistry"
                              ></b-form-input>
                            </b-col>
                          </b-form-row>

                          <b-form-row>
                            <b-col cols="2">
                              <label for>Biology</label>
                            </b-col>
                            <b-col>
                              <b-form-input
                                class="w-25"
                                type="number"
                                v-model="data.status.biology"
                              ></b-form-input>
                            </b-col>
                          </b-form-row>
                        </b-form-group>
                      </b-col>
                    </b-form-row>
                  </li>
                  <li>
                    <b-form-group>
                      <label for>Annual Renewal Fees Payment, (State the years paid)</label>
                      <div class="mb-2">
                        <b-button @click="addRenew" class="mr-3">Add</b-button>
                        <b-button @click="removeRenew" v-if="data.status.renewal.length > 0">Remove</b-button>
                      </div>
                      <b-form-row v-for="(da,index) in data.status.renewal" :key="index">
                        <b-col cols="2">
                          <b-form-select v-model="da.annual_renewal_year">
                            <b-form-select-option value>Select year</b-form-select-option>
                            <b-form-select-option
                              v-for="(item,idx) in years"
                              :key="idx"
                              :value="item"
                            >{{item}}</b-form-select-option>
                          </b-form-select>
                        </b-col>
                        <b-col>
                          <b-form-input
                            class="w-25"
                            v-model="da.annual_renewal_ammount"
                            type="number"
                          ></b-form-input>
                        </b-col>
                      </b-form-row>
                    </b-form-group>
                  </li>
                </ol>
              </b-col>
              <b-form-row class="justify-content-between w-100">
                <b-button @click="handleSwitch('three')">Previous</b-button>
                <b-button @click="handleSwitch('five')">Next</b-button>
              </b-form-row>
            </b-form-row>

            <!-- section 55 -->
            <b-form-row v-if="five">
              <b-col cols="12">
                <h5>SUPPORTING DOCUMENTS</h5>
                <p>Please attach scanned copies of payment receipt and the supporting documents (jpg, pdf, png)</p>

                <div class="mb-2">
                  <b-button @click="addDoc" class="mr-3">Add</b-button>
                  <b-button @click="removeDoc" v-if="data.documents.length > 0">Remove</b-button>
                </div>
                <b-form-row>
                  <b-col cols="3" class="border p-2" v-for="(doc,idx) in data.documents" :key="idx">
                    <div >
                      <b-form-input
                      
                        v-model="doc.name"
                        type="text"
                        placeholder="Document name"
                      ></b-form-input>
                      <Upload :index="idx" :id="doc.name" @getUploadDetails="getUploadDetails" />

                      <div class="form-control" v-if="doc.name !== ''">Document Name: {{doc.name}}</div>
                    </div>
                  </b-col>
                </b-form-row>
              </b-col>

              <b-form-row class="justify-content-between w-100">
                <b-button @click="handleSwitch('four')">Previous</b-button>
                <b-button @click="handleSwitch('six')">Next</b-button>
              </b-form-row>
            </b-form-row>
            <!-- section 6  -->
            <b-form-row v-if="six">
              <b-col cols="12">
                <h5>STAFF INFORMATION</h5>

                <b-form-row class="mb-3">
                  <b-button @click="removeTab" v-if="data.staff_info.length > 1" class="mr-3">Remove</b-button>
                  <b-button @click="addTab" class="mr-5">Add</b-button>
                </b-form-row>
                <b-table :fields="fields" :items="data.staff_info">
                  <template v-slot:cell(sn)="data">{{data.index+1}}</template>
                  <template v-slot:cell(name)="data">
                    <b-form-input type="text" v-model="data.item.name" placeholder="Teacher name"></b-form-input>
                  </template>
                  <template v-slot:cell(email)="data">
                    <b-form-input type="email" v-model="data.item.email" placeholder="Teacher email"></b-form-input>
                  </template>
                  <template v-slot:cell(qualifications)="data">
                    <b-form-input type="text" v-model="data.item.qualifications" placeholder="Qualification"></b-form-input>
                  </template>
                  <template v-slot:cell(subjects_teaching)="data">
                    <b-form-input type="text" v-model="data.item.subjects_teaching" placeholder="Subjects.."></b-form-input>
                  </template>
                  <template v-slot:cell(phone_number)="data">
                    <b-form-input type="tel" v-model="data.item.phone_number"></b-form-input>
                  </template>
                </b-table>
              </b-col>
              <b-form-row class="justify-content-between w-100">
                <b-button @click="handleSwitch('five')">Previous</b-button>
                <b-button @click="handleSwitch('seven')">Next</b-button>
              </b-form-row>
            </b-form-row>

            <!-- section 7 -->

            <b-form-row v-if="seven">
              <b-col cols="12">
                <h5>SIGNATURE</h5>
                <p>
                  <strong>I certify that the information submitted in this application is true and correct to the best of my knowledge.</strong>
                </p>

                <p>I further understand that any false statements may result in denial or revocation of the approval.</p>

                <p>Full Name :</p>
                <p>Date :</p>
              </b-col>

              <b-col cols="12">
                <h5>REVIEW</h5>
                <p>Before you proceed, kindly note the applicable fees:</p>
                <p>
                  Nursery Schools—
                  <strong>N10,000</strong>
                </p>
                <p>
                  Primary School —
                  <strong>N10,000</strong>
                </p>
                <p>
                  Secondary Schools —
                  <strong>N20,000</strong>
                </p>
                <br />
              </b-col>
              <b-form-row class="justify-content-between w-100">
                <b-button @click="handleSwitch('six')">Previous</b-button>
                <b-button @click="handleSwitch('eight')">Next</b-button>
              </b-form-row>
            </b-form-row>
            <!-- section 88 -->
            <b-form-row v-if="eight">
              <b-col cols="12">
                <h5>REVIEW APPLICATION</h5>
                <p>Note that total to be paid will be calculated based on categories selected</p>
                <b-form-row class="justify-content-between w-100">
                  <b-button @click="handleSwitch('seven')">Previous</b-button>
                  <b-button type="submit">Continue to payment</b-button>
                </b-form-row>
              </b-col>
            </b-form-row>
            <!-- section 9 -->
            <b-form-row v-if="nine">
              <b-col class="text-center">
                <div v-if="!unpaid">
                  <h5>FEEDBACK</h5>
                  <p>Thank you for working with us to make education in Imo State better. Your application has been received. Kindly check your email for confirmation and allow up to Fifteen (15) working days for us to verify the information provided by you. Our representatives will be in touch shortly.</p>
                </div>
                <div class="mb-3">
                  <Payment
                    v-if="unpaid"
                    :amount="sortAmount()"
                    :email="data.contact_person.email"
                    @getResponse="getResponse"
                  />
                </div>
                <div>
                  <b-button variant="outline-secondary" @click="handleSwitch('eight')">Cancel</b-button>
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
      unpaid: true,
      years: [],
      fields: [
        "sn",
        "name",
        "qualifications",
        "subjects_teaching",
        "phone_number",
        "email",
      ],
      data: {
        school: "",
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
        status: {
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
          renewal: [{ annual_renewal_year: "", annual_renewal_amount: "" }],
        },
        documents: [
          {
            name: "",
            file: "",
          },
        ],
        staff_info: [
          {
            name: "",
            qualifications: "",
            subjects_teaching: "",
            phone_number: "",
            email: "",
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
      eight: false,
      nine: false,
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
          price: this.sortAmount(),
          status: res.status,
          name: this.data.school,
          type: "revalidation",
        };
        this.unpaid = false;
        axios.put(`/api/revalidation/${this.id}`, data).then((res) => {});
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
          this.two = this.three = this.four = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "two":
          this.two = "true";
          this.one = this.three = this.four = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "three":
          this.three = "true";
          this.two = this.one = this.four = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "four":
          this.four = "true";
          this.two = this.three = this.one = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "five":
          this.five = "true";
          this.two = this.three = this.four = this.one = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "six":
          this.six = "true";
          this.two = this.three = this.four = this.five = this.one = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "seven":
          this.seven = "true";
          this.two = this.three = this.four = this.five = this.six = this.one = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "eight":
          this.eight = "true";
          this.two = this.three = this.four = this.five = this.six = this.seven = this.one = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "nine":
          this.nine = "true";
          this.two = this.three = this.four = this.five = this.six = this.seven = this.one = this.eight = false;
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
     
      this.data.documents[id].file= res.secure_url
      
    },
    sortAmount() {
      let amount = 0;

      this.data.category.forEach((item) => {
        if (item == "nursery") {
          amount = amount + 10000;
        }
        if (item == "secondary") {
          amount = amount + 20000;
        }
        if (item == "primary") {
          amount = amount + 10000;
        }
      });
      return amount;
    },
    submit() {
      let data = {
        school: this.data.school,
        category: 'Revalidation',
        detail: this.data,
      };
      axios.post("/api/revalidation", data).then((res) => {
        if (res.status == 201) {
          this.id = res.data.id;
          this.handleSwitch("nine");
        }
      });
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
@media(max-width:425px){
  form{
    padding:40px 15px;
  }
}
</style>