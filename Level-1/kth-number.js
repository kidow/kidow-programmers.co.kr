function solution (array, commands) {
  let result = []
  commands.forEach(x => {
    let temp = array.slice(x[0] - 1, x[1]).sort((a, b) => a - b)
    result.push(temp[x[2] - 1])
  })
  return result
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) // [5, 6, 3]