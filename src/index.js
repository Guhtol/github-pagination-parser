const assertStr = require('./libs/assert-str')
const compose = require('./support/compose')
const { mountObject, regexFields, splitFields, splitInSections } = require('./libs')

const parser = compose(mountObject, regexFields, splitFields, splitInSections)

module.exports = str => parser(assertStr(str))
