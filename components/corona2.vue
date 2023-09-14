<template>
    <Pie :data="data" :options="options" class="h-screen" v-motion-slide-visible-top style="transition: 0.7s;"/>
  </template>
  
  <script lang="ts">
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  import * as chartConfig from '~/server/chartConfig2'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      Pie
    },
    data() {
      return chartConfig
    }
  }
  </script>

  <style lang="scss">
html{
  scroll-behavior: smooth;
}
</style>
  