function solution(n, k) {
    var answer = 0;
    let nList = n.toString(k).split('0')
    for(let i = 0; i < nList.length; i++){
        if(nList[i] == "1" || nList[i] == "") continue;
        if(isPrime(Number(nList[i]))) answer++;
    }
    return answer;
}

function isPrime(num) {
    if(num == 2) {
      return true;
    }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        // 한 번이라도 나누어 졌으니 소수가 아님
        return false; 
      }
    }
    // 나눠진 수가 없다면 소수
    return true; 
}