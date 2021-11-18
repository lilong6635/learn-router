<template>
  <div>
    <button @click="changeMsg">改变文字</button>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    changeMsg () {
      console.log('按钮点击了')
      const msg = this.msg
      this.msg = msg === 'hello' ? 'world' : 'hello'
    }
  }
}
</script>
