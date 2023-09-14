<template>
  <div class="h-screen w-100 main" id="main">
    <v-carousel class="h-screen w-100" cycle="">
    
    <v-carousel-item
      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&w=1000&q=80"
      cover
    >
    <div class="carousel-text" v-motion-pop-visible>
      <v-btn color="blue carousel-text-item" class="d-inline-block text-h6 font-weight-bold mr-20">عيادات على اعلى مستوى</v-btn>
    </div>
  
  </v-carousel-item>
  
    <v-carousel-item
      src="https://www.sriramakrishnahospital.com/wp-content/uploads/2022/05/Importance-of-first-aid.png"
      cover
    >
    <div class="carousel-text" v-motion-roll-visible-top>
      <v-btn color="red-darken-2 carousel-text-item" class="d-inline-block text-h6 font-weight-bold mr-20"> حالات الطوارىء  </v-btn>
    </div>
  </v-carousel-item>
  
    <v-carousel-item
      src="https://www.lsiarchitects.co.uk/wp-content/uploads/2018/07/LSI_Architects_BMI_TheAlexandraHospital_Reception_01.jpg"
      cover
    >
    <div class="carousel-text" v-motion-slide-visible-bottom>
      <v-btn color="orange carousel-text-item" class="d-inline-block text-white text-h6 font-weight-bold mr-20">استقبال على مدار 24 ساعة</v-btn>
    </div>
  </v-carousel-item>
  </v-carousel>
  </div>
 
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMotion } from "@vueuse/motion";
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.main{
  .carousel-text{
    transition: 1s;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    font-size: 30px;
    font-weight: bold;
    color: rgb(8, 26, 75);
.carousel-text-item{
  margin-bottom: 3%;
  border-radius:15px ;
  animation-delay:1.8s;
  animation-duration: 2.5s;
 animation-name: MoveUpDown;
 animation-iteration-count: infinite;
 animation-direction: alternate;
  position: absolute;
  
}
  }
}
@keyframes MoveUpDown {
  0%, 100% {
    bottom: 50%;
  }
  50% {
    bottom: 51%;
  }
}
html{
  scroll-behavior: smooth;
}
</style>