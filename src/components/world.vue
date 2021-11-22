<template>
  <div>
    <button @click="changeMsg">改变文字</button>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'World',
  data () {
    return {
      msg: '你好'
    }
  },
  methods: {
    changeMsg () {
      console.log('点击了')
      const msg = this.msg
      this.msg = msg === '你好' ? '世界' : '你好'
    }
  },
  created() {
    console.log('world.vue created')
  },
  mounted() {
    console.log('world.vue mounted')
  }
}
</script>
