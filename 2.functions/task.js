
function min(arr) {
  let min = arr[0];
  for (a of arr) if (min > a) {min = a};
  return min;
}

function max(arr) {
  let max = arr[0];
  for (a of arr) if (max < a) {max = a}
  return max;
}

// Задание 1
function getArrayParams(arr) {
  let sum = 0;
  for (a of arr) sum += a;
  let avg = sum / arr.length;
  return { min: min(arr), max: max(arr), avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (a of arr) sum += a;
  return sum;
}

function makeWork(arrOfArr, func) {
  return max(arrOfArr.map(func));
}

// Задание 3
function worker2(arr) {
  return max(arr) - min(arr);
}
