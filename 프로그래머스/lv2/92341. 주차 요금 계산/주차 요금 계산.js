function solution(fees, records) {
    var answer = [];
    let recordMap = new Map();
    for(let i = 0; i < records.length; i++){
        let [time, carNo, type] = records[i].split(' ');
        let [h, m] = time.split(':');
        let mapMinute = recordMap.get(carNo)?.MINUTE;
        if(!mapMinute) mapMinute = 0;

        if(type == "IN") recordMap.set(carNo, {MINUTE: mapMinute - (Number(h) * 60 + Number(m)), RECORD: "IN"})
        else recordMap.set(carNo, {MINUTE: mapMinute + (Number(h) * 60 + Number(m)), RECORD: "OUT"})
    }
    
    let recordList = [...recordMap].sort((a,b) => a[0] - b[0]);
    for(let record of recordList){
        if(record[1].RECORD == 'IN') answer.push(calculate(fees, record[1].MINUTE + 1439))
        else answer.push(calculate(fees, record[1].MINUTE))
    }

    return answer;
}

function calculate(fees, minute){
    if(minute < fees[0]) return fees[1];
    return fees[1] + Math.ceil((minute - fees[0]) / fees[2]) * fees[3];
}