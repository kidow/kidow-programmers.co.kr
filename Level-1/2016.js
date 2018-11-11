function solution(a, b) {
  var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return week[new Date(2016, a - 1, b).getDay()];
}

solution(5, 24) // "TUE"