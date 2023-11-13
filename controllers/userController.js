const {User} = require('../models/user')
const bcrypt = require('bcryptjs')
const generadorJWT = require('../utils/generador')

class UserController  { 
    testApi   (req, res)  {
        res.send('Hell00!') 
    }
    pruebaSession (req, res) {
        const user = {
            id: "qweqwdqwd123123",
            name:"juan",
        }
        req.session.user = user
        res.cookie('miPrimeraCookie', user.id,{maxAge: 120000})
        res.json(req.session)
        
    }
    test (req, res) {
        res.json({session: req.session, cookie: req.cookies.miPrimeraCookie.session})
    }
    borrarSession (req, res) {
        req.session.destroy()
        res.clearCookie('miPrimeraCookie')
        res.json({
            msg:"session cerrada"
        })
    }

    async login (req, res) {
        try {
            const persona = await User.findOne({email: req.body.email})
            if(persona ==null){
                return res.json({
                        msg: "la contraseña o el email son invalidos"
                })
            }
            if(!bcrypt.compareSync(req.body.password, persona.password)){
                return res.json({
                    msg: "la contraseña o el email son invalidos"
            })
            }
            const usuario = {
                id:persona._id,
                nombre: persona.name
            }
                req.session.usuario = usuario
                if(req.body.remember){
                    res.cookie('session',req.session.usuario,{maxAge: 120000})
                }
                res.json({
                    msg:"session cerrada"
                })
            } catch (error){
                res.json(error)           
            }
    }
    logout (req, res){
        req.session.destroy(),
        res.clearCookie('session')
        res.json({
            msg:"session cerrada"
        })      
    }

    generador (req, res){
        const token = generadorJWT(req.body)
        res.json({token})
    }
    pasoElToken(){
        res.send("el token es valido")
    }
    async loginJWT (req, res){  
        try {
        const persona = await User.findOne({email: req.body.email})
        if(persona ==null){
            return res.json({
                    msg: "la contraseña o el email son invalidos"
            })
        }
        if(!bcrypt.compareSync(req.body.password, persona.password)){
            return res.json({
                msg: "la contraseña o el email son invalidos"
            })
        }
        const token = generadorJWT({id: persona._id, name: persona.name})

        res.json({
            msg: 'token generador',
            token
        })
        
        } catch (error){
            res.json(error)           
        }
    }
}


module.exports = new UserController