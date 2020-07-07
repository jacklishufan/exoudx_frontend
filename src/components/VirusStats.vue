<template>
<div>
  <CountryVirusStats></CountryVirusStats>
</div>
</template>

<script>
  import CountryVirusStats from '@/components/CountryVirusStats'
    export default {
        name: "VirusStats",
          components:{ CountryVirusStats },
        created: function () {
         $.ajax({
           method:"GET",
           url:"https://covid-api.com/api/reports",
           success:function (data) {
             console.log(data)
           }
         })
        }
    }
</script>

<style scoped>
div {

}
</style>
