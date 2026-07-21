const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.json({
    nome: "Mateus Correa",
    disciplina: "Back End",
    ano: 2026
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});