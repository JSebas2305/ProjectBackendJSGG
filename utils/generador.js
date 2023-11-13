const jwt = require('jsonwebtoken')
require("dotenv").config()

module.exports = generadorJWT = (body) => {
    const payload = (body); 
    return jwt.sign(payload, process.env.SECRET_JWT, {
    expiresIn:'4h'
    } )
}