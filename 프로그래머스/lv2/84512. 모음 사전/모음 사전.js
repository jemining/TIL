function solution(word) {
    let result = [];
    for(let i = 1; i <= 5; i++) dfs('', i, result);
    return result.sort().indexOf(word) + 1;

    function dfs(str, length, result){
        const wordList = ['A', 'E', 'I', 'O', 'U'];
        if(length === str.length) return result.push(str);
        wordList.forEach((word) => dfs(str + word, length, result));
    }
}