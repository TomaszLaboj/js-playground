/**
 * Simple String Characters
 * https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/javascript
 * In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.
 * The order is: uppercase letters, lowercase letters, numbers and special characters.
 * "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
 */

const countingStringCharacters = (string) => {
  const counts = {
    upperCase: 0,
    lowerCase: 0,
    numbers: 0,
    specialChars: 0,
  };

  for (const char of string) {
    if (char.match(/[A-Z]/g)) {
      counts.upperCase++;
    } else if (char.match(/[a-z]/g)) {
      counts.lowerCase++;
    } else if (char.match(/[0-9]/g)) {
      counts.numbers++;
    } else if (
      char.match(
        /[\¬\!\"\£\$\%\^\&\*\(\)\_\+\`\-\=\{\}\:\@\~\<\>\?\[\]\;\'\#\,\.\/\\\|]/g
      )
    ) {
      counts.specialChars++;
    }
  }

  return [
    counts.upperCase,
    counts.lowerCase,
    counts.numbers,
    counts.specialChars,
  ];
};

const countingStringChars = (string) => {
  // implement shorter solution with String.match(regexp) returning an array and then length of the array
};

console.log(countingStringCharacters("*'&ABCDabcde12345"));
