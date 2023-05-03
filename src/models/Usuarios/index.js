// * Importações das bibliotecas
const mongoose = require('mongoose')


// * Definição do Schema
const schema = new mongoose.Schema({
    email: {
        type: String,
        default: "",
        required: [true, "Necessário um email para o usuário"],
        unique: true,
    },
    senha: {
        type: String,
        default: "",
        required: [true, "Necessário uma senha para o usuário"]
    },
    preferencias: [{
        type: String,
        default: null
    }]
}, {timestamps: true})


// * Exportação do Modelo
module.exports = mongoose.model('Usuarios', schema, 'usuarios')