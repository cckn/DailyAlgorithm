function solution(lines) {
  const TYPE = { start: 1, end: -1 }

  let count = 0
  let max = 0

  const _lines = lines
    .map((line) => {
      line = line.split(' ')
      const end = Date.parse(line.slice(0, 2).join())
      const time = parseFloat(line[2].replace('s', '')) * 1000 - 1
      const start = end - time
      return [start, end + 1000 - 1]
    })
    .reduce((arr, cur) => {
      arr.push({ time: cur[0], type: TYPE.start })
      arr.push({ time: cur[1], type: TYPE.end })
      return arr
    }, [])
    .sort((a, b) => {
      return a.time !== b.time ? a.time - b.time : b.type - a.type
    })

  _lines.forEach((x) => {
    count += x.type
    max = max < count ? count : max
  })

  return max
}

//////////////////////////

import { algoTest } from './utils.js'

const testFunc = solution
const params = [
  [['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']],
  [['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s']],
  [
    [
      '2016-09-15 20:59:57.421 0.351s',
      '2016-09-15 20:59:58.233 1.181s',
      '2016-09-15 20:59:58.299 0.8s',
      '2016-09-15 20:59:58.688 1.041s',
      '2016-09-15 20:59:59.591 1.412s',
      '2016-09-15 21:00:00.464 1.466s',
      '2016-09-15 21:00:00.741 1.581s',
      '2016-09-15 21:00:00.748 2.31s',
      '2016-09-15 21:00:00.966 0.381s',
      '2016-09-15 21:00:02.066 2.62s',
    ],
  ],
]
const expects = [1, 2, 7]

algoTest(testFunc, params, expects)
