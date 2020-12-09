function solution(n) {
  const result = []

  while (n !== 0) {
    const temp = n % 3
    n = parseInt(n / 3)
    if (temp === 0) {
      n = n - 1
      result.push(4)
    } else {
      result.push(temp)
    }
  }

  return result.reverse().join('')
}

//////////////////////////

import { algoTest } from './utils.js'
// const { algoTest } = require('./utils')

const testFunc = solution
const params = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const expects = [1, 2, 4, 11, 12, 14, 21, 22, 24, 41, 42, 44, 111, 112]
// const expect3 = [1, 2, 10, 11, 12, 20, 21, 22, 100, 101, 102, 110, 111, 112]
algoTest(testFunc, params, expects)
