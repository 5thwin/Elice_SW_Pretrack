// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(num) {
  var answer = num + ':';
  if (num % 2 == 0) {
    answer += '"짝수"';
  } else {
    answer += '"홀수"';
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
