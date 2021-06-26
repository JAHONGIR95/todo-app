const model = require('./model.js')

const GET = (req, res) => {
    res.sendFile( model.getFile('index.html') )
}

module.exports = {
    GET
}