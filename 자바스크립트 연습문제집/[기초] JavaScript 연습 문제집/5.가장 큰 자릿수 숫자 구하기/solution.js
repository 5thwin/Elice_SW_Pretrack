// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(number) {
  var ten = 10;
  while (ten <= number) {
    ten *= 10;
  }
  ten /= 10;
  return Math.floor(number / ten);
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
