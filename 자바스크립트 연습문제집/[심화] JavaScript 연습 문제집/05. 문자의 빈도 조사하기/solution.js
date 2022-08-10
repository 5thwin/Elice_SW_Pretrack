// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(str) {
  let lowStr = str.toLowerCase(); //소문자 변환
  let alpha_cnt = {}; //객체 생성
  for (let i = 0; i < lowStr.length; i++) {
    if (lowStr[i] === ' ') {
      //공백 문자는 무시
      continue;
    }
    if (alpha_cnt.hasOwnProperty(lowStr[i])) {
      //객체에 해당 소문자에 해당하는 프로퍼티가 존재하면
      alpha_cnt[lowStr[i]]++; //해당 값을 1 추가
    } else {
      alpha_cnt[lowStr[i]] = 1; //프로퍼티가 존재하지 않으면 새로운 프로퍼티 생성하여 1 할당
    }
  }
  console.log(alpha_cnt);
  return alpha_cnt;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
