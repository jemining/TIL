function solution(s) {
    let answer = [];
    let strLen = 0;
    let zeroCnt = 0;
    let cnt = 0;
    
    while(s != "1"){
        let sTemp = s.split('0');
        zeroCnt += sTemp.length - 1;
        strLen = sTemp.join('').length;

        s = strLen.toString(2);
        cnt++;
    }

    answer = [cnt, zeroCnt];
    return answer;
}