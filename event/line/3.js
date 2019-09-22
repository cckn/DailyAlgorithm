process.stdin.setEncoding('utf8')

process.stdin.on('data', (data) => {
  let [_, ...users] = data.split('\n')

  users = users.map((user) => user.split(' ').map((t) => parseInt(t)))

  solution(users)
})

function solution(users) {
  let toilets = []
  let maxUser = 0

  let time = 0
  while (toilets.length != 0 || users.length != 0) {
    toilets = toilets.concat(
      ...users.filter((user) => user[0] == time).map((user) => user[1]),
    )
    users = users.filter((user) => user[0] != time)

    toilets = toilets.filter((user) => user > time)
    maxUser = maxUser > toilets.length ? maxUser : toilets.length

    time++
  }
  console.log(maxUser)
}

solution([[0, 10], [10, 15], [20, 30]])
solution([[5, 15], [0, 10]])
