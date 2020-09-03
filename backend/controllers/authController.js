const Auth = require('../schema/authSchema');
const Cadastro = require('../schema/cadastroSchema');

    exports.compare = (req,res) => {
        Auth.findOne(req.body).then(session => {
            if(!session){
                return res.send("false")
            }
        res.send(
            {id: session.id,
            isAuth: true}
        )
        
    })
}

    //Cadastrar cliente
    exports.login = (req,res) => {
        function ID() {
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters
            // after the decimal.
            id =Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15);
            return id.toUpperCase();
          };
        Cadastro.findOne({email: req.body.email}).then(cliente => {
            if(!cliente) {
                return res.send({
                    message: "Email ou Senha Incorreta"
                })
            }

            if(req.body.senha == cliente.senha) {
                Auth.create({
                    _id: cliente.id,
                    session: ID()
                })
                return res.send({
                    message: "Senha OK."
                
                })
            }
            res.send({
                message: "Email ou Senha Incorreta"
            })
        })
    }   