function solution(n) {
  var result = 0;
  for (var i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      result += i
    }
  }
  return result;
}

solution(12) // 28
solution(5) // 6