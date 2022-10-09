const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

//  let aa = ['Matt', 'Ann', 'Dmitry', 'Max'];

// let aa = [
//   '   William Alston ',
//   ' Paul Benacerraf',
//   '  Ross Cameron',
//   '       Gilles Deleuze',
//   '  Arda Denkel ',
//   '  Michael Devitt',
//   '  Kit Fine',
//   ' Nelson Goodman',
//   'David Kolb',
//   '   Saul Kripke',
//   '  Trenton Merricks',
//   '  Jay Rosenberg',
// ]
// let aa = [
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]
// , 'ADGJKMNPRSTW');  'BDETV'


//  createDreamTeam(aa)

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = '';
  let newArray = members.filter(item => typeof item === 'string').map((tech) => tech.replaceAll(" ", "").toUpperCase()).sort();
  // console.log('newArray',newArray);
  newArray.forEach(element => {
    result = result + element.slice(0,1);

    // console.log('result',result);
  });
 return result;
}

module.exports = {
  createDreamTeam
};
