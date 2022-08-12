const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

// let n = 'not a MAC-48 address'
// isMAC48Address(n)

function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // console.log(n)
  // console.log(n.split('-'))
  // console.log(n.split('-').every(item => item.length === 2 && /[A-Fa-f0-9]{2}/.test(item)))
  return n.split('-').every(item => item.length === 2 && /[A-Fa-f0-9]{2}/.test(item))

}
module.exports = {
  isMAC48Address
};
