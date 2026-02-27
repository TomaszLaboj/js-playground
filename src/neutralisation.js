function neutralise(s1, s2) {
  let newString = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[i]) {
      newString = newString + s1[i];
    } else {
      newString = newString + "0";
    }
  }
  return newString;
}

console.log(neutralise("-+-", "+-+"));
