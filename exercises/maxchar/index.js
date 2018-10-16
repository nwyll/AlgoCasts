// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const charMap = {};
  let max = 0,
      maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  //iterate thru charMap to find max value
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

module.exports = maxChar;
