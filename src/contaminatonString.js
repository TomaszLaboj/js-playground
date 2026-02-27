/**
 * Contamination #1 string
 * https://www.codewars.com/kata/596fba44963025c878000039
 * An AI has infected a text with a character!!
 *
 * This text is now fully mutated to this character.
 *
 * Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.
 *
 * If the text or the character are empty, return an empty string.
 * There will never be a case when both are empty as nothing is going on!!
 *
 * Note: The character is a string of length 1 or an empty string.
 *
 * Example
 * text before = "abc"
 * character   = "z"
 * text after  = "zzz"
 */

function contaminationString(text, character) {
  if (text === "" || character === "") {
    return "";
  }

  return text
    .split("")
    .map((char) => (char = character))
    .reduce((acc, char) => (acc = acc + char));
}

const repeatChar = (text, char) => {
  return char.repeat(text.length);
};
console.log(repeatChar("abc", "x"));
