const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log("factorial", factorial(10));

const fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
console.log("fibonacci", fibonacci(5));
