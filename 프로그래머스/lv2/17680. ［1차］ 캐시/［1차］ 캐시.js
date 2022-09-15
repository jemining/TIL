function solution(cacheSize, cities) {
    var answer = 0;
    cities = cities.map (x => x.toUpperCase())
    let cacheList = [];
    if(cacheSize == 0) return cities.length * 5;
    for(let i = 0; i < cities.length; i++){
        if(!cacheList.find(x => x == cities[i])){
            if(cacheList.length == cacheSize) cacheList.shift();
            answer += 5;
        } else {
            cacheList = cacheList.filter(x => x != cities[i]);
            answer++;
        }
        cacheList.push(cities[i]);
    }
    return answer;
}