const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const cadastroSchema = mongoose.Schema({
    _id: Number,
    name: {
        type:String,

        required: true
    },

    sobrenome: String ,
    email: {
        type:String,
   
        required: true
    },
    password: {
        type:String,
        select: false,
        required: true
    },
    doc: Number
    
    
}, {
    timestamps: true
});
cadastroSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash;
    next();
})
module.exports = mongoose.model('cadastro', cadastroSchema)