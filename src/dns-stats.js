const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
//  let domains = [
//    'code.yandex.ru',
//    'music.yandex.ru',
//    'yandex.ru'
//   ];

function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');

  let result = {};
// console.log('10', domains);
domains.forEach(element => {
  const domainsToArray = element.split('.');
  // console.log('20 ====================', domainsToArray)
  domainsToArray.forEach((e, i) => {
    const stringKey = '.' + domainsToArray.slice(i).reverse().join('.')
    // console.log('30 ++++++++++++++++++++++', stringKey)
    
    result[stringKey] = result.hasOwnProperty(stringKey) ? result[stringKey] + 1 : 1;
    // console.log('40', result[stringKey])

    
  });
  
});
// console.log('100 result =', result)

  return result;

}
// getDNSStats(domains)

module.exports = {
  getDNSStats
};
