function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]);
    let answer = 1;
    let outTime = routes[0][1];
    for(let i = 1; i < routes.length; i++){
        if(outTime < routes[i][0]){
            answer++;
            outTime = routes[i][1];
        }
        if(outTime > routes[i][1]) {
            outTime = routes[i][1];
        }
    }
    return answer;
}
