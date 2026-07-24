const express = require('express');
const app = express();

app.use(express.json());

let jogadores = [
  { id: 1, nome: "Messi", overall: 93, posicao: "ATA" },
  { id: 2, nome: "CR7", overall: 90, posicao: "ATA" }
];

let proximoId = 3;

// 1. GET - Listar todos
app.get('/jogadores', (req, res) => {
  res.json(jogadores);
});

// 2. GET por ID (Exercício 3: com erro 404)
app.get('/jogadores/:id', (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);

  if (!jogador) {
    return res.status(404).json({ mensagem: "Jogador não encontrado" });
  }

  res.json(jogador);
});

// 3. POST - Criar com Validações (Exercícios 1, 2 e 4)
app.post('/jogadores', (req, res) => {
  const { nome, overall, posicao } = req.body;
  const erros = [];

  // Ex 1: Valida se mandou todos os campos
  if (!nome) erros.push("O campo 'nome' é obrigatório.");
  if (!overall) erros.push("O campo 'overall' é obrigatório.");
  if (!posicao) erros.push("O campo 'posicao' é obrigatório.");

  // Ex 2: Valida se o overall é um número e se está entre 1 e 99
  if (overall) {
    if (isNaN(overall)) {
      erros.push("O 'overall' precisa ser um número.");
    } else if (overall < 1 || overall > 99) {
      erros.push("O 'overall' deve ser entre 1 e 99.");
    }
  }

  // Ex 4: Se tiver qualquer erro na lista, devolve o erro 400
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  // Se estiver tudo certo, salva o jogador
  const novo = { id: proximoId++, nome, overall: Number(overall), posicao };
  jogadores.push(novo);
  res.status(201).json(novo);
});

// 4. PUT - Atualizar (Exercício 3: 404 se não existir)
app.put('/jogadores/:id', (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);

  if (!jogador) {
    return res.status(404).json({ mensagem: "Jogador não encontrado" });
  }

  jogador.nome = req.body.nome || jogador.nome;
  jogador.overall = req.body.overall || jogador.overall;
  jogador.posicao = req.body.posicao || jogador.posicao;

  res.json(jogador);
});

// 5. DELETE - Deletar (Exercício 3: 404 se não existir)
app.delete('/jogadores/:id', (req, res) => {
  const index = jogadores.findIndex(j => j.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Jogador não encontrado" });
  }

  jogadores.splice(index, 1);
  res.json({ mensagem: "Jogador removido com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando!");
});