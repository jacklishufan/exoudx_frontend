<template>
      <div class="data-box">
        <span>{{label}} : {{number}}</span>
        <span v-if="delta!=0" :class="['diff',delta > 0 ? 'diff-red': 'diff-green']"> &nbsp;  {{delta< 0? '&#9660;' : '&#9650;'}}{{Math.abs(delta)}}</span>
      </div>
</template>

<script>
    export default {
        name: "CardNumberBox",
        props: {
          label: {
            type: String,
            default: () => {
              return "Active";
            },
          },
          number: {
          default: () => {
            return 1000;
          },
          },
          delta: {
          default: () => {
            return 340;
          },
          },
        },
        // data() {
        //     return {
        //       label:this.label,
        //       number: this.number,
        //       delta:this.delta,
        //     };
        // },
    }

</script>

<style scoped>
  .data-box{

         /*background-color: darkblue;*/
    flex-grow: 1;
    width: 1rem;
    height: 100%;
    margin-left: 1rem;
    margin-right: 1rem;
    align-items: center;
    font-size: 2.2rem;
    display: flex;
    color: #FFF;
    font-weight: bolder;
/*text-shadow: 0.2rem 0rem 0.5rem blue, -0.2rem 0rem 0.5rem blue, 0rem 0.2rem 0.5rem blue, 0rem -0.2rem 0.5rem blue;*/

  }
  .diff-red{
    color: red;
    text-shadow:0 0 0 red;
    /*text-shadow: 0.2rem 0rem 0.5rem red, -0.2rem 0rem 0.5rem red, 0rem 0.2rem 0.5rem red, 0rem -0.2rem 0.5rem red;*/

  }
    .diff-green{
    color: lightgreen;
      text-shadow:0 0 0 lightgreen;
  }
</style>
