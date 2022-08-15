const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if(!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  
  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const seasonsObject = {
		spring: [2, 3, 4],
		summer: [5, 6, 7],
		autumn: [8, 9, 10],
		winter: [0, 1, 11],
	}

	const monthOfData = date.getMonth()

	for (const [season, monthOfseasons] of Object.entries(seasonsObject))
		if (monthOfseasons.includes(monthOfData)) return season
}



module.exports = {
  getSeason
};
