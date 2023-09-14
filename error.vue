<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
<p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
<p class="mt-7 text-6xl">Ooops.</p>
<p class="mt-7 font-weight-bold text-red">{{ error.message }}</p>
<div class="btn mt-2 rounded-xl duration-700 cursor-pointer hover:scale-110 hover:mt-n10" @click="handleClearError()">Back To Home...</div>
    </div>
</template>

<script setup>
defineProps(['error']); 
const handleClearError = ()=> clearError({redirect:'/'})
</script>

<style lang="scss" scoped>

</style>