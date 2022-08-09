// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(num) {
  let answer = '';
  for (let floor = 1; floor <= num; floor++) {
    for (let blank = 0; blank < num - floor; blank++) {
      answer += ' ';
    }
    for (let star = 0; star < floor; star++) {
      answer += '*';
    }
    if (floor !== num) {
      answer += '\n';
    }
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
