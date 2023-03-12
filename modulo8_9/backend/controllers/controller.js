// add um resgistro a tabela
const db = require('../config/db.config.js');
const Cliente = db.Cliente;

exports.createCliente = (req, res) => {
    let cliente = {};

    try{
        // capturando os dados do body e criando a constante cliente.
        cliente.nome = req.body.nome;
        cliente.email = req.body.email;
        cliente.idade = req.body.idade;

        // salvar cliente no banco de dados
        Cliente.create(cliente, {attributes: ['id', 'nome', 'email', 'idade']})
                    .then(result => {
                        res.status(200).json(result);
                    });
    } catch(error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.getCliente = (req, res) => {
    Cliente.findByPk(req.params.id, {attributes: ['id', 'nome', 'email', 'idade']})

        .then(cliente => {
            res.status(200).json(cliente);
        }).catch(error => {
            // mostrar no console log
            console.log(error);
            
            res.status(500).json({
                message: "Error!",
                error: error
            });
        })
}

exports.clientes = (req, res) => {
    // buscar todos os registros da tabela
    try{
        Cliente.findAll({attributes: ['id', 'nome', 'email', 'idade']})
        .then(cliente => {
            res.status(200).json(clientes);
        })
    } catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

exports.deleteCliente = async (req, res) => {
    try{
        let clientId = req.params.id;
        let cliente = await Cliente.findByPk(clientId);
        
        if(!cliente){
            res.status(404).json({
                message: "Não existe nenhum cliente com o ID: " + clientId,
                error: "404"
            });
        } else {
            await cliente.destroy();
            res.status(200).json('cliente deletado com sucesso.');
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possivel deletar o cliente com o Id: " + req.params,
            error: error.message
        });
    }
}

exports.updateCliente = async (req, res) => {
    try{
        let cliente = await Cliente.findByPk(req.body.id);
        
        if(!cliente){
            res.status(404).json({
                message: "Não existe nenhum cliente com o ID: " + clientId,
                error: "404"
            });
        } else {
            
            let updateObject = {
                nome: req.body.nome,
                email: req.body.email,
                idade: req.body.idade
            }
            let result = await Cliente.update(updateObject, 
                                    {
                                        returning: true,
                                        where: {id: req.body.id},
                                        attributes: ['id', 'nome', 'email', 'idade']
                                    }
                                );
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Não foi possivel deletar o cliente com o Id: " + req.params,
                    error: error.message
                });
            }

            res.status(200).json('Cliente alterado com sucesso.');
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possivel deletar o cliente com o Id: " + req.params,
            error: error.message
        });
    }
}