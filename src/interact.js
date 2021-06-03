const ask      = require('./ask')
const romanize = require('romanizia')

async function interact(reduction, interlinear) {
    for (let i = 0; i < reduction.length; i++) {
        let entry        = reduction[i]
        let chapter      = entry.chapter
        let verse        = entry.verse
        let words        = entry.reduction.filter(identity)
        let romanization = words.map(romanize)
        let translation  = words.map(word => interlinear[word])
        let table        = create_table(words, romanization, translation)
        let index        = translation.indexOf(undefined)
        if (~index) {
            let word  = words[index]
            let roman = romanization[index]
            let input = null
            console.log('CHAPTER', chapter, 'VERSE', verse)
            console.table(table)
            try {
                input = normalize(await ask(`${index} ${word} ${roman}: `))
            } catch(e) {
                return interlinear
            }
            if (input)
                interlinear[word] = input
            i--
        }
        console.log()
    }
    return interlinear
}

function identity(value) {
    return value
}

function create_table(words, romanization, translation) {
    return words.map(function(word, index) {
        return {
            word        : word,
            romanization: romanization[index],
            translation : translation[index]
        }
    })
}

function normalize(input) {
    return input.toUpperCase().trim()
}

module.exports = interact
