require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const path = require ('path')
const app = express();

// Configurações do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importe as rotas
const routes = require('./routes/routes');

// Defina as rotas
app.use('/', routes);

// Inicie o servidor
const PORT = process.env.PORT || 3000; // Use a porta definida nas variáveis de ambiente ou 3000 por padrão
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
