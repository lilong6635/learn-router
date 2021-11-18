<template>
  <div>
    <div>this is about-id-product page</div>
    <router-view></router-view>
    <common-content :content-text="contentText"></common-content>
    <div>{{height}}height</div>
    <div>{{hello}}hello</div>
  </div>
</template>

<script>
import CommonContent from './common-content'

export default {
  name: 'about-id',
  props: ['hello', 'height'],
  components: {
    CommonContent
  },
  data() {
    return {
      contentText: 'about-id-product-content123'
    }
  },
  created() {
    const { id } = this.$route.params
    console.log(id)
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style lang="scss" scoped>

</style>
