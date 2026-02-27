/**
 * Move 10
 * https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript
 * 
 * Move every letter in the provided string forward 10 letters through the alphabet.
    If it goes past 'z', start again at 'a'.
    Input will be a string with length > 0.
 */

function move10(text) {
  let newString = "";
  for (let i = 0; i < text.length; i++) {
    let newCharCode =
      text.charCodeAt(i) + 10 > 122
        ? text.charCodeAt(i) - 16
        : text.charCodeAt(i) + 10;
    newString = newString + String.fromCharCode(newCharCode);
  }
  return newString;
}

console.log(move10("qqqqqq"));

function showChars() {
  for (let i = 65; i < 125; i++) {
    console.log(i + "=", String.fromCharCode(i));
  }
}
showChars();
