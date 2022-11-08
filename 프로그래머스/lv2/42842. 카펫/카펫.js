function solution(brown, yellow) {
    let size = brown + yellow;
    for(let x = 3; x < size/2; x++){
        let y = (size / x);
        if(x < y || y < 3) continue;
        if((x * 2) + ((y - 2) * 2) == brown) return [x, y];
    }
    return [0, 0];
}