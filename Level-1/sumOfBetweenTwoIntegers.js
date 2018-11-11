function solution(a, b) {
  if (a == b) return a;
  var result = 0;
  if (a > b) {
    for (b; b < a + 1; b++) {
      result += b;
    }
    return result;
  }
  if (b > a) {
    for (a; a < b + 1; a++) {
      result += a;
    }
    return result;
  }
}

solution(3, 5) // 12
solution(3, 3) // 3
solution(5, 3) // 12