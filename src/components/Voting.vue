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
    this.getAllCountries() // Ovdje dohvatam sve zemlje iz baze.
    if (this.$store.state.countryIdVoting === null) {
      this.$router.replace({name: 'home'})
    }
  },
  methods: {
    getAllCountries () {
      try {
        service.get('/countries').then(response => {
          if (response) {
            this.countries = response.data.data
            console.log('response: ', response)
          }
        }).catch(error => console.log(error))
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
