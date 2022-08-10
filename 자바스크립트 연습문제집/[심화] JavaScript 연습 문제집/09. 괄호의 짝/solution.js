// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(string) {
  function isOpenBracket(char) {
    //여는 괄호 판단 함수
    if (char == '(' || char == '{' || char == '[') {
      return true;
    }
    return false;
  }
  function isCloseBracket(char) {
    //닫는 괄호 판단 함수
    if (char == ')' || char == '}' || char == ']') {
      return true;
    }
    return false;
  }
  function isPair(open, close) {
    //여는 괄호와 닫는 괄호가 짝이 맞는지 확인하는 함수
    if (open == '(' && close == ')') {
      return true;
    } else if (open == '{' && close == '}') {
      return true;
    } else if (open == '[' && close == ']') {
      return true;
    }
    return false;
  }
  let stackBracket = []; //괄호 판단 스택
  for (let i = 0; i < string.length; i++) {
    if (isOpenBracket(string[i])) {
      //여는 괄호일때는 스택에 넣는다
      stackBracket.push(string[i]);
    } else if (isCloseBracket(string[i])) {
      if (stackBracket.length == 0) {
        //배열이 비어있는 경우
        return '비정상';
      }
      let open = stackBracket.pop();
      if (!isPair(open, string[i])) {
        //짝이 맞지 않는 경우
        return '비정상';
      }
    }
  }
  if (stackBracket.length !== 0) {
    //모든 문자열 탐색이 끝나고도 배열이 비어있지 않은 경우
    return '비정상';
  }
  return '정상';
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
