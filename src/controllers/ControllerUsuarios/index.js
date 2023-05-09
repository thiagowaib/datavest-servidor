// * Importações
const {Usuarios, Vestibulares} = require('../../models')
const jwt = require('jsonwebtoken')

// * Exportação dos métodos do Controller
module.exports = {

    /**
    * POST: Cadastrar um novo usuário
    */
    cadastrarUsuario(req, res){
        const {email, senha} = req.body

        // Busca Usuário pelo Número
        Usuarios.findOne({email: email}, async(err, usuario) => {
            if(err) return res.status(500).send({error: err})
            if(usuario) return res.status(400).send({message: "Usuário já cadastrado"})

            // Processo de criptografia da senha
            const {HashPwd} = require('../../services')
            const hashedSenha = await HashPwd(senha)

            // Criação do novo objeto
            const novoUsuario = new Usuarios({
                email: email,
                senha: hashedSenha
            })
    
            // Salvamento do novo objeto
            novoUsuario.save((err)=>{
                if(err) return res.status(400).send({message: "Falha ao cadastrar usuário", error: err})
                else return res.status(201).send({message: "Usuário cadastrado com sucesso"})
            })
        })
    },

    /**
    * POST: Login
    */
    login(req, res){
        const {email, senha} = req.body
        const {AuthPwd, SetExpDate} = require('../../services')

        Usuarios.findOne({email: email}, async(err, usuario) => {
            if(err) return res.status(500).send({error: err})
            if(usuario) {
                // Autentifica a Senha inserida
                if(await AuthPwd(usuario.senha, senha)) {
                    // Dados inbutidos no JWT
                    const jwtPayload = {
                        email: usuario.email,
                        exp: SetExpDate(Date.now(), 7, "d")
                    }

                    // Token de Acesso enviado ao usuário p/ autentificar
                    const tokenAcesso = jwt.sign(
                        jwtPayload,
                        process.env.JWT_ACCESS_TOKEN_SECRET
                    )
                    return res.status(202).send({message: "Login bem-sucedido", tokenAcesso})
                } else {
                    return res.status(401).send({message: "Senha invalida"})
                }
            } else {
                return res.status(404).send({message: "Usuário não cadastrado"})
            }
        })
    },

    /**
     * GET: Autêntica o JsonWebToken (JWT)
     */
    authJWT(req, res){
        return res.status(200).send({message: "Token de acesso válido"})
    },
}