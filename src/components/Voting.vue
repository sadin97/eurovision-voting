<template>
  <div id="">
    <GoBackArrow />
    {{countryVotingId}}

    <!-- <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item v-for="(point, i) in points" :key="i">
        {{point.score}}
      </b-dropdown-item>
    </b-dropdown> -->

    <div class="pointList">
      <div v-for="(point, i) in points" :key="i" @click="selectParent(i)">
        <div v-bind:class="{ pointItem: !point.selected, pointItemSelected: point.selected }">{{point.score}}</div>
        <div class="countryItem" v-for="(country, j) in countries" :key="j" v-if="(point.selected)&&(country.ID !==countryVotingId)">
          {{country.Name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Service from '../services/index.js'
const service = new Service()
import GoBackArrow from '@/components/GoBackArrow'
export default {
  name: "Voting",
  components: {
    GoBackArrow
  },
  data: () => ({
    countries: [],
    points: [
      { score: 1, countrySelected: 'none', selected: false },
      { score: 2, countrySelected: 'none', selected: false },
      { score: 3, countrySelected: 'none', selected: false },
      { score: 4, countrySelected: 'none', selected: false },
      { score: 5, countrySelected: 'none', selected: false },
      { score: 6, countrySelected: 'none', selected: false },
      { score: 7, countrySelected: 'none', selected: false },
      { score: 8, countrySelected: 'none', selected: false },
      { score: 10, countrySelected: 'none', selected: false },
      { score: 12, countrySelected: 'none', selected: false }
    ],
    countryVotingId: null
  }),
  created () {
    this.countryVotingId = this.$store.state.countryIdVoting
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
    },
    selectParent (i) {
      this.points.forEach(element => {
        element.selected = false
      })
      this.points[i].selected = true
      console.log('selektovao: ', i, ' i iskljucio sve ostale')
    }
  }
}
</script>
<style lang="scss" scoped>
.pointList {
  padding-top: 5%;
}
.pointItem {
  padding: 5px;
  background-color: #ddd;
  width: 40%;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
}
.pointItem:hover {
  cursor: pointer;
  background-color: #bbb;
  transition: 0.3s;
}
.pointItemSelected {
  padding: 5px;
  width: 40%;
  margin: 0 auto;
  background-color: #819ccc;
  color: #fff;
}
.pointItemSelected:hover {
  cursor: pointer;
}
.countryItem {
  padding: 2px;
  background-color: #b3c6e8;
  width: 40%;
  margin: 0 auto;
  border-bottom: 1px solid #92a5c7;
  border-left: 1px solid #92a5c7;
  border-right: 1px solid #92a5c7;
}
.countryItem:hover {
  background-color: #4dd45c;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
}
</style>
