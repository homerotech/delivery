const Auth = require('../schema/authSchema');
const Cadastro = require('../schema/cadastroSchema');
const express = require('express')
const bcrypt = require('bcrypt');
const  jwt  = require('jsonwebtoken')

const authConfig = require('../config/auth.json');

const router = express.Router();


 const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware)

    exports.getid = (req,res) => {
        Auth.findOne(req.body).then(
            data => {
                res.send(data._id)
            }
        )
    }

    exports.logout = (req,res) => {
        Auth.findOneAndRemove(req.body).then(
            res.send((
                {"message": "deslogado"}
            ))
        ).catch(err => 
            res.send({
                "message": err
            }))
    }

    exports.compare = (req,res) => {
    //     router.use(authMiddleware)
    //     Auth.findOne(req.body).then(session => {
    //         if(!session){
    //             return res.send("false")
    //         }
    //     res.send(
    //         {id: session.id,
    //         isAuth: true}
    //     )
        
    // })
    res.send({ id: req.userId,isAuth: true, user: req.userId})
}

    //Cadastrar cliente
    function generateToken(params={}){
    return jwt.sign({params
    }, authConfig.secret, {
        expiresIn: 864000,
    })}
    exports.login = async (req,res) => {
               const {email, senha} = req.body;
          const user = await Cadastro.findOne({email}).select('+senha');
            if(!user)
            return res.status(400).send({
                         message: "Email ou Senha Incorreta"
                     })
            if(!await bcrypt.compare(senha, user.senha)){
            return res.status(400).send({error: "senha errada" });}
            
            
            user.password = undefined
            res.send({user, token: generateToken({id: user.nome})});
         }   
          // function ID() {
        //     // Math.random should be unique because of its seeding algorithm.
        //     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        //     // after the decimal.
        //     id =Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15);
        //     return id.toUpperCase();
        //   };
        //   id=ID()
        // Cadastro.findOne({email: req.body.email}).then(cliente => {
        //     if(!cliente) {
        //         return res.status(401).send({
        //             message: "Email ou Senha Incorreta"
        //         })
        //     }

        //     if(req.body.senha == cliente.senha) {
        //         Auth.create({
        //             _id: cliente.id,
        //             session: id
        //         })
        //         return res.send({
        //             "session": id
        //         })
        //     }
        //     res.status(401).send({
        //         message: "Email ou Senha Incorreta"
        //     })
        // })}
   