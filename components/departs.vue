<template>
  <div id="deparments" class="text-h1 font-bold text-center mb-2 mt-2 text-primary" style="text-shadow: 4px 4px inset rgb(5, 25, 97);transition: 0.7s;">
    <span style="transition: 0.7s;" class="d-inline-block" v-motion-roll-visible-bottom>الأقسام</span></div>
    <div>

  <v-container>
    <v-row justify="center">
    <v-col v-motion-pop-visible style="transition: 0.7s;" xl="4" lg="4" md="6" sm="12" cols="12" v-for="item, index in departments">
    <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="mx-auto"
          color="primary"
          max-width="600"
          v-bind="props"
        >
          <v-img
            :aspect-ratio="16/9"
            cover
            :src='item.img'
          >
            <v-dialog-bottom-transition>
              <div
              
                v-if="isHovering"
                class="d-block transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-right"
                style="height: 100%;opacity: 0.5;"
              >
              <span class="mr-3 text-h5 mt-3 d-inline-block"> مستشفى دار السلامة</span>
             
              </div>
            </v-dialog-bottom-transition>
          </v-img>
  
          <v-card-text class="pt-6">
            <div class="font-weight-bold text-right text-white text-h5 mb-2">
             {{ item.surgery }}
            </div>
  <hr>
           
  
            <div class="font-weight-light text-h6 mb-2">
             <p class="d-block text-right">{{ item.p }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
  </v-col>
</v-row>
  </v-container>
  

      
    </div>
  </template>
  <script>
export default{
  data(){
    return{
      departments:[
        {
          surgery:'قسم العيون',
          img:'https://zwwada.com/wp-content/uploads/2022/08/image-70.png',
          p:'تعامل مع أمراض وجراحة العيون والمسالك البصرية، يتضمّن ذلك العين، العصب البصري، الشبكية والجسم الزجاجي والعدسة، القزحية، القرنية،'
        },
        {
          surgery:'قسم الجراحة',
          img:'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2019/12/11/17/19/surgery-3113314-0117-8col.jpg',
          p:'متوفر لدينا احدث الاجهزة لجراحة المنظار والقولون العصبى وكذلك الاوعية الدموية والغدد الصماء والقلب والصدر'
        },
        {
          surgery:'قسم الأسنان',
          img:'https://modo3.com/thumbs/fit630x300/89948/1480940836/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%B9%D9%86_%D8%B7%D8%A8_%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86.jpg',
          p:'    معالجة وتشخيص أمراض الفم، والفكين، والأسنان، والأنسجة المحيطة بها واجراء حشوات الاسنان وعلاج امراض اللثة وصناعة وتقويم الاسنان'
        },
        {
          surgery:'قسم الانف و الأذن',
          img:'https://www.specialty-hospital.com/uploads/images/services/2/2114_83.jpg',
          p:' أطباء متخصصون في قسم الأذن والأنف والحنجرة وقسم جراحة الرأس والعنق في مايو كلينك. تتوفر بالعيادة واحدة من أكبر ممارسات علاج أمراض الأذن والأنف والحنجرة في العالم،'
        },
        {
          surgery:'قسم الباطنة',
          img:'https://static.webteb.net/images/content/tbl_diseases_disease_1269_91533a5ec18-abb6-4e3c-8c64-73b0012beadf.jpg',
          p:' أطباء متخصصون مدرَّبون على التعامل خصيصًا مع الحالات المعقدة أو الأمراض الجهازية المتعددة التي قد لا يكون الطبيب المتخصص في علاج أمراض العضو الواحد غير مدرب على التعامل معها'
        },
        {
          surgery:'قسم النساء والتوليد',
          img:'https://admin.dotcarecms.com/storage/AEH/posts/September2021/SeRTKKJE29Ic0kDgLI1H.png',
          p:'علاج السلسل البولى وانقطاع الحيض وعسر وغزارة الطمس والعقم وتدلى وهبوط اجهزة الحوضوالتهابات المهبل وعنق الرحم بما فيها الالتهابات البرولية والفيروسية'
        },
      ]
    }
  }
}
</script>