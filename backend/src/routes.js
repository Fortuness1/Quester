const { Router } = require('express');
const controllers = require('./controllers/UserController');
const routes = new Router();

routes.get('/', (req, res) => {
    var status = {
        status: "ok"
    }
    res.send(JSON.stringify(status));
});

routes.post('/signup', controllers.createUser);

routes.post('/login', controllers.findUser)

module.exports = routes;