export function randomMathExamples() {
  const arr = [];
  const operators = "+-*/";
  for (let i = 0; i < 10; i++) {
    let first = Math.floor(Math.random() * (100 - 1)) + 1;
    let second = Math.floor(Math.random() * (100 - 1)) + 1;
    let operator = operators.charAt(Math.floor(Math.random() * 4));
    arr.push({
      id: i,
      math: `${first} ${operator} ${second}`,
    });
  }
  return arr;
}
