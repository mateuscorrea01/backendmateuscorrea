const prompt = require("prompt-sync")()

const secreto = 42

let tentativas = 0

while(true){

 let chute = Number(prompt("digite um numero: "))

 tentativas++

 if(chute == secreto){
    console.log(`acertou em ${tentativas} tentativas`)
    break
 }

 else if(chute < secreto){
    console.log("o numero secreto é maior")
 }

 else{
    console.log("o numero secreto é menor")
 }

}