function solution(s) {
  let words = s.split(' ')

  words = words
    .map((word) => {
      return Array.from(word)
        .map((char, idx) => {
          return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        })
        .join('')
    })
    .join(' ')

  return words
}

//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [
  'try hello world', //
]
const expects = [
  'TrY HeLlO WoRlD', //
]

algoTest(testFunc, params, expects)
