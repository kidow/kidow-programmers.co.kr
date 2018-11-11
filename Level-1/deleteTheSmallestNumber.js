function solution(arr) {
  if (arr.length > 1) {
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  } else return [-1];

  return arr
}

solution([4, 3, 2, 1]) // [4,3,2]
solution([10]) // [-1]