const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const cadastroSchema = mongoose.Schema({
    _id: Number,
    nome: {
        type:String,

        required: true
    },
    plano: String,
    sobrenome: String ,
    email: {
        type:String,
   
        required: true
    },
    senha: {
        type:String,
        select: false,
        required: true
    },
    documento: Number
    
    
}, {
    timestamps: true
});
cadastroSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash;
    next();
})
module.exports = mongoose.model('cadastro', cadastroSchema)