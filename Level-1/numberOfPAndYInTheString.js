function solution(s) {
  if (s.length > 50) return null;
  var data = Array.from(s);
  if (data.some(x => typeof x == "number")) {
    return null;
  }
  var str = s.toLowerCase();
  if (str.includes('p') && str.includes('y')) {
    if ((str.match(/p/g) || []).length == (str.match(/y/g) || []).length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

solution('pPoooyY') // true
solution('Pyy') // false