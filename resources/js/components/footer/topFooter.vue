<template>
  <div id="top_footer">
    <div class="quick_links">
      <div class="links">
        <h5 class="links_header josefin_bold">Gallery</h5>

        <ul>
          <li>
            <router-link to>State Gallery</router-link>
          </li>
          <li>
            <router-link to>School Gallery</router-link>
          </li>
          <li>
            <router-link to>Projects Gallery</router-link>
          </li>
        </ul>
      </div>
      <div class="links">
        <h5 class="links_header josefin_bold">Quick links</h5>
        <ul>
          <li>
            <router-link to>Programs</router-link>
          </li>
          <li>
            <router-link to>Projects</router-link>
          </li>
          <li>
            <router-link to>School Directories</router-link>
          </li>
          <li>
            <router-link to>Mission</router-link>
          </li>
          <li>
            <router-link to>Vision</router-link>
          </li>
          <li>
            <router-link to>Blog</router-link>
          </li>
          <li>
            <router-link to>Office information</router-link>
          </li>
        </ul>
      </div>
      <div class="contact links">
        <h5 class="links_header josefin_bold">Contact</h5>
        <address>
          <div class="mb-2 mini">
            <h5 class="text-muted">Ministry of Education</h5>
            <span class="text-muted">Address : Block 3, Imo State Secretariat Complex.</span>
            <br />
            <span class="text-muted">P. M. B 1309, Owerri</span>
            <br />
            <span class="text-muted">E-mail: info@ministryofeducation.im.gov.ng</span>
          </div>
          <div class="mb-2 mini">
            <h5
              class="text-muted"
            >Hon. Commisioner for Education: Professor Bernard Thompson O. Ikegwuoha</h5>
            <span class="text-muted">Tel: 0809.547.6304</span>
            <br />
            <span class="text-muted">P. M. B 1309, Owerri</span>
            <br />
            <span class="text-muted">E-mail: hcmoe@ministryofeducation.im.gov.ng</span>
          </div>
        </address>

        <div class="mb-2">
          <router-link to="/contact">
            <button type="button" class="btn btn-default con">Contact us</button>
          </router-link>
        </div>
      </div>
      <div class="links">
        <h5 class="links_header josefin_bold">Social connects</h5>
        <p
          class="text-muted"
        >Connect with us on any of our social media outlets for latest information and happenings around</p>
        <div class="mb-2">
          <gb-social-button network="facebook" size="small" theme="light">Connect on Facebook</gb-social-button>
        </div>
        <div class="mb-2">
          <gb-social-button network="twitter" size="small" theme="light">Connect on Twitter</gb-social-button>
        </div>
        <div class="mb-2">
          <gb-social-button network="instagram" size="small" theme="light">Follow us on Instagram</gb-social-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#top_footer {
  width: 100%;
  padding: 30px 15px;
}
.quick_links {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  min-height: 300px;
}
.links {
  text-align: left;
  padding: 0 20px;
}
.links_header {
  padding: 10px 0;
  border-bottom: 2px solid rgb(15, 122, 138, 0.85);
  color: rgb(15, 122, 138, 0.85);
}
.links ul li a {
  color: #777777;
  font-weight: 300;
  font-size: 15px;
  text-transform: uppercase;

  padding-bottom: 5px;
}
.links ul li {
  border-bottom: 1px solid #ccc;
}
ul{
  list-style: none;
}
.con {
  font-size: 15px;
}
.mini {
  line-height: 1;
}
p {
  font-size: 15px;
}
h5 {
  font-size: 16px;
  font-weight: bold;
}
span {
  font-size: 15px;
  color: rgb(0, 0, 0, 0.54);
}
.btn-default {
  border-color: #c5d9e8;
  background: #f7f8fa;
  border-width: 1px;
  border-style: solid;
  transition: all linear 250ms;
  border-radius: 7px;
}
@media (max-width: 1024px) {
  .quick_links {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .quick_links {
    grid-template-columns: auto;
    grid-row-gap: 30px;
    height: auto;
  }
  .links {
    text-align: center;
  }
}
@media (max-width: 425px) {
  .links_header {
    border-bottom: 2px solid rgb(15, 122, 138, 0.85);
  }
}
</style>