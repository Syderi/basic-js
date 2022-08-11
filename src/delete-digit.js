const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  // throw new NotImplementedError('Not implemented');
  let result = 0;
  let num_digits = [];
while (num) {
  num_digits.push(num % 10);
  num = Math.floor(num / 10);
}
for (let index_num = 0; index_num < num_digits.length; index_num++) {
  let n = 0;
  for (let i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
          n = n * 10 + num_digits[i];
      }
  }
  result = Math.max(n, result);
}
return result;
}

module.exports = {
  deleteDigit
};


// function deleteDigit(n) {
//   const str = String(n);
//   let variants = [];

//   for(let i = 0; i < str.length; i++) {
//     variants.push(Number(str.slice(0, i) + str.slice(i + 1)))
//   }

//   return Math.max(...variants);
// }


// function deleteDigit(n) {
//   n = n.toString();
//   let max = 0;
//   for (i=0;i<n.length;i++) {
//     tempN = [...n];
//     tempN.splice(i,1);
//     tempN = Number(tempN.join(""))
//     if (max<tempN) max = tempN;
//   }
//   return max;
// }