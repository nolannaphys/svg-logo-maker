const Shapes = require('./shapes');

describe('Shapes class', () => {
    test('properties set correctly', () => {
        const fillColor = 'red';
        const text = 'Hello';
        const textColor = 'white';

        const shape = new Shapes(fillColor, text, textColor);

        expect(shape.fillColor).toBe(fillColor);
        expect(shape.text).toBe(text);
        expect(shape.textColor).toBe(textColor);
    });
});