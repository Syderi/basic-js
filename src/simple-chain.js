const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    },

  addLink(value) {
    value = value + '';
    this.chain.push(`( ${value} )`);
    return this
    
  },
  removeLink(position) {
    if (position < 1 ||	!Number.isInteger(position) || position > this.getLength() ) {
			this.chain = []
			throw new Error("You can't remove incorrect link!")
		}

		this.chain.splice(position - 1, 1)

		return this
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chain;
    this.chain = [];
    return chain.join(`~~`)
  }
};

module.exports = {
  chainMaker
};
