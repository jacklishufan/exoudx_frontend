<template>
<div class="card-block">

<!--<col class="left-block"></col>-->
  <div class="data-header">{{statsData.province}}</div>
  <div class="right-block">
    <div class="data-row">
      <CardNumberBox
        label="Active"
        :number="statsData.active"
        :delta="statsData.active_diff"
      ></CardNumberBox>
            <CardNumberBox
        label="Deaths"
        :number="statsData.deaths"
        :delta="statsData.deaths_diff"
      ></CardNumberBox>
    </div>
      <div class="data-row">
              <CardNumberBox
        label="Confirmed"
        :number="statsData.confirmed"
        :delta="statsData.confirmed_diff"
      ></CardNumberBox>
              <CardNumberBox
        label="Recovered"
        :number="statsData.recovered"
        :delta="statsData.recovered_diff"
      ></CardNumberBox>
    </div>
  </div>
</div>
</template>

<script>
   import CardNumberBox from '@/components/CardNumberBox'
    export default {
        name: "VirusStatsCard",
        components:{ CardNumberBox },
        props: {
          statsData: {
          type: Object,
          default: () => {
            return {
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
            };
          },
          },
        },
        data() {
            return {
              statsData: this.statsData,
            };
        },
    }
</script>

<style scoped>
.card-block{

    box-shadow:deepskyblue 0px 0px 8rem inset;
  border-radius:2rem;
  margin-top: 3rem;
  margin-left: 2rem;
    margin-right: 2rem;
  display: flex;
  color: #FFF;
  border: 0.1rem solid white;
    /*background-color: #444444;*/
  font-size: 2rem;
  height: auto;
  /*justify-content: center;*/
  align-items: center;
        flex-direction: column;
}
.data-header{
  font-weight: bold;
  font-size: 3rem;
  text-align:left;
  width: 95%;
  margin-left: 4rem;
}
  .left-block{
    background-color: rebeccapurple;
    margin-left: 1rem;
      border-radius:1.5rem;
    width: 10rem;
    height: 10rem;
  }
    .right-block{
    /*background-color: rebeccapurple;*/
    margin-left: 1rem;
      border-radius:1.5rem;
      flex-grow: 1;
    margin-right: 1rem;
    height: 10rem;
      width: 100%;
      flex-direction: column;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
  }
  .data-row{
    display: flex;
    flex-grow: 1;
    width: 95%;
    height: 40%;
    margin: 1rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    flex-direction: row;

  }

</style>
