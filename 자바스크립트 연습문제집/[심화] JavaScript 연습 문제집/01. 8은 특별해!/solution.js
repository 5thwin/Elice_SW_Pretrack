// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution() {
  function count_eight(num) {
    let count = 0;
    while (num >= 1) {
      if (num % 10 == 8) {
        count++;
      }
      num = Math.floor(num / 10);
    }
    return count;
  }
  let answer = 0;
  for (let num = 1; num <= 10000; num++) {
    answer += count_eight(num);
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
