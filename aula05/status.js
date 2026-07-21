const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Funcionando!');
});

app.get('/status', (req, res) => {
  res.status(200).json({
    online: true,
    mensagem: 'Servidor online'
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});