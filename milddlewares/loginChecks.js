const{check}= require('express-validator')
const checks = [

    check('email')

        .notEmpty().withMessage("el campo email es obligatorio")
        .isString().withMessage("el campo email debe ser tipo String")
        .isEmail().withMessage("el campo email tiene que poseer el formato de un email"),


    check('password')
    
        .notEmpty().withMessage("el campo password es obligatorio")
        .isString().withMessage("el campo email debe ser tipo String")
]

module.exports = checks