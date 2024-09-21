// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reversed = (n) => {
  const sequence = [];
  for (let i = n; i > 0; i--) {
    sequence.push(i);
  }
  return sequence;
};

console.log(reversed(5));
// output => [5, 4, 3, 2, 1]

const reversed2 = (n) => {
  let i = n;
  const sequence = [];
  while (i > 0) {
    sequence.push(i);
    i--;
  }
  return sequence;
};

console.log(reversed2(5));
