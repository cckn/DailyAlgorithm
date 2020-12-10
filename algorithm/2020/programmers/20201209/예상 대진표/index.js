function solution(n, a, b) {
  const f = (n) => Math.ceil(n / 2)
  let answer = 0

  while (a !== b) {
    a = f(a)
    b = f(b)
    answer++
  }
  return answer
}
//////////////////////////

import { algoTest } from './utils.js'

const testFunc = solution
const params = [
  [['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']],
]
const expects = [3]

algoTest(testFunc, params, expects)
