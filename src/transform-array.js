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
//   input:,
//   output: [1, 2, 3, 4, 5]
// },
// discardDoubled: {
//   input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
//   output: [1, 2, 3, 1337, 4, 5]
// }


// let arr = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
// transform(arr)
// let arr =  [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
// transform(arr)

function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error('\'arr\' parameter must be an instance of the Array!')
 let result = [];


  arr.forEach((el,index,arr) => {
    if (arr[index - 1] === "--discard-next") {
      result.push([]);
      console.log('1=',result)
    } else
    
    if (el === "--discard-prev") {
      result.pop();
      console.log('2=',result)
    } else if (arr[index - 1] === "--double-next") {
      result.push(el, el);
      console.log('3=',result)
    } else if (el === "--double-prev") {
      result.push((result[result.length-1]) ? (result[result.length-1]) :[]);
      console.log('4=',result)
    } else
    
    if (el !== "--double-next" && el !== "--discard-next")
      result.push(el);
      console.log('5=',result)
  });


  // console.log('finish=',result)

  return result.flat(Infinity)
}

module.exports = {
  transform
};
