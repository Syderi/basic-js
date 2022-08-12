const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const array = [];
  const strArray = str.split('');
  let step = strArray.length;
  let i = 1;
  for (let index = 0; index < step; index++) {
    if (array.length === 0) {
      array.push(strArray.pop());
     } else {
          if (strArray[strArray.length-1] !== array[array.length-1].slice(-1)) {
            i = 1;
            array.push(strArray.pop());
          } else {
            i = i + 1;
            array[array.length-1] = `${i}${strArray.pop()}`;
           }
      } 
  }
return array.reverse().join('');
}

module.exports = {
  encodeLine
};
