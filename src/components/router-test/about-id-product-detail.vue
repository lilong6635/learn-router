<template>
  <div>
    <div>this is about-id-product-detail page</div>
    <common-content :content-text="contentText"></common-content>
  </div>
</template>

<script>
import CommonContent from './common-content'

export default {
  name: 'about-id',
  components: {
    CommonContent
  },
  data() {
    return {
      contentText: 'about-id-product-detail-content'
    }
  },
  created() {
    const { id } = this.$route.params
    console.log(id)
  },
  beforeRouteUpdate(to, from, next) {
    console.log(from)
    next()
  }
}
</script>

<style lang="scss" scoped>

</style>
