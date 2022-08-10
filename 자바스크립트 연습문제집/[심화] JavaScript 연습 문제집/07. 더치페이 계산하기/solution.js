// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  let answer = {
    A: 0,
    B: 0,
    C: 0
  };
  function add(person, cost){
      if (person == 'K') {
        answer.A += cost / 3;
        answer.B += cost / 3;
        answer.C += cost / 3;
      } else {
        answer[person] += cost;
      }
  }
  const menu = {
    떡볶이: 5000,
    김밥: 2000,
    튀김세트: 3000,
    순대: 4000,
    라면: 6000,
    콜라: 1000,
    사이다: 1000,
  };
  for (let i = 0; i < input.length; i++) {
    add(input[i][0], menu[input[i][1]] * input[i][2]);
  }

  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
