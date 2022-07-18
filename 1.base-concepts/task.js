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
  const percentN = Number(percent);
  const contributionN = Number(contribution);
  const amountN = Number(amount);

  if (Number.isNaN(percentN) || percentN < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (Number.isNaN(contributionN) || contributionN < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (Number.isNaN(amountN) || amountN < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let S = amount - contribution;
  let P = percentN * 0.01 / 12;

  let startDate = new Date();
  let startYear = startDate.getFullYear();
  let endYear = date.getFullYear();
  let diffYear = endYear - startYear;

  let n = diffYear * 12 - startDate.getMonth() + date.getMonth();
  if (startDate.getDate() > date.getDate()) {
    n = n - 1;
  }

  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));

  totalAmount = Number((n * monthlyPayment).toFixed(2));
  console.log(totalAmount);

  return totalAmount;
}
