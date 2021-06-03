const readline = require('readline')
const input    = process.stdin
const output   = process.stdout

function ask(question) {
    return new Promise(function(resolve, reject) {
        let rl = readline.createInterface({ input, output })
        rl.question(question, function(input) {
            rl.close()
            resolve(input.trim())
        })
        rl.once('SIGINT', function() {
            rl.close()
            reject()
        })
    })
}

module.exports = ask
