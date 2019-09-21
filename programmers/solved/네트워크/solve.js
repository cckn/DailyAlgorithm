function solution(n, computers) {
  const computerSet = new Set(Array(n).keys())

  const bfs = (connections, id) => {
    computerSet.delete(id)
    connections.forEach((connect, idx) => {
      if (connect && computerSet.has(idx)) {
        bfs(computers[idx], idx)
      }
      return
    })
  }

  let count = 0

  computerSet.forEach((id) => {
    count++
    const connections = computers[id]
    connections[id] = 0
    bfs(connections, id)
  })

  return count
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]), 2)
