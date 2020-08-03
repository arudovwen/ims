<template>
  <div>
    <Navigation />
    <b-container fluid>
      <b-row class="banner">
        <div class="overlay-m">
          <div class="overlay-content">
            <p class="title">{{title}}</p>
          </div>
        </div>
      </b-row>
      <!-- statistics starts here -->
      <b-container fluid class="py-5" v-if="$route.params.type=='statistics'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: Okwara Catherine Ngozi (Mrs.)" tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span> Ag. Director, Planning Research and Statistics
              </b-card-text>
              <b-card-text>
                <span class="ma">Phone No:</span> 08037891607
              </b-card-text>
              <b-card-text>
                <span class="ma">Email :</span> n.okwara@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span> Department of Planning Research and Statistics, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>BRIEF HISTORY AND ROLES OF DEPARTMENT OF PLANNING RESEARCH AND STATISTICS</h3>

              <p>The Planning, Research and Statistics Department (PRSD) is one of the statutory services departments which exists in every Government Ministry, Department and Agency (MDA). The PRSD specifically takes charge of planning, monitoring, evaluation and report rendition on all programmes and projects of the Ministry. The department advises the Ministry on matters of economic development.</p>
              <p>In the Imo State Ministry of Education, the department is structured into four units, namely: Policy and Planning, Education Management Information System (EMIS Unit), Education Management & Coordination, and the Library Unit.</p>
            </div>

            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <ul class="pl-3">
                <li>Preparation of the Ministry’s Budgets/Estimates, long and medium term Strategic Plans including the monitoring and evaluation of plans within and after the implementation period of Education Programmes as well as periodic report rendition on ministry’s activities to appropriate authorities.</li>
                <li>Liaises with development partners in programme implementation and monitoring, including intending development partners to determine state priorities in needs assessments.</li>
                <li>Takes charge of Data of the Ministry and disseminates statistical information and publications including management of the State Education Management Information System (EMIS).</li>
                <li>Liaises with other statistical agencies, research entities and individual researchers within and outside the state.</li>
                <li>Processing of approved projects for award of contracts and preparation of contract documents.</li>
                <li>Takes charge of the Ministry’s Library</li>
              </ul>
            </div>

            <div>
              <strong>Okwara Catherine</strong>
              <p>(Deputy Director)</p>
              <p>Ag. Director, Planning Research and Statistics</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <!-- ends here  -->

      <!-- finance starts here  -->
      <b-container fluid class="py-5" v-if="$route.params.type=='finance'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: Angela Ogechi John-Njoku (Mrs.)" tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span> Director of Administration and Finance (GL 16)
              </b-card-text>
              <b-card-text>
                <span class="ma">Phone No:</span> +234 803 763 2048
              </b-card-text>
              <b-card-text>
                <span class="ma">Email:</span> a.johnnjoku@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span> Dept. of Administration, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <p>The Admin/Finance Department is the gateway to the ministry. The Department assists in policies formulation and execution, as it affects the Ministry. This Department carries out the following responsibilities:</p>
              <ul class="pl-3">
                <li>Staff matters including personnel management (training, pensions/records, discipline, promotions, retirement matters, staff requirements/needs, etc).</li>
                <li>General Services (repairs, office and general maintenance, minor works, etc).</li>
                <li>Transport Matters/vehicles.</li>
                <li>General administration, and lots more as assigned by superior officers.</li>
              </ul>
            </div>

            <div>
              <strong>A.O. John-Njoku (Mrs.)</strong>
              <p>DAF</p>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <!-- ends here  -->
      <!-- edc starts here  -->
      <b-container fluid class="py-5" v-if="$route.params.type=='edc'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: OKEREKE, LIVINUS I.C." tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span> Acting Director (Exams)
              </b-card-text>
              <!-- <b-card-text>
                <span class="ma">Phone No:</span> +234 803 763 2048
              </b-card-text> -->
              <b-card-text>
                <span class="ma">Email:</span> l.okereke@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span> Examinations Development Centre (EDC), Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <p>
                The Examinations Development popularly known as Examinations
                Development Centre (EDC), is one of the 5 professional departments of the Ministry of Education. It was established in 1976 following the creation of Imo State from the former East Central State of Nigeria.
              </p>
              <p>The Department is charged with the responsibilities of registering candidates, conducting, processing, publishing and certification (where applicable) of all the statutory tests/examinations organized by the State Ministry of Education and these include:</p>
              <ul class="pl-3">
                <li>
                  The Universal Basic Education General Placement Test (UBEGPT) formerly called Common Entrance Examination;
                  .
                </li>
                <li>
                  The Basic Education Certificate Examination (BECE) formerly called the Junior School Certificate Examination;
                  .
                </li>
                <li>
                  The Universal Basic Education Assessment Test (UBEAT) formerly called the First School Leaving Certificate Examination;
                  .
                </li>
                <li>
                  The Universal Basic Education Test into Model Schools (UBETMS);
                  .
                </li>
                <li>The Junior School (Business/Technical) Certificate Examination JS(B/T)CE;</li>
                <li>Selection Examination into SSI for Madonna Science Secondary School (MSSS), Etiti;</li>
                <li>Selection Examination into SSI for Young Scientists’ College (YSC), Owerri.</li>
                <li>
                  The Department also issues the following documents
                  <ol>
                    <li>Statement/Confirmation of UBEAT and TC II results.</li>
                    <li>FSLC, BECE, TC II Certificates.</li>
                  </ol>
                </li>
              </ul>
            </div>

            <div>
              <strong>Okereke, L.I.C.</strong>
              <p>Acting Director (Exams)</p>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <!-- qa starts here  -->
      <b-container fluid class="py-5" v-if="$route.params.type=='qa'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: Dr. (Mrs) Nlebedum, P.N." tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span> Director, Quality Assurance Department
              </b-card-text>
              <b-card-text>
                <span class="ma">Email:</span> p.nlebedum@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span> Quality Assurance Department, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri
                .
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>BRIEF HISTORY OF THE QUALITY ASSURANCE DEPARTMENT</h3>
              <p>The Quality Assurance Department of the Ministry of Education is by the National and State Policies on Education responsible for monitoring and maintaining standards at all levels of education below the tertiary level. It carries out this statutory function through the inspection of all approved Schools, Public and Private (Nursery, Primary and Secondary) in the state.</p>
              <p>Every school as a matter of policy should be inspected at least once a year. As result of the inspections, actions are expected to be taken to see that the quality of education in the state is not only maintained but also improved upon.</p>
              <p>The Ministry has an Area Evaluation Office in each of the twenty-seven (27) Local Govt. Areas of the state. The Area Evaluation Officers carry out the functions of the department in each Local Govt. Area and report to the Quality Assurance Department. The department in turn coordinates their activities under strict supervision.</p>
            </div>
            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <p>In the development and growth of the Ministry of Education, the Quality Assurance Department carries out the following functions:</p>

              <ul class="pl-3">
                <li>Generates Revenue for the Ministry. This is by ensuring that the Ministry realizes revenue from Private and Public Secondary Schools in the form of application fees for subject approvals for Basic Education Certificate Examination (BECE) and Senior Secondary School Certificate Examination (SSSCE) - WASSCE and NECO respectively.</li>
                <li>Carries out subject approval inspections in all State/Private Secondary Schools, wishing to present candidates for either the (BECE) or the (WASSCE) West African Senior Secondary Certificate Examination (SSCE) for the first time.</li>
                <li>Routine/spot check and other inspections in all State/Private Schools in the state.</li>
                <li>Conducts spot checks on illegal and unapproved schools in the state, identifies them and submits their names to the Honourable Commissioner for closure.</li>
                <li>Co-ordinates and conducts all School Examinations organized by the Examinations Development Centre (EDC) for instance Universal Basic Education General Placement Test (UBEGPT) Universal Basic Education Assessment Test (UBEAT), Basic Education Certificate Education (BECE) JS (B/T) CE etc.</li>
                <li>Co-ordinates and monitors State and National Examinations e.g. SSCE (Senior Secondary School Certificate Examination) as conducted by WAEC and NECO.</li>
                <li>Ensures that qualified teachers are employed, the right curriculum used and adequate instructional materials provided in all schools.</li>
                <li>Takes part in the selection of supervisors for State and National Examinations</li>
                <li>Conducts investigations on school related mailers.</li>
                <li>
                  Prepares tasks and targets for the department.
                  .
                </li>
                <li>Moderates Annual Evaluation Reports of all Professional Staff of the Department (both at the Headquarters and Area Offices).</li>
                <li>
                  Take charge of the work of the AEES in the Local Govt. Areas and collates monthly situation reports of the AEES for submission to the Hon. Commissioner/DPRS.
                  Participates in the JCCE and NCE meetings.
                </li>
                <li>Organizes and Co-ordinates the monthly meetings of all Education Evaluators in the Department.</li>
                <li>Participates in the preparation of Drafts, Memos and Speeches for the Hon. Commissioner when directed to do so.</li>
                <li>Attends all Management Meetings as may be convened by the Hon. Commissioner/Permanent Secretary.</li>
                <li>Carries out other duties as may be assigned by the Hon. Commissioner or Permanent Secretary.</li>
                <li>Ensures smooth/effective administration in the office for improved productivity.</li>
                <li>Represents the Hon. Commissioner as may be directed.</li>
                <li>Attends to Adhoc Assignments as the needs arise.</li>
                <li>Revalidates the school after 5 (five) years of approval, or subject approval.</li>
              </ul>
            </div>

            <div>
              <strong>Dr. (Mrs) Nlebedum P.N.</strong>
              <p>Director (Quality Assurance)</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <!-- ends here  -->

      <!-- science starts here  -->

      <b-container fluid class="py-5" v-if="$route.params.type=='science'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: Eleberi Patricia A. (Mrs)" tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span> Director, Science, Technical and Tertiary Education
              </b-card-text>
              <b-card-text>
                <span class="ma">Email:</span> p.eleberi@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span> Science, Technical and Tertiary Education,Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <p>The Department of Science, Technical and Tertiary Education had witnessed various changes in its existence.</p>
              <p>In November, 2013, Governor Owelle Anayo Rochas Okorocha raised it to the status of Ministry of Tertiary Education, Science and Technology (MOTEST), Owerri.</p>
              <p>In 2016, MOTEST was reverted to the Department of Science, Technical and Tertiary Education in the Ministry of Education, Science and Technology, Owerri.</p>
              <p>In December 2017, the Department was again uplifted to Ministry of Science, Technology and Vocational Education (MOSTVE), Owerri and the Tertiary Division became Ministry of Tertiary and Non-Formal Education, (MOTANFE), Owerri.</p>
              <p>In 2019, the Ministries were merged to be the present Ministry of Education, Owerri.</p>

              <h3>ROLE OF THE DEPARTMENT</h3>
              <ul class="pl-3">
                <li>Formulation, development and implementation of policies on Science, Technical and Vocational Education in the State</li>
                <li>Overseeing the activities of State owned tertiary institutions</li>
                <li>Inspection of Science, Technical and Vocational Colleges/Schools to ensure standards.</li>
                <li>Promotion of Science, Technical and Vocational Education through activities such as conduct of science and technology related competitions, exhibitions and workshops</li>
                <li>Promotion of Information, Communication and Technology Education</li>
                <li>Liaison between the Ministry, State and National Education Agencies</li>
                <li>
                  Evaluation of certificates
                  Advisory activities to government and the public on matters related to its roles.
                </li>
              </ul>
            </div>

            <div>
              <strong>ELEBERI P.A, (MRS)</strong>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <!-- ends here  -->

      <!-- scholarship s starts here  -->

      <b-container fluid class="py-5" v-if="$route.params.type=='scholarship'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: UCHEGBU, EMMANUEL CHIGBO" tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span> Deputy Director, Tertiary/Scholarship Department
              </b-card-text>
              <b-card-text>
                <span class="ma">Email:</span> e.uchegbu@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span> Tertiary/Scholarship Department, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <p>The Department is in charge of all schools above Secondary School in Imo State. It is also in charge of all scholarship and bursary awards in the state especially bursary for student Doctors and Lawyers of Imo State origin.</p>

              <h5>The department performs the following functions:</h5>
              <ul class="pl-3">
                <li>Inspect for approval and registration of all Private Tertiary Institution in the State.</li>
                <li>Monitoring the activities of both Private and State owned Tertiary institutions in the State.</li>
                <li>Entertain complaints/petitions from staff and students of state owned Tertiary Institutions.</li>
                <li>Liaising with leaders of various labour unions in state owned Tertiary Institutions in Imo State to ensure and maintain industrial harmony.</li>
                <li>Creating synergy between the Ministry and other Educational Agencies like NUC, NBTE, NOUN, NCCE, JAMB etc.</li>
                <li>Attend JCCE and NCE meetings for the department.</li>
                <li>Monitoring of Joint Admissions and Matriculation Board (JAMB) Examination across the State.</li>
                <li>Forwarding application for scholarship and Bursary to the appropriate authorities.</li>
                <li>Disseminating information regarding award of scholarship both local and foreign to prospective students.</li>
              </ul>
            </div>

            <div>
              <strong>LIST OF TERTIARY INSTITUTIONS SUPERVISED BY THE MINISTRY</strong>
              <ol>
                <li>Imo State University, Owerri</li>
                <li>Imo State Polytechnic, Umuagwo</li>
                <li>Imo State College of Nursing and Midwifery, Orlu.</li>
                <li>Imo State College of Health and Management Sciences, Amaigbo.</li>
                <li>Imo State College of Advanced Professional Studies, Owerri, etc.</li>
              </ol>
            </div>

            <div>
              <strong>Uchegbu, E.C.</strong>
              <p>HOD (T/S)</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <!-- ends here  -->

      <!-- support starts here  -->
      <b-container fluid class="py-5" v-if="$route.params.type=='support'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: Nwagwu, Stella Nnenna" tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span> Director, Education Support Services Department (ESSD)
              </b-card-text>
              <b-card-text>
                <span class="ma">Phone No:</span> 08033417775
              </b-card-text>
              <b-card-text>
                <span class="ma">Email:</span> s.nwagwu@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span> Education Support Services Department (ESSD), Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <p>The Education Support Services Department is one of the departments in the Ministry of Education, Imo State. The department carries out its activities through the nine (9) branches/units that make it up. As the name implies, the Department provides various Educational Services to the Stakeholders through the nine (9) branches/Units listed here under:</p>
              <ul class="pl-3">
                <li>Special Education</li>
                <li>Curriculum /Educational Technology</li>
                <li>Guidance and Counseling</li>
                <li>
                  Women Education
                  .
                </li>
                <li>Languages</li>
                <li>Hiv/Aids</li>
                <li>Educational Planning</li>
                <li>Education Resource Centre</li>
                <li>Mashav Training Programme</li>
              </ul>
            </div>

            <div>
              <strong>A.O. John-Njoku (Mrs.)</strong>
              <p>DAF</p>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <!-- ends here  -->

      <b-container fluid class="py-5" v-if="$route.params.type=='secondary'">
        <b-row>
          <b-col cols="12" sm="5" class="mb-4">
            <b-card title="Name: Oby Anyikude (Mrs.)" tag="article" class="mb-2">
              <b-card-text>
                <span class="ma">Designation:</span>
                Executive Secretary (ES)
              </b-card-text>
             
              <b-card-text>
                <span class="ma">Email:</span>
                o.anyikude@ministryofeducation.im.gov.ng
              </b-card-text>
              <b-card-text>
                <span class="ma">Correspondence Address:</span>
                SEMB, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="7">
            <div>
              <h3>FUNCTIONS AND ACTIVITIES OF THE DEPARTMENT</h3>
              <p>The Secondary Education Management Board (SEMB) is organized in Six (6) Education Zones, each headed by a Zonal Director.</p>
              <strong class="mb-5"> <p>The 6 Education Zones are listed below:</p> </strong>
              <b-row>
                <b-col>
                  <div class="pl-3 mb-3">
                    <strong>OKIGWE ZONE 1</strong>
                    <p>Isiala Mbano LGA</p>
                    <p>Okigwe LGA</p>
                    <p>Onuimo LGA</p>
                  </div>
                </b-col>
                <b-col>
                  <div class="pl-3 mb-3">
                    <strong>OKIGWE ZONE 2</strong>
                    <p>Ehime Mbano LGA</p>
                    <p>Ihittte Uboma LGA</p>
                    <p>Obowo LGA</p>
                  </div>
                </b-col>
                  <b-col>
                  <div class="pl-3 mb-3">
                    <strong>OWERRI ZONE 2</strong>
                    <p>Aboh Mbaise LGA</p>
                    <p>Ahiazu Mbaise LGA</p>
                    <p>Ezinihitte LGA</p>
                    <p>Ngor-Okpala LGA</p>
                  </div>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <div class="pl-3 mb-3">
                    <strong>ORLU ZONE 1</strong>
                    <p>Ideato North LGA</p>
                    <p>Ideato South LGA</p>
                    <p>Isu LGA</p>
                    <p>Njaba LGA</p>
                    <p>Nkwerre LGA</p>
                    <p>Nwangele LGA</p>
                    <p>Orlu LGA</p>
                    <p>Orsu LGA</p>
                  </div>
                </b-col>
                <b-col>
                  <div class="pl-3 mb-3">
                    <strong>ORLU ZONE 2</strong>

                    <p>Oguta LGA</p>
                    <p>Ohaji/Egbema LGA</p>
                    <p>Oru East LGA</p>
                    <p>Oru West LGA</p>
                  </div>
                </b-col>
                 <b-col>
                  <div class="pl-3 mb-3">
                    <strong>OWERRI ZONE 1</strong>
                    <p>Ikeduru LGA</p>
                    <p>Mbaitoli LGA</p>
                    <p>Owerri Municipal</p>
                    <p>Owerri North LGA</p>
                    <p>Owerri West LGA</p>
                  </div>
                </b-col>
              </b-row>
            
            </div>

            <div>
              <strong>Oby Anyikude (Mrs.)</strong>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <Footer />
  </div>
</template>
<script>
import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer";
export default {
  data() {
    return {
      title: "",
    };
  },
  components: {
    Navigation,
    Footer,
  },
  mounted() {
    this.dataType(this.$route.params.type);
  },
  methods: {
    dataType(value) {
      switch (value) {
        case "statistics":
          this.title = "DEPARTMENT OF PLANNING RESEARCH AND STATISTICS";

          break;
        case "finance":
          this.title = "ADMINISTRATION AND FINANCES";

          break;
        case "edc":
          this.title = "EXAMINATIONS DEVELOPMENT CENTRE (EDC)";

          break;
        case "qa":
          this.title = "QUALITY ASSURANCE DEPARTMENT";

          break;
        case "science":
          this.title = "SCIENCE, TECHNICAL AND TERTIARY EDUCATION";

          break;
        case "scholarship":
          this.title = "TERTIARY/SCHOLARSHIP DEPARTMENT";

          break;
        case "support":
          this.title = "EDUCATION SUPPORT SERVICES DEPARTMENT (ESSD)";

          break;
        case "secondary":
          this.title = "SECONDARY EDUCATION MANAGEMENT BOARD (SEMB)";

          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.banner {
  height: 300px;
  position: relative;
  background-image: url("/images/imos.jpg");
}
.card-title {
  color: #ecee53;
}
.overlay-m {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  background: rgb(0, 0, 0, 0.5);
}
.overlay-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: white;
  width: 90%;
  margin: 0 auto;
  height: 100%;
}
.ma {
  font-weight: bold;
  color: antiquewhite;
}
ul {
  list-style: disc;
}
li {
  padding: 5px;
}
ol {
  list-style: lower-roman;
}
.title {
  font-size: 40px;
  font-family: "Josefin sans";
  font-weight: bolder;
}
.card {
  background-color: #0f7a8a;
  color: white;
}
h3 {
  color: #0f7a8a;
}
@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }
  h3 {
    font-size: 18px !important;
  }
}
</style>