const homeRouter = require('./home')
const todosRouter = require('./todos')
const authRouter = require('./auth')
const adminRouter = require('./admin')

module.exports = [
    homeRouter,
    todosRouter,
    authRouter,
    adminRouter
]