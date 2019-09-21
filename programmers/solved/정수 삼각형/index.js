function solution(triangle) {
  triangle.forEach((nodes, idx, arr) => {
    if (idx > 0) {
      arr[idx] = calc(arr[idx - 1], nodes)
    }
  })

  console.log(triangle)
  return Math.max(...triangle.pop())
}

const calc = (parentNodes, childrenNodes) => {
  if (!parentNodes) {
    return childrenNodes
  }
  return childrenNodes.map((node, idx) => {
    return (
      node +
      Math.max(
        ...[parentNodes[idx - 1], parentNodes[idx]].filter(
          (item) => item !== undefined,
        ),
      )
    )
  })
}

console.log(
  solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]),
  30,
)
