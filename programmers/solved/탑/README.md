# [탑](https://programmers.co.kr/learn/courses/30/lessons/42588)

## 풀이 방법
- 배열 reverse 
- slice로 자신보다 오른쪽에 있는 데이터만 
- 그 중에 더 높은 탑 findIndex 
- 결과 값 계산 
  - findIndex === -1 이면 0으로 
  - findIndex != -1 이면 
    - 전체 길이 - Index - findIndex -1 (역순으로 뒤집었기 때문에)
- array unshift 

## 막혔던 포인트 
- 계산식 헷갈려서 디버거 사용 
- 단순 array일 경우 데이터화 시키는게 계산 및 가독성에서 더 좋을 수 있음


## 풀이 기록 
### [내 풀이](./solve.js)
    
<!-- ### [다른 사람의 풀이를 참고한 수정 풀이](./bestSolution.js) -->

