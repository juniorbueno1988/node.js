// Importa o módulo 'express'
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Define uma rota padrão
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
