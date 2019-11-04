function solution(sticker) {
  const dp1 = Array(sticker.length).fill(null)
  const dp2 = Array(sticker.length).fill(null)

  const n = sticker.length

  dp1[0] = sticker[0]
  dp1[1] = dp1[0]

  for (let i = 2; i < sticker.length; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i])
  }

  dp2[1] = sticker[1]
  dp2[2] = dp2[1]
  for (let i = 3; i < n + 1; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i])
  }
  console.log(dp1, dp2)

  return Math.max(dp1[n - 1], dp2[n - 1])
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
