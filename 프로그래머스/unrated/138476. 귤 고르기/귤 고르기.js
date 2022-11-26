function solution(k, tangerine) {
    let cnt = 0;
    let delCnt = tangerine.length - k;
    let el = {};
    tangerine.forEach((t) => el[t] = (el[t] || 0) + 1);
    const sortEl = Object.values(el).sort((a, b) => a - b);

    while(delCnt > 0) {
        if(sortEl[cnt] <= delCnt) {
            delCnt -= sortEl[cnt];
            cnt++;
        } else break;
    }

    return sortEl.length - cnt;
}