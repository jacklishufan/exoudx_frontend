<template>
  <div id="app">
    <transition class="container" name="fade">
    <router-view class="container"/>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

  @media(max-width:540px){ html { font-size:84.375px; } }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 0px;
  padding: 0px;
}

.container {
    width: 100%;
  height: 100%;
  padding: 0px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
