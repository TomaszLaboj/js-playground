/**
 * There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

 */

const correctPolishLetters = (text) => {
  const polishLetters = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
  const diacritics = ["a", "c", "e", "l", "n", "o", "s", "z", "z"];
  return text
    .split("")
    .map((letter) => {
      if (polishLetters.includes(letter.toLowerCase())) {
        return diacritics[
          polishLetters.findIndex((element) => letter === element)
        ];
      } else {
        return (newString = newString + letter);
      }
    })
    .join("");
};

const correctPolishLetters2 = (text) => {
  const map = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
};
console.log(correctPolishLetters("ąąćć"));
