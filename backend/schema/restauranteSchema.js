const mongoose = require("mongoose");

const restauranteSchema = mongoose.Schema(
  {
    _id: Number,
    nome: String,
    telefone: Number,
    abertura: String,
    fechamen: String,
    endereco: String,
    valeRefeicao: Boolean,
    desc: String,
    cidade: String,
    dataV: Object,
    chave: String,
    refresh: String,
    estado: String,
    CEP: String,
    img: String,
    frete: Number,
    expires: String,
    url:String,
    token:String,
    refresh:String,
    publicK:String
    // expire_at: {type: Date, default: Date.now, expires: 144000},
}, {
  
    timestamps: {type:Number, default: new Date().getTime()}
});


module.exports = mongoose.model("restaurante", restauranteSchema);
