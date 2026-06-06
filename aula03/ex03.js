let produtos = [

 {id: 1, nome: "Mouse", preco: 50},
 {id: 2, nome: "Teclado", preco: 120},
 {id: 3, nome: "Monitor", preco: 800},
 {id: 4, nome: "Fone", preco: 90}

]

let procurar = produtos.find(produto => produto.id === 3)

console.log("nome do produto: " + procurar.nome)

let caros = produtos.filter(produto => produto.preco > 50)

console.log("produtos acima de 50:")

for(let i = 0; i < caros.length; i++){

 console.log(`${caros[i].nome} - R$${caros[i].preco}`)

}