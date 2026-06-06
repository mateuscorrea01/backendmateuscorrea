const prompt = require("prompt-sync")()

const soma = (n1, n2) => n1 + n2

const subtrai = (n1, n2) => {
   return n1 - n2
}

const mutiplica = (n1, n2) => n1 * n2

const divide = (n1, n2) => {

   if(n2 == 0){
      return "Erro: divisao por zero"
   }

   return n1 / n2

}

let num1 = Number(prompt("digite um numero: "))
let num2 = Number(prompt("digite outro numero: "))

console.log("soma = " + soma(num1, num2))
console.log("subtração = " + subtrai(num1, num2))
console.log("mutiplicação = " + mutiplica(num1, num2))
console.log("divisão = " + divide(num1, num2))