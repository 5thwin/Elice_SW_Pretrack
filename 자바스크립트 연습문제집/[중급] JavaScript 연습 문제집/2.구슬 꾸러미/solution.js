// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  // 출력할 결과를 return 하세요.
  console.log(input);
  let rest = input;
  let red = Math.floor(rest / 250);
  rest %= 250;
  let blue = Math.floor(rest / 40);
  rest %= 40;
  let white = Math.floor(rest / 10);
  rest %= 10;
  if (rest > 0) {
    return -1;
  }
  return red + blue + white;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
