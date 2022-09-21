function solution(clothes) {
    let answer = 1;
    let clothMap = new Map();
    for(let cloth of clothes){
        let cnt = clothMap.get(cloth[1]);
        if(cnt) clothMap.set(cloth[1], cnt+1);
        else clothMap.set(cloth[1], 1);
    }
    for(let value of clothMap.values()){
        answer = answer * (value + 1);
    }

    return answer -1;
}