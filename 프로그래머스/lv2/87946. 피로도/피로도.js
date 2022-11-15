function solution(k, dungeons) {
    let scoreList = [];
    let permute = combination(dungeons, dungeons.length);
    for(let i = 0; i < permute.length; i++){
        let tired = k;
        let score = 0;
        for(let j = 0; j < permute[i].length; j++){
            if(tired < permute[i][j][0]) break;
            tired -= permute[i][j][1];
            score++;
        }
        scoreList.push(score);
    }
    return Math.max(...scoreList);
}

function combination(arr, num) {
    let result = [];
    if(num == 1) return arr.map(x => [x]);
    
    arr.forEach((a, i, array) => {
      let rest = [...array.slice(0,i), ...array.slice(i+1)];
      let combinations = combination(rest, num-1);
      let combiArr = combinations.map(x => [a, ...x])
      result.push(...combiArr);
    }) 
    return result;
}