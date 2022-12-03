function solution(dirs) {
    let set = new Set();
    let targetX = 0;
    let targetY = 0;
    let prev = '00';

    for(let i = 0; i < dirs.length; i++){
        if(dirs[i] == 'U' && targetY != 5) targetY++;
        else if (dirs[i] == 'D' && targetY != -5) targetY--;
        else if (dirs[i] == 'R' && targetX != 5) targetX++;
        else if (dirs[i] == 'L' && targetX != -5) targetX--;
        else continue;
        set.add(prev + targetX + targetY);
        set.add(''+targetX + targetY + prev);
        prev = '' + targetX + targetY;
    }
    return set.size / 2;
}