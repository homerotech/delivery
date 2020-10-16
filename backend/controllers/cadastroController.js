const Cliente = require('../schema/cadastroSchema');

    //Cadastrar cliente
    function generateToken(params={}){
        return jwt.sign({params
        }, authConfig.secret, {
            expiresIn: 864000,
        })}
    exports.create =async (req,res) => {
        async (req,res) => {
            const { email } = req.body;
    
            try {
              if (await Cliente.findOne({ email })) {
                return res.status(400).send({ error: "User already exists" });
              }
          
              const user = await Cliente.create(req.body);
          
              user.senha = undefined;
          
              return res.send({
                user,
                token: generateToken({ id: user.id })
              });
            } catch (err) {
              return res.status(400).send({ error: "Registration failed " });
            }
        }}
    //     Cliente.create(req.body)
    //     .then(cliente => {
    //         res.send("Cliente cadastrado com sucesso")
    //     })
    //     .catch(err => {
    //         return res.status(500).send({
    //             message: err.message || "Erro ao se cadastrar"
    //         })
    //     })
    // }
    //Achar todos clientes
    exports.findAll = (req,res) => {
        Cliente.find()
    .then(clientes => {
            res.send(clientes);
        })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao resgatar clientes"
        })
    }) 
    }
    
    //Achar cliente pelo ID
    exports.findID = (req,res) => {
        Cliente.findById(req.params.id)
        .then(cliente => {
            if(!cliente) {
                return res.status(404).send({
                    message: "Não há cliente com ID " + req.params.id
                
            })
        }
            res.send(cliente)
        0})
        .catch(err => {
            return res.status(500).send({
                message: err.message || "Erro ao encontrar cliente"
            })
        })
    }

    //Deletar Cliente
    exports.delete = (req,res) => {
        Cliente.findByIdAndDelete(req.params.id)
        .then(cliente => {
            if(!cliente) {
                return res.status(404).send({
                    message: "Não há cliente com ID " + req.params.id
                })
            }
            res.send({message: "Cliente deletado com sucesso"})
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message || "Erro ao deleter cliente"
            })
        })
    }
    //Atualizar dados do clientes
    exports.update = (req,res) => {
        Cliente.findByIdAndUpdate(req.params.id, req.body)
        .then(cliente => {
            res.send("Cliente atualizado com sucesso")
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
    }