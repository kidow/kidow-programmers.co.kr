function solution(arr, divisor) {
  var temp = arr.map(x => x % divisor == 0 && x)
    .filter(x => x !== false)
  if (temp.every(x => x == false)) return [-1]; else return temp.sort((a, b) => a - b)
}

solution([5, 9, 7, 10], 5) // [5, 10]
solution([2, 36, 1, 3], 1) // [1, 2, 3, 36]
solution([3, 2, 6], 10) // -1