const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


module.exports = (req,res,next)=> {
    const authHeader = req.headers.autorization;


    if(!authHeader)
        return res.status(401).send({ error: 'Nao foi fornecido o token' })




    const parts = authHeader.split(' ');

    if (!parts.lenght ==2)
        return res.status(401).send({error: 'Token errado'});

    const [scheme, token] = parts;


    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token ta zoado' });


    jwt.verify(token, authConfig.secret, (err, decoded)=>{
        if(err) return res.status(401).send({ error: 'Token invalido' });

        req.userId = decoded.id;

        return next();
    })
}