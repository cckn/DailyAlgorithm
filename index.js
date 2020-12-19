function solution(clothes) {
  const result = clothes.reduce((prev, curr) => {
    const type = curr[1]
    prev[type] = type in prev ? prev[type] + 1 : 2
    return prev
  }, {})

  return (
    Object.values(result).reduce((prev, curr) => {
      return prev * curr
    }, 1) - 1
  )
}

//////////////////////////

import { algorithmTest } from './utils.js'

const testFunc = solution
const params = [
  [
    [
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ],
  ],
  [
    [
      ['crow_mask', 'face'],
      ['blue_sunglasses', 'face'],
      ['smoky_makeup', 'face'],
    ],
  ],
  [[['crow_mask', 'face']]],
  [[]],
]
const expects = [5, 3, 1, 0]

algorithmTest(testFunc, params, expects)
