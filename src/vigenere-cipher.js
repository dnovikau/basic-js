class VigenereCipheringMachine {
  startCode = 'A'.charCodeAt(0);
  endCode = 'Z'.charCodeAt(0);

  constructor (direct = true) {
    this.direct = direct;
  }

  encrypt(phrase, key) {
    return this._encode(phrase, key);
  } 
   
  decrypt(phrase, key) {
    return this._encode(phrase, key, 'decrypt')
  }

  _encode(phrase, key, operation = 'encrypt') {
    if (!phrase || !key) {
      throw new Error();
    }
    let position = 0;
    const chars = [];

    phrase.split('').forEach((c, i) => {
      const code = c.toUpperCase().charCodeAt(0);
      if (code < this.startCode || code > this.endCode) {
        chars.push(code);
        position++;
      } else {
        const shift = key[(i - position) % key.length].toUpperCase().charCodeAt(0) - this.startCode;

        let char;
        if (operation === 'encrypt') {
          char = code > this.endCode - shift ? code - (26 - shift) : code + shift;
        } else {
          char = code < this.startCode + shift ? code + (26 - shift) : code - shift;
        }
        chars.push(char);
      }
    });

    if (!this.direct) {
      chars.reverse();
    }

    return String.fromCharCode(...chars);
  }
}

module.exports = VigenereCipheringMachine;
