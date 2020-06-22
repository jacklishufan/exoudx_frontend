<template>
  <div class="nut-tabbar" :class="{ bottom: bottom }">
    <a
      class="tabbar-nav"
      v-for="(value, index) in tabList"
      :class="[{ curr: index == currIndex }, type]"
      :key="value.tabTitle"
      v-on:click="switchTabs(value, index)"
      :href="value.href"
    >
      <span class="icon-box">
        <b class="tips num" v-if="value.num && value.num <= 99">{{ value.num }}</b>
        <b class="tips" v-else-if="value.num && value.num > 100">{{ '...' }}</b>
        <template v-if="value.icon">
          <div class="icon" style="justify-content: center">
            <i :class="['iconfont',value.icon]" ></i>
          </div>
        </template>
        <div style="justify-content: center">
        <div :class="['tabbar-nav-word', { 'big-word': !value.icon }]">{{ value.tabTitle }}</div>
        </div>
      </span>
      <div :class="['box-overlay',{ 'box-overlay-curr': index == currIndex}]"></div>

    </a>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
  props: {
    tabbarList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'based',
    },
  },
  data() {
    return {
      currIndex: null,
      tabList: this.tabbarList,
    };
  },
  mounted() {
    this.initBar();
  },
  watch: {
    tabbarList: {
      handler(value) {
        this.tabList = value;
        this.initBar();
      },
      deep: true,
    },
  },
  methods: {
    initBar() {
      this.tabList.forEach((item, index) => {
        if (item.curr) {
          this.currIndex = index;
        }
      });
    },
    switchTabs: function (value, index) {
      this.currIndex = index;
      this.$emit('tab-switch', value, index);
      this.$emit('tabSwitch', value, index); //兼容以前驼峰法
    },
  },
};
</script>
<style lang="scss">
  .icon-box .icon {
    margin-top: 1.4rem;
    width: auto;
    height: auto;
  }
  .icon-box {

  }
  .nut-tabbar {
    height: auto;
    background: #000;
     font-weight: bold;
    box-shadow: 0 -0.2rem 10px #fff,
                     0 -0.2rem 20px #fff,
                     0 -0.2rem 30px blue,
                     0 -0.2rem 40px blue;
      border-top-width: 0.3rem;
    text-shadow: 0.2rem 0rem 0.5rem blue, -0.2rem 0rem 0.5rem blue, 0rem 0.2rem 0.5rem blue, 0rem -0.2rem 0.5rem blue;
  }
  .tabbar-nav-word {
    margin-top: 0rem;
    font-size: 3rem;

  }
  .curr{
     font-weight: bold;
     color: #fff;

     text-shadow: 0.2rem 0rem 0.5rem red, -0.2rem 0rem 0.5rem red, 0rem 0.2rem 0.5rem red, 0rem -0.2rem 0.5rem red;
  }
  .box-overlay-curr{
        mix-blend-mode: color;
    box-shadow: 0 -0.2rem 10px red,
                     0 -0.2rem 20px red,
                     0 -0.2rem 30px red,
                     0 -0.2rem 40px red;
    position: absolute;
    width: 25%;
    height: 100%;
  }
</style>
