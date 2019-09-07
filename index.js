function solution(words, queries) {
  const result = []
  queries = queries.map((query, idx) => {
    return { idx, query }
  })

  queries.sort((a, b) => b.query.length - a.query.length)
  queries.forEach((queryObj) => {
    const { query, idx } = queryObj
    console.log(result)

    const already = result.find((item) => {
      return isMatch(query, item.query)
    })

    if (already) {
      if (already.query === query) {
        result.push({ ...already, idx })
        return
      }
      const match = already.match.filter((word) => {
        return isMatch(word, query)
      })
      result.push({ idx, query, match })
      return
    }

    const match = words.filter((word) => {
      return isMatch(word, query)
    })
    result.push({ idx, query, match })
  })

  return result.sort((a, b) => a.idx - b.idx).map((item) => item.match.length)
}

const isMatch = (src, query) => {
  if (src.length !== query.length) {
    return false
  }
  if (query[0] !== '?') {
    for (let idx = 0; idx < src.length; idx++) {
      if (query[idx] === '?') {
        return true
      } else if (query[idx] !== src[idx]) {
        return false
      }
    }
  } else {
    for (let idx = src.length; idx >= 0; idx--) {
      if (query[idx] === '?') {
        return true
      } else if (query[idx] !== src[idx]) {
        return false
      }
    }
  }
  return true
}
// console.log(solution(['frodo', 'front', 'dfron'], ['fro??']), [2])
console.log()
console.log()
console.log('')
// console.log(isMatch('prod?', 'pro??'))

console.log(
  solution(
    ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'],
    ['fro??', '????o', 'fr???', 'fro???', 'pro?', 'fr???', 'ddds?', 'frod?'],
  ),
  [3, 2, 4, 1, 0],
)
