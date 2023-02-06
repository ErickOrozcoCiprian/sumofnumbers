// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('underscore');

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
function sumRecursion(list) {
  const copyList = list.slice();
  if (copyList.length === 0) {
    return 0;
  }
  // eslint-disable-next-line no-param-reassign
  const removed = copyList.shift();
  return removed + sumRecursion(copyList);
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const list = [1, 2, 3, 4, 5];
const sum1 = sumFor(list);
const sum2 = sumWhile(list);
const sum3 = sumRecursion(list);
const sum4 = sumTheSimpleWay(list);

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
