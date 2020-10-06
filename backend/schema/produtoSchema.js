const mongoose = require('mongoose');
mongoose.set('debug', true);



const produtoSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    img: String,
    descricao: String,
    cardapio: String

}, {
    timestamps: true,
    collection: 'Produto'
});
module.exports = mongoose.model('Produto',produtoSchema);