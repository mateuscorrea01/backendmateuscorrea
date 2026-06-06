const prompt = require("prompt-sync")()

function soma(n1, n2){
   return n1 + n2
}

function subtrai(n1, n2){
 return n1 - n2
}

function mutiplica(n1, n2){
   return n1 * n2
}

function divide(n1, n2){

 if(n2 == 0){
    return "Erro: divisao por zero"
 }

 return n1 / n2

}

let numUm = Number(prompt("digite um numero: "))
let numDois = Number(prompt("digite outro numero: "))

console.log("soma = " + soma(numUm, numDois))
console.log("subtração = " + subtrai(numUm, numDois))
console.log("mutiplicação = " + mutiplica(numUm, numDois))
console.log("divisão = " + divide(numUm, numDois))