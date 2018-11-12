function solution(arr) {
  let temp = 1
  while (1) {
    if (arr.every(item => temp % item === 0)) return temp
    temp++
  }
}

solution([2, 6, 8, 14]) // 168
solution([1, 2, 3]) // 6