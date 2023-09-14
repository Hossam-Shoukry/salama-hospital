
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['vuetify/styles/main.sass' , '@mdi/font/css/materialdesignicons.css','~/assets/css/tailwind.css'],
  nitro: {
    preset: 'firebase'
  },
  build:{
    transpile:['vuetify','vue-countup-v3'],
  },
  devtools: { enabled: true },
  
  modules:['@vueuse/motion/nuxt','@morev/vue-transitions/nuxt','@nuxtjs/tailwindcss','@nuxtjs/color-mode' , 'nuxt-swiper'],
  colorMode: {
    classSuffix: ''
  },
      tailwindcss:{
      cssPath:'~/assets/css/tailwind.css',
      configPath:'tailwind.config.js',
      exposeConfig:false,
      config:{},
      injectPosition:0,
      viewer:true
      },
  app:{
    head:{
        title:'salama hospital',
        
      meta:[
        {name:'description' , content:'every thing about nuxt 3'}
      ],
      link:[ 
        {rel:'stylesheet' ,
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
        
      }
       ]
    }
  },
  runtimeConfig: {
    currencyKey:process.env.CURRENCY_API_KEY,
    
  },
  
})
