var uniqueRandomArray = require('./unique-random-array')
var morningbreakfast = require('./MorningBreakFast.json')

module.export = {
    all:morningbreakfast ,
    random:uniqueRandomArray(morningbreakfast)
}