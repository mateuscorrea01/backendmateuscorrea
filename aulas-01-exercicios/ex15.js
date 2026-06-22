// Criando o array com 5 produtos
const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Fone de Ouvido", preco: 120 },
    { id: 4, nome: "Mousepad", preco: 40 },
    { id: 5, nome: "Monitor", preco: 800 }
];

// a) Use .find() para buscar e exibir o produto de id 3
const produtoId3 = produtos.find(p => p.id === 3);
console.log("a) Produto ID 3:", produtoId3);

// b) Use .filter() para listar os produtos com preço acima de 100
const caros = produtos.filter(p => p.preco > 100);
console.log("b) Produtos acima de 100:", caros);

// c) Use .map() para criar um array só com os nomes dos produtos
const nomes = produtos.map(p => p.nome);
console.log("c) Apenas nomes:", nomes);

// d) Use .forEach() para exibir cada produto formatado
console.log("d) Produtos formatados:");
produtos.forEach(p => {
    console.log(`Produto: ${p.nome} - Preço: R$ ${p.preco}`);
});