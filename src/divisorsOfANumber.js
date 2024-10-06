/**
 * Count the divisors of a number
 *
 * https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
 *
 * Count the number of divisors of a positive integer n.
 *
 * Random tests go up to n = 500000, but fixed tests go higher.
 *
 *  Examples (input --> output)
 *  4 --> 3 // we have 3 divisors - 1, 2 and 4
 *  5 --> 2 // we have 2 divisors - 1 and 5
 *  12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
 *  30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
 *
 *  Note you should only return a number, the count of divisors.
 *  The numbers between parentheses are shown only for you to see which numbers are counted in each case.
 */

const getDivisorsCount = (number) => {
  const divisors = [number];
  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      divisors.push(i);
    }
  }
  return divisors.length;
};

const getDivisorCount2 = (number) => {
  const divisors = [1, number];
  let divisor = number;
  const listOfDivisors = [
    2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 29,
  ];
  for (let d of listOfDivisors) {
    while (divisor % d == 0) {
      divisors.push(d, divisor / d);
      divisor /= d;
    }
    divisor = number;
  }

  return new Set(divisors).size;
};

const getDivisors3 = (number) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      if (number / i == i) {
        divisors.push(i);
      }
      divisors.push(i, number / i);
    }
  }
  return new Set(divisors);
};
console.log(getDivisorsCount(51));
console.log(getDivisorCount2(50));
console.log(getDivisors3(1));
