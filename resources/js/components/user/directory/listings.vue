<template>
  <b-container fluid>
    <Approved v-if="type=='approved'" />
    <PrincipalPhone v-if="type=='principals'" />
    <PrincipalTransfer v-if="type=='transfers'" />
    <WaecCandidates v-if="type=='waec-candidates'" />
    <WassceSchools v-if="type=='wassce-schools'" />
      <Appointment v-if="type=='appointment'" />

  </b-container>
</template>

<script>
const Approved = () => import("./approvedPrivateSchools");
const PrincipalPhone = () => import("./principalPhone");
const PrincipalTransfer = () => import("./principalTransfer");
const WaecCandidates = () => import("./waecCandidates");
const WassceSchools = () => import("./wassceSchools");
const Appointment = ()  => import('./prinipalAppointment')

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
    Appointment
   
  },
};
</script>

<style scoped>
</style>