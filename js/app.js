var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    sum: 4 + 6,
    value: 5,
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
    *Las propiedades computadas son fucniones que hacen o que pueden hacer las variables
      Ejemplo: La variable message es retornada de forma inversa
        De: Hello Vue! a: !euV olleH
    *Los métodos son funciones tradicionales de POO
*/