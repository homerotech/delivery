module.exports = (app) =>{
    const auth = require('../controllers/authController');
    const authMiddleware = require('../middlewares/auth')


    //Cadastrar
    app.post('/api/login',auth.login);
    app.post('/api/auth',authMiddleware,auth.compare);
    app.put('/api/logout/:session',auth.logout);
}

