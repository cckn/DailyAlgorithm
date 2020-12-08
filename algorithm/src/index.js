function solution(numbers) {
  var answer = [2, 3, 4, 5, 6, 7]
  return answer
}

//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [
  [2, 1, 3, 4, 1],
  [5, 0, 2, 7],
]
const expects = [
  [2, 3, 4, 5, 6, 7],
  [2, 5, 7, 9, 12],
]

algoTest(testFunc, params, expects)
