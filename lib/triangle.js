const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    };
    render() {
        return ` <polygon points="150,40 230,160 70,160" fill="${this.fillColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };
};

module.exports = Triangle;