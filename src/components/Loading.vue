<template>
  <div class="showbox">
  <div class="loader" >
    <svg class="circular" style="width: 100%; height: 100%" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
  </div>
    <div class="welcome">
        KEEP CALM
    </div>
</div>
</template>

<script>
  export default {
  name: 'Loading',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods: {
      load:function () {
        setTimeout(()=>{this.$router.replace('Menu')},3000)
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
<style lang="scss">
  $green: #008744;
$blue: #0057e7;
$red: #d62d20;
$yellow: #ffa700;
$white: #eee;

// scaling... any units
$width: 20rem;

.showbox{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color:#000;
  justify-content: center;
  padding: 0px;

}

.loader {
  flex-grow: initial;


  position: relative;
  margin: 0 auto;
  width: $width;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.welcome{
  padding-top: 6rem;
  color:white;
  text-align: center;
  font-size: 5rem;
  font-family: sans-serif;
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: $red;
  }
  40% {
    stroke: $blue;
  }
  66% {
    stroke: $green;
  }
  80%,
  90% {
    stroke: $yellow;
  }
}

// demo-specific
body {
  background-color: $white;
}
.showbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>
