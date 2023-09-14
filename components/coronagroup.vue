<template>
    <div class="w-100 corona-group text-center mt-3 mb-10" id="corona">
        <span class="d-inline-block pt-5 text-h4 font-weight-bold text-error" v-motion-pop-visible style="transition: 0.7s;">إحصائيات فيروس كورونا لعام 2023</span>
        <v-row justify="center" class="mt-10">
                <v-col lg="4" xl="6" md="12" sm="12" cols="12">
        <Corona2/>
    </v-col>
    <div class="spacer px-20"></div>
    <v-col lg="5" xl="5" md="12" sm="12" cols="12">
        <Corona1/>
    </v-col>
          
    
   </v-row>
    </div>
   
</template>
<style lang="scss" scoped>
.corona-group{
    image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
    background-image: url(https://www.lung.org/getmedia/734b6b16-c411-4c9a-b9b9-da25f7b9848e/covidblue_e.jpg?width=700&height=350&ext=.jpg);
    background-attachment:fixed;
  background-repeat: no-repeat;
  background-size: 100% 100%; 
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  height: 100%;
  width: 100%;
}
html{
  scroll-behavior: smooth;
}
</style>

