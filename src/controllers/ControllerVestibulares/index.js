// * Importações
const {Usuarios, Vestibulares} = require('../../models')

// * Exportação dos métodos do Controller
module.exports = {

    //POST: Lista as datas dos vestibulares
    async listarDatas(req, res){
        const {vestibulares} = req.body

        // Verifica se há vestibulares a serem filtrados
        if(vestibulares && vestibulares.length > 0) {
            let dados = []

            for(let i = 0; i < vestibulares.length; i++) {
                const vest = await Vestibulares.findById(vestibulares[i])
                dados.push({descricao: vest.descricao, data: vest.data})
            }

            return res.status(200).send(dados)
        } 
        // Caso não exista preferência configurada
        else {
            let dados = await Vestibulares.find()
            return res.status(200).send(dados.map(dado=>({descricao: dado.descricao, data: dado.data})))
        }
    }
}