const ServicePessoa = require('../services/pessoa')

// Criando a classe controller da Pessoa
class ControllerPessoa {
    async GetPessoas(req, res) {
        try {
            const pessoas = await ServicePessoa.GetPessoas()
            res.send({ msg: pessoas })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async CreatePessoa(req,res){
        try {
            const name = req.body.name
            const pessoa = await ServicePessoa.CreatePessoa(name)
            res.send({ msg: pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async UpdatePessoa(req,res){
        try {
            const id = req.params.id
            const name = req.body.name
            const pessoa = await ServicePessoa.UpdatePessoa(id, name)
            res.send({ msg: pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async DeletePessoa(req,res){
        try {
            const id = req.params.id
            const pessoa = await ServicePessoa.DeletePessoa(id)
            res.send({ msg: pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ControllerPessoa()