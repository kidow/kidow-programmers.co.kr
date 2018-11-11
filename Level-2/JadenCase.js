function solution(s) {
  let temp = s.split(" ")
  let result = []
  for (let i = 0; i < temp.length; i++) {
    var tempArr = []
    for (let j = 0; j < temp[i].length; j++) {
      if (!j) tempArr.push(temp[i][j].toUpperCase())
      else tempArr.push(temp[i][j].toLowerCase())
    }
    result.push(tempArr.join(""))
  }
  return result.join(" ")
}

solution("3people unFollowed me") // "3people UnFollowed Me"
solution("for the last week") // "For The Last Week"