class PriorityQueue {
  _comparator
  heap = []

  constructor(comparator) {
    this._comparator = comparator || ((a: number, b: number) => a - b)
  }

  _compare = (a, b) => this._comparator(this.heap[a], this.heap[b])

  _swap = (a, b) => {
    const tmp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = tmp
  }

  getSize = () => this.heap.length

  isEmpty = () => this.getSize() === 0

  peek = () => {
    try {
      return this.heap[0]
    } catch (e) {
      throw new Error('queue is empty')
    }
  }

  dequeue = () => {
    if (this.getSize() === 0) {
      throw new Error('Empty queue')
    }

    let first = this.peek()
    let last = this.heap.pop()
    let size = this.getSize()

    if (size === 0) return last

    this.heap[0] = last
    let current = 0

    while (current < size) {
      let largest = current
      let left = 2 * current + 1
      let right = 2 * current + 2

      if (left < size && this._compare(left, largest) <= 0) {
        largest = left
      }

      if (right < size && this._compare(right, largest) <= 0) {
        largest = right
      }

      if (largest === current) break

      this._swap(largest, current)
      current = largest
    }

    return first
  }

  enqueue = (element) => {
    let size = this.heap.push(element)
    let current = size - 1
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)
      if (this._compare(current, parent) >= 0) break
      this._swap(parent, current)
      current = parent
    }
    return size
  }
  forEach = (fn) => this.heap.forEach(fn)
  getArray = () => this.heap.slice()
}

const pq = new PriorityQueue((a, b) => b - a)
