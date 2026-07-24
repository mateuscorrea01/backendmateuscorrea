const express = require('express');
const app = express();

app.use(express.json());

// 1. Lista inicial com 2 jogadores
let jogadores = [
  { id: 1, nome: "Messi", overall: 93, posicao: "ATA" },
  { id: 2, nome: "CR7", overall: 90, posicao: "ATA" }
];

let proximoId = 3;

// 2. GET - Listar todos
app.get('/jogadores', (req, res) => {
  res.json(jogadores);
});

// 3. GET - Buscar por ID
app.get('/jogadores/:id', (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);

  if (!jogador) {
    return res.status(404).json({ mensagem: "Jogador não encontrado" });
  }

  res.json(jogador);
});

// 4. POST - Criar novo jogador
app.post('/jogadores', (req, res) => {
  const novo = {
    id: proximoId++,
    nome: req.body.nome,
    overall: req.body.overall,
    posicao: req.body.posicao
  };

  jogadores.push(novo);
  res.status(201).json(novo);
});

// 5. PUT - Atualizar jogador
app.put('/jogadores/:id', (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);

  if (!jogador) {
    return res.status(404).json({ mensagem: "Jogador não encontrado" });
  }

  jogador.nome = req.body.nome;
  jogador.overall = req.body.overall;
  jogador.posicao = req.body.posicao;

  res.json(jogador);
});

// 6. DELETE - Remover jogador
app.delete('/jogadores/:id', (req, res) => {
  jogadores = jogadores.filter(j => j.id != req.params.id);
  res.json({ mensagem: "Jogador removido com sucesso" });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando!");
});