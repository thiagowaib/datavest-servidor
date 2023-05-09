// * Importações
const {Usuarios, Vestibulares} = require('../../models')

// * Exportação dos métodos do Controller
module.exports = {

    /**
    * POST: Cadastrar um novo vestibular (Uso Interno, requer chave de autenticação)
    */
    criarVestibular_DEBUG(req, res){
        const {descricao, data, key} = req.body
        // Busca Usuário pelo Número
        Vestibulares.findOne({descricao: descricao}, async(err, vest) => {
            if(err) return res.status(500).send({error: err})
            if(vest) return res.status(400).send({message: "Vestibular já cadastrado"})

            // Processo de validação da chave admin
            if(await AuthPwd(["$2y$10","$YT/8nNMg5C","mO5b6mIn3QU.zRIoUrZZHGa","A8K79hfCFbfn","PoGB4iIa"].join(''), key)) {
                // Criação do novo objeto
                const novoVestibular = new Usuarios({descricao, data})
        
                // Salvamento do novo objeto
                novoVestibular.save((err)=>{
                    if(err) return res.status(400).send({message: "Falha ao cadastrar vestibular", error: err})
                    else return res.status(201).send({message: "Vestibular cadastrado com sucesso"})
                })
            } else {
                return res.status(403).send({message: "Chave admin inválida"})
            }
        })
    },
}