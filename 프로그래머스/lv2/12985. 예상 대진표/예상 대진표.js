function solution(n,a,b)
{
    let battleArray = new Array(n).fill(0);
    battleArray[a-1] = 1;
    battleArray[b-1] = 1;
    let battleCnt = n;
    let cnt = 0;

    while(battleCnt > 1){
        let arrayTmpl = [];
        for(let i = 0; i < battleCnt; i++){
            let quo = parseInt(i / 2);
            if(i % 2 == 0) arrayTmpl[quo] = battleArray[i];
            else arrayTmpl[quo] += battleArray[i];
        }
        battleArray = arrayTmpl;
        battleCnt = n/2;
        cnt ++;
        if(arrayTmpl.find(x => x === 2)) break;
    }

    return cnt;
}