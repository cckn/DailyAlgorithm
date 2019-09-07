function solution(p) {
  if (p.length === 0) {
    return ''
  }
  const { u, v } = split(p)

  if (isValid(u)) {
    return u + solution(v)
  } else {
    return '(' + solution(v) + ')' + makeNewU(u)
  }
}

const isValid = (str) => {
  const stack = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char === '(') {
      stack.push(char)
    } else {
      stack.pop()
    }
  }
  return stack.length === 0
}

const split = (p) => {
  let count = 0
  for (let idx = 0; idx < p.length; idx++) {
    const char = p[idx]
    if (char === '(') {
      count++
    } else {
      count--
    }
    if (count === 0) {
      return { u: p.slice(0, idx + 1), v: p.slice(idx + 1) }
    }
  }
}

const makeNewU = (u) => {
  const result = Array.from(u.slice(1, u.length - 1))
    .map((char) => {
      if (char === '(') {
        return ')'
      } else {
        return '('
      }
    })
    .join('')
  return result
}

// console.log(solution('(()())()'), '(()())()')
// console.log(solution(')('), '()')
console.log(solution('()))((()'), '()(())()')

// console.log(isValid('(()())()'))
// console.log(isValid(')('))
// console.log(isValid('()))((()'))
// console.log(isValid('()(())()'))

// console.log(makeNewU('))(('))

// console.log(split('()))((()'), '()', '))((()')
