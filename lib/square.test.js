const Square = require('./square');

describe('Square', () => {
  test('should render SVG code correctly', () => {
    const square = new Square('blue', 'World', 'white');
    const expectedSvg = `  <rect x="70" y="20" width="160" height="160" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">World</text>`;
        
    expect(square.render()).toEqual(expectedSvg);
  });
});