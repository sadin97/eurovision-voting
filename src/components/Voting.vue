<template>
  <div id="">
    <GoBackArrow />
    {{this.$store.state.countryIdVoting}}
  </div>
</template>
<script>
import GoBackArrow from '@/components/GoBackArrow'
export default {
  name: "Voting",
  components: {
    GoBackArrow
  },
  data: () => ({
    countries: []
  }),
  created () {
    // Ovdje dohvatam sve zemlje iz baze.
    if (this.$store.state.countryIdVoting === null) {
      this.$router.replace({name: 'home'})
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
