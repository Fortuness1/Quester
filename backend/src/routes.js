const { Router } = require('express');
const controllers = require('./controllers/loginUser');

const routes = new Router();

routes.get('/', (req, res) => {
    var status = {
        status: "ok"
    }
    res.send(JSON.stringify(status));
});

routes.post('/signup', controllers.getUser);

routes.post('/signin', controllers.setUser);

module.exports = routes;