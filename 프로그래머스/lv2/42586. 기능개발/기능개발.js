function solution(progresses, speeds) {
    let answer = [];
    let contFlag = true;
    let cnt = 0;

    while(progresses.length > 0){
        progresses = progresses.map((x, idx) => x + speeds[idx]);

        while(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            cnt ++;
        }
        if(cnt > 0) {
            answer.push(cnt);
            cnt = 0;
        }
    }
    return answer;
}