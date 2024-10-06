const shorterArray = [1, 1, 0, 1];
const longerArray = [1, 0, 1, 0, 0, 0, 1];

const difference = longerArray.length - shorterArray.length;
const newArray = new Array(longerArray.length);

for (let i = 0; i < difference; i++) {
  newArray[i] = 0;
}

for (let i = 0; i < longerArray.length - difference; i++) {
  newArray[i + difference] = shorterArray[i];
}

console.log(newArray);
