const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    };
    render() {
        return `  <rect x="70" y="20" width="160" height="160" fill="${this.fillColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };
};

module.exports = Square;