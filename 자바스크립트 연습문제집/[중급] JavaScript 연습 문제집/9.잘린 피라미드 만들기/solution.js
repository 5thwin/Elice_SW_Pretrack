// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(a, b) {
  if (a >= b || a >= 15) {
    return '오류'; //예외처리
  }
  if (b > 15) {
    b = 15; //최대 폭 15 제한
  }
  let result = '';
  for (let i = a; i <= b; i++) {
    for (let star = 0; star < i; star++) {
      result += '*';
    }
    if (i !== b) {
      result += '\n';
    }
  }

  return result;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
