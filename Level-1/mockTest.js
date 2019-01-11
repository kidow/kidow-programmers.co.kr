function solution(answers) {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  const arr1 = Array.from({ length: answers.length }, (v, i) => {
    if (i % 5 === 0) return (v = 1);
    if (i % 5 === 1) return (v = 2);
    if (i % 5 === 2) return (v = 3);
    if (i % 5 === 3) return (v = 4);
    if (i % 5 === 4) return (v = 5);
  });
  const arr2 = Array.from({ length: answers.length }, (v, i) => {
    if (i % 2 === 0) return (v = 2);
    if (i % 8 === 1) return (v = 1);
    if (i % 8 === 3) return (v = 3);
    if (i % 8 === 5) return (v = 4);
    if (i % 8 === 7) return (v = 5);
  });
  const arr3 = Array.from({ length: answers.length }, (v, i) => {
    if (i % 10 === 0 || i % 10 === 1) return (v = 3);
    if (i % 10 === 2 || i % 10 === 3) return (v = 1);
    if (i % 10 === 4 || i % 10 === 5) return (v = 2);
    if (i % 10 === 6 || i % 10 === 7) return (v = 4);
    if (i % 10 === 8 || i % 10 === 9) return (v = 5);
  });

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === arr1[i]) count1++;
    if (answers[i] === arr2[i]) count2++;
    if (answers[i] === arr3[i]) count3++;
  }

  let result = [];
  let max = Math.max(count1, count2, count3);

  if (count1 === max) result.push(1);
  if (count2 === max) result.push(2);
  if (count3 === max) result.push(3);

  return result.sort();
}

solution([1, 2, 3, 4, 5]); // [1]
solution([1, 3, 2, 4, 2]); // [1, 2, 3]
