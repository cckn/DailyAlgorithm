function solution(board) {
  const target = board.length
  const isVisit = new Set()

  let result = Infinity
  const isEmpty = (point) => {
    if (point === null) {
      return true
    }
    const [x, y] = point
    try {
      return board[y - 1][x - 1] === 0
    } catch (error) {
      return false
    }
  }

  const isDone = (location) => {
    const [[x1, y1], [x2, y2]] = location
    if (
      ((x1 === target) & (y1 === target)) |
      ((x2 === target) & (y2 === target))
    ) {
      return true
    }
    return false
  }

  const bfs = (location, count, check) => {
    const [[x1, y1], [x2, y2]] = location
    // console.log(x1, y1, x2, y2, count)

    if (isEmpty([x1, y1]) & isEmpty([x2, y2])) {
      if (isDone(location)) {
        result = result > count ? count : result
        // console.log(count)

        return
      }
      if (!isVisit.has(location.toString())) {
        isVisit.add(location.toString())
        bfs([[x1 - 1, y1], [x2 - 1, y2]], count + 1, null)
        bfs([[x1 + 1, y1], [x2 + 1, y2]], count + 1, null)
        bfs([[x1, y1 - 1], [x2, y2 - 1]], count + 1, null)
        bfs([[x1, y1 + 1], [x2, y2 + 1]], count + 1, null)

        bfs([[x1 + 1, y1 - 1], [x2, y2]], count + 1, [x1, y1 + 1])
        bfs([[x1 + 1, y1 + 1], [x2, y2]], count + 1, [x1, y1 - 1])
        bfs([[x1, y1], [x2 - 1, y2 + 1]], count + 1, [x2, y2 + 1])
        bfs([[x1, y1], [x2 - 1, y2 - 1]], count + 1, [x2, y2 - 1])

        bfs([[x1 + 1, y1 + 1], [x2, y2]], count + 1, [x1 + 1, y1])
        bfs([[x1 - 1, y1 + 1], [x2, y2]], count + 1, [x1 - 1, y1])
        bfs([[x1, y1], [x2 + 1, y2 - 1]], count + 1, [x2 + 1, y2])
        bfs([[x1, y1], [x2 - 1, y2 - 1]], count + 1, [x2 - 1, y2])
      }
    }
  }

  bfs([[1, 1], [1, 2]], 0, null)
  return result
}

// function solution(numbers, target) {
//   const dfs = (num, idx) => {
//     if (idx === numbers.length) {
//       return num === target ? 1 : 0
//     }
//     return dfs(num + numbers[idx], idx + 1) + dfs(num - numbers[idx], idx + 1)
//   }

//   return dfs(0, 0)
// }

//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [
  [
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ], //
]
const expects = [
  7, //
]

algoTest(testFunc, params, expects)
