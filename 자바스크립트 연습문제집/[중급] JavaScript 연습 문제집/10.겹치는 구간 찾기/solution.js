// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  let arr = input.split('\n');
  let a = parseInt(arr[0]);
  let b = parseInt(arr[1]);
  let c = parseInt(arr[2]);
  let d = parseInt(arr[3]);
  //case1 일부가 겹치는 경우
  if (a <= c && c <= b && b <= d) {
    return [c, b];
  }
  if (c <= a && a <= d && d <= b) {
    return [a, d];
  }
  //case2 한쪽이 다른 한쪽에 완전히 포개어지는 경우
  if (a <= c && d <= b) {
    return [c, d];
  }
  if (c <= a && b <= d) {
    return [a, b];
  }
  //case3 겹치지 않는 경우
  return 'X';
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
