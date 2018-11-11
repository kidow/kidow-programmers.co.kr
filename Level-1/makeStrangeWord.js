function solution(s) {
  var temp = s.split(" ")
  var result = []
  for (let i = 0; i < temp.length; i++) {
    var tempArr = []
    for (let j = 0; j < temp[i].length; j++) {
      if (j % 2 === 0) tempArr.push(temp[i][j].toUpperCase())
      else tempArr.push(temp[i][j].toLowerCase())
    }
    result.push(tempArr.join(""))
  }
  return result.join(" ")
}

solution("try hello world") // "TrY HeLlO WoRlD"