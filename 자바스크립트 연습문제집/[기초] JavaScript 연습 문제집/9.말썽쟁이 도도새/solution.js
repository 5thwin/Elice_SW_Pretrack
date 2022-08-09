// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  var answer;
  for (answer = 0; answer < input.length; answer++) {
      if (input[answer] == '웩')
      {
          break;
      }
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
