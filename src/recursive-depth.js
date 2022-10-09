const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */



class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)){return false}
    // console.log(this)
    return (arr.reduce((sum, el) => Math.max(sum, this.calculateDepth(el)), 0)) + 1;
  }
}

// let a = new DepthCalculator
// console.log(a.calculateDepth([[[[[[[[[[[[[[[[[[[],25]]]]]]]],25]]]]]]]]]]))

module.exports = {
  DepthCalculator
};
