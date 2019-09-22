function solution(words, queries) {
  const result = []
  queries.forEach((query) => {
    let count = 0
    words.forEach((word) => {
      if (isMatch(word, query)) {
        count++
      }
    })
    result.push(count)
  })
  return result
}
// var count = (queries[1].match(/\?/g) || []).length

const isMatch = (src, dist) => {
  src = Array.from(src)
  dist = Array.from(dist)
  console.log(src, dist)

  if (src.length !== dist.length) {
    console.log('false length')

    return false
  }
  if (src[0] === '?' || dist[0] === '?') {
    src.reverse()
    dist.reverse()
  }
  src.some((char, idx) => {
    if (char === '?' || dist[idx] === '?') {
      console.log('??')

      return true
    } else if (char !== dist[idx]) {
      console.log('dd')

      return false
    }
  })

  return true
  //   if
}

var re = new RegExp('ab+c')

console.log(solution(['frodo', 'front', 'dfron'], ['fro??']), [3, 2, 4, 1, 0])

// console.log(isMatch(' ', ' '))
