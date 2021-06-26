const router = require('express').Router()
const {GET, POST, DELETE, UPDATE} = require('./controller.js')

router.route('/api/todo*')
    .get(GET)
    .post(POST)
    .delete(DELETE)
    .put(UPDATE)

module.exports = router
