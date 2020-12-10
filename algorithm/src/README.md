# [N으로 표현](https://programmers.co.kr/learn/courses/30/lessons/42895)

## 풀이

너비 우선 탐색으로 접근하면 될거 같다
N이 늘어나는 케이스는 다음과 같다.

- `+ N`
- `- N`
- `\* N`
- `// N`
- `NN...`

잘 생각해보면 아래같은 경우 또한 존재한다

- `+ NN...`
- `- NN...`
- `\* NN...`
- `// NN...`

N이 한자리 수일때 *11은 NN이 되는 결과를 주지만
NN일 때 *11은 과연??

`f(N) === NN` 이고 `f(NN) === NNN`이 되는 식을 찾아야함.

숫자를 문자열로 바꾸고 N을 붙이고 다시 parseInt하면 되겠다

```javascript

function f(N) {


  return N.toString()+
}
```

함수를 만들자

```javascript
function bfs(depth, N, number) {
  if (N === number) {
    return depth
  }
}
```

근데 내가 만들려는게 깊이 우선 같은데
너비는 어떻게 만들지

### 최초 풀이

### 개선사항

### 최종 풀이

## 주의사항
