// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(angle) {
  //angle 변수에 어떤 값이 들어오는지 확인해보세요!
  console.log(angle);
  var arr = angle.split(' ');
  var answer = 180 - parseInt(arr[0]) - parseInt(arr[1]);
  if (answer < 0) answer = 0;
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
