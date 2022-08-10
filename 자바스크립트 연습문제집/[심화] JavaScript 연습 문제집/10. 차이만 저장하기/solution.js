// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(numbers) {
  let charArray = numbers.split(',');
  let numArray = [];
  let transArray = []; //변형된 배열
  let oneCounter1 = 0; //기존 배열에서 1이 등장하는 갯수
  let oneCounter2 = 0; //표현을 바꾼 배열에서 1의 등장 갯수

  for (let i = 0; i < charArray.length; i++) {
    numArray.push(parseInt(charArray[i]));
    if (numArray[i] == 1) {
      oneCounter1++;
    }
  }
  transArray.push(numArray[0]);
  if (transArray[0] == 1) {
    oneCounter2++;
  }
  for (let j = 1; j < numArray.length; j++) {
    transArray.push(numArray[j] - numArray[j - 1]);
    if (transArray[j] == 1) {
      oneCounter2++;
    }
  }
  if (oneCounter1 > oneCounter2) {
    return numArray;
  } else if (oneCounter2 > oneCounter1) {
    return transArray;
  }
  return 0;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
