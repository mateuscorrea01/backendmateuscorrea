const prompt = require("prompt-sync")()

let numero = Number(prompt("digite um numero: "))

for(let i = 1; i <= 10; i++){

   console.log(`${numero} x ${i} = ${numero * i}`)

}