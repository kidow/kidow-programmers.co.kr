function solution(participant, completion) {
  let part = participant.sort()
  let comp = completion.sort()

  for (let i in part) {
    if (part[i] !== comp[i]) return part[i]
  }
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']) // 'leo'
solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']) // 'vinko'
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']) // 'mislav'