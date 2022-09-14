function solution(people, limit) {
    var answer = 0;
    let endCnt = 0;
    people.sort((a,b) => b-a);
    for(let i = 0; i < people.length; i++){
        if(i >= people.length - endCnt) return answer;
        if(people[i] + people[people.length -(1+ endCnt)] <= limit){
            answer++;
            endCnt++;
        } else {
            answer++;
        }
    }
    return answer;
}