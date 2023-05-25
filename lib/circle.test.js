const Circle = require('./circle');
const Shapes = require('./shapes');

describe('Circle class', () => {
  test('constructor sets properties correctly', () => {
    const fillColor = 'red';
    const text = 'Hello';
    const textColor = 'white';

    const circle = new Circle(fillColor, text, textColor);

    expect(circle.fillColor).toBe(fillColor);
    expect(circle.text).toBe(text);
    expect(circle.textColor).toBe(textColor);
  });

  test('render returns the expected SVG string', () => {
    const fillColor = 'red';
    const text = 'Hello';
    const textColor = 'white';

    const circle = new Circle(fillColor, text, textColor);

    const expectedSVG = `  <circle cx="150" cy="100" r="80" fill=${fillColor} />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>`;

    expect(circle.render()).toBe(expectedSVG);
  });

  test('Circle extends Shapes', () => {
    const circle = new Circle('red', 'Hello', 'white');

    expect(circle).toBeInstanceOf(Shapes);
  });
});