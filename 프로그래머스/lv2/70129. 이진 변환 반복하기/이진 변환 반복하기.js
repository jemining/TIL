function solution(s) {
    let answer = [0, 0];
    let strLen = 0;
    
    while(s != "1"){
        let sTemp = s.split('0');
        answer[1] += sTemp.length - 1;
        strLen = sTemp.join('').length;

        s = strLen.toString(2);
        answer[0]++;
    }

    return answer;
}