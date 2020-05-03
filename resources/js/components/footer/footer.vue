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
  background: #f7f8fa;
  position: relative;
  bottom: 0;
}
</style>