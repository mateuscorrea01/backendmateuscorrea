const express = require('express');
const app = express();

app.get('/produtos', (req, res) => {
  res.json([
    { id: 1, nome: "Mouse Gamer", preco: 99.90 },
    { id: 2, nome: "Teclado Mecânico", preco: 249.90 },
    { id: 3, nome: "Headset", preco: 179.90 },
    { id: 4, nome: "Monitor", preco: 899.90 }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});