// self invoking function expression IIFE

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
