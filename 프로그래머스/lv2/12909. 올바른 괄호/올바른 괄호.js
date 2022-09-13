function solution(s){
    let stackTmpl = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(")  stackTmpl += 1;
        else if (s[i] === ")") stackTmpl -= 1;
        if(stackTmpl < 0) return false;
    }
    return stackTmpl === 0;
}