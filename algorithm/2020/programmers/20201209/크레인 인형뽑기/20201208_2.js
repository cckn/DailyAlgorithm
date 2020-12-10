function solution(board, moves) {
  const _board = Array(board.length)
    .fill(null)
    .map(() => Array())

  const stack = Array()
  let result = 0

  board.reverse().forEach((line) => {
    line.forEach((element, idx) => {
      if (element !== 0) {
        _board[idx].push(element)
      }
    })
  })

  moves.forEach((x) => {
    const pop = _board[x - 1].pop()
    if (pop) {
      if (pop === stack[stack.length - 1]) {
        stack.pop()
        result += 2
      } else stack.push(pop)
    }
  })

  return result
}

//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [
  [
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ],
]
const expects = [4]

algoTest(testFunc, params, expects)
