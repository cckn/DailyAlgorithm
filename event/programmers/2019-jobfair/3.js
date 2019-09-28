function solution(sticker) {
  const dp = Array(sticker.length).fill(null)

  const queue = []
  let max = 0

  queue.push([0, sticker[0]]) // currIdx , sum
  queue.push([1, sticker[1]]) // currIdx , sum

  while (queue.length) {
    const [currIdx, sum] = queue.shift()

    if (dp[currIdx] < sum) {
      max = max > sum ? max : sum
      dp[currIdx] = sum

      if (currIdx + 2 < sticker.length) {
        queue.push([currIdx + 2, sum + sticker[currIdx + 2]])
      }
      if (currIdx + 3 < sticker.length) {
        queue.push([currIdx + 3, sum + sticker[currIdx + 3]])
      }
    }
  }
  return max
}
//////////////////////////

const { algoTest } = require('../../../utils')

const testFunc = solution
const params = [
  [[12]], //
  [[12, 1, 12]], //
  [[12, 12, 12, 12, 12]], //
  [[12, 80, 14, 22, 100]],
]
const expects = [
  12, //
  24, //
  36, //
  180,
]

algoTest(testFunc, params, expects)
