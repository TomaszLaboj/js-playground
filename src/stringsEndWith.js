function isStringEndWith(string, ending) {
  if (string.slice(string.length - ending.length) === ending) {
    return true;
  }
  return false;
}
console.log(isStringEndWith("tomasz", "asz"));
console.log(isStringEndWith("tomatoe", "toe"));
console.log(isStringEndWith("tomatoe", "abc"));
console.log(isStringEndWith("tomatoe", ""));
console.log(isStringEndWith("", "sd"));
