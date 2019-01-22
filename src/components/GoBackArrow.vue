<template>
  <font-awesome-icon class="arrowBack" icon="arrow-circle-left" size="2x" @click="goBack()"/>
</template>
<script>
export default {
  name: "",
  data: () => ({
  })
}
</script>
<style lang="scss" scoped>
.arrowBack {
  float: left;
  margin: 10px;
  background-color: #AAA;
  color: #fff;
  padding: 5px;
  line-height: 20px;
  border-radius: 100%;
}
</style>
