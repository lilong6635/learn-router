<template>
  <div class="wrapper">
    <div>this is common-content page</div>
    <div>{{contentText}}</div>
  </div>
</template>

<script>
export default {
  name: 'common-content',
  props: {
    contentText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 300px;
    height: 300px;
    background: pink;
    margin: 0 auto;
  }
</style>
