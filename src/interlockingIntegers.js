function isIntInterlocking(number1, number2) {
  const number1toBinarySplit = number1.toString(2).split("");
  const number2toBinarySplit = number2.toString(2).split("");

  const compareArrays = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === "1" && array2[i] === "1") return false;
    }
    return true;
  };

  if (number1toBinarySplit.length === number2toBinarySplit.length) {
    return compareArrays(number1toBinarySplit, number2toBinarySplit);
  }

  const difference = Math.abs(
    number1toBinarySplit.length - number2toBinarySplit.length
  );
  const longerArray =
    number1toBinarySplit.length < number2toBinarySplit.length
      ? number2toBinarySplit
      : number1toBinarySplit;
  const shorterArray =
    number1toBinarySplit.length > number2toBinarySplit.length
      ? number2toBinarySplit
      : number1toBinarySplit;
  for (let i = 0; i < difference; i++) {
    shorterArray.unshift("0");
  }
  return compareArrays(longerArray, shorterArray);
}
console.log(isIntInterlocking(1, 2));
