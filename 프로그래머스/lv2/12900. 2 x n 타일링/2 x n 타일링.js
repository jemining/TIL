function solution(n) {
    const result = [1, 1]; 
    for (let i = 2; i <= n; i++) {
        let res = result[i - 1] + result[i - 2]
        if(res > 1000000007) res = res % 1000000007;
        result.push(res); 
    } 
    return result[n]; 
}
