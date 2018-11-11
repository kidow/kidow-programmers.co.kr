function solution(arr) {
  var result = arr.filter((element, index) => element !== arr[index + 1])

  return result;
}

solution([1, 1, 3, 3, 0, 1, 1]) // [1, 3, 0, 1]
solution([4, 4, 4, 3, 3]) // [4, 3]