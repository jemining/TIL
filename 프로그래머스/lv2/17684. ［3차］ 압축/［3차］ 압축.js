function solution(msg) {
    let answer = [];
    let dictionary = new Array(26).fill().map((_, i) => String.fromCharCode(i + 65));
    let msgArray = msg.split('');
    let str = '';
    let score = 0;

    for(let i = 0; i < msgArray.length; i++){
        str += msgArray[i];
        let idx = dictionary.indexOf(str);
        if(idx > -1) {
            score = idx+1;
            if(i == msgArray.length -1) answer.push(score);
            continue;
        } else {
            dictionary.push(str);
            answer.push(score);
            str = '';
            score = 0;
            i--;
        }
    }

    return answer;
}