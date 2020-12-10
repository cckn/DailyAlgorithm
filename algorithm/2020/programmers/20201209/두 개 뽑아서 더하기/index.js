function solution(numbers) {
  const results = new Set()

  for (let i = 0; i < numbers.length; i++)
    for (let j = i + 1; j < numbers.length; j++)
      results.add(numbers[i] + numbers[j])

  return Array.from(results).sort((a, b) => a - b)
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
