function solution(n, lost, reserve) {
  const suits = new Array(n).fill(1)

  reserve.forEach((student) => {
    suits[student - 1]++
  })
  lost.forEach((student) => {
    suits[student - 1]--
  })

  let count = 0
  suits.forEach((suit, idx, arr) => {
    if (suit === 0) {
      if (suits[idx - 1] > 1) {
        count++
      } else if (suits[idx + 1] > 1) {
        count++
        suits[idx + 1] -= 1
      }
    } else {
      count++
    }
  })
  // console.log(suits, count)

  // return answer
  return count
}

console.log(solution(5, [2, 4], [1, 3, 5]), 5)
