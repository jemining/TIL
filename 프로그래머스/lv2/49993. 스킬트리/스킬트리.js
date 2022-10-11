function solution(skill, skill_trees) {
    let answer = 0;
    for(let skt of skill_trees){
        skt = Array.from(skt).filter(x => skill.includes(x));
        let sktIdxList = skt.map(x => skill.indexOf(x));
        if(checkIdx(sktIdxList)) answer++;
    }
    return answer;
}

function checkIdx(array){
    for(let i = 0; i < array.length; i++){
        if(i != array[i]) return false;
    }
    return true;
}