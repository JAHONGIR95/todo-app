const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')

const insert = ({ username, email, password }) => {
    try{
        let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
        users = users ? JSON.parse(users) : [];
        let found = users.find(user => user.username == username)
        if(!found){
            let id = users.length ? users[users.length - 1].id + 1 : 1
            let newUser = {
                id,
                username, 
                email,
                password,
                isAdmin: false,
                permission: {
                    read: true,
                    add: false,
                    remove: false,
                    change: false
                }
            }
            users.push(newUser)
            fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), JSON.stringify(users, null, 4))
            return newUser
        } else return
    } catch(error){
        console.log( error )
    }
}

module.exports = {
    insert
}
