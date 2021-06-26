const fs = require('fs')
const path = require('path')

const getFile = (htmlFile) => {
    return path.join(process.cwd(), 'src', 'views', htmlFile)
}

module.exports = { getFile }

