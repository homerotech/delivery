const mongoose = require('mongoose');


const restauranteSchema = mongoose.Schema({
    _id: Number,
    nome: String,
    telefone: Number,
    abertura: Number,
    fechamen : Number,
    endereco: String,
    valeRefeicao: Boolean,
    desc: String,
    cidade: String,
    token: String,
    estado: String,
    CEP: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurante', restauranteSchema);