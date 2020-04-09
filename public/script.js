new Vue({
  el: '#app',
  data() {
    return {
      title: 'Verificador de Palindromo',
      palavra: '',
      textos: [{
        palindromo: 'ana', 
        isPalindromo: true, 
        resultado: 'Sim'
      }, 
      {
        palindromo: 'opa', 
        isPalindromo: false, 
        resultado:'Não'
      }]  
    }
  },
  methods: {
    inserirNovoPalindromo(palindromo) {
      var verificando = this.palavra.split('').reverse().join('')
      var resultado = verificando.replace(/ /g,'').toLowerCase()

      var text = this.palavra.replace(/ /g,'').toLowerCase()

      if (this.palavra == false) {
        alert('Insira um texto')
      }
      else if (resultado == text) {
        this.textos.push({ palindromo, isPalindromo: true, resultado: 'Sim' })
        
      } else {
        this.textos.push({ palindromo, isPalindromo: false, resultado: 'Não'})
      }
      this.palavra = ''
    },

    limparHistorico() {
      while(this.textos.length) {
        this.textos = []; 
        i = 0;
     }
    }
  }
})