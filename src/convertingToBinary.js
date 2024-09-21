function convertoToBinary(number) {
  const digits = [];
  let quotient = number;
  while (quotient > 0) {
    digits.push(quotient % 2);
    quotient = Math.floor(quotient / 2);
  }
  return digits;
}

function convertToBinary2(number) {
  return number.toString(2);
}
function processUserInput(input) {
  if (input.toLowerCase() === "x") {
    return;
  } else if (!Number.isInteger(parseInt(input))) {
    console.log("Enter digits only");
    return;
  }
  console.log(convertoToBinary(parseInt(input)));
  return;
}
function askUserForDecimalInput() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter decimal number to convert to binary. Type x to exit.",
    (input) => {
      processUserInput(input);
      readline.close();
    }
  );
}

// askUserForDecimalInput();
console.log(convertToBinary2(42));
