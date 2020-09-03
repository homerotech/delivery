module.exports = (app) =>{
    const auth = require('../controllers/authController');

    //Cadastrar
    app.post('/api/login',auth.login);
    app.post('/api/auth',auth.compare)
}

