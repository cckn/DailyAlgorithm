const result = []

/**
 *
 * @param max 숫자 범위
 * @param targetLength 순열 길이
 * @param arr 임시 배열
 */
const permutation = (max: number, targetLength: number, arr: number[]) => {
  if (arr.length === targetLength) {
    return result.push(arr.join(' '))
  } else {
    for (let i = 1; i <= max; i++) {
      if (!arr.includes(i)) permutation(max, targetLength, [...arr, i])
    }
  }
}

/**
 * permutationWithRepetition
 * @param max 숫자 범위
 * @param targetLength 순열 길이
 * @param arr 임시 배열
 */
const permutationWithRepetition = (
  max: number,
  targetLength: number,
  arr: number[],
) => {
  if (arr.length === targetLength) {
    return result.push(arr)
  } else {
    for (let i = 1; i <= max; i++) {
      permutationWithRepetition(max, targetLength, [...arr, i])
    }
  }
}

const srcArr = [1, 2, 3, 4, 5]

const recursion = (targetLength: number, src: number[], dist: number[]) => {
  if (dist.length === targetLength) return result.push(dist.join(' '))
  if (dist.length > targetLength) return

  src.forEach((element, idx, arr) => {
    const newSrc = arr.slice(idx)
    const newDist = [...dist, element]
    recursion(targetLength, newSrc, newDist)
  })
}

recursion(3, srcArr, [])

console.log(result)
