process.stdin.setEncoding('utf8')

process.stdin.on('data', (data) => {
  const [info, ...queue] = data.split('\n')
  const consumer = info.split(' ')[1]

  solution(consumer, queue)
})

function solution(consumer, queue) {
  let processing = []
  let time = 0
  while (processing.length != 0 || queue.length != 0) {
    while (queue.length && processing.length < consumer) {
      processing.push(queue.shift())
    }
    processing = processing.map((work) => work - 1).filter((work) => work != 0)
    time++
  }
  console.log(time)
}
