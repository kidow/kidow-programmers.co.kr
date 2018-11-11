function solution(num) {
  var arr = [];
  while (num !== 1) {
    if (num % 2) {
      num = num * 3 + 1;
      arr.push(num)
    } else {
      num /= 2;
      arr.push(num);
    };
  }
  return arr.length > 500 ? -1 : arr.length
}

solution(6) // 8
solution(16) // 4
solution(626332) // -1