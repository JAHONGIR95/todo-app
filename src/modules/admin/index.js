const router = require('express').Router()
const { GET, GET_USERS, UPDATE, UPDATE_ADMIN } = require('./controller.js')
const admin = require('../../lib/isAdmin.js')

router.route('/admin')
    .get(admin, GET)
    .put(admin, UPDATE_ADMIN)

router.route('/users')
    .get(admin, GET_USERS)
    .put(admin, UPDATE)
    
module.exports = router