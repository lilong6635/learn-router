<template>
  <div>
    <div class="wrapper" v-loading:[loadingText]="loading"></div>
    <img alt="Vue logo" width="100" height="100" src="../assets/logo.png">
    <button @click="toggleLoading">toggle loading</button>
  </div>
</template>

<script>
export default {
  name: 'wrapper',
  data() {
    return {
      loading: false,
      loadingText: ''
    }
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    }
  },
  created() {
    console.log('wrapper.vue created')
  },
  mounted() {
    console.log('wrapper.vue mounted')
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 300px;
    height: 300px;
    background: yellowgreen;
    margin: 0 auto;
    position: relative;
  }
</style>
