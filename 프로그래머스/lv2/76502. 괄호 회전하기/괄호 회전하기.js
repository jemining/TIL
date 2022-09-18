function solution(s) {
    let score = 0;

    for(let i = 0; i < s.length; i++){
        let str = s.substring(i, s.length) + s.substring(0, i);
        if(bracketValiator(str)) score++;
    }
    return score;
}

// 맞는 괄호인지 판단하는 함수
function bracketValiator(str){
    let bracketList = [];
    let bracketCnt = 0;

    for(let i = 0; i < str.length; i++){
        if(["]","}",")"].indexOf(str[i]) > -1) {
            bracketCnt -= 1;
            if(str[i] == "]" && bracketList.pop() != "[") return false;
            if(str[i] == "}" && bracketList.pop() != "{") return false;
            if(str[i] == ")" && bracketList.pop() != "(") return false;
        } else {
            bracketList.push(str[i]);
            bracketCnt++;
        }
        if(bracketCnt < 0) return false;
    }
    if(bracketCnt == 0) return true;
    else return false;
}