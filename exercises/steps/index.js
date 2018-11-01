// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//iterative solution
function steps(n) {
  if (n <= 0 || typeof n != 'number') {
    console.log('Please enter a number of steps greater than 0.')
  }

  for(let i = 1; i <= n; i++) {
    const char = '#',
          space = ' ';
    console.log(char.repeat(i) + space.repeat(n - i));
  }
}

//recursive solution
// function steps(n, level = 1) {
//   if (n <= 0 || typeof n != 'number') {
//     console.log('Please enter a number of steps greater than 0.')
//   }

//   const char = '#',
//         space = ' ';

//   //establish base case
//   if (level > n) return;

//   //perform action
//   console.log(char.repeat(level) + space.repeat(n - level));

//   //call function again with new argument -> aproaching base case
//   steps(3, level + 1);
// }

module.exports = steps;
