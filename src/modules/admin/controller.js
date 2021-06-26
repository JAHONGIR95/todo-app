const path = require('path')
const model = require('./model.js')

const GET = (req, res) => {
    return res.sendFile(path.join(process.cwd(), 'src', 'views', 'admin.html'))
}

const GET_USERS = (req, res) => {
    let response = model.getUsers()
    console.log(response);
    if(response){
        res.json( response )   
    } else throw 'error'
}

const UPDATE = (req, res) => {
    const { userId, permissionType } = req.body;
    let read = model.readCheck(userId, permissionType)
    res.json(read)
}

const UPDATE_ADMIN = (req, res) => {
    const { userId } = req.body
    let isAdmin = model.adminCheck(userId)
    res.json(isAdmin)
}

module.exports = {
    GET,
    GET_USERS,
    UPDATE,
    UPDATE_ADMIN
}