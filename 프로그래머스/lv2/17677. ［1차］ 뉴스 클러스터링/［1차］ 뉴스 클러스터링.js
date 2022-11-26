function solution(str1, str2) {
    let strList1 = [];
    let strList2 = [];
    for(let i = 0; i < str1.length - 1; i++) {
        let matchStr = str1[i] + str1[i+1];
        if(/^[a-z|A-Z]+$/.test(matchStr)) strList1.push(matchStr.toUpperCase());
    }
    for(let i = 0; i < str2.length - 1; i++) {
        let matchStr = str2[i] + str2[i+1];
        if(/^[a-z|A-Z]+$/.test(matchStr)) strList2.push(matchStr.toUpperCase());
    }
    return strList1.length + strList2.length != 0 ? parseInt(intersection(strList1, strList2) / union(strList1, strList2)  * 65536) : 65536;
}

function intersection(arr1, arr2){
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        let idx = arr2.indexOf(arr1[i])
        if(idx > -1) {
            arr2 = arr2.filter((_, i) => i != idx);
            result.push(arr1[i]);
        }
    }
    return result.length
}

function union(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        let idx = arr2.indexOf(arr1[i])
        if(idx > -1) {
            arr2 = arr2.filter((_, i) => i != idx);
        }
    }
    return [...arr1, ...arr2].length
}