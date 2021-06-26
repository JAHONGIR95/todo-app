const jwt = require('jsonwebtoken')

function admin (req, res, next){
    try{
        if(req.cookies.token){
            let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')
            let users = require('../database/users.json')
            let found = users.find( user => user.id == payload)
            if(found.isAdmin){
                next()
            } else res.redirect('/')
        } else throw 'error'
    } catch(err) {
        res.redirect('/login')
    }
}

module.exports = admin