function solution(rows, columns, queries) {
    let answer = [];
    let data = new Array(rows);

    for(let i = 0; i < rows; i++){
        data[i] = new Array(columns);
        for(let j = 0; j < columns; j++){
            data[i][j] = i * columns + j + 1;
        }
    }

    for(let query of queries){
        let order = [];
        let [row1, col1, row2, col2] = [query[0]-1, query[1]-1,query[2]-1,query[3]-1];

        for(let i = col1; i < col2 + 1; i++) order.push(data[row1][i]);
        for(let i = row1 + 1; i < row2 + 1; i++) order.push(data[i][col2]);
        for(let i = col2 - 1; i > col1 - 1; i--) order.push(data[row2][i]);
        for(let i = row2 - 1; i > row1; i--) order.push(data[i][col1]);
        answer.push(Math.min(...order));
        order.unshift(order.pop());

        for(let i = col1; i < col2 + 1; i++) data[row1][i] = order.shift();
        for(let i = row1 + 1; i < row2 + 1; i++) data[i][col2] = order.shift();
        for(let i = col2 - 1; i > col1 - 1; i--) data[row2][i] = order.shift();
        for(let i = row2 - 1; i > row1; i--) data[i][col1] = order.shift();
    }

    return answer;
}