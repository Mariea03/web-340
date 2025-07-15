const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super(options);
    this._buffer = '';
  }

  _write(chunk, encoding, callback) {
    const input = chunk.toString().trim();

    if (!input) {
        this.emit('error', new Error('Empty input is not allowed.'));
        return callback();
    }
    this._buffer += input;
    callback();
  }

  _read(size) {
    try {
        if (!this._buffer) {
            this.push(null);
            return;
        }

        const character = JSON.parse(this._buffer);
        const output = `You created a ${character.gender} ${character.class} who is known for ${character.funFact}.`;

        this.push(output);
        this.push(null);
    } catch (err) {
        this.emit('error', new Error('Invalid character data.'));
        this.push(null);
    }
  }
}

module.exports = CharacterCreator; 