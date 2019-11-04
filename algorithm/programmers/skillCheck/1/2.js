function solution(s) {
  return Array.from(s)
    .sort()
    .reverse()
    .join('')
}

//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [
  'Zbcdefg', //
]
const expects = [
  'gfedcbZ', //
]

algoTest(testFunc, params, expects)
