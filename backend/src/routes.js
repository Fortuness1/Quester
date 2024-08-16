const { Router } = require('express');
const controllers = require('./controllers/Controllers');
const userController = require('./controllers/UserController');
const questionController = require('./controllers/QuestionController');
const matchConController = require('./controllers/MatchCotroller');
const waitingMatchController = require('./controllers/WaitingMatchController');

const routes = new Router();
const upload = require('./middleware/upload');

routes.get('/', (req, res) => {
    var status = {
        status: "ok"
    }
    res.send(JSON.stringify(status));
});

//User
routes.post('/signup', userController.createUser);
routes.post('/login', userController.findUser);
routes.post('/user', userController.getUser);
routes.put('/update', userController.chargeUser);
routes.put('/change-profile-photo/:id', upload.single('profile-photo'), userController.changeProfilePhoto);
routes.get('/profile-photo/:id', userController.profilePhoto);
routes.delete('/user/:id', userController.deleteUser);

//Question
routes.post('/question', questionController.createQuestion);
routes.get('/question/:id', questionController.findQuestions);
routes.put('/question/', questionController.updateQuestion);
routes.post('/duplicate-question', questionController.duplicateQuestion);
routes.delete('/question/:iduser/:idquestion', questionController.deleteQuestion);

//Match
routes.post('/create-match', matchConController.createMatch); //fazendo
routes.get('/matches-history/:id', matchConController.findMatchesHistory); //feita
routes.get('/enter-match/:pin', matchConController.enterMatch);

//Waiting Match
routes.post('/waiting-match', waitingMatchController.createWaitingMatch);
routes.get('/waiting-match/:id', waitingMatchController.getWaitingMatch); //*
routes.get('/waiting-matches/:id', waitingMatchController.getAllWaitingMatches);
routes.put('/waiting-match/', waitingMatchController.updateWaitingMatch); 
routes.delete('/waiting-match/:id/:idwaiting', waitingMatchController.deleteWaitingMatch);

//Default
routes.get('/findbyID/:id', controllers.findbyID);
routes.delete('/deletebyID/:id', controllers.deletebyID);
routes.delete('/delete-all', controllers.deleteALL);
routes.delete('/delete-all-questions', controllers.deleteAllQuestions);
routes.get('/find-all', controllers.findAllUser);
routes.get('/find-all-waiting-matches', controllers.getWaitingMatches);
routes.get('/find-all-questions', controllers.findAllQuestions);
routes.delete('/deletebyIDCreatedMatches/:iduser/:idmache', controllers.deleteCreatedMatches); //para fazer

module.exports = routes;