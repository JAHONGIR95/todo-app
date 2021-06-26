const router = require('express').Router()
const {GET_REGISTER, POST_REGISTER, GET_LOGIN, POST_LOGIN, GET } = require('./controller.js')
const { checkTokenExists2 } = require('../../lib/authSettings.js')

router.route('/register')
    .get(checkTokenExists2, GET_REGISTER)
    .post(POST_REGISTER)

router.route('/login')
    .get(checkTokenExists2, GET_LOGIN)
    .post(POST_LOGIN)

router.route('/logout')
    .get(GET)

module.exports = router
