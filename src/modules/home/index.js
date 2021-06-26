const router = require('express').Router()
const { GET } = require('./controller.js')
const { checkTokenExists } = require('../../lib/authSettings.js')

router.route('/')
    .get(checkTokenExists, GET)

module.exports = router