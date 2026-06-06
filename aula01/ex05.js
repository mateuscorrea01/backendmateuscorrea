const prompt = require("prompt-sync")()

let pares = 0
let impares = 0

for(let i = 1; i <= 10; i++){

 let numero = Number(prompt(`digite o ${i} numero: `))

 if(numero % 2 == 0){
    pares++
 }
 else{
    impares++
 }

}

console.log("quantidade de pares: " + pares)
console.log("quantidade de impares: " + impares)