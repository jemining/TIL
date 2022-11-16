function solution(want, number, discount) {
    let answer = 0;
    let disTmpl = [];
    for(let i = 0; i < discount.length; i++){
        disTmpl = discount.slice(i, i+10);
        for(let j = 0; j < want.length; j++){
            if(number[j] == disTmpl.filter(e => want[j] == e).length) {
                if(j == want.length - 1) answer++;
            } else break;
        }
    }
    return answer;
}

