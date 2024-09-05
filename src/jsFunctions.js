// self invoking function expression IIFE (Immedietaly Invoked Function Expression)
// it's only necessary to wrap the function in parentheses to be selvinvoked and add () at the end, the ! is not needed,
// ! was used long time ago in rearly js version to turn function declaration to function expression

!(function () {
  console.log("im invoked");
})();

!(() => {
  console.log("im invoked too");
})();

// IIFE can have a name
!(function selfExecuteLogging() {
  console.log("i have a name and I'm invoked");
})();

// but it's not possible to call function defined like that it will return a reference error:
// selExecuteLogging();

const person = {
  name: "John",
  age: "30",
  hobby: "sport",
};

// self invoking and destructuring
const person2 = (({ name, age, hobby }) => ({ name, age, hobby }))(person);
console.log(person2);
