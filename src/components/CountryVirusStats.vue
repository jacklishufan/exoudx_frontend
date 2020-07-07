<template>
  <div class="country-data" >

<div v-on:click="switchExpand()">
      <VirusStatsCard
        :statsData="statsData.data"
        class="country-node"
        ></VirusStatsCard>
  </div>
      <div v-if="expand" class="provs">
        <div class="left"></div>
        <div class="right">
          <div class="region-node" v-for="(region, idx) in statsData.provinces">
          <VirusStatsCard

            :statsData="region"
            :key="region.name"
            style="margin-left: 0px;width: 100%;transform: scaleX(0.95) scaleY(0.95)"
          ></VirusStatsCard>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  import VirusStatsCard from '@/components/VirusStatsCard'
    export default {
        name: "CountryVirusStats",
        components: { VirusStatsCard } ,
        props: {
          statsData: {
          type: Object,
          default: () => {
            var item = {
              data:{
              "province":"China",
              "deaths": 659,
              "deaths_diff": 6,
              "recovered": 0,
              "recovered_diff": 0,
              "confirmed": 1005,
              "confirmed_diff": 1005,
              "active": 25007,
              "active_diff": -999,
              "last_update": "2020-06-23 04:33:22",
              "fatality_rate": 0.0257,
              },
            provinces:[{
              "province":"Guangdong",
              "deaths": 659,
              "deaths_diff": 6,
              "recovered": 0,
              "recovered_diff": 0,
              "confirmed": 1005,
              "confirmed_diff": 1005,
              "active": 25007,
              "active_diff": -999,
              "last_update": "2020-06-23 04:33:22",
              "fatality_rate": 0.0257,
              }]
            };
            for (var i=0; i<3;i++){
              item.provinces.push(item.provinces[0])
            }
            return item;
          },
          },
        },
        data() {
            return {
              statsData: this.statsData,
              expand:false,
            };
        },
        methods:{
          switchExpand(){
            this.expand = !this.expand
            console.log(333)
          }
        }
    }
</script>

<style scoped>
.country-data{

      /*box-shadow:deepskyblue 0px 0px 8rem inset;*/
  /*background-color: #555;*/
}
.provs{
    display: flex;
  flex-direction: row;
}
.left{
  width: 2rem;
  /*flex-grow: 1;*/
  height: 50rem;
  display: flex;
}
.right{
  width: 2rem;
  flex-grow: 1;
}
.region-node{
  display: flex;
  flex-direction: row;
  margin-left: 0px;
}
.region-node:before {
    /*box-shadow:deepskyblue 0px 0px 0.1rem inset;*/
    content: '';
    position:relative;
    left: 1em;
    top: -6.5rem;
    width: 2rem;
    margin-right: 0px;
    height: 17.5rem;
    border-style: None None solid solid;
    border-width: 0.2em;
    border-color: #fff;
}
.region-node:first-child:before {
  top: -0.4rem;
  height: 11rem;
}  /*.province-data{*/
  /*  margin-left: 30rem;*/
  /*}*/
</style>
