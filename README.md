# [큰 수의 법칙](#)

## 풀이

```javascript
result[category] = category in result ? result[category] + 1 : 2
```

타입별로 정리된 수량을 모두 곱한다

아무것도 입지 않았을 경우의 수를 뺀다 `-1`

```javascript
const answer =
  Object.values(result).reduce((prev, curr) => {
    return prev * curr
  }, 1) - 1
```

### 최초 풀이

```js
function solution(clothes) {
  const result = {}

  clothes.forEach((element) => {
    const [item, category] = element

    result[category] = category in result ? result[category] + 1 : 2
  })

  const answer =
    Object.values(result).reduce((prev, curr) => {
      return prev * curr
    }, 1) - 1

  return answer
}
```

### 개선사항

타 사용자의 풀이에 비교해서 크게 나쁘지 않다.
변수로 result와 answer를 선언했는데 바로 리턴을 하거나 메서드 체이닝을 통해 변수 선언을 줄여도 좋겠다

### 최종 풀이

```js
function solution(clothes) {
  const result = clothes.reduce((prev, curr) => {
    const type = curr[1]
    prev[type] = type in prev ? prev[type] + 1 : 2
    return prev
  }, {})

  return (
    Object.values(result).reduce((prev, curr) => {
      return prev * curr
    }, 1) - 1
  )
}
```

중복되거나 사용되지 않는 변수를 제거하고 바로 return을 했다.

가독성을 해치지 않는 범위내에서 변화를 줬다.

## 주의사항
