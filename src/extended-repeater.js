const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// let str = 'STRING'
// let options = {
//    repeatTimes: 3,
//    separator: '**', 
//    addition: 'PLUS',
//    additionRepeatTimes: 3,
//    additionSeparator: '00' }


function repeater(str, options) {

  const repeatTimes = options.hasOwnProperty('repeatTimes') ? Number(options.repeatTimes) : 1;
  const separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? Number(options.additionRepeatTimes) : 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';

  let finalAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str+finalAddition).join(separator)

}



module.exports = {
  repeater
};
