module.exports = (req, res, next) => {
    if (req.session.user) {
        res.json({
            msg:"no hay un usuario en sesion"
        })
    }else{
        next()
    }
}