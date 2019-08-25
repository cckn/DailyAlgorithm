# [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

## 풀이 방법
- 전체 선수들을 순회하며 count + 1 
- 완주 선수들을 순회하며 count - 1
- count 확인하여 count == 1 이면 return 

## 막혔던 포인트 
- 딱히 없음 



## 풀이 기록 
### [최초의 내 풀이](./index.js)
- 부족한 점 
  - 변수명 수정 필요
  - 오브젝트 핸들링에서 있어서 불필요한 복잡함
  - 해당 key 값을 찾았을 때 바로 return 할 수 있으면 더 좋지 않을까. 
  
### [다른 사람의 풀이를 참고한 수정 풀이](./bestSolution.js)
- array.prototype.reduce() 
- array.prototype.find()

