import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import CarouselCard from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

import Vue3autocounter from 'vue3-autocounter';



export default defineNuxtPlugin((nuxt)=>{
    
    const vuetify = createVuetify({
        ssr:true,
        components,
        directives
    })
    nuxt.vueApp.use(vuetify).use(CarouselCard).use(Vue3autocounter);
})