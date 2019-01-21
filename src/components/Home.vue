<template>
  <div class="homepage">
    <b-button @click="portTo('/countries')" class="btnMargins">Countries</b-button>
    <b-button @click="portTo('/results')" class="btnMargins">Results</b-button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
  }),
  methods: {
    portTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style lang="scss" scoped>
.homepage {
  margin: 0 auto;
  margin-top: 20%;
}
.btnMargins {
  margin: 10px;
}
</style>
