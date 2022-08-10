// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(a, b) {
  let line1 = a.split(',');
  let line2 = b.split(',');
  let center1 = parseInt(line1[0]);
  let length1 = parseInt(line1[1]);
  let s1 = center1 - length1 / 2;
  let d1 = center1 + length1 / 2;
  let center2 = parseInt(line2[0]);
  let length2 = parseInt(line2[1]);
  let s2 = center2 - length2 / 2;
  let d2 = center2 + length2 / 2;
  console.log(line1, line2, s1, d1, s2, d2);
  //case1 일부 겹치는 경우
  if (s1 <= s2 && s2 <= d1 && d1 <= d2) {
    return d1 - s2;
  }
  if (s2 <= s1 && s1 <= d2 && d2 <= d1) {
    return d2 - s1;
  }
  // case2 어느 한쪽이 완전히 포개지는 경우
  if (s1 <= s2 && d2 <= d1) {
    return length2;
  }
  if (s2 <= s1 && d1 <= d2) {
    return length1;
  }
  return 0;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
