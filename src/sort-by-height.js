const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */


//  arr = [-1, 150, 190, 170, -1, -1, 160, 180]
//  sortByHeight(arr)
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');

  const newSortArray = arr.filter(elem => elem !== -1).sort((a,b) => b-a);
  console.log(newSortArray)

  arr.forEach((element, index) => {
    if (arr[index] !== -1) {
      arr[index] = newSortArray.pop()
      console.log('arr=',arr)
    }
  });

 return arr;
}

module.exports = {
  sortByHeight
};
