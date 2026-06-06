function executarOperacao(a, b, operacao){

   let resultado = operacao(a, b)

   console.log("resultado = " + resultado)

}

executarOperacao(10, 3, (x, y) => x + y)

executarOperacao(10, 3, (x, y) => x - y)

executarOperacao(10, 3, (x, y) => x * y)

executarOperacao(10, 3, (x, y) => {

   if(y == 0){
      return "erro divisao por zero"
   }

   return x / y

})