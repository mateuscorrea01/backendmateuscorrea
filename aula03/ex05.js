const prompt = require("readline-sync")

let produtos = []

for(let i = 1; i <= 3; i++){

 let nome = prompt.question(`digite o nome do produto ${i}: `)
 let preco = Number(prompt.question("digite o preço: "))

 produtos.push({
    nome: nome,
    preco: preco
 })

}

let caros = produtos.filter(produto => produto.preco > 20)

console.log("produtos acima de 20 reais:")

for(let i = 0; i < caros.length; i++){

 console.log(`${caros[i].nome} - R$${caros[i].preco}`)

}