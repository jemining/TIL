function solution(operations) {
    var answer = [];
    for(let op of operations){
        let [key, val] = op.split(' ');
        if(key === 'I'){
            answer.push(val);
        } else if (val == 1){
            answer = answer.filter(x => x != Math.max(...answer));
        } else {
            answer = answer.filter(x => x != Math.min(...answer));
        }
    }
    return answer.length == 0? [0,0] : [Math.max(...answer), Math.min(...answer)];
}