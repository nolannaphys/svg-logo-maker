const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

let shape;
function renderShape(selectedShape, fillColor){
    console.log(selectedShape);
    if(selectedShape === 'circle'){
        shape = new Circle();
        shape.fillColor = fillColor;
        return shape.render();
    };
    if(selectedShape === 'square'){
        shape = new Square();
        shape.fillColor = fillColor;
        return shape.render();
    };
    if(selectedShape === 'triangle'){
        shape = new Triangle();
        shape.fillColor = fillColor;
        return shape.render();
    };
};

const generateLogo = ({text, textColor, shape, backgroundColor}) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderShape(shape, fillColor)}
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
</svg>`

const questions = [
    {
        type: 'list',
        message: 'Pick a shape for your logo',
        name: 'shape',
        choices: [
            {
                name: 'circle',
                value: 'circle'
            },
            {
                name: 'square',
                value: 'square'
            },    
            {
                name: 'triangle',
                value: 'triangle'
            }
        ]
    },
    {
        type: 'input',
        message: 'Enter desired color or hexadecimal code for background color',
        name: 'fillColor'
    },
    {
        type: 'input',
        message: 'Enter three characters for your logo',
        name: 'text',
        maxLength: 3
    },
    {
        type: 'input',
        message: 'Enter desired color or hexadecimal code for text',
        name: 'textColor',
    }
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}

function init(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        const createLogo = generateLogo(answers)
        writeToFile('logo.svg', createLogo);
    })
}
init();