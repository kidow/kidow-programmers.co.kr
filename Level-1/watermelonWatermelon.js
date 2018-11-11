function solution(n) {
  var arr = Array.from({ length: n }, (v, k) => k = '수')
  arr.map((x, i) => {
    if (i % 2) arr[i] = '박'
  })
  return arr.join('')
}

solution(3) // '수박수'
solution(4) // '수박수박'