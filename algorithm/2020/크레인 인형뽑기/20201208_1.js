function solution(board, moves) {
  const n = board.length
  let _board = Array(n)
    .fill(null)
    .map(() => Array())

  board.reverse().forEach((line) => {
    line.forEach((element, idx) => {
      if (element !== 0) {
        _board[idx].push(element)
      }
    })
  })

  // get dolls
  let stack = Array()
  const _moves = moves.map((x) => x - 1)
  _moves.forEach((x) => {
    if (_board[x].length) {
      const doll = _board[x].pop()
      stack.push(doll)
    }
  })

  // pang
  const dollCount = stack.length
  let isPang = true
  while (isPang) {
    isPang = false
    stack.forEach((doll, index, arr) => {
      if (doll === arr[index + 1]) {
        arr[index] = -1
        arr[index + 1] = -1
        isPang = true
      }
    })
    stack = stack.filter((doll) => doll > 0)
  }

  // return gap
  return dollCount - stack.length
}
