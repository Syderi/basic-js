const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// class VigenereCipheringMachine {

//   constructor()

//   shirf

  
//   encrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//   decrypt() {
//     return this.encDec(1, text, key);
//   }
// }


class VigenereCipheringMachine {
  constructor(state = true) {
    this.state = state;
  }
 
  encrypt(text, key) {
    return this.cipher(text, key, -1);
  }

  decrypt(text, key) {
    return this.cipher(text, key, 1);
  }

  cipher(text, key, direction) {

    if (!key || !text) {
      throw new Error("Incorrect arguments!");
    } 

    key = key.toUpperCase();
    text = text.toUpperCase();
    let numberLetterKey = 0;
    
          const cipherArray = [...text].map((letter) => {         
                  let letterPositionCode = letter.charCodeAt(0);

                  if (letterPositionCode >= 65 && letterPositionCode < 91) {
                      let curentKey = numberLetterKey % key.length;
                      let keyPositionCode = direction * (key.charCodeAt(curentKey) - 130);
                      numberLetterKey ++;
                      let letterCharCodeCipher = (letterPositionCode - keyPositionCode) % 26;
                  return String.fromCharCode(letterCharCodeCipher + 65);
                  }

            return letter;
          });
    if (this.state) {
      return cipherArray.join("");
    }
    return cipherArray.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
