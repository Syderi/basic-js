const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(array) {

  let newSortArray = array.slice(0)
  .filter(elem => elem !== -1)
  .sort((a,b) => b-a);

  array.forEach((element, index) => {
    if (array[index] !== -1) {
      array[index] = newSortArray.pop()
    }
  });

 return array;
}

module.exports = {
  sortByHeight
};
