<template>
  <div id="app">
    <img class="title-img" src="./assets/title.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
html {
  background-color: #1a1a1a;
}
.title-img {
  margin: 20px 0px;
  max-width: 700px;
  width: 100%;
}
</style>
