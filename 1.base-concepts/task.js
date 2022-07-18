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

  let S = amountN - contributionN;
  let P = percentN * 0.01 / 12;

  const startDate = new Date();
  const startYear = startDate.getFullYear();
  const endYear = date.getFullYear();
  const diffYear = endYear - startYear;
 
  let n = diffYear * 12 - startDate.getMonth() + date.getMonth();
  if (startDate.getDate() > date.getDate()) {
    n = n - 1;
  }

  const monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
  const totalAmount = Number((n * monthlyPayment).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}
