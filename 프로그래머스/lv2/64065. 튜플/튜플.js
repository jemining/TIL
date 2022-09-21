function solution(s) {
    let answer = [];
    let tupleList = [];
    let score = '';
    let numArray = [];
    for(let i = 0; i < s.length-1; i++){
        if(/[0-9]/.test(s[i])){
            score += s[i];
        } else if(s[i] == '}'){
            numArray.push(score);
            tupleList.push(numArray);
            numArray = [];
            score = '';
        } else if (s[i] == ',' && score != ''){
            numArray.push(score);
            score = '';
        }
    }
    tupleList.sort((a, b) => a.length - b.length);
    for(let tuple of tupleList){
        answer.push(Number(...tuple.filter(t => !answer.includes(Number(t)))));
    }
    return answer;
}