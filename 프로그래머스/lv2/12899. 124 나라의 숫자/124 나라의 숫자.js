function solution(n) {
    let numArray = [4, 1, 2];
    let answer = '';
    while(n) {
        answer = numArray[n%3] + answer;
        n = (n%3 == 0)? n/3 -1 : Math.floor(n/3);
    }

    return answer;
}