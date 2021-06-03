const fs   = require('fs')
const read = require('./read')

function load(filepath) {
    if (fs.existsSync(filepath))
        return index(read(filepath))
    return init()
}

function init() {
    return {}
}

function index(array) {
    let hash = init()
    array.forEach(function(item) {
        let { from, to } = item
        hash[from] = to
    })
    return hash
}

module.exports = load
