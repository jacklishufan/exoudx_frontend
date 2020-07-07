<template>
  <div class="framework">
  <nut-navbar
    class="header"
    :leftShow="false"
    :rightShow="false"
>Exodus</nut-navbar>
    <transition class="container" name="fade">
<router-view></router-view>
    </transition>
    <Tabbar
      class="tab-label"
  :tabbar-list="tabList"
  :bottom="true"
>
</Tabbar>

<!--    <mt-tabbar >-->
<!--        <mt-tab-item id="tab1">-->
<!--            <i class="iconfont icon-app-homepage"></i>-->
<!--            <div class="tab-label">HomePage</div>-->
<!--        </mt-tab-item>-->
<!--        <mt-tab-item id="tab2">-->
<!--            <i class="iconfont icon-Globe"></i>-->
<!--            <div class="tab-label">Policies</div>-->
<!--        </mt-tab-item>-->
<!--        <mt-tab-item id="tab3">-->
<!--            <i class="iconfont icon-map"></i>-->
<!--            <div class="tab-label">Planer</div>-->
<!--        </mt-tab-item>-->
<!--       <mt-tab-item id="tab4">-->
<!--            <i class="iconfont icon-stats-lines-pipes"></i>-->
<!--            <div class="tab-label">Cases</div>-->
<!--        </mt-tab-item>-->

<!--</mt-tabbar>-->
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar'
  export default {
    name: 'Menu',
    components:{ Tabbar },
    data() {
      return {
        tabList:[
          {'tabTitle':"HomePage", "icon":"icon-app-homepage","href":"#/menu/home"},
          {'tabTitle':"Policies","icon":"icon-Globe","href":"#/menu/policies"},
          {'tabTitle':"Planer","icon":"icon-map","href":"#/menu/planner"},
          {'tabTitle':"Cases","icon":"icon-stats-lines-pipes","href":"#/menu/virus"},
          ],
      }
    }
  }
</script>

<style>
  .nut-navbar{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    background-color: #000;
    color: #fff;
  }
  .nut-navbar h3 {
    display: contents;
            text-shadow: 0 0 10px #fff,
                     0 0 20px blue,
                     0 0 30px blue,
                     0 0 40px blue,
                     0 0 70px blue;

  }
  .tab-label{
    margin-top: 1rem;
  }
  .iconfont{
    font-size: 4rem;
  }
  .header{
    font-size: 4rem;
  }
  .tab-label{
    font-size: 4rem;
  }
  .framework{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color:#000;
  /*justify-content: center;*/
  padding: 0px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}


</style>
