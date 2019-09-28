function solution(n) {
  // const isVisit = new Set()
  const queue = []
  const memory = new Array(n).fill(Infinity)
  let result

  queue.push([0, 0])
  while (queue.length) {
    const [go, consume] = queue.shift()
    if (go === n) {
      result = consume
      return consume
    }
    if (go < n) {
      if (memory[go] > consume) {
        memory[go] = consume
        queue.push([go * 2, consume])
        queue.push([go + 1, consume + 1])
      } else {
        // console.log(go, memory[go], consume)
      }
    } else {
      // console.log('over')
    }
  }

  return result
}
//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [5, 6]
const expects = [2, 2]

algoTest(testFunc, params, expects)
