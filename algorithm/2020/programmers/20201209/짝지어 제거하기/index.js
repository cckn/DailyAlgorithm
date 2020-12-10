function solution(s) {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) stack.pop()
    else stack.push(s[i])
  }

  return stack.length ? 0 : 1
}

//////////////////////////

import { algoTest } from './utils.js'

const testFunc = solution
const params = ['baabaa', 'cdcd']
const expects = [1, 0]

algoTest(testFunc, params, expects)
