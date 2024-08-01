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

routes.delete('/deleteuser', controllers.deleteUser);

routes.get('/alluser', controllers.AllUser);

routes.get('/findbyid/:id', controllers.findUserById);

module.exports = routes;