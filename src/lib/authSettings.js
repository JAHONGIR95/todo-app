const jwt = require('jsonwebtoken')

function checkTokenExists (req, res, next){
    try{
        if(req.cookies.token){
            let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')
            if(payload){
                next()
            } else throw 'error'
        } else throw 'error'
    } catch(err) {
        res.redirect('/login')
    }
}

function checkTokenExists2 (req, res, next){
    try{
        if(req.cookies.token){
            let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')
            if(payload){
                res.redirect('/')
            } else throw 'error'
        } else throw 'error'
    } catch(err) {
        next()
    }
}

module.exports = {
    checkTokenExists,
    checkTokenExists2
}