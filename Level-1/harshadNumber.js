function solution(x) {
  var temp = (x).toString(10).split("").map(Number).reduce((a, b) => a + b);
  return x / temp == Math.floor(x / temp)
}

solution(10) // true
solution(12) // true
solution(11) // false
solution(13) // false