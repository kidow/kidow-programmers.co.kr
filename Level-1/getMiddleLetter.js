function solution(s) {
  var temp = s.split("");
  return (s.length % 2) ? temp[(temp.length - 1) / 2] : temp[temp.length / 2 - 1] + temp[Math.floor(temp.length / 2)]
}

solution('abcde') // 'c'
solution('qwer') // 'we'