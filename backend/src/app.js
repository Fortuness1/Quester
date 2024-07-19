require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const connectToDatabase = require('./config/db.js')

const app = express();
const routes = require('./routes.js');

connectToDatabase()

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor na porta ${process.env.PORT}`);
}); 