const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

let shape;
function renderShape(selectedShape, fillColor, text, textColor){
    console.log(selectedShape);
    if(selectedShape === 'circle'){
        shape = new Circle(fillColor, text, textColor);
        return shape.render();
    };
    if(selectedShape === 'square'){
        shape = new Square(fillColor, text, textColor);
        return shape.render();
    };
    if(selectedShape === 'triangle'){
        shape = new Triangle(fillColor, text, textColor);
        return shape.render();
    };
};

const generateLogo = ({text, textColor, shape, fillColor}) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderShape(shape, fillColor, text, textColor)}
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