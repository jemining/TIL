function solution(arr) {
    return arr.reduce((ac, v) => getLcm(ac, v));
}

function getGcd(num1, num2) {
    while(num2 > 0){
        let temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    }
    return num1;
}

function getLcm(num1, num2) {
    return num1 * num2 / getGcd(num1, num2);
}