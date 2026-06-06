let produtos = [

 {id: 1, nome: "Mouse", preco: 50},
 {id: 2, nome: "Teclado", preco: 120},
 {id: 3, nome: "Monitor", preco: 800},
 {id: 4, nome: "Fone", preco: 90}

]

for(let i = 0; i < produtos.length; i++){

 console.log(`id: ${produtos[i].id}`)
 console.log(`nome: ${produtos[i].nome}`)
 console.log(`preço: ${produtos[i].preco}`)
 console.log("----------------")

}

produtos.push({id: 5, nome: "Gabinete", preco: 250})

console.log("novo tamanho do array: " + produtos.length)