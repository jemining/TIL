function solution(citations) {
    var answer = 0;
    let maxCnt = 0;
    let minCnt = 0;
    for(let i = 10000; i > 0; i--){
        maxCnt = citations.filter(x => x >= i).length;
        minCnt = citations.filter(x => x < i).length;
        if(maxCnt >= i && minCnt <= i) {
            return i;
        }
    }
    return answer;
}