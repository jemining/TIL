function solution(elements) {
    const len = elements.length
    const temp = [...elements,...elements]
    const sumSet = new Set();

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            sumSet.add(temp.slice(i, i+j+1).reduce((sum, val) => sum + val, 0));
        }
    }
    
    return sumSet.size;
}