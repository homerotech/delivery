const mongoose = require("mongoose");

const restauranteSchema = mongoose.Schema(
  {
    _id: Number,
    nome: String,
    telefone: Number,
    abertura: Number,
    fechamen: Number,
    endereco: String,
    valeRefeicao: Boolean,
    desc: String,
    cidade: String,
    token: String,
    chave: String,
    refresh: String,
    estado: String,
    CEP: String,
    img: String,
    frete: Number,
    expires: Number,
    url:String,
    expire_at: {type: Date, default: Date.now, expires: 144000},
}, {
  
    timestamps: true
});


module.exports = mongoose.model("restaurante", restauranteSchema);
