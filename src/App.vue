<template>
  <div id="app">
    <HelloWorld
      msg="Boilerplate Vue 🍳"
      msg2="Lots of tooling (Bootstrap, FontAwesome, SweetAlert, Coinhive)"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to bottom, aquamarine, thistle, navy);
  height: 100%;
  padding-top: 0.4em;
}
</style>
