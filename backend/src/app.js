const express = require('express');
require('dotenv').config({ path: './backend/.env' });
const routes = require('./routes.js');
const connectToDatabase = require('./config/db.js')
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

connectToDatabase()

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor na porta ${process.env.PORT}`);
}); 