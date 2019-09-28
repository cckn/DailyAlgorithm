function solution(bishops) {
  let board = Array(8)
    .fill(null)
    .map(() => Array(8).fill(1))

  const mark = (x, y) => {
    if (0 <= x && x < 8 && 0 <= y && y < 8) {
      board[x][y] = 0
    }
  }
  bishops.forEach((bishop) => {
    const coord = Array.from(bishop)
    coord[0] = coord[0].charCodeAt(0) - 'A'.charCodeAt(0)
    coord[1] -= 1

    const [x, y] = coord

    for (let index = 0; index < 8; index++) {
      mark(x + index, y + index)
      mark(x - index, y - index)
      mark(x + index, y - index)
      mark(x - index, y + index)
    }
  })

  const result = board.reduce(
    (prev, acc) => prev + acc.reduce((prev, acc) => prev + acc, 0),
    0,
  )
  return result
}
//////////////////////////

const { algoTest } = require('../../../utils')

const testFunc = solution
const params = [
  [['D5']], //
  [['D5', 'E8', 'G2']],
]
const expects = [
  50, //
  42,
]

algoTest(testFunc, params, expects)
