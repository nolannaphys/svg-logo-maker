class Shape {
    constructor(fillColor, text, textColor) {
        this.fillColor = fillColor;
        this.text = text;
        this.textColor = textColor;
    };
};

class Circle extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    };
    render() {
        return `  <circle cx="150" cy="100" r="80" fill=${this.fillColor} />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }
};

class Square extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    };
    render() {
        return `  <rect x="70" y="20" width="160" height="160" fill="green"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`
    }
};