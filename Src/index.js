var uniqueRandomArray = require('../node_modules/unique-random-array')
var morningbreakfast = require('./MorningBreakFast.json')

module.exports = {
    all:morningbreakfast ,
    random:uniqueRandomArray(morningbreakfast)
}


