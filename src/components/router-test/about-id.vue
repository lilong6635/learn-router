<template>
  <div>
    <div>this is about-id page</div>
    <router-view></router-view>
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
      contentText: 'about-id-content'
    }
  },
  created() {
    const { id } = this.$route.params
    console.log(id)
  }
}
</script>

<style lang="scss" scoped>

</style>
