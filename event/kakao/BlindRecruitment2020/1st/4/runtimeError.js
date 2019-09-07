function solution(words, queries) {
  const result = []

  queries.forEach((query) => {
    const already = result.find((item) => {
      if (isMatch(query, item.query)) {
        return true
      }
    })

    let match
    if (already) {
      if (already.query === query) {
        result.push(already)
      } else {
        match = already.match.filter((word) => {
          return isMatch(word, query)
        })
        result.push(already)
      }
    } else {
      match = words.filter((word) => {
        return isMatch(word, query)
      })
    }
    result.push({ query, match })
  })

  return result.map((item) => item.match.length)
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
    ['fro??', '????o', 'fr???', 'fro???', 'pro?'],
  ),
  [3, 2, 4, 1, 0],
)
