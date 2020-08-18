const mongoose = require('mongoose');



const cardapioSchema = mongoose.Schema({
    _id: Number,
    nome: String,
    preco: Number,
    img: String,
    descricao: String,
    classes: Array

}, {
    timestamps: true
});
module.exports = mongoose.model('produto', cardapioSchema);