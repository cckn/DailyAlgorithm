function solution(numbers, target) {
  const dfs = (num, idx) => {
    if (idx === numbers.length) {
      return num === target ? 1 : 0
    }
    return dfs(num + numbers[idx], idx + 1) + dfs(num - numbers[idx], idx + 1)
  }

  return dfs(0, 0)
}

console.log(solution([1, 1, 1, 1, 1], 3), 5)
