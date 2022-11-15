function solution(n, left, right) {
    var answer = [];
    for(let i = 0; i < right - left + 1; i++){
        answer.push(Math.max(parseInt((i+left)/n), (i+left)%n) + 1);
    }
    return answer;
}