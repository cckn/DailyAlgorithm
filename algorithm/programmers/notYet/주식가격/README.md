# [가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746)

## 막혔던 포인트 
- 정확도 테스트는 통과하였으나 효율성 테스트는 통과하지 못함 
  - 권장 시간 복잡도는 O(n)이라고 함
  - Stack을 사용하는 것으로 추정

## 풀이 방법
- 순화하며 자신 이후에 있는 가격들 중 자신보다 낮아지는 시점이 언제인지 기록 
- JS의 `array.prototype.findIndex` 간단 구현 후 사용 


## 풀이 기록 
### [내 풀이](./solve1.py)
    
