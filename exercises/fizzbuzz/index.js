// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//most basic way, keep it simple
//commment thought process as you are going through implementation
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    //check is value is divisible by  3 & 5
    if ((i % 5 === 0) && (i % 3 === 0)) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      //check if value is divisible by 5
      console.log('buzz');
    } else if (i % 3 === 0) {
      //check if value is divisible by 3
      console.log('fizz');
    } else {
      //otherwise simply print the value
      console.log(i);
    }
  }
};

module.exports = fizzBuzz;
