var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    sum: 4 + 6,
    value: 5,
    isVisible: true,
    people: [
      'Marco',
      'Ándres',
      'Juan',
      'Alejandro',
    ]
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    calculateSum( value1, value2 ){
      return value1 + value2;
    }
  }
});

/* Notas:
   
*/