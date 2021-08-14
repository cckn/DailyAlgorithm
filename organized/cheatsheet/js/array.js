const n = 5
const m = 10

// 길이가 5인 빈 배열 선언
console.log(new Array(n).fill(0))

// n * m 빈 배열 선언
const matrix1 = Array.from(Array(n), () => new Array(m).fill(1))
const matrix2 = new Array(n).fill(null).map(() => new Array(m).fill(2))

console.log(matrix1)
console.log(matrix2)
