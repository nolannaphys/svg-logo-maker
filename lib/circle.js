const Shape = require('./shapes');

class Circle extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    };
    render() {
        return `  <circle cx="150" cy="100" r="80" fill=${this.fillColor} />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    };
};

module.exports = Circle;