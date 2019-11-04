process.stdin.setEncoding('utf8')

process.stdin.on('data', (data) => {
  let [size, cony] = data.split('\n')
  size = size.split(' ').map((str) => parseInt(str))
  cony = cony.split(' ').map((str) => parseInt(str))

  solution(size, cony)
})

function solution(size, cony) {
  if (size[0] < cony[0] || size[1] < cony[1]) {
    console.log('fail')
  } else {
    const memo = {}

    const dp = (x, y) => {
      if (x == 0 || y == 0) return 1
      else if (y == 1) return x + 1
      else if (x == 1) return y + 1
      else if (memo.hasOwnProperty([x, y])) return memo[[x, y]]
      else {
        const value = dp(x, y - 1) + dp(x - 1, y)
        memo[[x, y]] = value
        return value
      }
    }
    console.log(`${cony[0] + cony[1]}\n${dp(...cony)}`)
  }
}

solution([9, 9], [2, 1])
solution([9, 9], [2, 1])
