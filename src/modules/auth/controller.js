const path = require('path')
const model = require('./model.js')
const jwt = require('jsonwebtoken')

const GET_REGISTER = (req, res) => {
    return res.sendFile(path.join(process.cwd(), 'src', 'views', 'register.html'))
}

const POST_REGISTER = (req, res) => {
    let response = model.insert(req.body)
    if(response){
        res.cookie('token', jwt.sign(response, 'SECRET_KEY'))
        res.send('<a href="/">home</a>')
        res.json(response)
    } else {
        res.status(400).send('<a href="/register">REGISTER</a> Sorry, this username is already taken!')
    }
}   

const GET_LOGIN = (req, res) => {
    return res.sendFile(path.join(process.cwd(), 'src', 'views', 'login.html'))
}

const POST_LOGIN = (req, res) => {
    console.log(req.body);
    let {username, password} = req.body;
    let users = require('../../database/users.json');
    let found = users.find(user => user.username === username && user.password === password);
    if(!found){
       return  res.json({
            message: "Username or password incored"
       });
    }
    res.cookie('token', jwt.sign(found.id, 'SECRET_KEY'))
    res.send('<a href="/">Home</a>')
}

const GET = (req, res) => {
    res.clearCookie('token')
    res.redirect('/login')
}

module.exports = {
    GET_REGISTER,
    POST_REGISTER,
    GET_LOGIN,
    POST_LOGIN,
    GET
}