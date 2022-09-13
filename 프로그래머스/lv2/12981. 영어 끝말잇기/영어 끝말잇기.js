function solution(n, words) {
    var answer = [];
    let lastWord = '';
    let idx = 0;
    let newWords = [];

    for(let i = 0; i < words.length; i++){
        if(i != 0 && lastWord != words[i].substring(0, 1)){
            idx = i;
            break;
        }
        lastWord = words[i].substr(-1);
        if(newWords.find(x => x == words[i])) {
            idx = i;
            break;
        }
        newWords.push(words[i])
    }
    if(idx == 0) answer = [0, 0];
    else answer = [idx%n + 1, parseInt(idx/n) + 1];

    return answer;
}