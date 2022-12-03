function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let cnt = 0;
    let bridgeStack = [];
    let timeStack = [];
    while(true){
        if(cnt >= truck_weights.length && bridgeStack.length == 0){
            break;
        } else if(bridgeStack.length == 0) {
            bridgeStack.push(truck_weights[cnt]);
            timeStack.push(bridge_length);
            cnt++;
        } else {
            timeStack = timeStack.map(x => x = x-1);
            if(timeStack[0] == 0) {
                bridgeStack.shift();
                timeStack.shift();
            }

            if(bridgeStack.reduce((ac, x) => ac + x, 0) + truck_weights[cnt] <= weight){
                bridgeStack.push(truck_weights[cnt]);
                timeStack.push(bridge_length);
                cnt++;
            }
        }
        answer++;
    }
    return answer;
}