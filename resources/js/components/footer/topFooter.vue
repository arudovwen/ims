<template>
  <div id="top_footer">
    <div class="quick_links">
      <div class="links">
        <h5 class="links_header josefin">Gallery</h5>

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
        <h5 class="links_header josefin">Quick links</h5>
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
      <div class="links">
        <h5 class="links_header josefin">Social connects</h5>
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
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  grid-column-gap: 50px;
  height: 300px;
  background: #f7f8fa;
}
.links {
  text-align: left;
}
.links_header {
  padding: 10px;
  border-bottom: 3px solid #006600;
  color: #006600;
}
.links ul li a {
  color: #777777;
  font-weight: 300;
  font-size: 13px;
  text-transform: uppercase;

  padding-bottom: 5px;
}
.links ul li {
  border-bottom: 1px solid #ccc;
}
p {
  font-size: 14px;
}
@media(max-width: 1024px){
.quick_links{
    width: 100%;
}
}
@media(max-width: 768px){
  .quick_links{

    grid-template-columns: auto;
    grid-row-gap: 30px;
      height: auto;
  }
  .links{
      text-align: center;
  }
}
@media(max-width: 425px){
  
}
</style>