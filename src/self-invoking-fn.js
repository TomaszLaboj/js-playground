// self invoking function
// IIFE were used before ES6 to scoped
(function showText() {
  console.log("some text");
})();

// ! is not need for IIFE (Immedietaly Invoked Function Expression) but it was used in the early days of js , ! is logical NOT so it negates the return value
!(function returnFalse() {
  return false;
})();
