function solution(begin, target, words) {
  const isVisit = new Set()

  const isConvertable = (src, dest) => {
    if (isVisit.has(dest)) {
      return false
    }
    const diffChar = Array.from(src).reduce(
      (prev, curr, idx) => prev + (curr != dest[idx] ? 1 : 0),
      0,
    )
    return diffChar === 1 ? true : false
  }

  let answer = 0
  const bfs = (origin, depth) => {
    isVisit.add(origin)
    if (origin == target) {
      answer = depth
      return
    }
    const dests = words.filter((word) => isConvertable(origin, word))

    if (dests.length === 0) {
      return
    }

    dests.forEach((dest) => {
      bfs(dest, depth + 1)
    })
  }
  bfs(begin, 0)
  return answer
}

console.log(
  solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
  4,
)
