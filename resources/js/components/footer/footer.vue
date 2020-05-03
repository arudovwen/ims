<template>
  <div id="footer">
    <topFooter />
    <bottomFooter />
  </div>
</template>
<script>
import topFooter from "./topFooter";
import bottomFooter from "./bottomFooter";
export default {
  components: {
    topFooter,
    bottomFooter
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  background: linear-gradient(rgba(186,184,157,0.8) 0%,rgba(186,184,157,0.0001) 100%);
  position: relative;
  bottom: 0;
}
</style>