<template>
  <div id="container">
    <div v-bind:class="{ countryItem: !country.voted, countryItemDisabled: country.voted }" v-for="(country, i) in countries" :key="i" @click="openCountry(country.id)">
      <country-flag :country='country.flag' size='normal'/><div class="countryInside">{{country.name}}</div>
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
    countries: [
      {id: 0, name: 'Bosnia and Herzegovina', flag: 'ba', voted: false},
      {id: 1, name: 'Croatia', flag: 'hr', voted: false},
      {id: 2, name: 'Serbia', flag: 'rs', voted: true},
      {id: 3, name: 'Bulgaria', flag: 'bg', voted: false}
    ]
  }),
  created () {
    try {
      service.get('/').then(response => {
        if (response) {
          console.log('response: ', response)
        }
      }).catch(error => console.log(error))
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    openCountry (countryId) {
      console.log('otvorio country: ', countryId)
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
