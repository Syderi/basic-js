const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

//  doubleDiscarded: {
//   input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
//   output: [1, 2, 3, 4, 5]
// },
// doubleDoubled: {
//   input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
//   output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
// },
// discardDiscarded: {
//   input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
//   output: [1, 2, 3, 4, 5]
// },
// discardDoubled: {
//   input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
//   output: [1, 2, 3, 1337, 4, 5]
// }


// let arr = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
// transform(arr)


function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // let result = [];

  // if (!Array.isArray(arr)) {
  //   throw new Error('\'arr\' parameter must be an instance of the Array!')
  // }

  // for (let index = 0; index < arr.length; index++) {
  //   switch (arr[index]) {

  //     case '--discard-prev':
  //       if (result.length > 0 && arr[index - 2] !== '--discard-next') {
  //         result.pop();
  //       }
  //       break;

  //     case '--discard-next':
  //       index++;
  //       break;

  //     case '--double-next':
  //       if (arr[index + 1]) {
  //         result.push(arr[index + 1]);
  //       }
  //       break;

  //     case '--double-prev':
  //       if (result.length > 0 && arr[index - 2] !== '--discard-next') {
  //         result.push(arr[index - 1]);
  //       }
  //       break;

  //     default:
  //       result.push(arr[index]);
  //   }
  // }

  // return result;
}


// function transform(arr) {

//   if(!Array.isArray(arr)) {
//     throw new Error('\'arr\' parameter must be an instance of the Array!')
//   }

//   // arr.forEach((element) => { 
//   //   if (typeof element === 'object')  {
//   //     throw new Error('\'arr\' parameter must be an instance of the Array!')
//   //   }
//   // });
//   arr.forEach((element, index) => { 
//     if (element === '--discard-next' && index === arr.length-1)  arr.splice(index,1);
//   });
//   arr.forEach((element, index) => { 
//     if (element === '--double-next' && index === arr.length-1)  arr.splice(index,1);
//   });

//   arr.forEach((element, index) => { 
//     if (element === '--discard-prev' && index === 0)  arr.splice(0,1);
//   });
//   arr.forEach((element, index) => { 
//     if (element === '--double-prev' && index === 0)  arr.splice(0,1);
//   });

//   arr.forEach((element, index) => {
//     if (element === '--double-next') arr[index] = arr[index + 1];
//     if (element === '--double-prev') arr[index] = arr[index - 1];
//   });

//   arr.forEach((element, index) => {
//     if (element === '--discard-next' && (arr[index + 2] === '--discard-prev' || '--double-prev')) arr.splice(index,3);
//   });

//   arr.forEach((element, index) => {
//     if (element === '--discard-next') arr.splice(index,2);
//   });
//   arr.forEach((element, index) => {
//     if (element === '--discard-prev') arr.splice([index-1],2);
//   });

//   console.log(arr)

// return arr;
// }

module.exports = {
  transform
};
