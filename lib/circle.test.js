const Circle = require('./circle');

describe('Circle', () => {
  test('should render SVG code correctly', () => {
    const circle = new Circle('red', 'Hello', 'white');
    const expectedSvg = `  <circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Hello</text>`;
        
    expect(circle.render()).toEqual(expectedSvg);
  });
});