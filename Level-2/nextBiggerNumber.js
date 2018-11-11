function solution(n) {
  var result = n + 1
  while (result) {
    if (n.toString(2).match(/1/g).length == result.toString(2).match(/1/g).length) break;
    else result++
  }
  return result
}

solution(78) // 83
solution(15) // 23