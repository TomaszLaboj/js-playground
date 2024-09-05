const person = {
  name: "John",
  age: "30",
  hobby: "sport",
};

const person2 = (({ name, age, hobby }) => ({ name, age, hobby }))(person);
console.log(person2);
