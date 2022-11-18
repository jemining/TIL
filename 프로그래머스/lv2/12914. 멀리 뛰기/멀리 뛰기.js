function solution(n) {
    let newArr = [0, 1, 2, 3];
 
    let fib = (n) => {
        if (newArr[n] !== undefined) return newArr[n];
        newArr[n] = (fib(n - 1) + fib(n - 2)) % 1234567; 
        return newArr[n];
    };

    return fib(n);
}