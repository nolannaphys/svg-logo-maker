const Triangle = require('./triangle');

describe('Triangle', () => {
  test('should render SVG code correctly', () => {
    const triangle = new Triangle('red', 'Hello', 'white');
    const expectedSvg = ` <polygon points="150,40 230,160 70,160" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Hello</text>`;
        
    expect(triangle.render()).toEqual(expectedSvg);
  });
});