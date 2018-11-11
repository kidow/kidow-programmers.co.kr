function solution(arr) {
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer) / arr.length;
}

solution([1, 2, 3, 4]) // 2.5
solution([5, 5]) // 5