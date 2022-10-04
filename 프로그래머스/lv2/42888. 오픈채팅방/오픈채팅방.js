function solution(records) {
    let answer = [];
    let nameMap = new Map();
    for(let record of records){
        let [type, id, name] = record.split(' ');
        if(type == 'Enter' || type == 'Change') nameMap.set(id, name);
    }

    for(let record of records) {
        let [type, id] = record.split(' ');
        if(type == 'Enter') answer.push(`${nameMap.get(id)}님이 들어왔습니다.`)
        else if (type == 'Leave') answer.push(`${nameMap.get(id)}님이 나갔습니다.`)
    }

    return answer;
}