<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <button @click="changeTitle">点击改变标题</button>
    <button @click="changeCity">点击改变地址</button>
    <div>{{getCity}}</div>
    <button @click="toggleComponent">切换组件</button>
    <keep-alive>
      <component :is="subComponent" ></component>
    </keep-alive>
    <div class="big-box-wrap">
      <div class="big-box">1</div>
      <div class="big-box">2</div>
      <div class="big-box">3</div>
      <div class="big-box">4</div>
      <div class="big-box">5</div>
      <div class="big-box">6</div>
      <div class="big-box">7</div>
      <div class="big-box">8</div>
      <div class="big-box">9</div>
      <div class="big-box">10</div>
      <div class="big-box">11</div>
      <div class="big-box">12</div>
      <div class="big-box">13</div>
      <div class="big-box">14</div>
      <div class="big-box">15</div>
      <div class="big-box">16</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Hello from './hello.vue'
import World from './world.vue'

export default {
  name: 'HelloWorld',
  components: {
    Hello,
    World
  },
  props: {
    msg: String
  },
  data () {
    return {
      title: this.msg,
      subComponent: 'Hello'
    }
  },
  computed: {
    ...mapGetters([
      'getCity'
    ])
  },
  methods: {
    changeTitle () {
      this.title += '$'
    },
    toggleComponent () {
      this.subComponent = this.subComponent === 'Hello' ? 'World' : 'Hello'
    },
    changeCity () {
      const city = '上海'
      this.setCity(city)
    },
    ...mapMutations([
      'setCity'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.big-box-wrap {
  overflow: hidden;
}
.big-box {
  width: 100%;
  height: 500px;
  background: pink;
  margin: 5px auto;
  float: left;
}
</style>
