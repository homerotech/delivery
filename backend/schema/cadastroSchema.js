const mongoose = require('mongoose')


const cadastroSchema = mongoose.Schema({
    _id: Number,
    nome: String,
    sobrenome: String ,
    email: String,
    senha: String,
    cpf: Number
    
}, {
    timestamps: true
});

module.exports = mongoose.model('cadastro', cadastroSchema)