// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// const chunk = (array, size) => {
//   //create a new empty array to add the chunks to
//   let chunked = [];

//   for (let element of array) {
//     //get the last array in chunked
//     const last = chunked[chunked.length - 1];

//     //if the last array element does not exist (1st pass) or the subArray size is equal to the 
//     //chunk size passed in, add a new subArray with the element included
//     if (!last || last.length == size) {
//       chunked.push([element]);
//     } else {
//       //otherwise add the element to the last subArray
//       last.push(element);
//     }
//   }

//   return chunked;
// }

//alt solution

const chunk = (array, size) => {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
};

module.exports = chunk;
