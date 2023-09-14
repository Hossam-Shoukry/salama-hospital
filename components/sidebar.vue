<template>
    <v-card color="red" variant="text" class="sidebar-card">
        <div class="w-100 h-100 bg-black"></div>
      <v-layout>
        <v-navigation-drawer
        image="https://e0.pxfuel.com/wallpapers/815/325/desktop-wallpaper-background-for-hospital-website-tip.jpg"
        location="left"
          v-model="drawer"
          temporary
        >
          
  
         
  
          <v-list density="compact" nav>
            <v-list-item value="home" class="mt-10 text-black">
                <v-btn class="font-weight-bold ml-10 nav-btn text-h6" width="150" color="error"  variant="flat" style="border-radius: 20px;">
                    <a href="#main" class="mr-2">الرئيسية</a>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </v-list-item>
            <v-list-item value="corona" class="mt-5">
                <v-btn class="font-weight-bold ml-4 text-h6" color="red-darken-4" variant="flat" width="180" style="border-radius: 20px;">
                    <a href="#corona" class="mr-2">احصائيات كورونا </a>
                    <v-icon>mdi-virus</v-icon>
                </v-btn>
            </v-list-item>
            <v-list-item value="dpt" class="mt-5">
                <v-btn class="font-weight-bold ml-10 text-h6" width="150" color="red-darken-4" variant="flat" style="border-radius: 20px;">
                    <a href="#deparments" class="mr-2">الاقسام </a>
                    <v-icon>mdi-diversify</v-icon>
                </v-btn>
            </v-list-item>
            <v-list-item value="about" class="mt-5">
                <v-btn class="font-weight-bold text-h6 ml-10" variant="flat" width="150" color="error" style="border-radius: 20px;">
                    <a href="#whous" class="mr-2">من نحن</a>
                    <v-icon>mdi-help-circle</v-icon>
                </v-btn>
            </v-list-item>
            <v-list-item value="callus" class="mt-5">
                <v-btn class="font-weight-bold ml-10 text-h6" color="red-darken-4" width="150" variant="flat" style="border-radius: 20px;">
                    <a href="#callus" class=" mr-2">اتصل بنا </a>
                    <v-icon>mdi-phone</v-icon>
                </v-btn>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </template>
  <script>
  export default {
    data () {
      return {
       drawer: true
      }
    },
   
  }
</script>
<style scoped lang="css">
html {
  scroll-behavior: smooth;
}
</style>