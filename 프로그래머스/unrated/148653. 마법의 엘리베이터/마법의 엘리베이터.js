function solution(storey) {
  let upperFlag = false;
  return String(storey).split('').reverse().map(x => Number(x)).reduce((a, c, i, ori) => {
    if(upperFlag) {
      upperFlag = false;
      c++;
    }
    upperFlag = true;
    if(c > 5) {
      if(i == ori.length - 1) a++;
      return a + (10 - c);
    } else if(c == 5 && i < ori.length - 1 &&ori[i+1] >= 5){
      return a + 5;
    } else {
      upperFlag = false;
      return a + c;
    }
  }, 0);
}