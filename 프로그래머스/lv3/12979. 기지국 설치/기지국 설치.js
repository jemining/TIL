function solution(n, stations, w) {
    let cnt = 0;
    let idx = 1;
    const range = 2 * w + 1;
    for(let i = 0; i < stations.length; i++){
        if(stations[i] - w > idx){
            cnt += Math.ceil((stations[i] - w - idx) / range)
        }
        idx = stations[i] + w + 1;
    }
    return cnt + Math.ceil((n - idx + 1) / range)
}