// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(a, b) {
  let map = a.split(' ');
  console.log(map);
  let left = 0; //시작점으로부터 왼쪽으로 이동했을때 얻을 수 있는 당근
  let right = 0; //오른쪽 이동했을 때 얻는 당근
  for (let i = 0; i < b; i++) {
    if (map[i] == 'O') {
      left++;
    }
  }
  for (let i = b - 1; i < map.length; i++) {
    if (map[i] == 'O') {
      right++;
    }
  }
  if (left == right) {
    return '동일';
  }
  if (left > right) {
    return '왼쪽';
  }
  return '오른쪽';
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
