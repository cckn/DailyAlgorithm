function solution(N, number) {
  console.log(N, number)
}
//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [
  [5, 12], //
  [2, 11],
]
const expects = [
  4, //
  3,
]

algoTest(testFunc, params, expects)
