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
        shape.setColor(fillColor);
        return shape.render();
    };
    else if(selectedShape === 'square'){
        shape = new Square();
        shape.setColor(fillColor);
        return shape.render();
    };
    else if(selectedShape === 'triangle'){
        shape = new Triangle();
        shape.setColor(fillColor);
        return shape.render();
    };
};

