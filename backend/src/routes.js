const { Router } = require('express');
const controllers = require('./controllers/loginUser');

const routes = new Router();

routes.post('/login', controllers.getUser); 

module.exports = routes;