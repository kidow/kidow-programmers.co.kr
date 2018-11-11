function solution(n) {
  var temp = Math.sqrt(n)
  return Math.floor(temp) === temp ? Math.pow(temp + 1, 2) : -1
}

solution(121) // 144
solution(3) // -1