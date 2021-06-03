function h2a(hash, name_key, name_value) {
    let array   = []
    let entries = Object.entries(hash).sort()
    for (const [key, value] of entries) {
        let object         = {}
        object[name_key]   = key
        object[name_value] = value
        array.push(object)
    }
    return array
}

module.exports = h2a
