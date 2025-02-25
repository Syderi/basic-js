const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// let matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]

function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  const result = [];
  for (let l = 0; l < matrix.length; l++) {
    result[l] = matrix[l].slice(0)
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = 10
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (result[i - 1] && result[i - 1][j - 1]) { result[i - 1][j - 1] = 1 + +result[i - 1][j - 1]; }
        if (result[i - 1] && result[i - 1][j])     { result[i - 1][j]     = 1 + +result[i - 1][j]; }
        if (result[i - 1] && result[i - 1][j + 1]) { result[i - 1][j + 1] = 1 + +result[i - 1][j + 1]; }
        if (result[i] && result[i][j - 1])         { result[i][j - 1]     = 1 + +result[i][j - 1]; }
        if (result[i] && result[i][j + 1])         { result[i][j + 1]     = 1 + +result[i][j + 1]  ; }
        if (result[i + 1] && result[i + 1][j - 1]) { result[i + 1][j - 1] = 1 + +result[i + 1][j - 1]; }
        if (result[i + 1] && result[i + 1][j])     { result[i + 1][j]     = 1 + +result[i + 1][j] ; }
        if (result[i + 1] && result[i + 1][j + 1]) { result[i + 1][j + 1] = 1 + +result[i + 1][j + 1]; }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] -= 10
    }
  }



  // console.log('fin=', result)
  return result;
}

// minesweeper(matrix)


module.exports = {
  minesweeper
};
