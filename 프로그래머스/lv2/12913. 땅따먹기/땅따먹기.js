function solution(land) {
    for(let rowIdx = 1; rowIdx < land.length; rowIdx++){
        for(let colIdx = 0; colIdx < land[0].length; colIdx++){
            /* 두번째 열에 첫번째 열의 최대값을 더함 -> 세번째 열에는 두번째 열이 더한값의 최대값을 더함 -> ...
                단 현재 인덱스는 제외 */
            land[rowIdx][colIdx] += Math.max(...land[rowIdx-1].filter((_, idx) => idx != colIdx));
        }
    }
    return Math.max(...land[land.length-1]);
}