const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const auth = require('../milddlewares/auth')
const checks = require('../milddlewares/loginChecks')
const {validarChecks} = require('../milddlewares/validarChecks')
const validarToken = require('../milddlewares/validarToke')

router.get('/session', userController.pruebaSession)
router.get('/test', auth, userController.test)
router.get('/borrar', userController.borrarSession)
router.post('/login', checks, validarChecks, userController.login)   
router.delete('/logout', userController.logout)

//TOKENS
router.post('/generador', userController.generador)
router.get('/validar', validarToken, userController.pasoElToken)
router.post('/loginjwt', userController.loginJWT)

module.exports = router