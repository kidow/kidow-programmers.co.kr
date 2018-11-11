function solution(s, n) {
  // String.fromCharCode(65) ==> 'A'
  // 'A'.charCodeAt(0) ==> 65
  // 65 ~ 90 : A ~ Z
  // 97 ~ 122 : a ~ z
  var temp = s.split("")
  for (let i = 0; i < temp.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      if (s.charCodeAt(i) + n > 90) {
        temp[i] = String.fromCharCode(s.charCodeAt(i) + n - 26)
      } else {
        temp[i] = String.fromCharCode(s.charCodeAt(i) + n)
      }
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      if (s.charCodeAt(i) + n > 122) {
        temp[i] = String.fromCharCode(s.charCodeAt(i) + n - 26)
      } else {
        temp[i] = String.fromCharCode(s.charCodeAt(i) + n)
      }
    }
  }
  return temp.join("")
}

solution("AB", 1) // "BC"
solution("z", 1) // "a"
solution("a B z", 4) // "e F d"