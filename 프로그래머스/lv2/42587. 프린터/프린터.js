function solution(priorities, location) {
    var answer = 0;
    while(priorities.length != 0){
        if(Math.max(...priorities) == priorities[0]) {
            answer ++;
            if(location == 0) break;
        } else {
            priorities.push(priorities[0]);
        }
        priorities.shift();
        location == 0 ? location = priorities.length - 1 : location -= 1;
    }

    return answer;
}