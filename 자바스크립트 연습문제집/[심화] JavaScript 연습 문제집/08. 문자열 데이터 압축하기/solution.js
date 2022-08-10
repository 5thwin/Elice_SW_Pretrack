// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(str) {
  let answer = '';
  function addChar(char, count) {
    //압축된 문자열 추가 함수
    answer += char;
    if (count == 2) {
      answer += char;
    } else if (count > 2) {
      answer += count;
    }
  }
  let pos = 0;
  while (pos < str.length) {
    let stdChar = str[pos];
    let count = 0; //중복된 문자 개수

    while (stdChar == str[pos + count]) {
      count++;
      if (pos + count == str.length) {
        //문자열 범위 밖으로 접근하지 않도록 제한
        break;
      }
    }
    addChar(stdChar, count);
    console.log(answer);
    pos += count;
    count = 0;
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
