function solution(goods, boxes) {
  let result = goods.length
  let boxIdx = 0
  goods.sort((a, b) => b - a)
  boxes.sort((a, b) => b - a)

  goods.forEach((item) => {
    const biggestBox = boxes[boxIdx]
    if (item <= biggestBox) {
      boxIdx += 1
    } else {
      result -= 1
    }
    // console.log(result, boxIdx, goods, boxes)
  })

  return result
}
//////////////////////////

const { algoTest } = require('../../../utils')

const testFunc = solution
const params = [
  [[5, 3, 7], [3, 7, 6]], //
  [[1, 2], [2, 3, 1]],
  [[3, 8, 6], [5, 6, 4]],
]
const expects = [
  3, //
  2,
  2,
]

algoTest(testFunc, params, expects)
