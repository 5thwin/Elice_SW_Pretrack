// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(str) {
  var answer = '';
  if (str.length == 0) {
    answer = 'Same';
  }
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) === str.charAt(str.length - 1 - i)) {
      answer += 'Same';
    } else {
      answer += 'Different';
    }
    if (i + 1 < str.length / 2) {
      answer += '\n';
    }
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
