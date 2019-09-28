function solution(n) {
  // const isVisit = new Set()
  let answer = 0

  while (n != 0) {
    if (n % 2 == 0) {
      n = n / 2
    } else {
      n = n - 1
      answer++
    }
  }
  return answer
}
//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [5, 6]
const expects = [2, 2]

algoTest(testFunc, params, expects)
