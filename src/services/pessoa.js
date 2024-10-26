const ModelPessoa = require('../models/pessoa')

// criando a classe servicePessoa
class ServicePessoa {
    async GetPessoas() {
        return ModelPessoa.findAll()
    }
    async CreatePessoa(name) {
        // fazer verificações - se mandou o name
        return ModelPessoa.create(name)
    }
    async UpdatePessoa(id, name) {
        // fazer verificações - se mandou o id e o name
        return ModelPessoa.update(id, name)
    }
    async DeletePessoa(id) {
        // fazer verificações - se mandou o id
        return ModelPessoa.drop(id)
    }
}
module.exports = new ServicePessoa()