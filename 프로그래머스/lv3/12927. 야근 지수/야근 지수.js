function solution(n, works) {
    const sum = works.reduce((s, x) => s+x, 0);
    if(sum <= n) return 0;
    works.sort((a, b) => b - a);
    const len = works.length;

    while(n) {
        const max = works[0];

        for(let i = 0; i < len; i++){
            if(works[i] >= max){
                works[i]--;
                n--;
            }
            if(n <= 0) break;
        }
        if(n <= 0) break;
    }
    
    return works.reduce((s, x) => s + (x*x), 0);
}