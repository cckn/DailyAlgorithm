# [K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748)

## 막혔던 포인트 
- js의 sort가 ASCII 코드 기반으로 작동한다는 것을 몰랐다
  - 당연히 value 기반일 줄... 
  - 구글링 해보고 알게 됐다. 


## 풀이 기록 
### [최초의 내 풀이](./index.js)
-  commands 반복 
   -  command를 destructuring 이용하여 begin, end, index로 분리한다 
   -  array를 begin, end를 이용해 자른다 
   -  sort한다 
   -  index에 해당하는 value를 answer[]에 push한다
-  answer 리턴 
-  
### [다른 사람의 풀이를 참고한 수정 풀이](./bestSolution.js)
- answer[]를 선언하지 않고 바로 return map
- map funcion에서 바로 destructuring 적용

