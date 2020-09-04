const mongoose = require('mongoose');


const restauranteSchema = mongoose.Schema({
    _id: Number,
    cnpj: Number,
    nome: String,
    plano: String,
    telefone: Number,
    abertura: Date,
    fechamen : Date,
    endereco: String,
    valeRefeicao: Boolean,
    desc: String,
    token: String,
    estado: String,
    CEP: Number,
    frete: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurante', restauranteSchema);