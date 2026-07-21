const express = require('express');
const app = express();

const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 99.90 },
  { id: 2, nome: "Teclado Mecânico", preco: 249.90 },
  { id: 3, nome: "Headset", preco: 179.90 },
  { id: 4, nome: "Monitor", preco: 899.90 }
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.get('/produtos/caros', (req, res) => {
  const produtosCaros = produtos.filter(produto => produto.preco > 100);
  res.json(produtosCaros);
});

app.listen(3002, () => {
  console.log('Servidor rodando na porta 3002');
});