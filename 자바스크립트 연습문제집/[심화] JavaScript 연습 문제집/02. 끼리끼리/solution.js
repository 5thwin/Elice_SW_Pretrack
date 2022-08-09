// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {

  let red_pocket = [];
  let blue_pocket = [];
  let card = input.split(' ');
  for (let i = 0; i < card.length; i++) {
    let num = parseInt(card[i]);
    if (num < 0) {
      blue_pocket.push(num);
    } else {
      red_pocket.push(num);
    }
  }
  return [red_pocket, blue_pocket];
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
