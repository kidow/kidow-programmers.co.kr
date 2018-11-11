function solution(n, m) {
  var minCondition = true;
  var maxCondition = true;
  var min = Math.min(n, m);
  var max = Math.max(n, m);
  var result = [0, 1]
  while (minCondition) {
    if (n % min == 0 && m % min == 0) {
      result[0] = min;
      minCondition = false;
    } else min--;
  }
  while (maxCondition) {
    if (max % n == 0 && max % m == 0) {
      result[1] = max;
      maxCondition = false;
    } else max++;
  }
  return result;
}

solution(3, 12) // [3, 12]
solution(2, 5) // [1, 10]