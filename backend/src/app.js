const express = require('express');
require('dotenv').config({ path: './backend/.env' });
// if (result.error) {console.error('Erro ao carregar variáveis de ambiente:', result.error);}
const routes = require('./routes.js');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite acesso de qualquer origem
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor na porta ${process.env.PORT}`);
}); 