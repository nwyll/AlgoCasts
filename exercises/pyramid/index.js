// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1) 1
//       '#'
//   pyramid(2) 1 3 
//       ' # '
//       '###'
//   pyramid(3) 1 3 5
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4) 1 3 5 7
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######' 

//   pyramid(5) 1 3 5 7 9
//   pyramid(6) 1 3 5 7 9 11
//2n-1

function pyramid(n) {
  //validation
  if (n <= 0 || typeof n != 'number') {
    console.log('Please enter a number of steps greater than 0.')
  }

  //total string length = 2n - 1
  //in a given row 
    //the number of chars (#) is 2i - 1, starting at i = 1
    //the number of spaces on each side is (total string length - number of chars) / 2

  const totalStringLength = 2*n - 1,
        char = '#',
        space = ' ';
  
  for(let i = 1; i <= n; i++) {
    const numChars = 2*i - 1;
          numSpaces = (totalStringLength - numChars) / 2;

    console.log(space.repeat(numSpaces) + char.repeat(numChars) + space.repeat(numSpaces));
  }  
}

module.exports = pyramid;
