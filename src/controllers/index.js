// * Importações
const ControllerUsuarios = require('./ControllerUsuarios')
const ControllerVestibulares = require('./ControllerVestibulares')


// * Exportação
module.exports = {
    ...ControllerUsuarios,
    ...ControllerVestibulares
}