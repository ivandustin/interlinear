#!/usr/bin/env node
const package  = require('./package.json')
const argparse = require('argparse')
const read     = require('./src/read')
const load     = require('./src/load')
const interact = require('./src/interact')
const h2a      = require('./src/hash-to-array')
const save     = require('./src/save')
const output   = 'interlinear.json'

async function main() {
    let args        = parse()
    let reduction   = read(args.file)
    let interlinear = load(output)
    interlinear     = await interact(reduction, interlinear)
    save(output, h2a(interlinear, 'from', 'to'))
}

function parse() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('file',            { help: 'reduction file as input' })
    return parser.parse_args()
}

main()
