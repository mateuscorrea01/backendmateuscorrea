const prompt = require("prompt-sync")()

let nome = prompt("digite seu nome: ")
let idade = prompt("digite sua idade: ")
let cidade = prompt("digite sua cidade: ")

console.log(`Oi, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`)
// feito