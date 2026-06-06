const prompt = require("prompt-sync")()

let n1 = Number(prompt("digite o primeiro numero: "))
let n2 = Number(prompt("digite o segundo numero: "))

// faz as conta
console.log("soma: " + (n1 + n2))
console.log("subitração: " + (n1 - n2))
console.log("mutiplicação: " + (n1 * n2))

// ver se da pra dividir
if(n2 == 0){
    console.log("erro, nao da pra dividir por 0")
}
else{
 console.log("divisão: " + (n1 / n2))
}