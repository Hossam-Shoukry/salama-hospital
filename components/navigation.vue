<template>
<div class="navigation">
  <sidebar v-if="drawer" style="position: relative; z-index: 22; transition: 0.5s;"/>

  <div class="parent-header">
    <div class="skew-header">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white" width="large" :class="x.matches ? 'd-inline-block' : 'd-none'"  style="position: absolute;right: 0;"></v-app-bar-nav-icon>
      <v-list :class="x.matches ? 'd-none' : ''"  class="header-list">
        <v-list-item>
          <v-btn class="list-btn" variant="text">
            <a href="#main" class="font-bold  text-h6 list-etem">الرئيسية</a>
            <v-icon></v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="list-btn" variant="text">
            <a href="#corona" class="font-bold text-h6  list-etem">احصائيات كورونا</a>
            
            <v-icon></v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="list-btn" variant="text">
            <a href="#deparments" class="font-bold text-h6  list-etem">  الاقسام</a>
           
            <v-icon></v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="list-btn" variant="text">
            <a href="#whous" class="font-bold text-h6  list-etem">من نحن</a>
            
            <v-icon></v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="list-btn" variant="text">
            <a href="#callus" class="font-bold text-h6  list-etem"> اتصل بنا</a>
           
            <v-icon></v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </div>
  </div>
  
 
  </div>
  
<div>

</div>
 
</template>

<script>

export default{
    data(){
      return{
        drawer:false,
        x:window.matchMedia("(max-width: 890px)"),
        drawer:false,
      }
    }
}
</script>

<style lang="scss" scoped>
.navigation{
 .parent-header{
  background-image: url(https://e0.pxfuel.com/wallpapers/815/325/desktop-wallpaper-background-for-hospital-website-tip.jpg);
  display: flex;
  padding: 15px;
  background-color: rgb(6, 6, 85);
  height: 70.9px;
  .skew-header {
    background: rgb(119, 7, 125);
    display: flex;
    justify-content: flex-end;
    top:10px;
    height : 50px;
    width : 80%;
    opacity: 0.6;
    margin : 10px auto;
    position: absolute;
    right: 0px;
    &:first-child:before{
      content:'';
    position: absolute;
    top:0;
    right:100%;
    width:0;
    height:0;
    border:25.6px solid rgb(119, 7, 125);
    border-top-color:transparent;
    border-left-color:transparent;
    }

    &::nth-child(2){
      &::after{
        height:0;
        position: absolute;
    top:0;
    left:100%;
    width:0;
    
    content:'';
    border:50px solid blue;
    border-bottom-color:transparent;
    border-right-color:transparent;
        
      }
    }
    .header-list{
      direction: rtl;
display: flex;
background-color: transparent;
color: white;
font-weight: bold;
 overflow: hidden;  
      .list-btn{
        transition: 0.5s;
       &:hover{
        scale: 1.1;
       
  a{
    color: rgb(0, 255, 30);
  }
       }
      }
      .list-etem{
        color: whitesmoke;
      }
      
}
    
}
 }
    
}
html {
  scroll-behavior: smooth;
}
</style>