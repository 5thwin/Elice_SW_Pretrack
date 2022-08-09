// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  const num_tuple = ['2', '3', '5', '6', '7', '8', '9'];
  let result = [];
  function isMenber(x, tuple) {
    for (let i = 0; i < tuple.length; i++) {
      if (x == tuple[i]) {
        return true;
      }
    }
    return false;
  }
  let count = 0;
  for (let i = 0; i < input.length && count < 5; i++) {
    if (isMenber(input[i], num_tuple)) {
      result.push(input[i]);
      count++;
    }
  }
  return result;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
