function solution(n, s) {
    if(n > s) return [-1];
    const share = parseInt(s / n);
    const remainder = s % n;
    const answer = new Array(n).fill(share);
    for(let i = 0; i < remainder; i++)
        answer[answer.length - 1 - i]++;

    return answer;
}