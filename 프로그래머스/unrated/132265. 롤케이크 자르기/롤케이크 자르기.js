function solution(topping) {
  let answer = 0;
  let toppMap = topping.reduce((accu, curr) => { 
    accu.set(curr, (accu.get(curr) || 0) + 1) 
    return accu;
  }, new Map());
  let otherSet = new Set();
  for(let i = 0; i < topping.length; i++){
    toppMap.set(topping[i], toppMap.get(topping[i]) - 1);
    otherSet.add(topping[i]);
    if(toppMap.get(topping[i]) == 0) toppMap.delete(topping[i]);
    if(toppMap.size == otherSet.size) answer++;
    if(otherSet.size > toppMap.size) break;
  }
  return answer;
}