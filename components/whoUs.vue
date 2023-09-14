<template>
<div v-motion-roll-visible-top style="transition: 1.2s;" class="text-center mt-10 mb-10">
  <span class="text-h2 font-weight-bold text-red" id="whous">
    من نحن ؟ 
  </span>
</div>
<div>
  <v-container>
    <v-row>
    <v-col v-motion-slide-visible-left style="transition: 1s;" xl="6" lg="6" md="6" sm="12" cols="12">
      <v-img src="https://content.presentermedia.com/files/clipart/00003000/3002/hospital_building_pc_800_wht.jpg"></v-img>
    </v-col>
    <v-col v-motion-slide-visible-bottom style="transition: 1s;" xl="6" lg="6" md="6" sm="12" cols="12">
      <div class="text-right d-block">
        <span class="font-weight-bold text-h5">نبذة عن المستشفى</span>
        <hr class="mt-2">
      <p class="mt-10">
        المستشفى هى تلك المؤسسة العلاجية المسئولة عن تقديم الرعاية الصحية للمرضى من خلال طاقم متخصص طبى وأجهزة طبية، والتى تُشكل جزءاً حيوياً من خدمات الصحة العامة. تحتوى المستشفى على كافة التخصصات الطبية، كما يُشترط أن تكون مُجهزة بالمرافق التالية: غرف للعمليات وغرف للإنعاش وغرف للمرضى عامة وخاصة.
        المستشفى هى تلك المؤسسة العلاجية المسئولة عن تقديم الرعاية الصحية للمرضى من خلال طاقم متخصص طبى وأجهزة طبية، والتى تُشكل جزءاً حيوياً من خدمات الصحة العامة. تحتوى المستشفى على كافة التخصصات الطبية، كما يُشترط أن تكون مُجهزة بالمرافق التالية: غرف للعمليات وغرف للإنعاش وغرف للمرضى عامة وخاصة.
        المستشفى هى تلك المؤسسة العلاجية المسئولة عن تقديم الرعاية الصحية للمرضى من خلال طاقم متخصص طبى وأجهزة طبية، والتى تُشكل جزءاً حيوياً من خدمات الصحة العامة. تحتوى المستشفى على كافة التخصصات الطبية، كما يُشترط أن تكون مُجهزة بالمرافق التالية: غرف للعمليات وغرف للإنعاش وغرف للمرضى عامة وخاصة.
        المستشفى هى تلك المؤسسة العلاجية المسئولة عن تقديم الرعاية الصحية للمرضى من خلال طاقم متخصص طبى وأجهزة طبية، والتى تُشكل جزءاً حيوياً من خدمات الصحة العامة. تحتوى المستشفى على كافة التخصصات الطبية، كما يُشترط أن تكون مُجهزة بالمرافق التالية: غرف للعمليات وغرف للإنعاش وغرف للمرضى عامة وخاصة.
      </p>
      </div>
<div class="d-block text-center py-5 text-white mt-5 bg-black  font-weight-bold text-h4" style="border-radius: 50px;">
  <count-up :loop="Infinity" :end-val="500000" class="d-inline-block">
  </count-up>
</div>
  
    </v-col>
  </v-row>
  </v-container>
 
</div>
</template>


<script setup lang="ts">
  import CountUp from 'vue-countup-v3'
</script>