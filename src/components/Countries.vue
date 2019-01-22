<template>
  <div id="container">
    <div v-bind:class="{ countryItem: !country.Voted, countryItemDisabled: country.Voted }" v-for="(country, i) in countries" :key="i" @click="openCountry(country.ID)">
      <country-flag :country='country.Flag' size='normal'/><div class="countryInside">{{country.Name}}</div>
    </div>
  </div>
</template>
<script>
import Service from '../services/index.js'
const service = new Service()
import CountryFlag from 'vue-country-flag'
export default {
  name: "",
  components: {
    CountryFlag
  },
  data: () => ({
    countries: []
  }),
  created () {
    this.getAllCountries()
  },
  methods: {
    openCountry (countryId) {
      this.$router.replace({name: 'voting'})
      this.$store.commit('setCountryIdVoting', countryId)
    },
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
#container {
  width: 50%;
  margin: 0 auto;
  padding-top: 5%;
}
.countryItemDisabled {
  background-color: #BBB;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10%;
}
.countryItemDisabled:hover {
  cursor: not-allowed;
}
.countryItem {
  background-color: #eee;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10%;
}
.countryItem:hover {
  background-color: #e6e9f1;
  cursor: pointer;
  transition: 0.3s;
}
.countryInside {
  padding: 5px;
}
</style>
