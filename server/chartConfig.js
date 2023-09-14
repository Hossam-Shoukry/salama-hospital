function getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  }
  
  export const randomData = () => ({
    labels: [
      'ديسيمبر' + getRandomInt(),
      'نوفمبر',
      'أكتوبر',
      'سبتمبر',
      'اغسطس',
      'يوليو',
      'يونيو',
      'مايو',
      'ابريل',
      'مارس',
      'فبراير',
      'يناير'
    ],
    datasets: [
      {
        label: 'احصائيات كورونا لعام 2023',
        backgroundColor: '#f87979',
        data: [
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt()
        ]
      }
    ]
  })
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  