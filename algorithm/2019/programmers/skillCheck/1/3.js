function solution(s) {
  return parseInt(
    Array.from(s.toString())
      .sort()
      .reverse()
      .join(''),
  )
}

//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [
  118372, //
]
const expects = [
  873211, //
]

algoTest(testFunc, params, expects)
