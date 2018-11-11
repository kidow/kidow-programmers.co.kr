function solution(n) {
  var str = new String(n);
  return Array.from(str).sort().reverse().join('') * 1;
}

solution(118372) // 873211