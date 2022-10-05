function solution(n, t, m, p) {
    let answer = '';
    let cnt = 0;
    let idx = 1;
    while(answer.length != t){
        let score = cnt.toString(n).toUpperCase().split('');
        for(let s of score){
            if(idx == p) answer += s;
            if(idx == m) idx = 1;
            else idx += 1;
            if(answer.length == t) break;
        }
        cnt++;
    }
    return answer;
}