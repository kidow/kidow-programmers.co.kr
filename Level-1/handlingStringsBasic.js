function solution(s) {
  return [4, 6].includes(s.length) && /^[0-9]+$/.test(s)
}

solution('a234') // false
solution('1234') // true