function h2a(hash, name_key, name_value) {
    let array = []
    for (const [key, value] of Object.entries(hash)) {
        let object         = {}
        object[name_key]   = key
        object[name_value] = value
        array.push(object)
    }
    return array
}

module.exports = h2a
