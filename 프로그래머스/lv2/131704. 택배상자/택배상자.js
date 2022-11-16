function solution(order) {
    let answer = 0;
    let container = 1;
    let subContainer = [];
    let target = 0;

    while(target < order.length){
        if(container == order[target]){
            container++;
            target++;
            answer++;
        } else if (subContainer[subContainer.length - 1] == order[target]){
            subContainer.pop();
            target++;
            answer++;
        } else if (container < order[target]) {
            subContainer.push(container);
            container++;
        } else {
            break;
        }
    }
    return answer;
}