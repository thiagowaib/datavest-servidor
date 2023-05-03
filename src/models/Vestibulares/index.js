// * Importações das bibliotecas
const mongoose = require('mongoose')


// * Definição do Schema
const schema = new mongoose.Schema({
    descricao: {
        type: String,
        default: "",
        required: [true, "Necessário uma descrição para o vestibular"],
        unique: true,
    },
    data: {
        type: String,
        default: ""
    }
}, {timestamps: true})


// * Exportação do Modelo
module.exports = mongoose.model('Vestibulares', schema, 'vestibulares')