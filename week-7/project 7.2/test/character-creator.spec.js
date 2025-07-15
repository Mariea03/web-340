const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator Stream', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const input = {
        class: 'Mage',
        gender: 'Female',
        funFact: 'summoning magical cats'
    };

    let output = '';
    characterCreator.on('data', chunk => {
        output += chunk.toString();
    });

    characterCreator.on('end', () => {
        expect(output).toBe('You created a Female Mage who is known for summoning magical cats.');
        done();
    });

    characterCreator.write(JSON.stringify(input));
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('Empty input is not allowed.');
        done();
    });

    characterCreator.write('');
  });

  test("should transform data correctly when written to", (done) => {
    const input = {
        class: 'Warrior',
        gender: 'Other',
        funFact: 'winning every arm-wrestling match'
    };

    let output = '';
    characterCreator.on('data', chunk => {
        output += chunk.toString();
    });

    characterCreator.on('end', () => {
        expect(output).toBe('You created a Other Warrior who is known for winning every arm-wrestling match.');
        done();
    });

    characterCreator.write(JSON.stringify(input));
    characterCreator.end();
  });
});