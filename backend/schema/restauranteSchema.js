const mongoose = require('mongoose');


const restauranteSchema = mongoose.Schema({
    _id: Number,
    cnpj: Number,
    nome: String,
    plano: String,
    numeroTelefone: Number,
    abertura: Date,
    fechamento: Date,
    endereco: String,
    valeRefeicao: Boolean,
    descricaoRestaurante: String,
    logo: String,
    estado: String,
    CEP: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurante', restauranteSchema);