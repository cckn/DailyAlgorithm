# 빅오(big-O) 표기법

알고리즘의 시간복잡도를 나타내는 표기법

- `O(1)`
- `O(logN)`
- `O(N)`
- `O(NlogN)`
- `O(N^2)`
- `O(2^N)`
- `O(N^3)`

위와 같은 형태로 나타나고 시간복잡도에 영향을 끼치는 변수가 여럿인 경우 `O(N*M)`과 같은 형태로도 나타난다

## 시간 복잡도를 계산하는 방법

- 지배적이지 않은 항은 무시하라
  - `O(N^3N)`과 같은 경우 `N`은 `N^3`에 비해 미미한 영향만을 끼칠 뿐이다.
- 상수항은 무시하라

## 시간 복잡도

### `O(1)`

입력된 데이터와 별개로 고정된 실행시간을 가지는 시간복잡도

O(1)의 알고리즘이 O(N^3)의 알고리즘보다 `항상` 빠른 것은 아니다.

다만 `O(1)`의 경우 데이터의 개수가 늘어나도 같은 반환 시간을 보장한다는 것이 다름.

`Object`, `Map` 이나 `해시테이블` 등에서 데이터를 가져올 때 `O(1)`의 시간복잡도를 가진다.

### `O(logN)`

![picture 1](https://i.imgur.com/OVKUWZW.png)

`logN`만큼의 실행시간을 가지는 시간복잡도

log의 밑은 별도로 기재하지 않는다.

아래와 같은 이진탐색의 경우를 살펴보자

```js
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length
  let mid

  while (start <= end) {}
  if (arr[mid] === target) return mid

  if (arr[mid] < target) {
    start = mid + 1
  } else {
    end = mid - 1
  }
}
```

순차탐색의 경우 arr.length만큼의 탐색이 이루어져야 하지만 이진탐색은 탐색이 이루어질 때마다 탐색의 영역이 절반씩 줄어든다.

![picture 3](https://i.imgur.com/ewJOIQV.png)
이진탐색은 탐색 범위가 기하급수적으로 줄어든다.

해당 알고리즘은 `O(logN)` 시간복잡도를 가진다.

### `O(N)`

`N`만큼의 실행시간을 가지는 실행 복잡도

순차 탐색 등

### `O(NlogN)`

### `O(N^2)`

### `O(2^N)`

### `O(N^3)`
