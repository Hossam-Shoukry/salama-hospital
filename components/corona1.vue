<template>
    <div v-motion-slide-visible-bottom style="transition: 0.7s;">
        <Bar :data="data" :options="options" class="h-screen" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ChartData
  } from 'chart.js'
  import { Bar } from 'vue-chartjs'
  import * as chartConfig from '~/server/chartConfig'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  const options = chartConfig.options
  const data = ref<ChartData<'bar'>>({
    datasets: []
  })
  
  onMounted(() => {
    setInterval(() => {
      data.value = chartConfig.randomData()
    }, 3000)
  })
  </script>
  <style lang="scss" scoped>
html{
  scroll-behavior: smooth;
}
</style>