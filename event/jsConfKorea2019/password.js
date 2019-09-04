import { gameApi } from './api'
import _ from 'lodash'

// 바이너리 서치
// const correct = '0327'
// const correct = undefined

const pad_with_zeroes = (number, length) => {
  let my_string = '' + number
  while (my_string.length < length) {
    my_string = '0' + my_string
  }
  return my_string
}

const isEachUnique = (number) => {
  return number.length === _.uniq(Array.from(number)).length
}

let numberPool = [...Array(9999).keys()]
  .map((number) => pad_with_zeroes(number, 4))
  .filter(isEachUnique)

const isValidUpDown = (candidate, target, upDownResult) => {
  if (upDownResult === 'UP') {
    return candidate > target
  } else if (upDownResult === 'DOWN') {
    return candidate < target
  }
  return true
}

const getStrike = (candidate, target) => {
  let count = 0
  const candidateArr = Array.from(candidate)
  candidateArr.forEach((char, idx) => {
    if (char === target[idx]) {
      count++
    }
  })
  return count
}

const getBall = (candidate, target) => {
  let count = 0
  const candidateArr = Array.from(candidate)
  candidateArr.forEach((char) => {
    if (target.includes(char)) {
      count++
    }
  })
  return count - getStrike(candidate, target)
}

const isValidBBGame = (candidate, target, baseball) => {
  const { strike, ball } = baseball
  if (strike != getStrike(candidate, target)) {
    return false
  } else if (ball != getBall(candidate, target)) {
    return false
  }
  return true
}

const game = async () => {
  try {
    // const id = 'gEHOv' // test
    const id = 'VEHAk' //main

    // const target = numberPool[Math.round(numberPool.length / 2)]
    const target = '1483'
    const {
      data: { is_pass, updown, baseball, score },
    } = await gameApi.submit(id, target)
    console.log(target, is_pass, updown, baseball, score)

    if (is_pass) {
      console.log('passed')
      process.exit()
    } else if (updown) {
      numberPool = numberPool.filter((number) =>
        isValidUpDown(number, target, updown),
      )
    } else if (baseball) {
      numberPool = numberPool.filter((number) =>
        isValidBBGame(number, target, baseball),
      )
    }
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

// console.log(numberPool)
setInterval(() => {
  game()
}, 1000)

// console.log(getBall('1234', '4231'))
// console.log(isValidBBGame('1234', '1234', { strike: 4, ball: 0 }))
// console.log(getStrike('1234', '1234'))
