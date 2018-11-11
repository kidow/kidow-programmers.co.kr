function solution(phone_number) {
  return phone_number.split("").fill("*", 0, -4).join("")
}

solution("01033334444") // "*******4444"
solution("027778888") // "*****8888"