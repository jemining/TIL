function solution(enroll, referral, seller, amount) {
    let answer = new Array(enroll.length).fill(0);
    for(let i = 0; i < seller.length; i++) {
        let senior = true;
        let calcAmount = amount[i] * 100;
        let targetSeller = seller[i];
        let idx = 0;
        for(let j = 0; j < enroll.length;j++) if(enroll[j] === targetSeller) idx = j;
        while(senior){
            let profit = Math.ceil(90 / 100 * calcAmount);
            answer[idx] += profit;
            if(referral[idx] === '-'){
                senior = false;
            } else {
                calcAmount = Math.floor(10 / 100 * calcAmount);
                targetSeller = referral[idx];
                if(calcAmount < 1) senior = false;
                else 
                for(let j = 0; j < idx;j++) if(enroll[j] === targetSeller) idx = j;
            }
        }
    }
    return answer;
}