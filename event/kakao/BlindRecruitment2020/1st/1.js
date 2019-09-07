function solution(s) {
  if (s.length <= 1) {
    return 0
  }
  const encriptedStrings = []
  for (let idx = 1; idx <= s.length / 2; idx++) {
    encriptedStrings.push(encript(s, idx))
  }
  encriptedStrings.sort((a, b) => a.length - b.length)
  return encriptedStrings[0].length
}

const encript = (s, encriptLength) => {
  const encriptObjArr = []
  for (let idx = 0; idx < s.length; idx += encriptLength) {
    const char = s.slice(idx, idx + encriptLength)
    if (!encriptObjArr.length) {
      encriptObjArr.push({ char, count: 1 })
    } else {
      const prev = encriptObjArr.pop()

      if (prev.char === char) {
        prev.count += 1
        encriptObjArr.push(prev)
      } else {
        encriptObjArr.push(prev)
        encriptObjArr.push({ char, count: 1 })
      }
    }
  }
  let result = ''
  encriptObjArr.forEach((element) => {
    result = result.concat(element.count === 1 ? '' : element.count)
    result = result.concat(element.char)
  })
  return result
}

console.log(solution('ababcdcdababcdcd'), 9)
console.log(solution('a'), 9)
// console.log(encript('aabbaccc', 1), '2a2ba3c')
// console.log(encript('ababcdcdababcdcd', 2), '2a2ba3c')
