<template>
  <b-container fluid>
    <Approved v-if="type=='approved'" />
    <PrincipalPhone v-if="type=='principals'" />
    <PrincipalTransfer v-if="type=='transfers'" />
    <WaecCandidates v-if="type=='waec-candidates'" />
    <WassceSchools v-if="type=='wassce-schools'" />
  </b-container>
</template>

<script>
const Approved = () => import("./approvedPrivateSchools");
const PrincipalPhone = () => import("./principalPhone");
const PrincipalTransfer = () => import("./principalTransfer");
const WaecCandidates = () => import("./waecCandidates");
const WassceSchools = () => import("./wassceSchools");
export default {
  data() {
    return {
      type: this.$route.params.type,
    };
  },
  components: {
    Approved,
    PrincipalPhone,
    PrincipalTransfer,
    WaecCandidates,
    WassceSchools,
  },
};
</script>

<style scoped>
</style>