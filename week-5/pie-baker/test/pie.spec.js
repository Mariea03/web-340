const bakePie = require('../src/pie');

describe('bakePie', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const processExitMock = jest.spyOn(process, 'exit').mockImplementation(() => {});

    afterEach(() => {
        consoleWarnMock.mockClear();
        processExitMock.mockClear();
    });

    it('should return a success message when all essential ingredients are present', () => {
        const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
        expect(result).toBe('Successfully baked an apple pie!');
    });

    it('should return a success message regardless of ingredient order', () => {
        const result = bakePie('pumpkin', ['sugar', 'butter', 'flour', 'pumpkin']);
        expect(result).toBe('Successfully baked a pumpkin pie!');
    });

    it('should warn and exit when an essential ingredient is missing', () => {
        bakePie('pecan', ['flour', 'sugar', 'pecans']);
        expect(consoleWarnMock).toHaveBeenCalledWith('Missing essential ingredients!');
        expect(processExitMock).toHaveBeenCalledWith(1);
    });
});