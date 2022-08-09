// 암호의 알파벳을 키로, 대응하는 원문의 알파벳을 값으로 저장한 딕셔너리입니다.
const signal1 = {
  a: 'n',
  b: 'd',
  c: 'a',
  d: 'b',
  e: 'e',
  f: 'l',
  g: 'j',
  h: 'o',
  i: 'z',
  j: 'u',
  k: 'y',
  l: 'v',
  m: 'w',
  n: 'q',
  o: 'x',
  p: 'r',
  q: 'p',
  r: 'f',
  s: 'g',
  t: 't',
  u: 'm',
  v: 'h',
  w: 'i',
  x: 'c',
  y: 'k',
  z: 's',
};

const signal2 = {
  a: 'z',
  b: 'y',
  c: 'x',
  d: 'w',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'r',
  j: 'q',
  k: 'p',
  l: 'o',
  m: 'n',
  n: 'm',
  o: 'l',
  p: 'k',
  q: 'j',
  r: 'i',
  s: 'h',
  t: 'g',
  u: 'f',
  v: 'e',
  w: 'd',
  x: 'c',
  y: 'b',
  z: 'a',
};

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(code) {
  let code_arr = code.split(' ');
  let code_num = code_arr[0];
  let code_alpha = code_arr[1];

  let answer = '';
  for (let i = 0; i < code_num.length; i++) {
    if (code_num[i] == '0') {
      answer += signal1[code_alpha[i]];
    } else {
      answer += signal2[code_alpha[i]];
    }
  }
  return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
