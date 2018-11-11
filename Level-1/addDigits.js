function solution(n) {
  return n.toString(10).split("").map(Number).reduce((a, b) => a + b);
}

solution(123) // 6
solution(987) // 24