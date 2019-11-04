process.stdin.setEncoding('utf8')

process.stdin.on('data', (data) => {
  const params = data.split('\n')

  const n = parseInt(params[0])
  const seats = params[1]

  solution(n, seats)
})

function solution(n, seats) {
  const candidate = []
  seats
    .split(' ')
    .join('')
    .split('1')
    .forEach((empty, idx, arr) => {
      if (empty.length) {
        let result

        if (idx === 0 || idx === arr.length - 1) {
          result = empty.length
        } else {
          result = Math.ceil(empty.length / 2)
        }
        candidate.push(result)
      }
    })

  console.log(Math.max(...candidate))
}

// solution(7, '1 0 1 0 0 0 1')
// solution(7, '0 0 1 0 0 0 1')
solution(10, '1 0 0 0 0 0 0 0 0 0')
