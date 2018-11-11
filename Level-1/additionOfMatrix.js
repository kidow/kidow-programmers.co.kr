function solution(arr1, arr2) {
  var result = [];
  var temp = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j])
    }
    result.push(temp)
    temp = [];
  }
  return result;
}

solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]) // [[4,6],[7,9]]
solution([[1], [2]], [[3], [4]]) // [[4],[6]]