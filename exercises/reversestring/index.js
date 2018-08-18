// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverse = (str) => {
//   return str.split('').reverse().join('');
// };

//alternative solution - using a loop
// const reverse = (str) => {
//   let reversed = '';
//   for(let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// };

//alternative solution - using reduce()
const reverse = (str) => {
  return str.split('').reduce((reversed, char) => reversed = char + reversed, '');
};


module.exports = reverse;
