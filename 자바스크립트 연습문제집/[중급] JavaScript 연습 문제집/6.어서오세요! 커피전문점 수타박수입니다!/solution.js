// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  const americano = 4100;
  const cafe_latte = 4600;
  const caramel_macchiato = 5100;
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == '아메리카노') {
      answer += americano;
    } else if (input[i] == '카페라떼') {
      answer += cafe_latte;
    } else if (input[i] == '카라멜마끼아또') {
      answer += caramel_macchiato;
    }
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
