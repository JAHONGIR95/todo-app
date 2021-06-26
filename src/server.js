const express = require('express')
const app = express()
const path = require('path')
const cookie = require('cookie-parser')
const { host, PORT } = require('./config.js')

app.use( cookie() )
app.use( express.static(path.join(__dirname, 'public')) )
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

const modules = require('./modules')
app.use([ modules ])

app.listen(PORT, () => console.log('Server is runnning on http://' + host + ":" + PORT))   