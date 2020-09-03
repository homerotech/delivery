module.exports = (app) =>{
    const cadastro = require('../controllers/cadastroController');

    //Cadastrar
    app.post('/api/cadastro',cadastro.create);
    app.get('/api/cliente',cadastro.findAll);

}

