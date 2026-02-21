const value = '120-130'
console.log(value.split('-').map(Number)) // output: [120, 130] - array of numbers
const [start, end] = value.split('-').map(Number);
const arrayFrom = Array.from({ length: end - start + 1 }, (_, i) => start + i);
console.log(arrayFrom);
