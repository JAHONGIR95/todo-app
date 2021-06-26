const fs = require('fs')
const path = require('path')

const getUsers = () => {
    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    return users
}

const adminCheck = (userId) => {
    let users = require('../../database/users.json')
    let found = users.find(user => user.id == userId)
    if(found) {
        found.isAdmin = !found.isAdmin
    } else return

    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), JSON.stringify(users, null, 4))
    return found.isAdmin
}

const readCheck = (userId, permissionType) => {
    let users = require('../../database/users.json')
    let found = users.find(user => user.id == userId)
    if(found) {
        found.permission[permissionType] = !found.permission[permissionType]
    } else return

    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), JSON.stringify(users, null, 4))
    return found.isAdmin
}

module.exports = {
    getUsers,
    adminCheck,
    readCheck
}