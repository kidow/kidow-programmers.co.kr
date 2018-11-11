function solution(x, n) {
  return Array.from({ length: n }, (v, k) => (k + 1) * x)
}

solution(2, 5) // [2,4,6,8,10]
solution(4, 3) // [4,8,12]
solution(-4, 2) // [-4, -8]