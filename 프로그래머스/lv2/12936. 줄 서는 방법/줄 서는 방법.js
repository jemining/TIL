function solution(n, k) {
  let answer = [];
  const el = new Array(n).fill().map((_, i) => i + 1);
  let fact = el.reduce((ac, v) => ac * v, 1);

  while(answer.length < n){
    fact = fact / el.length;
    answer.push(...el.splice(Math.floor((k - 1) / fact), 1));
    k = k % fact;
  }

  return answer;
}