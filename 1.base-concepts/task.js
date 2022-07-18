'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    const dsq = Math.sqrt(d);
    const x1 = (-b + dsq) / (2 * a);
    const x2 = (-b - dsq) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
