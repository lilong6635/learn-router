<template>
  <div class="about">
    <h1>This is an about page new new </h1>
    <h1>{{getCity}}</h1>
    <wrapper></wrapper>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'
import Wrapper from '@/components/wrapper'

export default {
  name: 'Home',
  components: {
    Wrapper
  },
  computed: {
    ...mapGetters([
      'getCity'
    ])
  },
  activated () {
    console.log('About actived')
  },
  deactivated () {
    console.log('About deactived')
  }
}
</script>
