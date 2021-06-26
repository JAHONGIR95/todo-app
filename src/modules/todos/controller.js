const model = require('./model.js')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
// const { resolveSoa } = require('dns')

const GET = (req, res) => {
    let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')

    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    let found = users.find( el => el.id == payload)
    console.log(found)
    if(found){
        if(found.permission.read == true){
            return res.status(200).json(model.fetchAll())
        } 
    } 
}
const POST = (req, res) => {
    try{
        let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')
    
        let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
        users = users ? JSON.parse(users) : []
        let found = users.find( el => el.id == payload)
        if(found){
            if(found.permission.add == true){
                let response = model.insert(req.body)
                if(response){
                    return res.redirect('/')
                } else {
                    return res.status(400).send('Something went wrong!')
                }
            } else res.send('<a href="/">Home</a>  Sorry, you are not allowed to POST 😛')
        }
    } catch(error){
        res.json({message: error + ''})
    }
}

const DELETE = (req, res) => {
    let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')

    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    let found = users.find( el => el.id == payload)
    console.log(found)
    if(found){
        if(found.permission.remove == true){
            let response = model.remove(req.body)
            if(response){
                res.status(200).json({ message: "Data is deleted!"})
            } else {
                res.send({ message: "Something went wrong!"})
            }
        } else res.status(403).json({message: 'You are not allowed!', status: 403 })
    } 
}

const UPDATE = (req, res) => {
    let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')

    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    let found = users.find( el => el.id == payload)
    console.log(found)
    if(found){
        if(found.permission.change == true){
            let response = model.update(req.body)
            if(response){
                res.status(200).json({ message: "Data is updated!"})
            } else {
                res.send({ message: "Something went wrong!"})
            }
        } else res.status(403).json({message: 'You are not allowed!', status: 403 })
    } 
}

module.exports = {
    GET,
    POST,
    DELETE,
    UPDATE
}