<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/welcome">welcome</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <keep-alive> -->
      <router-view name="home"></router-view>
    <!-- </keep-alive> -->
    <transition name="slide">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 76px;
}

#nav {
  padding: 30px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
