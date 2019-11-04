process.stdin.setEncoding('utf8')

process.stdin.on('data', (data) => {
  const params = data.split('\n')

  const items = params[0].split(' ')
  const k = parseInt(params[1])

  solution(items, k)
})

function solution(items, k) {
  const result = permute(items)
    .map((arr) => {
      return arr.join('')
    })
    .sort((a, b) => a - b)
  console.log(result[k - 1])
}

//https://stackoverflow.com/questions/9960908/permutations-in-javascript
var permArr = [],
  usedChars = []

function permute(input) {
  var i, ch
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0]
    usedChars.push(ch)
    if (input.length == 0) {
      permArr.push(usedChars.slice())
    }
    permute(input)
    input.splice(i, 0, ch)
    usedChars.pop()
  }
  return permArr
}
