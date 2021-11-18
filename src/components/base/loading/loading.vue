<template>
  <div class="loading">
    <div class="loading-content">
      <img alt="Vue logo" width="100" height="100" src="../../../assets/logo.png">
      <p id="text">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      title: '正在加载中...'
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/variable.scss';
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    .loading-content {
      text-align: center;
    }
  }
</style>
