// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  var ans = '';
  // 출력할 결과를 문자열로 return 하세요.
  let floor = 0;
  while (floor < input && floor < 5) {
    for (let i = 0; i < floor + 1; i++) {
      ans += '*';
    }
    floor++;
    if (floor !== input) {
      ans += '\n';
    }
  }
  while (floor < input) {
    for (let i = 0; i < 5; i++) {
      ans += '*';
    }
    floor++;
    if (floor !== input) {
      ans += '\n';
    }
  }
  return ans;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
